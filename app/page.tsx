import CustomHeader from "./components/header/header";
import Projects from "./components/projects/projects";
import Aboutme from "./components/aboutme/aboutme";
import PersonalDetail from "./components/presentation/personal-detail";

export default function Home() {
  return (
    <div>
      <CustomHeader />
      <div className="px-[15%]">
        <PersonalDetail />
        <Aboutme />
        <Projects />
      </div>
    </div>
  );
}
