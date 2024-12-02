export default function Introduction() {
    return (
      <section id="introduction" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  src="/public/WhatsApp Image 2024-12-02 at 08.33.17.jpeg" 
                  alt="Diana Wangari Wachira" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }