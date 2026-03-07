// import { BASE_URL, IMAGE_PATH } from "@/api/base-url";
// import PopUp from "@/components/common/pop-up";
// import SectionHeading from "@/components/SectionHeading/SectionHeading";
// import axios from "axios";
// import {
//   ArrowRight,
//   BookOpen,
//   Calendar,
//   Clock,
//   Search,
//   TrendingUp,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [imageBaseUrl, setImageBaseUrl] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("ALL");
//   const [showAllTrending, setShowAllTrending] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/api/getAllBlogs`);
//       setBlogs(response.data.data || []);

//       const blogImageConfig = response.data.image_url?.find(
//         (item) => item.image_for === "Blog",
//       );
//       if (blogImageConfig) {
//         setImageBaseUrl(blogImageConfig.image_url);
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//       setLoading(false);
//     }
//   };
//   const filteredBlogs = blogs.filter((blog) => {
//     const query = searchQuery.toLowerCase();

//     return (
//       blog.blog_heading?.toLowerCase().includes(query) ||
//       blog.blog_short_description?.toLowerCase().includes(query) ||
//       blog.blog_course?.toLowerCase().includes(query)
//     );
//   });
//   const uniqueCategories = [
//     ...new Set(filteredBlogs.map((blog) => blog.blog_course).filter(Boolean)),
//   ];
  
//   const trendingBlogs = blogs.filter((blog) => blog.blog_trending === "yes");

