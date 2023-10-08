import React from "react";
import Stack1 from "../assets/react.jpg";
import PHP from "../assets/php.jpg";
import w3school from "../assets/w3school.jpg";

const TechStack = () => {
  const post = [
    {
      img: Stack1,
      title: "React JS.",
      url: "https://react.dev/learn",
    },

    {
      img: PHP,
      title: "PHP Hypertext Prepocessor.",
      url: "https://www.php.net",
    },

    {
        img: w3school,
        title: "w3schools.",
        url: "https://www.w3schools.com",
      },

  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="tech">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            TechStack
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-sm md:text-base">Here are the list of tech stack and tools that I have learned and used.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
      {post.map((item, index) => {
  return (
    <div key={index}>
      <img src={item.img} alt={item.title} />
      <h3 className="py-5 text-2xl">{item.title}</h3>
      <a
        href={item.url}
        className=" btn bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full text-white px-6 py-3"
      >
        Read More
      </a>
    </div>
  );
})}

      </div>
    </section>
  );
};

export default TechStack; 