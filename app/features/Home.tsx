import CustomHeader from "../components/header/header";
import Projects from "./projects/projects";
import Aboutme from "./aboutme/aboutme";
import PersonalDetail, { PersonalDetailProps } from "./presentation/personal-detail";
import Footer from "../components/footer/footer";
import Technologies from "./technologies/Technologies";
export interface AboutMe {
  text: string;
  hightlight: boolean;
}
export interface HomeProps extends PersonalDetailProps {
  aboutme: AboutMe[][];
  technologies: string[];
}
export default function Home({
  fullName,
  job,
  description,
  aboutme,
  link_linkedin,
  link_github,
  email,
  photoURL,
  technologies
}: HomeProps) {
  return (
    <div>
      <CustomHeader />
      <div className="px-[15%]">
        <PersonalDetail fullName={fullName} job={job} description={description} link_linkedin={link_linkedin} link_github={link_github} email={email} photoURL={photoURL} />
        <Aboutme aboutme={aboutme} />
        <Technologies technologiesId={technologies} />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
