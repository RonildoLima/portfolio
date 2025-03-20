import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, Linkedin, Mail, Phone, MapPin, Code, Database, Wrench, Github, ExternalLink, Briefcase, GraduationCap, Languages } from 'lucide-react';
import jsPDF from 'jspdf';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const downloadResume = () => {
    const pdf = new jsPDF();
    
    // Configure PDF
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.text("Ronildo Lima dos Santos Júnior - Backend Developer", 20, 20);
    
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    
    // Personal Information
    pdf.text("Personal Information:", 20, 35);
    pdf.text("Email: ronildolima996@gmail.com", 30, 45);
    pdf.text("Phone: (83) 99847-7569", 30, 55);
    pdf.text("Location: Pombal, Paraíba", 30, 65);
    pdf.text("LinkedIn: www.linkedin.com/in/ronildo-lima-44618b176", 30, 75);
    
    // Professional Summary
    pdf.setFont("helvetica", "bold");
    pdf.text("Professional Summary:", 20, 90);
    pdf.setFont("helvetica", "normal");
    const summary = "Backend developer with practical experience in .Net, C#, HTML, CSS, JavaScript, Bootstrap, Java SpringBoot, and legacy system integration. Proactive approach to problem-solving with clear and effective communication.";
    const wrappedSummary = pdf.splitTextToSize(summary, 170);
    pdf.text(wrappedSummary, 20, 100);
    
    // Technical Skills
    pdf.setFont("helvetica", "bold");
    pdf.text("Technical Skills:", 20, 120);
    pdf.setFont("helvetica", "normal");
    pdf.text("Languages: C#, .NET, Java, Python 3", 30, 130);
    pdf.text("Frameworks: Java SpringBoot, Bootstrap, UIKIT, ASP.NET Core", 30, 140);
    pdf.text("Databases: PostgreSQL, SQLServer, MySQL", 30, 150);
    pdf.text("Other: Git, HTML, CSS, JavaScript", 30, 160);
    
    // Education
    pdf.setFont("helvetica", "bold");
    pdf.text("Education:", 20, 180);
    pdf.setFont("helvetica", "normal");
    pdf.text("Bachelor in Computer Science - Universidade Estadual da Paraíba (UEPB)", 30, 190);
    pdf.text("Expected graduation: 2025", 30, 200);

    // Professional Experience
    pdf.setFont("helvetica", "bold");
    pdf.text("Professional Experience:", 20, 220);
    pdf.setFont("helvetica", "normal");
    const experience = [
      "Full-Stack Developer Analyst at DivTech Informática - Current",
      "• Integration support and data transmission efficiency between systems",
      "• ETL application development for data integration and analysis",
      "• Online certification systems development",
      "• RPA process development for task automation"
    ];
    experience.forEach((line, index) => {
      pdf.text(line, 30, 230 + (index * 10));
    });

    // Courses
    pdf.addPage();
    pdf.setFont("helvetica", "bold");
    pdf.text("Extracurricular Courses:", 20, 20);
    pdf.setFont("helvetica", "normal");
    const courses = [
      "• Office Package and Adobe Package (60 hours)",
      "• Python 3 Programming (120 hours)",
      "• English from basic to advanced by UDEMY (60 hours)",
      "• SQL (Beginner to advanced) (60h)",
      "• Full-stack: ASP.NET Developer by TreinaWeb"
    ];
    courses.forEach((course, index) => {
      pdf.text(course, 30, 30 + (index * 10));
    });

    // Languages
    pdf.setFont("helvetica", "bold");
    pdf.text("Languages:", 20, 90);
    pdf.setFont("helvetica", "normal");
    pdf.text("• English (Intermediate) - Regular study", 30, 100);
    
    pdf.save("Ronildo_Lima_Resume.pdf");
  };

  const projects = [
    {
      title: "Sistema de Gestão ETL",
      description: "Desenvolvimento de sistema ETL para integração de dados entre diferentes plataformas usando C# e .NET",
      tags: ["C#", ".NET", "SQL Server"],
      github: ""
    },
    {
      title: "API REST SpringBoot",
      description: "API RESTful desenvolvida com Java SpringBoot para gerenciamento de dados empresariais",
      tags: ["Java", "SpringBoot", "PostgreSQL"],
      github: ""
    },
    {
      title: "Automação RPA",
      description: "Sistema de automação de processos usando Python para otimização de tarefas repetitivas",
      tags: ["Python", "Automation", "RPA"],
      github: ""
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Header with Profile Photo */}
      <header className="text-center pt-12 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white mx-auto mb-8">
            <img
              src="https://i.ibb.co/fz2Ljtc6/IMG-20221119-142515-334.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Ronildo Lima dos Santos Júnior</h1>
          <p className="text-xl mb-6">Backend Developer</p>
          <button
            onClick={downloadResume}
            className="bg-white text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Resume (PDF)
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Professional Summary</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Backend developer with practical experience in .Net, C#, HTML, CSS, JavaScript, Bootstrap, Java SpringBoot, and legacy system integration. Proactive approach to problem-solving with clear and effective communication, always seeking to contribute to team growth.
          </p>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Professional Experience
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Full-Stack Developer Analyst at DivTech Informática - Current
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Participação na equipe de suporte de integrações de pedidos, garantindo a eficiência e precisão na transmissão de dados entre sistemas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Contribuição à equipe de desenvolvimento de aplicações ETL (Extract, Transform, Load), facilitando a integração e análise de dados em diversos sistemas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Colaboração na equipe de sistemas de certificações online, garantindo a integridade e segurança das plataformas de certificação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Integração à equipe de desenvolvimento de processos RPA (Robotic Process Automation), automatizando tarefas repetitivas e aumentando a eficiência operacional</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <Code className="w-6 h-6" />
            Personal Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            <Wrench className="w-6 h-6" />
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Programming Languages */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'Python', 'C#', 'Java', 'TypeScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks and Libraries */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Spring Boot', 'ASP.NET Core', 'Bootstrap'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Oracle'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Version Control */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Version Control</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'GitLab'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Development Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Maven', 'NPM'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing Tools */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Testing Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['JUnit', 'Selenium', 'Postman'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend Technologies */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Frontend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'Figma'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* API & Web Services */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">API & Web Services</h3>
              <div className="flex flex-wrap gap-2">
                {['RESTful APIs', 'WebSockets'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Education
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Bachelor in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-300">Universidade Estadual da Paraíba (UEPB)</p>
            <p className="text-gray-500 dark:text-gray-400">Expected graduation: 2025</p>
          </div>
        </section>

        {/* Extracurricular Courses Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <Code className="w-6 h-6" />
            Extracurricular Courses
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Pacote Office e Pacote Adobe (60 horas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Programação em Python 3 (120 horas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Inglês do básico ao avançado pela UDEMY (60 horas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>SQL (Iniciante ao avançado) (60h)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Full-stack: Desenvolvedor ASP.NET pela TreinaWeb</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <Languages className="w-6 h-6" />
            Languages
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300">
                Inglês (Intermediário) – Estudo regular
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:ronildolima996@gmail.com" className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Mail className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-600 dark:text-gray-300">ronildolima996@gmail.com</div>
              </div>
            </a>
            <a href="tel:+5583998477569" className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Phone className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-semibold">Telefone</div>
                <div className="text-gray-600 dark:text-gray-300">(83) 99847-7569</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ronildo-lima-44618b176" target="_blank" rel="noopener noreferrer" className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Linkedin className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-gray-600 dark:text-gray-300">Ronildo Lima</div>
              </div>
            </a>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <MapPin className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-semibold">Localização</div>
                <div className="text-gray-600 dark:text-gray-300">Pombal, Paraíba</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-300">
        <p>© 2024 Ronildo Lima dos Santos Júnior. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;