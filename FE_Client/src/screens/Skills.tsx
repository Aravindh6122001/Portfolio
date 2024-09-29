import ImageCard from "../components/ImageCard";

import ReactLogo from "../assets/svg/react.svg";
import JavaScriptLogo from "../assets/svg/javascript.svg";
import PythonLogo from "../assets/svg/python.svg";
import PostgresLogo from "../assets/svg/postgresql.svg";
import AngularLogo from "../assets/svg/angular.svg";
import fastApiLogo from "../assets/svg/fastapi.svg";
import DjangoLogo from "../assets/svg/django.svg";

const Skills = () => {
  return (
    <div className="h-[60vh] flex flex-wrap justify-start items-center gap-6">
      <ImageCard Icon={ReactLogo} name="React" />
      <ImageCard Icon={JavaScriptLogo} name="JavaScript" />
      <ImageCard Icon={PythonLogo} name="Python" />
      <ImageCard Icon={PostgresLogo} name="Postgresql" />
      <ImageCard Icon={AngularLogo} name="Angular" />
      <ImageCard Icon={fastApiLogo} name="FastApi" />
    </div>
  );
};

export default Skills;
