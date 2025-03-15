'use client';

import { useEffect, useRef } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaArrowRight, FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaRocket, FaUserAstronaut } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

// Interactive home page with scroll-driven elements
export default function Home() {
  // Reference to the interactive elements for parallax effect
  const interactiveElementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Setup parallax effect for interactive elements
    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll('.interactive-element');
      elements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * parseInt(speed || '0')) / 100;
        const y = (window.innerHeight - e.pageY * parseInt(speed || '0')) / 100;
        
        (element as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    // Setup count-up animation for statistics
    const animateCountUp = () => {
      const countElements = document.querySelectorAll('.count-up');
      countElements.forEach((element) => {
        const target = parseInt(element.getAttribute('data-target') || '0');
        const duration = 2000; // ms
        const start = Date.now();
        const startValue = 0;
        
        const step = () => {
          const now = Date.now();
          const elapsed = now - start;
          if (elapsed < duration) {
            const value = Math.floor(startValue + (target - startValue) * (elapsed / duration));
            element.textContent = value.toString();
            requestAnimationFrame(step);
          } else {
            element.textContent = `${target}+`;
          }
        };
        
        requestAnimationFrame(step);
      });
    };
    
    // Setup scroll-based animations
    const handleScroll = () => {
      // Reveal elements when they enter the viewport
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    // Initialize animations
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Start animations after a small delay
    setTimeout(() => {
      animateCountUp();
      handleScroll();
    }, 500);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <PageLayout>
      {/* Interactive Hero Section with parallax effect */}
      <Section className="pt-0 pb-0 md:py-0 h-screen flex items-center relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-primary/5 rounded-full blur-[60px] animate-pulse-slow" style={{animationDelay: "1s"}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <div className="perspective-text">
            <h2 className="text-lg font-medium opacity-80" data-aos="fade-up">Software Engineer</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="100">
              <span className="gradient-text relative inline-block">Saurabh Singh</span> Gautam
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            I build <span className="text-foreground font-medium relative inline-block highlight-text">modern web applications</span> with a focus on performance, accessibility, and exceptional user experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
            <Button href="/projects" size="lg" variant="gradient" animation="pulse" icon={<FaArrowRight />} iconPosition="right" className="hover-scale">
              View My Projects
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="gradient-border hover-scale">
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Interactive floating elements */}
        <div ref={interactiveElementsRef}>
          <div className="hidden md:block absolute top-1/3 right-10 interactive-element" data-speed="0.1">
            <div className="glass-effect p-5 rounded-full hover-glow cursor-pointer" data-tooltip="Frontend Development">
              <FaCode className="text-primary w-8 h-8" />
            </div>
          </div>
          <div className="hidden md:block absolute bottom-20 left-16 interactive-element" data-speed="-0.2">
            <div className="glass-effect p-5 rounded-full hover-glow cursor-pointer" data-tooltip="Full Stack Solutions">
              <FaLaptopCode className="text-accent w-8 h-8" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <div className="scroll-indicator flex flex-col items-center">
            <span className="text-sm mb-2 opacity-70">Scroll to explore</span>
            <IoIosArrowDown className="text-2xl animate-bounce" />
          </div>
        </div>
      </Section>

      {/* Tech Stack Section - Enhanced with interactive cards */}
      <Section className="py-16 border-t border-border/40">
        <h2 className="text-xl font-medium mb-8 gradient-text reveal-text">My Tech Stack</h2>
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
              className="flex flex-col items-center glass-effect p-6 rounded-lg tech-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="icon-container">
                {tech.icon}
              </div>
              <span className="text-sm font-medium mt-3">{tech.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* About Section - Enhanced with creative layout */}
      <Section className="py-16 border-t border-border/40">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-4 reveal-text">About <span className="gradient-text">Me</span></h2>
            <p className="text-muted-foreground mb-6 reveal-on-scroll">
              I'm a software engineer with 4+ years of experience specializing in frontend development. 
              I'm passionate about creating clean, efficient code and designing intuitive user interfaces.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="stats-card glass-effect p-5 rounded-lg">
                <span className="text-3xl font-bold gradient-text count-up" data-target="4">0</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="stats-card glass-effect p-5 rounded-lg" style={{animationDelay: "0.2s"}}>
                <span className="text-3xl font-bold gradient-text count-up" data-target="20">0</span>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="stats-card glass-effect p-5 rounded-lg" style={{animationDelay: "0.4s"}}>
                <span className="text-3xl font-bold gradient-text count-up" data-target="15">0</span>
                <p className="text-sm text-muted-foreground">Tech Articles</p>
              </div>
            </div>
            <Button href="/about" variant="outline" className="gradient-border hover-scale">
              More About Me
            </Button>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="glass-effect p-8 aspect-[4/3] flex items-center justify-center overflow-hidden rounded-lg interactive-avatar">
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
          <h2 className="text-2xl font-bold reveal-text">Featured <span className="gradient-text">Projects</span></h2>
          <Button href="/projects" variant="ghost" icon={<FaArrowRight />} iconPosition="right" className="hover-scale">
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
              className="project-card glass-effect"
              icon={project.icon}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </Section>

      {/* Experience Section - Enhanced with gradient and animation */}
      <Section className="py-16 border-t border-border/40">
        <h2 className="text-2xl font-bold mb-8 reveal-text">Experience</h2>
        
        <div className="space-y-8 timeline-container">
          <div className="border-l-2 border-primary pl-6 relative glass-effect rounded-lg p-6 timeline-item" data-aos="fade-up">
            <div className="absolute w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full -left-[8px] top-6"></div>
            <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
            <p className="gradient-text text-sm mb-2">TechCorp • 2022 - Present</p>
            <p className="text-muted-foreground">
              Led the development of customer-facing web applications, improving performance and accessibility standards.
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-6 relative glass-effect rounded-lg p-6 timeline-item" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full -left-[8px] top-6"></div>
            <h3 className="text-lg font-semibold">Frontend Developer</h3>
            <p className="gradient-text text-sm mb-2">WebSolutions • 2020 - 2022</p>
            <p className="text-muted-foreground">
              Developed responsive web interfaces and implemented modern frontend practices.
            </p>
          </div>
          
          <div className="mt-6" data-aos="fade-up" data-aos-delay="200">
            <Button href="/experience" variant="outline" className="gradient-border hover-scale" icon={<FaArrowRight />} iconPosition="right">
              View Full Experience
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact CTA - Enhanced with gradient and interactive elements */}
      <Section className="py-16 border-t border-border/40">
        <div className="max-w-2xl mx-auto text-center p-10 glass-effect rounded-xl relative overflow-hidden contact-cta" data-aos="fade-up">
          <div className="absolute top-0 left-0 w-full h-full animate-shimmer"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 reveal-text">Interested in working together?</h2>
            <p className="text-muted-foreground mb-6">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <Button href="/contact" size="lg" variant="gradient" animation="pulse" className="hover-scale">
              Get In Touch
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
