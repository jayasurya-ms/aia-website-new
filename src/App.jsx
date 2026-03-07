// import { Navigate, Route, Routes } from "react-router-dom";
// import Layout from "./layout/Layout";

// import CAMS from "./pages/Courses/CAMS";
// import CFECurriculam from "./pages/Courses/CFECurriculam";
// import CIAChallenge from "./pages/Courses/CIAChallenge";
// import CIACurriculam from "./pages/Courses/CIACurriculam";
// import FreeResources from "./pages/free-resources/cfe-free-resources";
// import Home from "./pages/Home/Home";
// import Blog from "./pages/Blog/Blog";
// import OurPassout from "./pages/OurPassout/OurPassout";

// import Enrool from "./pages/Enroll/Enroll";
// import Contact from "./pages/contact/contact";
// import BlogDetails from "./pages/Blog/blog-details";
// import AboutPage from "./pages/About/About";
// import NotificationPopup from "./components/notification/notification-popup";
// import PassoutStoriesSlug from "./components/passout/passout-stories-slug";
// import GoogleAnalytics from "./components/google-analytics/google-analytics";
// import ScrollToTop from "./components/common/scroll-to-top";
// import CorporateTraining from "./pages/corporate-training/corporate-training";
// import Policies from "./pages/policies/policies";
// import TermsAndConditions from "./pages/terms-and-conditions/terms-and-conditions";
// import BlogCourse from "./pages/Blog/blog-course";
// import CfePracticeQuestion from "./pages/free-resources/cfe-practice-question";
// import Meta from "./components/seo/meta";
// import FloatingContact from "./components/common/floating-contact";
// import { Toaster } from "sonner";
// import CanonicalTag from "./components/common/canonical-tag";
// import NotFound from "./components/common/not-found";

