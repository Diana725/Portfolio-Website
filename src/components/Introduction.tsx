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
    I’m a full-stack web and mobile developer with over a year of hands-on experience building dynamic, user-focused applications. Since September 2024, I’ve been working at Spark Publicity, where I help transform ideas into fully functional digital solutions that are both visually appealing and technically robust.
  </p>
  <p className="text-base text-gray-700 mb-6">
    My work spans a range of industries—from e-commerce to education and fundraising. I developed an e-commerce platform that connects farmers directly with buyers, cutting out intermediaries and giving local farmers better market access. I also built the Sara Stories mobile app, which lets users subscribe, read, and record children’s stories, combining storytelling with tech in a meaningful way.
  </p>
  <p className="text-base text-gray-700 mb-6">
    At Spark Publicity, I’ve contributed to client projects like the Adlite Media website, showcasing innovative taxi advertising campaigns, and the Impact Stories Fund platform, which enables donation tracking and video storytelling through seamless integration with YouTube and payment gateways.
  </p>
  <p className="text-base text-gray-700 mb-6">
    I specialize in React, Laravel, MySQL, and API development, with a strong focus on integrating third-party services like payment gateways (IntaSend, PayPal), email verification, and mobile features using Capacitor. I enjoy solving real-world problems with code and continually pushing myself to learn and build better.
  </p>
</div>

            <div className="md:w-1/3">
              <div className="w-100 h-90 rounded-lg overflow-hidden shadow-xl mx-auto">
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
