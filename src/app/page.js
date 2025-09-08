import Sidebar from "@/components/sidebar/Sidebar";
import About from "@/components/about/About";
import Home from "@/components/home/Home";
import Contact from "@/components/contact/Contact";
import Services from "@/components/services/Services";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import Blog from "@/components/blog/Blog";
import Hobbies from "@/components/hobbies/Hobbies";

export default function Page() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        {/* <Services /> */}
        <Resume />
        <Portfolio />
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        <Hobbies />
        {/* <Blog /> */}
        {/* <Contact /> */}
      </main>
    </>
  );
}
