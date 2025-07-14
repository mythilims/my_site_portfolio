import React, { useState } from "react";
import Profile from "../assets/profile.png"; // your profile image
import cv from "../assets/Mythili_S.pdf"; // your profile image
// import certificateImg from "../assets/mern_certificate.jpg"; // replace with your image path
// import certificatePDF from "../assets/mern_certificate.pdf"; // optional PDF
let certificateImg;
let certificatePDF;
import {
  FileText,
  Github,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Code2,
  ExternalLink,
  Monitor,
  ToolCase,
  ToolCaseIcon,
  User,
  Wrench,
  Link2Icon,
  Linkedin,
  BriefcaseBusiness,
  LaptopMinimalCheck,
} from "lucide-react";

import {
  SKILLS,
  NAV_BAR,
  PROFILE_NAME,
  PROFILE_ROLE,
  COMPANY_NAME,
  PROFILE_EMAIL,
  HELLO_TEXT,
  ROLE_DEC,
  EXPERIENCE_DETAILS,
  PG_EDUCATION_DETAILS,
  UG_EDUCATION_DETAILS,
  PROJECT_DETAILS,
  CONTACT,
  MERN_PROJECT_DETAILS,
} from "../Utility/CommonFile";

function Myportfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.title]) acc[skill.title] = [];
    acc[skill.title].push(skill);
    return acc;
  }, {});

  const sortedSkillGroups = Object.keys(groupedSkills).sort(
    (a, b) => groupedSkills[b].length - groupedSkills[a].length // Descending
    // Use `groupedSkills[a].length - groupedSkills[b].length` for ascending
  );
  return (
    <div className="bg-[#0b1120] text-white min-h-screen">
      {/* ✅ Header */}
      <header className="fixed top-0 left-0 w-full bg-[#0b1120]/90 z-50 shadow-xs z-40 shadow-[#e1d0d0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <h1 className="sm:text-base md:text-2xl text-2xl font-bold">
            {PROFILE_NAME}
          </h1>

          {/* 🍔 Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-white text-2xl"
            >
              ☰
            </button>
          </div>

          {/* 🌐 Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-semibold">
            {NAV_BAR.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white border-b-2 border-transparent hover:border-[#ffbd39] transition text-[#e1d0d0]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* 📱 Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0b1120] px-4 pb-4">
            <nav className="flex flex-col space-y-3 text-sm font-semibold">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                // "Certificates",
                // "Services"
                // "Contact"
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="bg-[#0b1120] text-white  pt-20 px-6  " id="home">
        {/* max-w-5xl mx-auto space-y-10  
        flex flex-col md:flex-row items-start md:items-center
          md:px-12 */}
        <div
          className="max-w-5xl mx-auto space-y-10  
          md:px-12 "
        >
          <div className="md:w-1/1 ">
            <h2 className="text-3xl font-bold mb-4">
              {HELLO_TEXT}{" "}
              <span className="leading-relaxed">{PROFILE_NAME}</span>
              <br />
              <p className="text-[#ffbd39] text-lg">
                {" "}
                <br />
                Front-End - MERN Stack Developer (Immediate Joiner)
              </p>
            </h2>
            <p className="text-lg font-light">{ROLE_DEC}</p>
            <br />
            <p className="text-lg leading-relaxed text-justify">
              Currently undergoing professional training in MERN Stack (MongoDB,
              Express.js, Node.js) since May 2025 to transition into a
              full-stack developer role
            </p>
            <br />
            <div className="flex flex-col lg:flex-row gap-4 mt-6 items-center sm:items-start">
              {/* <button className="rounded-md bg-[#ffbd39] px-4 py-2 text-white font-semibold hover:bg-[#0d6efd] w-full sm:w-auto">
              

            </button> */}

              <div className="flex justify-center gap-4 sm:justify-start">
                <a
                  href={cv}
                  title="Download  CV"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffbd39]  rounded-md hover:bg-[#084ba0]  font-semibold flex items-center gap-2 text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  <FileText className="h-4 w-4 text-white-400" />{" "}
                  <span>Download CV</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/s-mythili-sundarajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="linkedin"
                  className="bg-[#0a66c2] rounded-md hover:bg-[#084ba0] text-white font-semibold flex items-center gap-2 text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  <Linkedin className="h-4 w-4 text-white-400" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/mythilims"
                  target="_blank"
                  title="github"
                  rel="noopener noreferrer"
                  className="bg-gray-800  rounded-md hover:bg-black text-white font-semibold flex items-center gap-2 text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  <Github className="h-4 w-4 text-white-400" />
                </a>

                {/* Email */}
                <a
                  href="mailto:mythilijobofficial@gmail.com"
                  title="gmail"
                  className="bg-green-600  rounded-md hover:bg-green-700 text-white font-semibold flex items-center gap-2 text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  <Mail className="h-4 w-4 text-white-400" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src={Profile}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </div> */}
        </div>
      </section>

      <section
        className="bg-[#0b1120] text-white pt-20 px-6 md:px-12"
        id="about"
      >
        {/* <h2 className="text-3xl font-bold text-center mb-10">
          <i className="fa fa-female	mr-2"></i> About Me
        </h2> */}
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-10">
          <User className="w-8 h-8 text-yellow-400" /> About Me
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Summary */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-justify">
              I'm{" "}
              <span className="text-[#ffbd39] font-semibold">
                {PROFILE_NAME}
              </span>
              , a passionate Front-End Developer from{" "}
              <span className="text-sky-400">Salem</span> with{" "}
              <strong>6+ years</strong> of experience. I craft scalable and
              engaging UIs using <strong>React.js</strong>,{" "}
              <strong>JavaScript (ES6+)</strong>, HTML5, and CSS3.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              I began with Laravel, then transitioned to React. I actively
              mentor juniors, conduct code reviews, fix live issues, and
              collaborate in Agile teams.
            </p>
          </div>

          {/* Experience Card */}
          <div>
            <h3 className="text-xl flex items-center gap-3 font-semibold text-[#ffbd39] mb-4">
              <BriefcaseBusiness className="h-6 w-6 text-white-400" />
              Experience
            </h3>
            <div className="bg-[#1a2238] shadow-lg rounded-xl p-6 space-y-2">
              <p className="text-lg font-semibold">
                Frontend Developer @ {COMPANY_NAME}, Salem
              </p>
              <p className="text-sm text-gray-300 italic">2018 – Feb 2025</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {EXPERIENCE_DETAILS.map((item, key) => {
                  return (
                    <>
                      <li key={key}>{item}</li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl flex items-center gap-3 font-semibold text-[#ffbd39] mb-4">
              <GraduationCap className="h-6 w-6 text-white-400" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* MCA */}
              <div className="bg-[#1a2238] shadow-lg rounded-xl p-6">
                <p className="text-md font-bold">
                  {PG_EDUCATION_DETAILS.degree} - {PG_EDUCATION_DETAILS.clgName}
                </p>
                <p className="text-sm text-gray-300">
                  {PG_EDUCATION_DETAILS.address}
                </p>
                <p className="text-sm text-gray-400 italic">
                  {PG_EDUCATION_DETAILS.year}
                </p>
              </div>

              {/* BCA */}
              <div className="bg-[#1a2238] shadow-lg rounded-xl p-6">
                <p className="text-md font-bold">
                  {UG_EDUCATION_DETAILS.degree} - {UG_EDUCATION_DETAILS.clgName}
                </p>
                <p className="text-sm text-gray-300">
                  {UG_EDUCATION_DETAILS.address}
                </p>
                <p className="text-sm text-gray-400 italic">
                  {UG_EDUCATION_DETAILS.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#0b1120] text-white pt-20 px-6 md:px-12"
        id="skills"
      >
        {/* <h2 className="text-3xl font-bold text-center mb-10">
          <i className="fa fa-tools mr-2"></i>
          My Technical Skills
        </h2> */}
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-10">
          <Wrench className="w-8 h-8 text-yellow-400" /> My Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sortedSkillGroups.map((groupTitle) => (
            <div
              key={groupTitle}
              className="bg-[#1a2238] rounded-xl p-5 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#ffbd39] mb-4">
                {groupTitle}
              </h3>

              {groupedSkills[groupTitle]
                .sort((a, b) => b.level - a.level)
                .map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 rounded-full">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-[#0b1120] text-white pt-20 px-6 md:px-12"
        id="projects"
      >
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-10">
          <Monitor className="w-8 h-8 text-yellow-400" /> Projects & Experience
        </h2>
        {/* <h2 className="text-3xl font-bold text-center mb-10">
          <i className="fa fa-laptop-code	  mr-2"></i> Projects & Experience
        </h2> */}

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Project 1: Zinger */}
          {PROJECT_DETAILS.map((item, key) => {
            return (
              <>
                <div
                  className="bg-[#1a2238] rounded-xl shadow-lg p-6 space-y-3 hover:scale-[1.02] transition duration-300"
                  key={key}
                >
                  <h3 className="text-xl font-bold text-[#ffbd39]">
                    {item.project_name}
                  </h3>
                  <p className="text-sm text-gray-300">{item.company_name}</p>
                  <p className="text-sm leading-relaxed text-gray-200">
                    {item.des}
                  </p>
                  <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
                    <span className="text-sm font-bold text-[#ffbd39]">
                      Tech:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((itemTech) => (
                        <span
                          key={itemTech}
                          className="bg-sky-700 text-white px-3 py-1 rounded-full text-xs"
                        >
                          {itemTech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
                    <span className="text-sm font-bold text-[#ffbd39]">
                      Role:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.role.map((itemTech) => (
                        <span
                          key={itemTech}
                          className="bg-sky-700 text-white px-3 py-1 rounded-full text-xs"
                        >
                          {itemTech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <br />

        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-8">
          <LaptopMinimalCheck className="w-8 h-8 text-yellow-400" /> MERN Stack Projects
          (During Learning)
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Project 1: Zinger */}
          {MERN_PROJECT_DETAILS.map((item, key) => {
            return (
              <>
                <div
                  className="bg-[#1a2238] rounded-xl shadow-lg p-6 space-y-3 hover:scale-[1.02] transition duration-300"
                  key={key}
                >
                  <div className="flex justify-between items-center flex-wrap gap-3">
                    <h3 className="text-xl font-bold text-[#ffbd39]">
                      {item.project_name}
                    </h3>

                    <div className="flex gap-4">
                      <a
                        href={item.live_url}
                        target="_blank"
                        className="bg-green-600 hover:bg-green-700 text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded font-bold text-center"
                      >
                        Live Demo
                      </a>

                      <a
                        href={item.code_url}
                        target="_blank"
                        className="bg-gray-700 hover:bg-gray-600 text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded font-bold text-center"
                      >
                        View Code
                      </a>
                    </div>
                  </div>

                  {/* <p className="text-sm text-gray-300">{item.company_name}</p> */}
                  <p className="text-sm leading-relaxed text-gray-200">
                    {item.des}
                  </p>

                  <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
                    <span className="text-sm font-bold text-[#ffbd39]">
                      Tech:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((itemTech) => (
                        <span
                          key={itemTech}
                          className="bg-sky-700 text-white px-3 py-1 rounded-full text-xs"
                        >
                          {itemTech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
                    <span className="text-sm font-bold text-[#ffbd39]">
                      Role:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.role.map((itemTech) => (
                        <span
                          key={itemTech}
                          className="bg-sky-700 text-white px-3 py-1 rounded-full text-xs"
                        >
                          {itemTech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* <section
        className="bg-[#0b1120] text-white pt-20 px-6 md:px-12"
        id="certificates"
      >
        <h2 className="text-3xl font-bold flex items-center gap-2 mb-3 justify-center">
          <Award className="w-8 h-8 text-yellow-400" />
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#1a2238] rounded-xl shadow-lg p-6 space-y-3 hover:scale-[1.02] transition duration-300">
            <h3 className="text-xl font-bold text-[#ffbd39]">
              MERN Stack Development
            </h3>
            <p className="text-sm text-gray-300">
              FITA Academy | April 2025 – July 2025
            </p>
            <p className="text-sm leading-relaxed text-gray-200">
              Completed hands-on training in MongoDB, Express.js, React.js, and
              Node.js with real-time project implementation, backend API
              creation, and fullstack deployment.
            </p>

            <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
              <span className="text-sm font-bold text-[#ffbd39]">Tools:</span>
              <div className="flex flex-wrap gap-2">
                {["VS Code", "Postman", "Swagger"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-sky-700 text-white px-3 py-1 rounded-full text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={cv} // Replace with your real file path
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white text-[11px] sm:text-xs px-4 py-2 rounded font-bold text-center"
              >
                View Certificate
              </a>

              <a
                href={cv} // optional image preview
                target="_blank"
                className="bg-gray-700 hover:bg-gray-600 text-white text-[11px] sm:text-xs px-4 py-2 rounded font-bold text-center"
              >
                View Image
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* ✅ Footer */}
      <footer className="text-center text-xs p-4 mt-10 text-gray-400">
        © 2025 {PROFILE_NAME}. All rights reserved. | 📧 {PROFILE_EMAIL}
      </footer>
    </div>
  );
}

export default Myportfolio;