// export default function App() {
//   const blogRedirects = {
//     "/what-is-money-laundering": "/blogs/what-is-money-laundering",
//     "/academy-of-internal-audit-national-recognition":
//       "/blogs/academy-of-internal-audit-national-recognition",
//     "/cfe-vs-cams": "/blogs/cfe-vs-cams",
//     "/cia-vs-cia-challenge-curriculum": "/blogs/cia-vs-cia-challenge-curriculum",
//     "/what-is-fraud": "/blogs/what-is-fraud",
//     "/anti-money-laundering-certificate":
//       "/blogs/anti-money-laundering-certificate",
//     "/online-vs-offline-cfe-training": "/blogs/online-vs-offline-cfe-training",
//     "/cams-exam-format": "/blogs/cams-exam-format",
//     "/anti-money-laundering-jobs-salary":
//       "/blogs/anti-money-laundering-jobs-salary",
//     "/certified-fraud-examiner-salary": "/blogs/certified-fraud-examiner-salary",
//     "/cia-certification": "/blogs/cia-certification",
//     "/cfe-module-4": "/blogs/cfe-module-4",
//     "/cia-certification-in-qatar": "/blogs/cia-certification-in-qatar",
//     "/cams-2025-syllabus-update-key-changes-and-preparation-guide":
//       "/blogs/cams-syllabus",
//     "/cia-part-3-syllabus-2025": "/blogs/cia-part-3-syllabus",
//     "/cia-part-2-syllabus-2025": "/blogs/cia-part-2-syllabus",
//     "/internal-audit-101-everything-you-should-know": "/blogs/internal-audit",
//     "/cia-part1-syllabus-2025-update-internal-audit-fundamentals":
//       "/blogs/cia-part-1-syllabus",
//     "/cfe-exam-home-test-center": "/blogs/cfe-exam-home-test-center",
//     "/cfe-exam-fees-and-retake-policy": "/blogs/cfe-exam-fees-and-retake-policy",
//     "/cia-exam-syllabus-2025-update": "/blogs/cia-exam-syllabus",
//     "/unlock-your-cfe-exam-success-with-these-proven-strategies":
//       "/blogs/cfe-exam-success",
//     "/cia-exam-preparation-tips-for-cracking-exam-in-first-attempt":
//       "/blogs/cia-exam-preparation-tips",
//     "/how-cams-certification-prepares-you-for-the-aml-career":
//       "/blogs/aml-career",
//     "/curriculum-of-certified-fraud-examiner-module3-investigation":
//       "/blogs/cfe-module-3",
//     "/the-impact-of-digital-tools-and-platforms-on-internal-audit-work":
//       "/blogs/internal-audit-work",
//     "/how-cams-certification-equips-you-for-global-aml-challenges":
//       "/blogs/aml-challenges",
//     "/curriculum-of-certified-fraud-examiner-module-2-law":
//       "/blogs/cfe-module-2",
//     "/business-knowledge-for-internal-auditing-cia-part-3-curriculum":
//       "/blogs/cia-part-3-curriculum",
//     "/job-opportunities-with-certified-fraud-examiner-certification":
//       "/blogs/cfe-job-opportunities",
//     "/cfe-module-1-financial-transactions-and-fraud-schemes":
//       "/blogs/cfe-module-1",
//     "/practice-of-internal-auditing-(cia-part-2-curriculum)":
//       "/blogs/cia-part-2-curriculum",
//     "/essentials-of-internal-auditing-(cia-part-1-curriculum)":
//       "/blogs/cia-part-1-curriculum",
//     "/your-guide-to-success-with-a-fraud-analyst-course":
//       "/blogs/fraud-analyst-course",
//     "/a-step-by-step-guide-to-the-cia-exam-registration-process":
//       "/blogs/cia-exam-registration-process",
//     "/essential-fraud-examiner-skills-to-avoid-and-spot-fraud":
//       "/blogs/cfe-fraud-skills",
//     "/a-detailed-guide-on-certified-internal-auditor-functions":
//       "/blogs/certified-internal-auditor-functions",
//     "/top-10-cams-exam-tips-to-pass-on-your-first-attempt":
//       "/blogs/cams-exam-tips",
//     "/how-to-become-the-best-fraud-investigator": "/blogs/fraud-investigator",
//     "/what-are-the-cia-course-eligibility-criteria-in-india":
//       "/blogs/cia-course-eligibility-criteria",
//     "/comprehensive-guide-to-understand-and-implement-kyc-compliance":
//       "/blogs/kyc-compliance",
//     "/which-certifications-are-related-to-aml-compliance":
//       "/blogs/aml-compliance",
//     "/what-is-the-cams-certification-cost-and-the-benefits":
//       "/blogs/cams-certification-cost",
//     "/what-is-the-cia-certification-cost-and-duration-in-india":
//       "/blogs/cia-certification-cost-duration-india",
//     "/internal-audits-role-in-fraud-prevention-and-detection":
//       "/blogs/role-of-internal-audit-fraud",
//     "/understanding-the-role-of-a-certified-fraud-examiner-in-todays-business-landscape":
//       "/blogs/certified-fraud-examiner-role",
//     "/what-are-the-practical-steps-in-an-internal-audit":
//       "/blogs/steps-of-internal-audit",
//     "/certified-fraud-examiners-everything-you-need-to-know":
//       "/blogs/certified-fraud-examiner",
//     "/what-are-the-benefits-of-becoming-cia": "/blogs/benefits-of-becoming-cia",
//     "/the-impact-of-cfe-in-corporate-world": "/blogs/cfe-in-corporate-world",
//     "/5-key-skills-required-to-pass-cia-exam": "/blogs/cia-exam-key-skills",
//     "/cfe-certification-cost-in-india": "/blogs/cfe-certification-cost",
//     "/how-to-achieve-cfe-certification-in-less-than-30-days":
//       "/blogs/achieve-cfe-certification",
//     "/why-we-should-become-cfe": "/blogs/benefits-of-becoming-cfe",
//     "/steps-to-become-cfe": "/blogs/steps-to-become-cfe",
//     "/schedule-of-classes": "/blogs/schedule-of-classes",
//   };
//   return (
//     <div className="font-sans text-gray-800 min-h-screen flex flex-col">
//       <ScrollToTop />
//       <CanonicalTag />
//       <GoogleAnalytics />
//       <NotificationPopup />
//       <FloatingContact />
//       <Toaster position="top-right" richColors />
//       <Layout>
//         <Meta />
//         <main className="grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-aia" element={<AboutPage />} />
//             <Route
//               path="/about-us"
//               element={<Navigate to="/about-aia" replace />}
//             />
//             <Route path="/cfe-curriculum" element={<CFECurriculam />} />
//             <Route path="/cia-curriculum" element={<CIACurriculam />} />
//             <Route
//               path="/cia-challenge-curriculum"
//               element={<CIAChallenge />}
//             />
//             <Route path="/cams" element={<CAMS />} />
//             <Route path="/cfe-free-resources" element={<FreeResources />} />
//             <Route
//               path="/cfe-free-resource/:questions_module"
//               element={<CfePracticeQuestion />}
//             />
//             <Route path="/blogs" element={<Blog />} />
//             <Route path="/blogs/:id" element={<BlogDetails />} />

