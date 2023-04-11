import { skillsData } from "../helper/Logo";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#BB92b0]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill, index) => {
            return (
              <div key={index} className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#BB92b0] hover:text-[#0a192f] duration-500">
                <img
                  src={skill.img}
                  alt="HTML-icon"
                  className="pt-1 w-20 mx-auto"
                />
                <p className="py-2">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
