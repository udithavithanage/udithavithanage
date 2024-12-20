import React from "react";

// Skill data with names and logo URLs
const skills = [
  {
    name: "HTML",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/320px-CSS3_logo.svg.png",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732226.png",
  },
  {
    name: "Express",
    logo: "https://camo.githubusercontent.com/53aebf1e76a911350cf2e8a947b50656eebc438084cac0eb60b8557cb0dcee31/68747470733a2f2f66696c65732e6f616975736572636f6e74656e742e636f6d2f66696c652d65517866725a493873754e64723546505644635266544b473f73653d323132332d31302d3235543038253341323725334132355a2673703d722673763d323032312d30382d30362673723d6226727363633d6d61782d6167652533443331353336303030253243253230696d6d757461626c6526727363643d6174746163686d656e7425334225323066696c656e616d6525334431376338363632332d646663632d346330632d383462392d6464646263613762363436362e706e67267369673d6a457049596b47304a412f6a3964384c556d724a752532424455507876455661414d6e48766238414969646951253344",
  },
  {
    name: "MongoDB",
    logo: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
  },
  {
    name: "Tkinter",
    logo: "https://cdn.sanity.io/images/mhuj7snm/production/64fa9998b50db243e186ae259471b1bc95b356f9-1869x2048.png",
  },
  {
    name: "CustomTkinter",
    logo: "https://styles.redditmedia.com/t5_8tx64t/styles/communityIcon_kbz7e49k7obb1.png",
  },
  {
    name: "WebSocket",
    logo: "https://www.adambiro.com/wp-content/uploads/2020/09/websockets.png",
  },
  {
    name: "EmailJS",
    logo: "https://avatars.githubusercontent.com/u/17705215?s=280&v=4",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 m-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-16 h-16 mb-3"
              />
              <span className="text-lg font-semibold text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