//             <Route path="/blogs/course/:courseName" element={<BlogCourse />} />
//             <Route path="/our-passouts" element={<OurPassout />} />
//             <Route path="/passed-out" element={<OurPassout />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route
//               path="/passout-stories/:slug"
//               element={<PassoutStoriesSlug />}
//             />
//             <Route path="/enroll-now" element={<Enrool />} />
//             <Route path="/corporate-training" element={<CorporateTraining />} />
//             <Route path="/policies" element={<Policies />} />
//             <Route
//               path="/terms-and-conditions"
//               element={<TermsAndConditions />}
//             />
//             <Route path="*" element={<NotFound />} />

//             {/* ----------------BLOG ROUTES----------------------------- */}
//             {Object.entries(blogRedirects).map(([oldPath, newPath]) => (
//               <Route
//                 key={oldPath}
//                 path={oldPath}
//                 element={<Navigate to={newPath} replace />}
//               />
//             ))}
//           </Routes>
//         </main>
//       </Layout>
//     </div>
//   );
// }
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";

const CAMS = lazy(() => import("./pages/Courses/CAMS"));
const CFECurriculam = lazy(() => import("./pages/Courses/CFECurriculam"));
const CIAChallenge = lazy(() => import("./pages/Courses/CIAChallenge"));
const CIACurriculam = lazy(() => import("./pages/Courses/CIACurriculam"));
const FreeResources = lazy(() =>
  import("./pages/free-resources/cfe-free-resources")
);
const Home = lazy(() => import("./pages/Home/Home"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const OurPassout = lazy(() => import("./pages/OurPassout/OurPassout"));
const Enrool = lazy(() => import("./pages/Enroll/Enroll"));
const Contact = lazy(() => import("./pages/contact/contact"));
const BlogDetails = lazy(() => import("./pages/Blog/blog-details"));
const AboutPage = lazy(() => import("./pages/About/About"));
const CorporateTraining = lazy(() =>
  import("./pages/corporate-training/corporate-training")
);
const Policies = lazy(() => import("./pages/policies/policies"));
const TermsAndConditions = lazy(() =>
  import("./pages/terms-and-conditions/terms-and-conditions")
);
const BlogCourse = lazy(() => import("./pages/Blog/blog-course"));
const CfePracticeQuestion = lazy(() =>
  import("./pages/free-resources/cfe-practice-question")
);
const PassoutStoriesSlug = lazy(() =>
  import("./components/passout/passout-stories-slug")
);
const NotFound = lazy(() => import("./components/common/not-found"));

import NotificationPopup from "./components/notification/notification-popup";
import GoogleAnalytics from "./components/google-analytics/google-analytics";
import ScrollToTop from "./components/common/scroll-to-top";
import Meta from "./components/seo/meta";
import FloatingContact from "./components/common/floating-contact";
import { Toaster } from "sonner";
import CanonicalTag from "./components/common/canonical-tag";
import blogRedirects from "./routes/blog-redirects";
import SuspenseLoader from "./components/common/suspense-loader";

export default function App() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <ScrollToTop />
      <CanonicalTag />
      <GoogleAnalytics />
      <NotificationPopup />
      <FloatingContact />
      <Toaster position="top-right" richColors />

      <Layout>
        <Meta />

        <Suspense fallback={<SuspenseLoader />}>
          {" "}
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-aia" element={<AboutPage />} />
              <Route
                path="/about-us"
                element={<Navigate to="/about-aia" replace />}
              />
              <Route path="/cfe-curriculum" element={<CFECurriculam />} />
              <Route path="/cia-curriculum" element={<CIACurriculam />} />
              <Route
                path="/cia-challenge-curriculum"
                element={<CIAChallenge />}
              />
              <Route path="/cams" element={<CAMS />} />
              <Route path="/cfe-free-resources" element={<FreeResources />} />
              <Route
                path="/cfe-free-resource/:questions_module"
                element={<CfePracticeQuestion />}
              />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route
                path="/blogs/course/:courseName"
                element={<BlogCourse />}
              />
              <Route path="/our-passouts" element={<OurPassout />} />
              <Route path="/passed-out" element={<OurPassout />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/passout-stories/:slug"
                element={<PassoutStoriesSlug />}
              />
              <Route path="/enroll-now" element={<Enrool />} />
              <Route
                path="/corporate-training"
                element={<CorporateTraining />}
              />
              <Route path="/policies" element={<Policies />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="*" element={<NotFound />} />

              {Object.entries(blogRedirects).map(([oldPath, newPath]) => (
                <Route
                  key={oldPath}
                  path={oldPath}
                  element={<Navigate to={newPath} replace />}
                />
              ))}
            </Routes>
          </main>
        </Suspense>
      </Layout>
    </div>
  );
}
