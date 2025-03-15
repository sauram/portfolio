import { PageLayout } from '@/components/layout/PageLayout';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaDownload, FaLaptopCode, FaCode } from 'react-icons/fa';

export const metadata = {
  title: 'Experience | Saurabh Singh Gautam',
  description: 'Professional experience and career timeline of Saurabh Singh Gautam, a software engineer with 4 years of experience.',
};

export default function Experience() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <SectionHeader
          title={<>My <span className="gradient-text">Experience</span></>}
          subtitle="A detailed overview of my professional journey, skills, and qualifications."
          centered
          data-aos="fade-up"
        />

        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <Button
            href="/resume.pdf"
            variant="gradient"
            size="lg"
            className="flex items-center gap-2"
            icon={<FaDownload />}
          >
            Download Resume
          </Button>
        </div>

        {/* Work Experience */}
        <div className="mb-16 relative" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-tr from-primary/20 to-accent/20 p-3 rounded-full mr-3">
              <FaBriefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Work <span className="gradient-text">Experience</span></h2>
          </div>

          <div className="space-y-12">
            {[
              {
                role: 'Senior Software Engineer',
                company: 'Tech Innovators Inc.',
                period: 'January 2023 - Present',
                location: 'San Francisco, CA',
                description: [
                  'Lead frontend development for enterprise-level applications serving thousands of users',
                  'Architect and implement scalable frontend solutions using React, TypeScript, and Next.js',
                  'Mentor junior developers and conduct code reviews to maintain high-quality code standards',
                  'Collaborate with product managers and designers to translate business requirements into technical solutions',
                  'Optimize application performance, reducing load times by 40%',
                ],
                icon: <FaLaptopCode className="text-accent w-8 h-8" />,
              },
              {
                role: 'Software Engineer',
                company: 'Digital Solutions Ltd.',
                period: 'March 2021 - December 2022',
                location: 'Seattle, WA',
                description: [
                  'Developed responsive web applications using React, Redux, and Node.js',
                  'Built RESTful APIs and microservices for various client projects',
                  'Implemented automated testing strategies, improving code coverage by 60%',
                  'Collaborated in an Agile environment with two-week sprint cycles',
                  'Integrated third-party services and APIs to enhance application functionality',
                ],
                icon: <FaCode className="text-primary w-8 h-8" />,
              },
              {
                role: 'Junior Developer',
                company: 'Web Creators Co.',
                period: 'June 2019 - February 2021',
                location: 'Remote',
                description: [
                  'Created and maintained responsive websites for small to medium-sized businesses',
                  'Developed frontend components using HTML, CSS, JavaScript, and React',
                  'Assisted in database design and implementation using MongoDB',
                  'Participated in client meetings to gather requirements and present solutions',
                  'Contributed to the company knowledge base with technical documentation',
                ],
                icon: <FaCode className="text-accent w-8 h-8" />,
              },
            ].map((job, index) => (
              <div 
                key={index} 
                className="relative pl-8 border-l-2 border-primary/30 card-hover glass-effect rounded-lg p-6"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                <div className="flex items-start">
                  <div className="mr-4 hidden md:block glass-effect p-3 rounded-full">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <div className="gradient-text font-medium">{job.company}</div>
                    <div className="flex flex-wrap justify-between mt-1 mb-4">
                      <span className="text-foreground/60">{job.period}</span>
                      <span className="text-foreground/60">{job.location}</span>
                    </div>
                    <ul className="list-disc ml-5 space-y-1 text-foreground/80">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 relative" data-aos="fade-up">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-tr from-primary/20 to-accent/20 p-3 rounded-full mr-3">
              <FaGraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-12">
            {[
              {
                degree: 'Bachelor of Technology',
                field: 'Computer Science',
                institution: 'University Name',
                period: '2015 - 2019',
                location: 'City, Country',
                details: [
                  'Graduated with First Class Honours',
                  'Specialized in Software Engineering and Data Structures',
                  'Final year project: Developed a machine learning model for predictive analytics',
                  'Member of the university coding club',
                ],
              },
            ].map((edu, index) => (
              <div 
                key={index} 
                className="relative pl-8 border-l-2 border-primary/30 card-hover glass-effect rounded-lg p-6" 
                data-aos="fade-up"
              >
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="gradient-text font-medium">{edu.field}</div>
                <div className="text-foreground/80 mt-1">{edu.institution}</div>
                <div className="flex flex-wrap justify-between mt-1 mb-4">
                  <span className="text-foreground/60">{edu.period}</span>
                  <span className="text-foreground/60">{edu.location}</span>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-foreground/80">
                  {edu.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="relative" data-aos="fade-up">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-tr from-primary/20 to-accent/20 p-3 rounded-full mr-3">
              <FaCertificate className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Certifications & <span className="gradient-text">Training</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'AWS Certified Developer - Associate',
                organization: 'Amazon Web Services',
                year: '2022',
                credentialId: 'AWS-DEV-12345',
              },
              {
                name: 'Professional Scrum Master I',
                organization: 'Scrum.org',
                year: '2021',
                credentialId: 'PSM-I-87654',
              },
              {
                name: 'React - The Complete Guide',
                organization: 'Udemy',
                year: '2020',
                credentialId: 'UC-ABC123',
              },
              {
                name: 'MongoDB - The Complete Developer\'s Guide',
                organization: 'Udemy',
                year: '2020',
                credentialId: 'UC-XYZ456',
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 card-hover relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute top-0 left-0 w-full h-full animate-shimmer"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <div className="gradient-text font-medium">{cert.organization}</div>
                  <div className="flex justify-between mt-2 text-foreground/60">
                    <span>Issued: {cert.year}</span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
} 