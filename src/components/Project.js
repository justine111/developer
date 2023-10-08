import React from "react";
import Ticketing from "../assets/ticket.jpg";
import StudentMg from "../assets/student.jpg";
import Attendance from "../assets/attendance.jpg";


const Projects = () => {
  const projects = [
    {
        img: Ticketing,
        title: "Ticketing System",
        desc: "Ticketing System. Built with PHP, Html, Bootstrap, JavaScript and Sql server ",
        code: "",
      },

      {
        img: StudentMg,
        title: "Enrollment Management",
        desc: "Enrollment Management. Built with PHP, Html, Bootstrap, JavaScript and Mysql ",
        code: "",
      },

      {
        img: Attendance,
        title: "Attendance with QR code system",
        desc: "Attendance with QR code system. Build with PHP, Instascan, Bootstrap, JavaScript and Mysql.",
        code: "", // coming soon...
      },
];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-sm md:text-base">
            These are some of my projects. I have built these with PHP Html, Boostrap,
            JavaScript and Mysql. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary rounded-xl opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 rounded-full font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;