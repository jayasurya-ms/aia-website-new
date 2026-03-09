import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./home-map.css";
import { BASE_URL } from "@/api/base-url";

const MAX_PHOTOS = 6;
const SPREAD_OFFSETS = [
  { lat: 0.0, lng: 0.0 },
  { lat: 1.2, lng: 1.4 },
  { lat: -1.2, lng: 1.0 },
  { lat: 1.0, lng: -1.4 },
  { lat: -1.0, lng: -1.2 },
  { lat: 0.0, lng: 2.0 },
];

const SIZES = [38, 44, 36, 42, 34, 40];

const HomeMap = ({ courseCode }) => {
  const [mapData, setMapData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const {
    data: apiData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["student-map-data", courseCode],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getAllPassoutStudentsMap`);
      return res.data;
    },
  });

  useEffect(() => {
    if (apiData) {
      const studentImageUrlObj = apiData.image_url?.find(
        (item) => item.image_for === "Student",
      );
      const studentImageUrl = studentImageUrlObj?.image_url || "";
      setMapData(apiData.data);
      setImageUrl(studentImageUrl);
    }
  }, [apiData]);

  useEffect(() => {
    if (!mapData || !imageUrl) return;

    const container = L.DomUtil.get("map");
    if (container && container._leaflet_id) container._leaflet_id = null;

    const map = L.map("map", {
      center: [20, 0],
      zoom: 2,
      zoomSnap: 0.25,
      maxBoundsViscosity: 0.5,
      worldCopyJump: false,
      minZoom: 2,
      maxZoom: 18,
    });

    const verticalBounds = L.latLngBounds(
      L.latLng(-70, -Infinity),
      L.latLng(85, Infinity),
    );
    map.setMaxBounds(verticalBounds);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd",
        minZoom: 2,
        maxZoom: 20,
        noWrap: false,
        continuousWorld: true,
      },
    ).addTo(map);

    const layerGroup = L.layerGroup();
    const markerOriginalLngs = new Map();
    let lastUpdateLng = null;

    map.on("move", function () {
      const mapCenterLng = map.getCenter().lng;
      if (
        lastUpdateLng === null ||
        Math.abs(mapCenterLng - lastUpdateLng) > 90
      ) {
        layerGroup.getLayers().forEach((marker) => {
          const originalLng = markerOriginalLngs.get(marker);
          if (originalLng !== undefined) {
            let newLng = originalLng;
            while (newLng - mapCenterLng > 180) newLng -= 360;
            while (newLng - mapCenterLng < -180) newLng += 360;
            const latLng = marker.getLatLng();
            if (Math.abs(newLng - latLng.lng) > 1)
              marker.setLatLng([latLng.lat, newLng]);
          }
        });
        lastUpdateLng = mapCenterLng;
      }
    });

    const makeAvatarIcon = (student, index) => {
      const size = SIZES[index % SIZES.length];
      const html = `
        <div style="
          width:${size}px;
          height:${size}px;
          border-radius:50%;
          overflow:hidden;
          border:2.5px solid #fff;
          box-shadow:0 3px 10px rgba(0,0,0,0.28);
          background:#e5e7eb;
          cursor:pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        " class="avatar-marker-img">
          <img
            src="${student.imageUrl}"
            alt="${student.name}"
            style="width:100%;height:100%;object-fit:cover;display:block;"
             loading="lazy"
          />
        </div>
      `;
      return L.divIcon({
        className: "avatar-icon-wrapper",
        html,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -(size / 2 + 6)],
      });
    };

    const singlePopupHTML = (student, countryName) => `
      <div class="popup" style="min-width:120px;text-align:center;">
        <h4>${countryName}</h4>
        <div style="margin-top:8px;">
          <div class="card" style="margin:auto;width:90px;">
            <img class="thumb" src="${student.imageUrl}" alt="${student.name}" loading="lazy">
            <div class="course-name">${student.course}</div>
            <div class="caption">${student.name}</div>
          </div>
        </div>
      </div>
    `;

    const groupedByCountry = {};
    mapData.forEach((student) => {
      const country = student.country_name || "Unknown";
      if (!groupedByCountry[country]) groupedByCountry[country] = [];
      groupedByCountry[country].push({
        name: student.student_name,
        course: student.student_course,
        imageUrl: `${imageUrl}${student.student_image}`,
        lat: parseFloat(student.country_latitude),
        lng: parseFloat(student.country_longitude),
      });
    });

    const allLatLngs = [];

    Object.keys(groupedByCountry).forEach((country) => {
      const students = groupedByCountry[country];
      if (!students.length) return;

      const baseLat = students[0].lat;
      const baseLng = students[0].lng;
      if (isNaN(baseLat) || isNaN(baseLng)) return;

      students.slice(0, MAX_PHOTOS).forEach((student, i) => {
        const offset = SPREAD_OFFSETS[i] || { lat: 0, lng: 0 };
        const coords = [baseLat + offset.lat, baseLng + offset.lng];

        const icon = makeAvatarIcon(student, i);
        const popupHtml = singlePopupHTML(student, country);

        const marker = L.marker(coords, { icon });
        markerOriginalLngs.set(marker, coords[1]);

        marker.bindPopup(popupHtml, {
          minWidth: 130,
          maxWidth: 180,
          closeButton: false,
          autoClose: true,
          closeOnClick: true,
        });

        marker.on("click", function () {
          map.setView([baseLat, baseLng], 6, { animate: true });
          this.openPopup();
        });

        marker.on("mouseover", function () {
          this.openPopup();
        });

        marker.on("mouseout", function (e) {
          const popupEl = this.getPopup()?.getElement();
          if (
            popupEl &&
            e.originalEvent?.relatedTarget &&
            popupEl.contains(e.originalEvent.relatedTarget)
          )
            return;
          this.closePopup();
        });

        marker.on("popupopen", function () {
          const popupEl = this.getPopup()?.getElement();
          if (!popupEl) return;
          const self = this;
          popupEl._mouseoutHandler = function (e) {
            if (!popupEl.contains(e.relatedTarget)) self.closePopup();
          };
          popupEl.addEventListener("mouseleave", popupEl._mouseoutHandler);
        });

        marker.on("popupclose", function () {
          const popupEl = this.getPopup()?.getElement();
          if (popupEl?._mouseoutHandler) {
            popupEl.removeEventListener("mouseleave", popupEl._mouseoutHandler);
          }
        });

        layerGroup.addLayer(marker);
        allLatLngs.push(coords);
      });
    });

    layerGroup.addTo(map);

    if (allLatLngs.length) {
      const bounds = L.latLngBounds(allLatLngs);
      if (bounds.isValid()) map.fitBounds(bounds.pad(0.25), { maxZoom: 4 });
    }

    return () => map.remove();
  }, [mapData, imageUrl]);

  if (isLoading) {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <Skeleton height="100%" width="100%" />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-red-500">
          Error loading map data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div
      id="map"
      style={{ height: "60vh", width: "95.5%" }}
      className="mx-auto"
    />
  );
};

export default HomeMap;
