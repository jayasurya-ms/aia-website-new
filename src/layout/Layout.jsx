import Footer from "./footer";
import Navbar from "./navbar";

const PageSkeleton = () => {
  return (
    <div className="relative h-[640px] overflow-hidden bg-gray-200">
      <div className="absolute inset-0 shimmer" />
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
