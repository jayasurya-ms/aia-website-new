// const SectionHeading = ({
//   title,
//   description,
//   description1,
//   align = "start",
//   highlight,
//   highlight1,
//   highlightclassName,
//   beforeheading,
//   className,
// }) => {
//   const isCenter = align == "center";

//   return (
//     <div className={`py-2 ${isCenter ? "text-center" : "text-left"}`}>
//       {beforeheading && (
//         <div
//           className={`mt-4 text-gray-600 leading-relaxed  mx-auto ${
//             isCenter ? "text-center" : "text-left"
//           }`}
//         >
//           <p>{beforeheading}</p>
//         </div>
//       )}
//       <div className={`inline-block ${isCenter ? "mx-auto" : ""}`}>
//         <h2
//           className={`text-[1.18rem] md:text-4xl font-bold ${
//             className ? `text-${className}` : "text-[#0F3652]"
//           } `}
//         >
//           {title} <span className="text-[#F3831C]">{highlight1}</span>
//         </h2>

//         <h2
//           className={`font-bold text-[#F3831C] mt-2 ${
//             highlightclassName
//               ? highlightclassName
//               : "text-[1.18rem] md:text-4xl"
//           }`}
//         >
//           {highlight}
//         </h2>
//         {/* <div
//           className={`mt-3 relative overflow-hidden ${
//             isCenter ? "mx-auto" : ""
//           }`}
//           style={{ width: "120px" }}
//         >
//           <span
//             className={`block h-1 w-full ${
//               className ? `bg-${className}` : "bg-[#0F3652]"
//             } rounded`}
//           />

//           <span className="absolute top-0 left-0 h-1 w-1/2 bg-[#F3831C] rounded animate-underline-slide" />
//         </div> */}
//       </div>
//       {/* //From Md SCreen */}
//       <div className="hidden md:block">
//         {description && (
//           <div
//             className={`mt-4  text-sm ${
//               className ? `text-${className}` : "text-gray-600"
//             }  leading-relaxed  mx-auto ${
//               isCenter ? "text-center" : "text-left"
//             }`}
//           >
//             <p>{description}</p>
//           </div>
//         )}
//         {description1 && (
//           <div
//             className={` text-gray-600 leading-relaxed  mx-auto ${
//               isCenter ? "text-center" : "text-left"
//             }`}
//           >
//             <p>{description1}</p>
//           </div>
//         )}
//       </div>
//       {/* //From xs SCreen */}
//       <div className="md:hidden ">
//         <div
//           className={` ${
//             className ? `text-${className}` : "text-gray-600"
//           }  leading-relaxed  mx-auto ${
//             isCenter ? "text-center" : "text-left"
//           }`}
//         >
//           <p className="text-justify">
//             {description}
//             {description1}
//           </p>
//         </div>
//       </div>
//       <div
//         className={`mt-3 flex ${isCenter ? "justify-center" : "justify-start"}`}
//       >
//         <div
//           className="relative flex items-center justify-center"
//           style={{ width: "120px", height: "18px", overflow: "hidden" }}
//         >
//           <span
//             className="absolute block"
//             style={{
//               width: "60%",
//               height: "2.5px",
//               background: className ? undefined : "#0F3652",
//             }}
//             {...(className && {
//               className: `absolute block bg-${className}`,
//             })}
//           />

//           <span
//             className="absolute block"
//             style={{
//               width: "25%",
//               height: "6px",
//               background: "#F3831C",
//               top: "50%",
//               transform: "translateY(-50%)",
//               animation: "slideBackForth 2.8s ease-in-out infinite",
//             }}
//           />
//         </div>

//         <style>{`
//     @keyframes slideBackForth {
//       0%   { left: 15%; }
//       50%  { left: 60%; }
//       100% { left: 15%; }
//     }
//   `}</style>
//       </div>
//     </div>
//   );
// };

// export default SectionHeading;
