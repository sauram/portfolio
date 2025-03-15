import { PageLayout } from '@/components/layout/PageLayout';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FaUserAlt, FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDatabase } from 'react-icons/fa';

export const metadata = {
  title: 'About | Saurabh Singh Gautam',
  description: 'Learn more about Saurabh Singh Gautam, a software engineer with 4 years of experience.',
};

export default function About() {
  return (
    <PageLayout>      
      <Section className="pt-24 md:pt-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <SectionHeader
          title={<>About <span className="gradient-text">Me</span></>}
          subtitle="Get to know more about my background, skills, and interests."
          centered
          data-aos="fade-up"
        />

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div data-aos="fade-right">
            <div className="glass-effect rounded-2xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
                <FaUserAlt className="text-white w-24 h-24" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Saurabh Singh Gautam</h2>
                <p className="text-lg font-medium gradient-text mb-2">Software Engineer</p>
                <p className="text-foreground/70 mb-6">
                  Based in San Francisco, California
                </p>
                <div className="flex gap-4">
                  <Button 
                    href="/contact" 
                    variant="gradient"
                  >
                    Contact Me
                  </Button>
                  <Button 
                    href="/resume.pdf" 
                    variant="outline" 
                    className="gradient-border"
                  >
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                Hello! I'm Saurabh, a passionate software engineer with 4+ years of experience specializing in front-end development and web technologies. I thrive on creating clean, efficient, and user-friendly applications that solve real-world problems.
              </p>
              <p>
                My journey in software development began with a deep curiosity about how things work on the web. This curiosity evolved into a career where I've been fortunate to work with various technologies and talented teams to build impactful projects.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with industry best practices. Whether it's crafting pixel-perfect UIs or optimizing for performance, I'm committed to delivering high-quality solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring hiking trails, experimenting with new recipes, or diving into a good book. I'm also passionate about open-source contributions and mentoring junior developers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 border-t border-border/40" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-12 text-center">My <span className="gradient-text">Skills</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Frontend Development',
              icon: <FaLaptopCode className="text-primary w-10 h-10" />,
              skills: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'],
            },
            {
              title: 'Backend Development',
              icon: <FaServer className="text-accent w-10 h-10" />,
              skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Authentication', 'Microservices'],
            },
            {
              title: 'Mobile Development',
              icon: <FaMobileAlt className="text-primary w-10 h-10" />,
              skills: ['React Native', 'Expo', 'Mobile UI/UX', 'App Performance', 'Native Modules'],
            },
            {
              title: 'Databases & DevOps',
              icon: <FaDatabase className="text-accent w-10 h-10" />,
              skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'CI/CD', 'Docker'],
            },
          ].map((category, index) => (
            <div 
              key={index} 
              className="glass-effect p-6 rounded-lg card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16 border-t border-border/40" data-aos="fade-up">
        <SectionHeader
          title="My Journey"
          subtitle="A timeline of my professional experience and key milestones."
          centered
          data-aos="fade-up"
        />

        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-12">
            {[
              {
                year: '2023 - Present',
                role: 'Senior Software Engineer',
                company: 'Tech Innovators Inc.',
                description:
                  'Leading development of modern web applications, mentoring junior developers, and implementing best practices.',
              },
              {
                year: '2021 - 2023',
                role: 'Software Engineer',
                company: 'Digital Solutions Ltd.',
                description:
                  'Developed and maintained full-stack web applications using React, Node.js, and MongoDB.',
              },
              {
                year: '2019 - 2021',
                role: 'Junior Developer',
                company: 'Web Creators Co.',
                description:
                  'Started my professional journey building responsive websites and learning modern web development.',
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary/30 glass-effect rounded-lg p-6" data-aos="fade-up">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                <div className="mb-1 text-sm text-foreground/60">{item.year}</div>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <div className="gradient-text font-medium">{item.company}</div>
                <p className="mt-2 text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 border-t border-border/40 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
          I'm always open to discussing product design work or partnership opportunities.
        </p>
        <Button 
          href="/contact" 
          variant="gradient" 
          size="lg"
          animation="pulse"
        >
          Get In Touch
        </Button>
      </Section>
    </PageLayout>
  );
} 