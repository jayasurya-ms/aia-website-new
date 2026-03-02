import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

import CAMS from "./pages/Courses/CAMS";
import CFECurriculam from "./pages/Courses/CFECurriculam";
import CIAChallenge from "./pages/Courses/CIAChallenge";
import CIACurriculam from "./pages/Courses/CIACurriculam";
import FreeResources from "./pages/free-resources/cfe-free-resources";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import OurPassout from "./pages/OurPassout/OurPassout";

import Enrool from "./pages/Enroll/Enroll";
import Contact from "./pages/contact/contact";
import BlogDetails from "./pages/Blog/blog-details";
import AboutPage from "./pages/About/About";
import NotificationPopup from "./components/notification/notification-popup";
import PassoutStoriesSlug from "./components/passout/passout-stories-slug";
import GoogleAnalytics from "./components/google-analytics/google-analytics";
import ScrollToTop from "./components/common/scroll-to-top";
import CorporateTraining from "./pages/corporate-training/corporate-training";
import Policies from "./pages/policies/policies";
import TermsAndConditions from "./pages/terms-and-conditions/terms-and-conditions";
import BlogCourse from "./pages/Blog/blog-course";
import CfePracticeQuestion from "./pages/free-resources/cfe-practice-question";
import Meta from "./components/seo/meta";
import FloatingContact from "./components/common/floating-contact";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <ScrollToTop />
      <GoogleAnalytics />
      <NotificationPopup />
      <FloatingContact />
      <Toaster position="top-right" richColors />
      <Layout>
        <Meta />
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
            <Route path="/blogs/course/:courseName" element={<BlogCourse />} />
            <Route path="/our-passouts" element={<OurPassout />} />
            <Route path="/passed-out" element={<OurPassout />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/passout-stories/:slug"
              element={<PassoutStoriesSlug />}
            />
            <Route path="/enroll-now" element={<Enrool />} />
            <Route path="/corporate-training" element={<CorporateTraining />} />
            <Route path="/policies" element={<Policies />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Routes>
        </main>
      </Layout>
    </div>
  );
}
