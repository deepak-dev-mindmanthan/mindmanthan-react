import React, { useState, useEffect } from 'react';

// Import images
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';
import ContactSection from './ContactSection';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  image?: string;
}

const AboutUsPage: React.FC<{ onLearnMoreClick?: () => void }> = ({ onLearnMoreClick }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const imageMap: { [key: number]: string } = {
    1: about1,
    2: about2,
    3: about3,
  };

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'The Beginning',
      description: 'Mind Manthan was founded with a vision to revolutionize how businesses approach software development. Starting from humble beginnings, we\'ve grown to become a trusted partner for companies seeking innovative, scalable, and transformative technology solutions.',
      imagePosition: 'left',
    },
    {
      id: 2,
      title: 'Mission',
      description: 'At Mind Manthan, our mission is to bring together the personal service of local expertise with the power of a global network. We believe that\'s simpler than it sounds. Our teams offer high-touch development services that clients love from highly experienced members.',
      imagePosition: 'right',
    },
    {
      id: 3,
      title: 'We are global',
      description: 'Our global network allows us to offer best-in-class services like dedicated development teams, specialized consulting, 24/7 support, and more. We understand that business can be chaotic. That\'s where we come in. We\'re focused on adding much-needed balance to the mix.',
      imagePosition: 'left',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const timelineElement = document.getElementById('timeline-container');
      if (!timelineElement) return;

      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = timelineElement.offsetHeight;
      
      // When timeline bottom enters viewport (rect.bottom = windowHeight), start at 0
      // When timeline top exits viewport (rect.top = 0), continue progressing
      // When timeline completely exits top (rect.top = -elementHeight), end at 1
      
      const timelineStart = windowHeight; // When bottom of timeline is at viewport bottom
      const timelineEnd = -elementHeight; // When top of timeline exits viewport top
      
      const progress = (timelineStart - rect.top) / (timelineStart - timelineEnd);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(clampedProgress);
    };

    // Call on mount to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white text-center py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-medium">ABOUT</div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#1a1b1f]">
            We're dedicated to delivering excellence
          </h1>
          <p className="text-xl text-gray-600">
            Everyone has a story. Here is ours.
          </p>
        </div>
        </div>
      

        

      {/* Timeline Section */}
      <div className="relative py-20 lg:py-32" id="timeline-container">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Vertical Line with Scrolling Dot */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2">
            {/* Large Blue Dot that scrolls */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#001fcc] rounded-full z-20 shadow-lg transition-all duration-200 ease-out"
              style={{ top: `${scrollProgress * 100}%`, transform: 'translate(-50%, -50%)' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-20 lg:space-y-32">
            {timelineItems.map((item) => (
              <div key={item.id} className="relative">
                {/* Small Dot at each timeline point */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8">
                  <div className="w-6 h-6 bg-white border-2 border-[#001fcc] rounded-full relative z-10 shadow-lg" />
                </div>

                {/* Content */}
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${item.imagePosition === 'right' ? 'lg:text-right' : ''}`}>
                  {/* Text Content */}
                  <div className={`${item.imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                    <h3 className="text-3xl lg:text-4xl font-black text-[#1a1b1f] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onLearnMoreClick) onLearnMoreClick();
                      }}
                      className={`inline-block text-[#001fcc] font-bold hover:text-[#0017a8] transition-colors cursor-pointer ${item.imagePosition === 'right' ? 'lg:ml-auto lg:block' : ''}`}
                    >
                      Learn more →
                    </a>
                  </div>

                  {/* Image Placeholder */}
                  <div className={`${item.imagePosition === 'right' ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg aspect-[4/3] flex items-center justify-center overflow-hidden shadow-lg">
                      <img 
                        src={imageMap[item.id]}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
      
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Why Us Section */}
      <div className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-8">WHY US</div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
            We understand that business can be chaotic. That's where we come in. We're focused on adding some much-needed balance to the mix. We accomplish that by forging real partnerships with our clients. When you work with us, you're working with a team who understands your pain points and your goals. We'll help you find order in the midst of the chaos.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onLearnMoreClick) onLearnMoreClick();
            }}
            className="inline-block text-[#001fcc] font-bold hover:text-[#0017a8] transition-colors cursor-pointer"
          >
            Learn more →
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default AboutUsPage;
