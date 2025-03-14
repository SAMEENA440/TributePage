import React, { useEffect, useRef, useState } from 'react';
import { Book, Rocket, Award, Users, Quote, Star, Heart, Brain } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
      {/* Animated Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center bg-no-repeat animate-scale"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-indigo-900/90"></div>
          {/* Animated stars */}
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              className="absolute animate-twinkle text-yellow-200 opacity-0"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
              }}
            />
          ))}
        </div>
        <div className="relative text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            Dr. APJ Abdul Kalam
          </h1>
          <p className="text-2xl md:text-3xl italic text-blue-200 max-w-3xl mx-auto leading-relaxed">
            "Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action."
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Floating Navigation */}
        <nav className="sticky top-4 z-50 max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-12">
          <ul className="flex justify-between items-center">
            <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
            <li><a href="#achievements" className="text-blue-200 hover:text-white transition-colors">Achievements</a></li>
            <li><a href="#timeline" className="text-blue-200 hover:text-white transition-colors">Timeline</a></li>
            <li><a href="#legacy" className="text-blue-200 hover:text-white transition-colors">Legacy</a></li>
          </ul>
        </nav>

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative group">
              <img 
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1974"
                alt="Dr. APJ Abdul Kalam"
                className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                The People's President
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Dr. APJ Abdul Kalam transcended his role as India's 11th President to become a universal symbol of wisdom, innovation, and inspiration. Known as the 'Missile Man of India', his journey from a humble beginning to the highest office of the nation continues to inspire millions.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                His vision for India, expressed through his tireless work in aerospace engineering and his dedication to inspiring young minds, has left an indelible mark on the nation's scientific and educational landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              Remarkable Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AchievementCard 
                icon={<Rocket className="w-12 h-12" />}
                title="Space Research"
                description="Pioneered India's space program and missile development initiatives, earning him the title 'Missile Man of India'"
              />
              <AchievementCard 
                icon={<Brain className="w-12 h-12" />}
                title="Scientific Innovation"
                description="Led the development of India's first satellite launch vehicle (SLV-III) and contributed to numerous defense projects"
              />
              <AchievementCard 
                icon={<Award className="w-12 h-12" />}
                title="Bharat Ratna"
                description="Honored with India's highest civilian award in 1997 for his exceptional service to the nation"
              />
              <AchievementCard 
                icon={<Book className="w-12 h-12" />}
                title="Literary Legacy"
                description="Authored inspiring books including 'Wings of Fire', 'Ignited Minds', and 'India 2020'"
              />
              <AchievementCard 
                icon={<Heart className="w-12 h-12" />}
                title="Youth Inspiration"
                description="Touched millions of young lives through his speeches and interactions, inspiring them to dream big"
              />
              <AchievementCard 
                icon={<Users className="w-12 h-12" />}
                title="Vision 2020"
                description="Crafted a comprehensive vision for transforming India into a developed nation by 2020"
              />
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section 
          id="timeline" 
          ref={timelineRef}
          className="py-16 relative"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              Life Journey
            </h2>
            <div className={`relative ${isVisible ? 'animate-fade-in' : ''}`}>
              {timelineEvents.map((event, index) => (
                <TimelineEvent
                  key={index}
                  year={event.year}
                  title={event.title}
                  description={event.description}
                  isLeft={index % 2 === 0}
                  isVisible={isVisible}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Quotes Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
              <Quote className="w-16 h-16 text-blue-300 absolute -top-8 left-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {quotes.map((quote, index) => (
                  <blockquote 
                    key={index}
                    className="relative p-6 bg-white/5 rounded-2xl transform hover:scale-105 transition-transform duration-300"
                  >
                    <p className="text-xl text-blue-100 italic mb-4">{quote}</p>
                    <footer className="text-blue-200 font-semibold">- Dr. APJ Abdul Kalam</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section id="legacy" className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              A Legacy That Inspires
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Dr. Kalam's legacy transcends his scientific achievements. He showed us that with determination, humility, and a vision for the future, one person can inspire an entire nation. His principles continue to guide countless individuals towards excellence and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {legacyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-blue-200 mb-3">{point.title}</h3>
                  <p className="text-blue-100">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            In Memory of Dr. APJ Abdul Kalam
          </p>
          <p className="text-lg text-blue-200">1931 - 2015</p>
          <p className="text-blue-300 mt-4">
            The Missile Man of India | The People's President | An Eternal Inspiration
          </p>
        </div>
      </footer>
    </div>
  );
}

function AchievementCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group bg-white/5 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
      <div className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-200">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}

function TimelineEvent({ 
  year, 
  title, 
  description, 
  isLeft, 
  isVisible,
  delay 
}: { 
  year: string, 
  title: string, 
  description: string, 
  isLeft: boolean,
  isVisible: boolean,
  delay: number
}) {
  return (
    <div 
      className={`flex items-center mb-12 opacity-0 ${
        isVisible ? 'animate-slide-in' : ''
      }`}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8'} ${!isLeft && 'order-2'}`}>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
          <h3 className="text-xl font-bold text-blue-200 mb-2">{year}</h3>
          <h4 className="text-lg font-semibold text-blue-300 mb-2">{title}</h4>
          <p className="text-blue-100">{description}</p>
        </div>
      </div>
      <div className="w-4 h-4 bg-blue-300 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
}

const timelineEvents = [
  {
    year: "1931",
    title: "A Humble Beginning",
    description: "Born in Rameswaram, Tamil Nadu, to a humble family"
  },
  {
    year: "1954",
    title: "Academic Excellence",
    description: "Graduated in Physics from Saint Joseph's College, Tiruchirappalli"
  },
  {
    year: "1960",
    title: "Joining ISRO",
    description: "Began his career at ISRO, marking the start of his space journey"
  },
  {
    year: "1980",
    title: "SLV-III Success",
    description: "Successfully led the SLV-III project, India's first satellite launch vehicle"
  },
  {
    year: "2002",
    title: "President of India",
    description: "Sworn in as the 11th President of India"
  },
  {
    year: "2015",
    title: "Final Journey",
    description: "Left for heavenly abode while doing what he loved - inspiring students"
  }
];

const quotes = [
  "You have to dream before your dreams can come true.",
  "Excellence is a continuous process and not an accident.",
  "Look at the sky. We are not alone. The whole universe is friendly to us.",
  "If you want to shine like a sun, first burn like a sun."
];

const legacyPoints = [
  {
    title: "Scientific Vision",
    description: "His contributions to space research and defense technology laid the foundation for India's technological advancement"
  },
  {
    title: "Educational Impact",
    description: "His passion for teaching and mentoring inspired millions of students to pursue careers in science and technology"
  },
  {
    title: "Leadership Model",
    description: "His humble leadership style and ethical principles continue to influence leaders across the world"
  }
];

export default App;