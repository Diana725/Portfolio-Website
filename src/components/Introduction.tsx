import introImage from '/src/assets/images/WhatsApp Image 2024-12-02 at 08.33.17.jpeg'

export default function Introduction() {
    return (
      <section id="introduction" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-base text-gray-700 mb-6">
                I'm a passionate web developer focused on creating dynamic, user-centered digital experiences. I specialize in building functional, responsive websites with a clean and intuitive user interface.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Recently, I developed a unique e-commerce platform that connects farmers directly with buyers, simplifying the supply chain and supporting local farmers by providing them with a wider market reach.
                Additionally, I created a website for Adlite Media, a business specializing in innovative taxi advertising solutions. This project involved showcasing my client’s unique campaigns, offering businesses a creative platform to boost their visibility.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Beyond client projects, I have built several demo projects that demonstrate my ability to experiment with and master new technologies. Each of these projects helped me sharpen my skills in JavaScript, React, CSS, and API integration, continuously pushing the boundaries of my capabilities.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="w-90 h-80 rounded-lg overflow-hidden shadow-xl mx-auto">
                <img 
                  src={introImage} 
                  alt="Diana Wangari Wachira" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">React.js</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Component-based architecture</li>
                  <li>State management</li>
                  <li>Hooks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Laravel</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>REST API Development using PHP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">API & Database Management</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>REST API integration using Fetch API and React Hooks</li>
                  <li>Database Management using MySQL and PhpMyAdmin</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Web Design & Version Control</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Responsive Web Design using Bootstrap and Tailwind CSS</li>
                  <li>Version Control with GitHub</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Linux, Cloud & CI/CD</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Linux Systems (Ubuntu, Debian) & Networking</li>
                  <li>Cloud Infrastructure with AWS</li>
                  <li>CI/CD pipeline creation and deployment with GitLab</li>
                  <li>Monitoring with Datadog and AWS Monitoring tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Certifications Section */}
          <div id="certifications" className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Professional Certifications</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">FRONTEND MASTERS COURSE - WEB FRONTEND DEVELOPMENT</h3>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">AWS CERTIFIED CLOUD PRACTITIONER - AMAZON WEB SERVICES</h3>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">AWS CERTIFIED SOLUTIONS ARCHITECT ASSOCIATE - AMAZON WEB SERVICES</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
