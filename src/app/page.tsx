import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaArrowRight, FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaRocket, FaUserAstronaut } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section - Enhanced with gradient and animation */}
      <Section className="pt-24 pb-14 md:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="gradient-text text-lg font-medium" data-aos="fade-up">Software Engineer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" data-aos="fade-up" data-aos-delay="100">
            <span className="gradient-text">Saurabh Singh</span> Gautam
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            I build <span className="text-foreground font-medium">modern web applications</span> with a focus on performance, accessibility, and exceptional user experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
            <Button href="/projects" size="lg" variant="gradient" animation="pulse" icon={<FaArrowRight />} iconPosition="right">
              View My Projects
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="gradient-border">
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Floating tech icons */}
        <div className="hidden md:block absolute top-1/3 right-10 animate-float" style={{animationDelay: "0.3s"}}>
          <div className="glass-effect p-5 rounded-full">
            <FaCode className="text-primary w-8 h-8" />
          </div>
        </div>
        <div className="hidden md:block absolute bottom-20 left-16 animate-float" style={{animationDelay: "0.8s"}}>
          <div className="glass-effect p-5 rounded-full">
            <FaLaptopCode className="text-accent w-8 h-8" />
          </div>
        </div>
      </Section>

      {/* Tech Stack Section - Enhanced with cards and icons */}
      <Section className="py-12 border-t border-border/40">
        <h2 className="text-xl font-medium mb-8 gradient-text">My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {[
            { name: 'React', icon: <FaReact className="text-[#61DAFB] w-10 h-10" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="text-foreground w-10 h-10" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] w-10 h-10" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] w-10 h-10" /> },
            { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4] w-10 h-10" /> },
            { name: 'AWS', icon: <FaAws className="text-[#FF9900] w-10 h-10" /> }
          ].map((tech, index) => (
            <div 
              key={tech.name} 
              className="flex flex-col items-center glass-effect p-6 rounded-lg card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {tech.icon}
              <span className="text-sm font-medium mt-3">{tech.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* About Section - Enhanced with gradient and animation */}
      <Section className="py-16 border-t border-border/40">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
            <p className="text-muted-foreground mb-6">
              I'm a software engineer with 4+ years of experience specializing in frontend development. 
              I'm passionate about creating clean, efficient code and designing intuitive user interfaces.
            </p>
            <div className="flex flex-wrap gap-10 mb-8">
              <div className="glass-effect p-4 rounded-lg">
                <span className="text-2xl font-bold gradient-text">4+</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="glass-effect p-4 rounded-lg animate-float" style={{animationDelay: "0.2s"}}>
                <span className="text-2xl font-bold gradient-text">20+</span>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="glass-effect p-4 rounded-lg animate-float" style={{animationDelay: "0.4s"}}>
                <span className="text-2xl font-bold gradient-text">15+</span>
                <p className="text-sm text-muted-foreground">Tech Articles</p>
              </div>
            </div>
            <Button href="/about" variant="outline" className="gradient-border">
              More About Me
            </Button>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="glass-effect p-8 aspect-[4/3] flex items-center justify-center overflow-hidden rounded-lg">
              <FaUserAstronaut className="text-primary w-24 h-24 animate-float" />
              <div className="absolute top-0 left-0 w-full h-full animate-shimmer"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent/20 w-32 h-32 rounded-full blur-3xl"></div>
          </div>
        </div>
      </Section>

      {/* Featured Projects - Enhanced with hover effects */}
      <Section className="py-16 border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h2 className="text-2xl font-bold">Featured <span className="gradient-text">Projects</span></h2>
          <Button href="/projects" variant="ghost" icon={<FaArrowRight />} iconPosition="right">
            View All Projects
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Personal Finance App',
              description: 'A dashboard for tracking expenses and financial goals',
              tags: ['React', 'TypeScript', 'Firebase'],
              icon: <FaRocket className="text-primary w-8 h-8" />
            },
            {
              title: 'E-learning Platform',
              description: 'Interactive learning platform with course management',
              tags: ['Next.js', 'Node.js', 'MongoDB'],
              icon: <FaLaptopCode className="text-accent w-8 h-8" />
            },
            {
              title: 'Fitness Tracker',
              description: 'Mobile app for tracking workouts and nutrition',
              tags: ['React Native', 'Redux', 'GraphQL'],
              icon: <FaMobileAlt className="text-primary w-8 h-8" />
            }
          ].map((project, index) => (
            <Card 
              key={index}
              title={project.title}
              description={project.description}
              link="/projects"
              tags={project.tags}
              className="card-hover glass-effect"
              icon={project.icon}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </Section>

      {/* Experience Section - Enhanced with gradient and animation */}
      <Section className="py-16 border-t border-border/40">
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-primary pl-6 relative glass-effect rounded-lg p-6 card-hover" data-aos="fade-up">
            <div className="absolute w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full -left-[8px] top-6"></div>
            <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
            <p className="gradient-text text-sm mb-2">TechCorp • 2022 - Present</p>
            <p className="text-muted-foreground">
              Led the development of customer-facing web applications, improving performance and accessibility standards.
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-6 relative glass-effect rounded-lg p-6 card-hover" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full -left-[8px] top-6"></div>
            <h3 className="text-lg font-semibold">Frontend Developer</h3>
            <p className="gradient-text text-sm mb-2">WebSolutions • 2020 - 2022</p>
            <p className="text-muted-foreground">
              Developed responsive web interfaces and implemented modern frontend practices.
            </p>
          </div>
          
          <div className="mt-6" data-aos="fade-up" data-aos-delay="200">
            <Button href="/experience" variant="outline" className="gradient-border" icon={<FaArrowRight />} iconPosition="right">
              View Full Experience
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact CTA - Enhanced with gradient */}
      <Section className="py-16 border-t border-border/40">
        <div className="max-w-2xl mx-auto text-center p-10 glass-effect rounded-xl relative overflow-hidden" data-aos="fade-up">
          <div className="absolute top-0 left-0 w-full h-full animate-shimmer"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-muted-foreground mb-6">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <Button href="/contact" size="lg" variant="gradient" animation="pulse">
              Get In Touch
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
