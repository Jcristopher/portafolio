import CustomHeader from "./components/header/header";
import Projects from "./projects";
import Aboutme from "./aboutme";
import PersonalDetail from "./components/presentation/personal-detail";

export default function Home() {
  return (
    <div>
      <CustomHeader />
      <div className="px-60">
        <PersonalDetail />
        <Aboutme />
        <Projects />
      </div>
    </div>
  );
}
