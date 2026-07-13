import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "AI Resume Analyzer",
      description: "Parses tech resumes against JDs using advanced vector embeddings and cosine similarity to find missing tech-stack gaps and provide actionable career insights.",
      image: "/Resume.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT Authentication", "Groq AI", "Tailwind CSS", "Multer", "PDF Parsing", "Git", "GitHub"],
      githubLink: "https://github.com/Maheswari-21/AI-resume-analyzer",
      liveLink: "https://ai-resume-analyzer-three-mu.vercel.app"
    },
    {
      id: 2,
      title: "Secure Task Manager",
      description: "A private task management system featuring end-to-end data protection, user authentication, and encrypted storage to ensure your daily productivity remains confidential.",
      image: "/task.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Git", "GitHub", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Maheswari-21/SecureTaskManager",
      liveLink: "https://secure-task-manager-liart.vercel.app"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#121212] pt-12 pb-16 scroll-mt-6 flex flex-col justify-start relative">
      <div className="max-w-6xl w-full mx-auto px-6 z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white tracking-wide">Featured Projects</h2>
          <div className="w-12 h-[3px] bg-[#BC002D] mx-auto mt-2"></div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-stretch w-full">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#1A1A1A] border border-gray-900 rounded-2xl overflow-hidden flex flex-col shadow-xl w-full sm:w-[350px] transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/90 hover:border-gray-800">
              <div className="h-48 w-full overflow-hidden bg-gray-800 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover" />
              </div>

              <div className="p-6 pt-3 flex flex-col flex-1 min-h-[300px]">
                <div className="flex-grow space-y-3 mb-6">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 hover:text-[#BC002D] cursor-pointer inline-block">
                    {project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-1 flex flex-col h-full justify-between">
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#121212] text-[10px] font-medium px-2 py-1.5 rounded-full text-gray-300 border border-gray-800 text-center truncate transition-all duration-300 hover:bg-[#BC002D] hover:text-white hover:border-[#BC002D] cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 items-center pt-1 border-gray-950 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"            
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs font-medium bg-[#121212] text-gray-300 border border-gray-800 px-4 py-2.5 rounded-full transition-all duration-300 hover:bg-[#BC002D] hover:text-white hover:border-[#BC002D]" >
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"           
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs font-medium bg-[#BC002D] text-white border border-[#BC002D] px-4 py-2.5 rounded-full transition-all duration-300 hover:bg-transparent hover:text-white hover:border-gray-700" >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}