//   const COURSE_NAME_MAP = {
//     CFE: "Certified Fraud Examiner",
//     CIA: "Certified Internal Auditor",
//     CAMS: "Certified Anti Money Laundering Specialist",
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   useEffect(() => {
//     if (!showAllTrending && trendingBlogs.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentSlide(
//           (prev) => (prev + 1) % Math.min(4, trendingBlogs.length),
//         );
//       }, 5000);

//       return () => clearInterval(interval);
//     }
//   }, [showAllTrending, trendingBlogs.length]);

//   const handleBlogClick = (slug) => {
//     navigate(`/blogs/${slug}`);
//   };

//   const handleCategoryClick = (category) => {
//     window.open(`/blogs/course/${category}`, "_blank", "noopener,noreferrer");
//   };

//   const BlogCard = ({ blog }) => {
//     return (
//       <div
//         onClick={() => handleBlogClick(blog.blog_slug)}
//         className="h-full flex flex-col cursor-pointer group border transition-colors duration-200"
//       >
//         {/* Image */}
//         <div className="relative overflow-hidden rounded-md">
//           <div className="h-[156px] bg-gradient-to-r from-[#0F3652]/10 to-[#0F3652]/20 flex items-center justify-center">
//             <img
//               src={`${imageBaseUrl}${blog.blog_images}`}
//               alt={blog.blog_images_alt || blog.blog_heading}
//               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
//               onError={(e) => {
//                 e.currentTarget.src = `${IMAGE_PATH}/no_image.jpg`;
//               }}
//             />
//           </div>

//           <div className="absolute top-1.5 left-2">
//             <span className="bg-[#0F3652] text-white text-xs font-medium px-3 py-1.5 rounded border border-[#0F3652]">
//               {blog.blog_course}
//             </span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-5 flex flex-col flex-1">
//           <div className="flex items-center justify-between text-xs text-[#0F3652] mb-4">
//             <div className="flex items-center gap-1">
//               <Calendar className="w-3 h-3" />
//               {formatDate(blog.blog_created)}
//             </div>
//             <div className="flex items-center gap-1">
//               <Clock className="w-3 h-3" />5 min
//             </div>
//           </div>

//           <h3 className="text-lg font-semibold text-[#0F3652] mb-3 line-clamp-2">
//             {blog.blog_heading}
//           </h3>

//           <p className="text-[#0F3652] text-sm line-clamp-3 leading-relaxed">
//             {blog.blog_short_description}
//           </p>

//           {/* Push to bottom */}
//           <div className="mt-auto pt-4 flex items-center gap-2 text-[#F3831C]">
//             <span className="text-sm font-medium">Read Article</span>
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const BannerBlogCard = ({ blog }) => {
//     return (
//       <div
//         onClick={() => handleBlogClick(blog.blog_slug)}
//         className="rounded-lg hover:border-[#0F3652] transition-all duration-300 cursor-pointer group overflow-hidden"
//       >
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="md:w-2/5 relative overflow-hidden rounded-lg">
//             <div className="h-64 md:h-full bg-linear-to-r from-[#0F3652]/10 to-[#0F3652]/20">
//               <img
//                 src={`${imageBaseUrl}${blog.blog_images}`}
//                 alt={blog.blog_images_alt || blog.blog_heading}
//                 className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.src = `${IMAGE_PATH}/no_image.jpg`;
//                 }}
//               />
//             </div>
//             <div className="absolute top-4 left-4">
//               <span className="bg-[#0F3652] text-white text-sm font-medium px-4 py-2 rounded border border-[#0F3652]">
//                 {blog.blog_course}
//               </span>
//             </div>
//           </div>

//           <div className="md:w-3/5 flex flex-col justify-center">
//             <div className="flex items-center gap-4 text-sm text-[#0F3652] mb-4">
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-4 h-4" />
//                 {formatDate(blog.blog_created)}
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4" />5 min read
//               </div>
//             </div>

//             <h3 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-4 group-hover:text-[#0F3652] line-clamp-2">
//               {blog.blog_heading}
//             </h3>

//             <p className="text-[#0F3652] text-base mb-6 line-clamp-3 leading-relaxed">
//               {blog.blog_short_description}
//             </p>

//             <div className="flex items-center gap-3 text-[#F3831C] group/readmore">
//               <span className="text-base font-semibold">Read Full Article</span>
//               <ArrowRight className="w-5 h-5 group-hover/readmore:translate-x-2 transition-transform" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   if (loading) {
//     return (
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-3">
//               Blogs
//             </h2>
//             <div className="flex justify-center gap-1 mt-4">
//               <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse"></div>
//               <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse delay-100"></div>
//               <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse delay-200"></div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="bg-[#0F3652]/5 rounded-md border border-[#0F3652]/20 p-5"
//               >
//                 <div className="h-40 bg-linear-to-r from-[#0F3652]/10 to-[#0F3652]/20 rounded-md mb-4 animate-pulse"></div>
//                 <div className="space-y-3">
//                   <div className="h-4 bg-[#0F3652]/10 rounded w-3/4"></div>
//                   <div className="h-3 bg-[#0F3652]/10 rounded w-full"></div>
//                   <div className="h-3 bg-[#0F3652]/10 rounded w-2/3"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (blogs.length === 0) {
//     return (
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-3">
//               Blogs
//             </h2>
//             <div className="w-20 h-0.5 bg-[#0F3652] mx-auto"></div>
//           </div>
//           <div className="text-center py-12 border border-[#0F3652]/20 rounded-md bg-[#0F3652]/5">
//             <BookOpen className="w-12 h-12 text-[#0F3652] mx-auto mb-4" />
//             <p className="text-[#0F3652]">No blogs available at the moment.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       <PopUp slug="Blogs" />

//       <section className="py-16 bg-white">
//         <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 rounded-2xl p-4">
//             <SectionHeading
//               title="Subscribe to the AIA Blog"
//               description="Join the AIA community and get timely updates and expert insights directly in your inbox"
//               align="center"
//             />

//             <div className="max-w-2xl mx-auto mt-8">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search smart. Learn Audit, Fraud & AML with AIA..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full px-6 py-2 pr-12 text-lg rounded-2xl focus:outline-none shadow-sm bg-white text-[#0F3652] border border-[#0F3652]/20"
//                 />

//                 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-[#0F3652]/10 rounded-full transition-colors">
//                   <Search className="w-6 h-6 text-[#0F3652]" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {trendingBlogs.length > 0 && (
//             <div className="mb-12 p-2 border-2 rounded-lg bg-[#0F3652]/5">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <TrendingUp className="w-6 h-6 text-[#F3831C]" />
//                   <h2 className="text-2xl md:text-3xl font-medium text-[#0F3652]">
//                     Trending Blog
//                   </h2>
//                 </div>
//                 <span className="text-sm text-[#0F3652]">
//                   {trendingBlogs.length}{" "}
//                   {trendingBlogs.length === 1 ? "article" : "articles"} trending
//                 </span>
//               </div>

//               {!showAllTrending ? (
//                 <>
//                   <div className="relative mb-8 px-2 pb-2 pt-4 rounded-lg">
//                     <div className="overflow-hidden">
//                       <div
//                         className="flex transition-transform duration-500 ease-in-out"
//                         style={{
//                           transform: `translateX(-${currentSlide * 100}%)`,
//                         }}
//                       >
//                         {trendingBlogs.slice(0, 4).map((blog) => (
//                           <div key={blog.id} className="w-full shrink-0 px-2">
//                             <BannerBlogCard blog={blog} />
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {trendingBlogs.slice(0, 4).length > 1 && (
//                       <div className="flex justify-center gap-2 mt-2">
//                         {trendingBlogs.slice(0, 4).map((_, index) => (
//                           <button
//                             key={index}
//                             onClick={() => setCurrentSlide(index)}
//                             className={`h-2 rounded-full transition-all duration-300 ${
//                               currentSlide === index
//                                 ? "w-8 bg-[#0F3652]"
//                                 : "w-2 bg-[#0F3652]/30 hover:bg-[#0F3652]/50"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                     {trendingBlogs.map((blog) => (
//                       <BlogCard key={blog.id} blog={blog} />
//                     ))}
//                   </div>

//                   {trendingBlogs.length > 4 && (
//                     <div className="text-center">
//                       <button
//                         className="relative overflow-hidden cursor-pointer flex items-center justify-center px-4 py-2 border border-[#0F3652] mx-auto gap-2 rounded-md font-medium text-sm text-[#0F3652] group"
//                         onClick={() => {
//                           setShowAllTrending(false);
//                           setCurrentSlide(0);
//                         }}
//                       >
//                         <span className="absolute inset-0 bg-[#0F3652] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
//                         <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
//                           Show Less
//                           <ArrowRight className="w-4 h-4 rotate-180" />
//                         </span>
//                       </button>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           )}
//           {searchQuery && filteredBlogs.length === 0 && (
//             <div className="text-center py-16">
//               <Search className="w-12 h-12 text-[#0F3652]/40 mx-auto mb-4" />
//               <p className="text-[#0F3652] text-lg font-medium">
//                 No blogs found for "{searchQuery}"
//               </p>
//               <p className="text-[#0F3652]/60 text-sm mt-2">
//                 Try searching with different keywords
//               </p>
//             </div>
//           )}

//           <div className="mb-12 ">
//             <h2 className="text-2xl md:text-3xl font-medium text-[#0F3652] text-left mb-6">
//               Categories
//             </h2>

//             <div className="flex flex-wrap justify-start gap-3 mb-8">
//               {uniqueCategories.map((category) => {
//                 const displayName = COURSE_NAME_MAP[category] || category;

//                 return (
//                   <button
//                     key={category}
//                     onClick={() => handleCategoryClick(category)}
//                     className={`px-6 py-2 cursor-pointer rounded-md text-sm transition-colors duration-200 ${selectedCategory === category ? "bg-[#0F3652] text-white" : "bg-[#0F3652]/10 text-[#0F3652] hover:bg-[#0F3652]/20"}`}
//                     title={category}
//                   >
//                     {displayName}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {selectedCategory === "ALL"
//             ? uniqueCategories.map((category) => {
//                 const categoryBlogs = blogs
//                   .filter((blog) => blog.blog_course === category)
//                   .slice(0, 4);
//                 if (categoryBlogs.length === 0) return null;

//                 return (
//                   <div
//                     key={category}
//                     className="mb-16 p-4 border-2 rounded-lg bg-[#0F3652]/5"
//                   >
//                     <div className="flex items-center justify-between mb-8">
//                       <div className="flex items-center gap-3">
//                         <h3 className="text-xl md:text-2xl font-medium text-[#0F3652]">
//                           {COURSE_NAME_MAP[category] || category}
//                         </h3>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                       {categoryBlogs.map((blog) => (
//                         <BlogCard key={blog.id} blog={blog} />
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })
//             : null}

//           <div className="flex flex-col items-center justify-center bg-white px-4">
//             {/* <SectionHeading
//               title="Start Your Journey with AIA"
//               align="center"
//             /> */}
//             <div className="flex flex-wrap gap-4 justify-center">
//               <button
//                 onClick={() => navigate("/contact")}
//                 className=" cursor-pointer px-6 py-3 bg-[#F3831C] text-white rounded-lg font-medium hover:bg-[#F3831C]/90 transition-colors"
//               >
//                 Contact Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;
