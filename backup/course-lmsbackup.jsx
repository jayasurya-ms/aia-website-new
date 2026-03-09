// import { IMAGE_PATH } from "@/api/base-url";
// import SectionHeading from "@/components/SectionHeading/SectionHeading";
// import React, { useEffect, useRef, useState } from "react";

// const CourseLms = ({ courseFeatures, cardTitle }) => {
//   const labels = [
//     "Dedicated Support Person",
//     "Updated Study Curriculum",
//     "Exam-Oriented Practice Questions",
//     "60+ Hours of Detailed Video Lectures",
//     "Mock Tests Preparation",
//     "100% Exam Registration Assistant",
//     "Live Interactive Sessions with Faculty",
//   ];

//   const radius = 150;
//   const center = 250;
//   const centerX = 250;
//   const centerY = 250;
//   const [angleOffset, setAngleOffset] = useState(0);
//   const frameRef = useRef(null);
//   const lastTimeRef = useRef(performance.now());

//   useEffect(() => {
//     const animate = (time) => {
//       const delta = time - lastTimeRef.current;
//       lastTimeRef.current = time;
//       setAngleOffset((prev) => (prev + delta * 0.02) % 360);
//       frameRef.current = requestAnimationFrame(animate);
//     };

//     frameRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frameRef.current);
//   }, []);

//   const getPosition = (angle) => {
//     const rad = (angle * Math.PI) / 180;
//     return {
//       x: center + radius * Math.cos(rad),
//       y: center + radius * Math.sin(rad),
//     };
//   };

//   return (
//     <>
//       <section
//         className="relative flex items-center justify-center min-h-screen bg-center bg-cover bg-no-repeat"
//         // style={{
//         //   backgroundImage: `url(${IMAGE_PATH}/LMS.webp)`,
//         // }}
//       >
//         <SectionHeading
//           title="AIA Digital Learning Platform"
//           description="Your All-in-One Partner for Structured Exam Preparation"
//         />
//         <div className="absolute inset-0 bg-black/55" />

//         <div className="relative z-10 w-full max-w-340 px-8 flex flex-col lg:flex-row items-center gap-16">
//           <div className="w-full lg:w-1/2 text-center lg:text-left">
//             <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//               AIA Digital Learning Platform
//             </h1>

//             <h2 className="text-xl lg:text-2xl font-semibold text-white/90 mb-8">
//               Your All-in-One Partner for Structured Exam Preparation
//             </h2>

//             <div className="mb-8">
//               <p className="text-3xl font-bold text-white mb-2">
//                 Padho Kabhi Bhi, Kahi Bhi
//               </p>
//               <p className="text-2xl font-semibold text-white/80">
//                 Learn Anytime, Anywhere
//               </p>
//             </div>
//           </div>

//           {/* <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
//             <div className="w-full max-w-3xl aspect-square">
//               <svg
//                 viewBox="0 0 500 500"
//                 className="w-full h-full"
//                 style={{ willChange: "transform" }}
//               >
//                 <defs>
//                   <linearGradient
//                     id="orbitGradient"
//                     x1="0%"
//                     y1="0%"
//                     x2="100%"
//                     y2="100%"
//                   >
//                     <stop offset="0%" stopColor="#6366f1" />
//                     <stop offset="50%" stopColor="#8b5cf6" />
//                     <stop offset="100%" stopColor="#ec4899" />
//                   </linearGradient>
//                   <filter
//                     id="glow"
//                     x="-50%"
//                     y="-50%"
//                     width="200%"
//                     height="200%"
//                   >
//                     <feGaussianBlur stdDeviation="3" result="blur" />
//                     <feMerge>
//                       <feMergeNode in="blur" />
//                       <feMergeNode in="SourceGraphic" />
//                     </feMerge>
//                   </filter>
//                 </defs>

//                 <circle
//                   cx={centerX}
//                   cy={centerY}
//                   r={radius}
//                   fill="none"
//                   stroke="url(#orbitGradient)"
//                   strokeWidth={8}
//                   filter="url(#glow)"
//                 />

//                 <circle
//                   cx={centerX}
//                   cy={centerY}
//                   r={120}
//                   fill="none"
//                   stroke="none"
//                   strokeWidth={2.5}
//                 />

//                 <circle
//                   cx={centerX}
//                   cy={centerY}
//                   r={40}
//                   fill="#6366f1"
//                   opacity={0.1}
//                 />

//                 <circle
//                   cx={centerX}
//                   cy={centerY}
//                   r={35}
//                   fill="white"
//                   stroke="#6366f1"
//                   strokeWidth={2.5}
//                 />

//                 <foreignObject
//                   x={center - 100}
//                   y={center - 100}
//                   width={200}
//                   height={200}
//                 >
//                   <div className="w-full h-full flex items-center justify-center">
//                     <img
//                       src={`${IMAGE_PATH}/LMS.webp`}
//                       alt="LMS"
//                       className="w-40 h-40 object-cover rounded-full"
//                       draggable={false}
//                     />
//                   </div>
//                 </foreignObject>

//                 {labels.map((label, i) => {
//                   const angle = i * (360 / labels.length) + angleOffset;
//                   const pos = getPosition(angle);

//                   return (
//                     <foreignObject
//                       key={i}
//                       x={pos.x - 50}
//                       y={pos.y - 20}
//                       width={100}
//                       height={40}
//                       style={{
//                         overflow: "visible",
//                         willChange: "transform",
//                       }}
//                     >
//                       <div
//                         className="w-[110px] wrap-break-word text-center h-14 rounded-full bg-white border-2 border-[#0F3652]
//                                  shadow-[0_4px_12px_rgba(99,102,241,0.08)]
//                                  flex items-center justify-center
//                                  text-xs font-semibold text-[#0F3652]
//                                  transition-all duration-200 ease-out
//                                  cursor-pointer
//                                  hover:scale-105 hover:shadow-[0_8px_20px_rgba(99,102,241,0.15)] 
//                                  hover:border-[#0F3652]
//                                  transform-gpu backface-hidden"
//                         style={{
//                           transform: "translateZ(0)",
//                         }}
//                       >
//                         {label}
//                       </div>
//                     </foreignObject>
//                   );
//                 })}
//               </svg>
//             </div>
//           </div> */}
//         </div>
//       </section>

//       <section className="py-12 px-4 bg-white">
//         <div className="max-w-340 mx-auto">
//           <SectionHeading title={cardTitle} align="center" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {courseFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-[#0F3652]/20 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
//               >
//                 <div className="flex items-start gap-3 mb-3">
//                   <div className="w-8 h-8 bg-[#0F3652] text-white rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold">
//                     {index + 1}
//                   </div>
//                   <h3 className="text-base font-bold text-[#0F3652] leading-tight">
//                     {feature.title}
//                   </h3>
//                 </div>
//                 <p className="text-sm text-gray-700 pl-11">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CourseLms;
