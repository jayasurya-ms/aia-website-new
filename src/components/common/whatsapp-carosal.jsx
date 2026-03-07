import { BASE_URL } from "@/api/base-url";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SectionHeading from "../SectionHeading/SectionHeading";
export const TestimonialSlider = ({
  reviews,
  className,
  title,
  description,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [loadedImages, setLoadedImages] = useState(new Set());
  const timerRef = useRef(null);
  const [isMdScreen, setIsMdScreen] = useState(false);

  const activeReview = reviews[currentIndex];
  const [thumbCount, setThumbCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setThumbCount(2);
      } else {
        setThumbCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const goTo = useCallback((newIndex, dir) => {
    setDirection(dir);
    setCurrentIndex(newIndex);
  }, []);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
  }, [reviews.length]);
  const total = reviews.length;

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handleNext = useCallback(() => {
    goTo((currentIndex + 1) % reviews.length, "right");
    startTimer();
  }, [currentIndex, reviews.length, goTo, startTimer]);

  const handlePrev = useCallback(() => {
    goTo((currentIndex - 1 + reviews.length) % reviews.length, "left");
    startTimer();
  }, [currentIndex, reviews.length, goTo, startTimer]);

  const handleLeftThumb = useCallback(
    (idx) => {
      goTo(idx, "left");
      startTimer();
    },
    [goTo, startTimer],
  );

  const handleRightThumb = useCallback(
    (idx) => {
      goTo(idx, "right");
      startTimer();
    },
    [goTo, startTimer],
  );

  const handleImageLoad = useCallback((src) => {
    setLoadedImages((prev) => new Set([...prev, src]));
  }, []);
  const leftThumbs = useMemo(() => {
    const arr = [];
    for (let i = 2; i >= 1; i--) {
      const idx = (currentIndex - i + total) % total;
      arr.push({ review: reviews[idx], originalIndex: idx, dist: i });
    }
    return arr;
  }, [currentIndex, total, reviews]);

  const rightThumbs = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= thumbCount; i++) {
      const idx = (currentIndex + i) % total;
      arr.push({
        review: reviews[idx],
        originalIndex: idx,
        dist: i,
      });
    }
    return arr;
  }, [currentIndex, total, reviews, thumbCount]);
  const preloadImages = useMemo(() => {
    const set = new Set();
    const prevIdx = (currentIndex - 1 + reviews.length) % reviews.length;
    const nextIdx = (currentIndex + 1) % reviews.length;
    if (reviews[prevIdx]?.image) set.add(reviews[prevIdx].image);
    if (reviews[nextIdx]?.image) set.add(reviews[nextIdx].image);
    return Array.from(set);
  }, [currentIndex, reviews]);

  const thumbnailReviews = useMemo(() => {
    if (reviews.length <= 1) return [];
    const thumbs = [];
    for (let i = 1; i <= 3 && i < reviews.length; i++) {
      const idx = (currentIndex + i) % reviews.length;
      thumbs.push({ review: reviews[idx], originalIndex: idx });
    }
    return thumbs;
  }, [reviews, currentIndex]);

  const imageVariants = {
    enter: (d) => ({ y: d === "right" ? "100%" : "-100%", opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (d) => ({ y: d === "right" ? "-100%" : "100%", opacity: 0 }),
  };
  const ease = [0.4, 0, 0.2, 1];

  return (
    <div
      className={cn(
        "relative w-full min-h-[650px] md:min-h-[600px] overflow-hidden bg-background text-foreground p-8 md:p-12",
        className,
      )}
    >
      {preloadImages.map((src) => (
        <link
          key={`preload-${src}`}
          rel="preload"
          as="image"
          href={src}
          fetchPriority="low"
        />
      ))}
      <div className="pt-4 min-h-[200px]  md:hidden">
        <SectionHeading title={title} description={description} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        <div className="md:col-span-2 flex flex-col justify-between  md:order-1">
          <div className="hidden md:flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            <span className="text-sm text-muted-foreground font-mono">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
          </div>

          <div className="hidden md:flex space-x-2 mt-8 md:mt-0">
            {" "}
            {leftThumbs.map(({ review, originalIndex }) => (
              <button
                key={originalIndex}
                onClick={() => handleLeftThumb(originalIndex)}
                className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-36 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-1"
                aria-label={`Go to slide ${originalIndex + 1}`}
              >
                <img
                  src={review.image}
                  alt={review.alt || `Slide ${originalIndex + 1}`}
                  loading="lazy"
                  width="80"
                  height="96"
                  className="w-full h-full object-cover"
                  onLoad={() => handleImageLoad(review.image)}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 relative h-80 min-h-[400px] md:min-h-[500px] order-2 md:order-2">
          {/* <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={activeReview.image}
              alt={activeReview.alt || `Slide ${currentIndex + 1}`}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              loading={currentIndex === 0 ? "eager" : "lazy"}
              fetchPriority={currentIndex === 0 ? "high" : "auto"}
              width="400"
              height="500"
              transition={{ duration: 0.6, ease }}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              onLoad={() => handleImageLoad(activeReview.image)}
            />
          </AnimatePresence> */}
          {isMdScreen ? (
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={activeReview.image}
                alt={activeReview.alt || `Slide ${currentIndex + 1}`}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease }}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                onLoad={() => handleImageLoad(activeReview.image)}
              />
            </AnimatePresence>
          ) : (
            <img
              src={activeReview.image}
              alt={activeReview.alt || `Slide ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              onLoad={() => handleImageLoad(activeReview.image)}
            />
          )}
          {!loadedImages.has(activeReview.image) && (
            <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
          )}

          {activeReview.youtubeLink && (
            <a
              href={activeReview.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-center justify-center group"
              aria-label="Watch video"
            >
              <span className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                <svg className="w-6 h-6 fill-white ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </a>
          )}
        </div>

        <div className="md:col-span-6 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          <div className="pt-4 min-h-[200px] hidden md:block">
            <SectionHeading title={title} description={description} />
          </div>

          <div className="flex space-x-2 mt-8 md:mt-0">
            {rightThumbs.map(({ review, originalIndex }) => (
              <button
                key={originalIndex}
                onClick={() => handleRightThumb(originalIndex)}
                className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-36 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-1"
                aria-label={`Go to slide ${originalIndex + 1}`}
              >
                <img
                  src={review.image}
                  alt={review.alt || `Slide ${originalIndex + 1}`}
                  loading="lazy"
                  width="80"
                  height="96"
                  className="w-full h-full object-cover"
                  onLoad={() => handleImageLoad(review.image)}
                />
              </button>
            ))}
            <div className="flex items-end ml-6 space-x-2 mt-8 md:mt-0">
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className="inline-flex cursor-pointer items-center justify-center rounded-full w-12 h-12 border border-muted-foreground/50 bg-background hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next"
                className="inline-flex   cursor-pointer items-center justify-center rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatsappCarosal = ({ title, description, course }) => {
  const {
    data: certificatesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["screenshot-slider", course],
    queryFn: async () => {
      const res = await axios.get(
        `${BASE_URL}/api/getScreenshotSlider/${course}`,
      );
      return res.data;
    },
    enabled: !!course,
  });

  const reviews = useMemo(() => {
    if (!certificatesData?.data) return [];

    const studentImageBaseUrl =
      certificatesData.image_url?.find((item) => item.image_for === "Student")
        ?.image_url || "";

    return certificatesData.data.map((item, index) => ({
      id: item.id ?? index,
      image: `${studentImageBaseUrl}${item.student_screenshot_image}`,
      imageSrc: `${studentImageBaseUrl}${item.student_screenshot_image}`,
      thumbnailSrc: `${studentImageBaseUrl}${item.student_screenshot_image}`,
      name: item.student_name || `Student ${index + 1}`,
      affiliation: item.student_affiliation || "",
      alt: item.student_screenshot_image_alt || "",
      quote: item.student_screenshot_image_alt || "",
      youtubeLink: item.student_youtube_link || null,
    }));
  }, [certificatesData]);

  if (isLoading) {
    return (
      <div className="relative w-full py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-container flex flex-col items-center gap-4 text-center sm:gap-16">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <Skeleton height={40} width={400} />
            <Skeleton height={20} width={250} />
          </div>
          <div className="flex gap-4 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-[290px] h-[165px]">
                <Skeleton height={165} width={290} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="relative w-full py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-container text-center text-red-500">
          Error loading certificates. Please try again later.
        </div>
      </div>
    );
  }

  if (!reviews.length) return null;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <TestimonialSlider
        reviews={reviews}
        title={title}
        description={description}
      />
    </div>
  );
};

export default WhatsappCarosal;
