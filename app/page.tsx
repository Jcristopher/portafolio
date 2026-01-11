import CustomHeader from "./components/header/header";
import Projects from "./features/projects/projects";
import Aboutme from "./features/aboutme/aboutme";
import PersonalDetail from "./features/presentation/personal-detail";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <div>
      <CustomHeader />
      <div className="px-[15%]">
        <PersonalDetail />
        <Aboutme />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
