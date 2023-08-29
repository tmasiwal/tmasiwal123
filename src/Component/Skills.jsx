import React from 'react';
import './Skills.css'; // Make sure to create a Skills.css file for styling
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiTypescript } from 'react-icons/si';
import { FaNodeJs, FaGithub, FaNode} from 'react-icons/fa';
import { BiLogoNetlify,BiLogoNodejs } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-h1">Skills</h1>

      {/* Frontend */}
      <h2>Frontend</h2>
      <div className="skills-frontend">
        <div className="skills-logo">
          <SiHtml5 color='#d84c1a'size={100} />
        </div>
        <div className="skills-logo">
          <SiCss3 color='#1a88d8'size={100} />
        </div>
        <div className="skills-logo">
            <div className="logosize">
          <SiJavascript color='#e3d96a' size={100}/>

            </div>
        </div>
        <div className="skills-logo">
          <SiReact color='#6ad4e3'size={100} />
        </div>
        <div className="skills-logo">
          <SiRedux color='#6ad4e3' size={100} />
        </div>
        <div className="skills-logo">
          <SiTypescript color='#6ad4e3'size={100} />
        </div>
      </div>

      {/* Backend */}
      <div className="backend">
        <h2>Backend</h2>
        <div className="backend-skills">
          <div className="skills-logo">
            <FaNodeJs color='#6ad4e3' size={100}/>
          </div>
          <div className="skills-logo">
            <SiHtml5 color='#d84c1a'size={100} />
          </div>
          <div className="skills-logo">
            <FaNode color='#6ad4e3'size={100} />
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="Tools">
        <h2>Tools</h2>
        <div className="tools-skills">
          <div className="skills-logo">
            <FaGithub size={100}/>
          </div>
         <div className="skills-logo">
          <BiLogoNetlify size={100} color='#6ad4e3'/>
         </div>

         <div className="skills-logo">
          <BiLogoNodejs size={100} color='#6ad4e3'/>
         </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
