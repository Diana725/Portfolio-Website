import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronDown, ChevronUp } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Feature {
  title: string;
  description: string;
}

interface ProjectDetailsProps {
    title: string;
    description: string;
    features: Feature[];
    technologies: string[];
    image: string[];
    // link?: string;
    challenges?: { title: string; description: string }[];  // Make this optional
    futureEnhancements?: string[];  // Make this optional
    impact?: string[];  // Make this optional
    githubLink: string;
    demoLink?: string;  // Make this optional
    technicalDetails: {
      frontend: string[];
      backend: string[];
      authentication: string[];
      deployment: string[];
    };
  }
  

export default function ProjectDetails({
  title,
  description,
  features,
  technologies,
  image,
  challenges,
  futureEnhancements,
  impact,
  githubLink,
  demoLink,
  technicalDetails,
}: ProjectDetailsProps) {

  const [isExpanded, setIsExpanded] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div  className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image carousel */}
      <Slider {...settings}>
        {image.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-110 object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Display technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features section */}
        <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index}>
              <h5 className="font-medium text-gray-900">{feature.title}</h5>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Show More option */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mt-4"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          {isExpanded ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-6">
            {/* Technical Details */}
            <div>
              <h4 className="text-lg font-semibold">Technical Details:</h4>
              <div>
                <p className="font-medium text-gray-900">Frontend:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  {technicalDetails.frontend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Backend:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  {technicalDetails.backend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Authentication:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  {technicalDetails.authentication.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Deployment:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  {technicalDetails.deployment.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h4 className="text-lg font-semibold">Challenges:</h4>
              <div className="space-y-3">
                {(challenges || []).map((challenge, index) => (
                  <div key={index}>
                    <h5 className="font-medium text-gray-900">{challenge.title}</h5>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Enhancements */}
            <div>
              <h4 className="text-lg font-semibold">Future Enhancements:</h4>
              <ul className="list-disc pl-6 text-gray-600">
                {(futureEnhancements || []).map((enhancement, index) => (
                  <li key={index}>{enhancement}</li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-lg font-semibold">Impact:</h4>
              <ul className="list-disc pl-6 text-gray-600">
                {(impact || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="mt-6">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  GitHub Repository→
                </a>
              )}
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Live Demo→
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
