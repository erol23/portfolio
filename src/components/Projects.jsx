import { ProjectsData } from "../helper/Projects";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#BB92b0]">
            Projects
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ProjectsData.map((project, index) => {
          return (
              <div
              key={index}
              style={{backgroundImage: `url(${project.photo})`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                                      flex justify-center text-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {project.name}
                  </span>
                  <div className="pt-8 text-center ">
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                                               bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                                               bg-white text-gray-700 font-bold text-lg"
                      >
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
