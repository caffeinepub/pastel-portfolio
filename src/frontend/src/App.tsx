import { Layout } from "./components/Layout";
import { AboutSection } from "./pages/AboutSection";
import { CertificationsSection } from "./pages/CertificationsSection";
import { ContactSection } from "./pages/ContactSection";
import { HeroSection } from "./pages/HeroSection";
import { ProjectsSection } from "./pages/ProjectsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
