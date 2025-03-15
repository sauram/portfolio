'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend' | 'other';

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const projects = [
    {
      title: 'Personal Finance Dashboard',
      description: 'A web application for tracking expenses and financial goals with data visualization.',
      image: '/images/projects/finance-dashboard.jpg',
      tags: ['React', 'TypeScript', 'Firebase', 'ChartJS'],
      category: 'web',
      githubUrl: 'https://github.com/yourusername/finance-dashboard',
      liveUrl: 'https://finance-dashboard.example.com'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with product management, cart, and checkout functionalities.',
      image: '/images/projects/ecommerce.jpg',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce.example.com'
    },
    {
      title: 'Task Management App',
      description: 'Mobile application for managing tasks, setting reminders, and tracking productivity.',
      image: '/images/projects/task-app.jpg',
      tags: ['React Native', 'Redux', 'Firebase'],
      category: 'mobile',
      githubUrl: 'https://github.com/yourusername/task-app',
      liveUrl: undefined
    },
    {
      title: 'API Gateway Service',
      description: 'Microservice for API management, authentication, and request routing.',
      image: '/images/projects/api-gateway.jpg',
      tags: ['Node.js', 'Express', 'JWT', 'Redis'],
      category: 'backend',
      githubUrl: 'https://github.com/yourusername/api-gateway',
      liveUrl: undefined
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with forecast data and location tracking.',
      image: '/images/projects/weather-app.jpg',
      tags: ['React', 'Chart.js', 'OpenWeather API'],
      category: 'web',
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://weather.example.com'
    },
    {
      title: 'Content Management System',
      description: 'Headless CMS for managing digital content with a modern admin interface.',
      image: '/images/projects/cms.jpg',
      tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
      category: 'web',
      githubUrl: 'https://github.com/yourusername/cms',
      liveUrl: 'https://cms.example.com'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <SectionHeader
          title={<>My <span className="gradient-text">Projects</span></>}
          subtitle="A collection of my recent work, personal projects, and experiments."
          centered
          data-aos="fade-up"
        />

        <div className="flex justify-center mt-8 mb-12 flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100">
          {(['all', 'web', 'mobile', 'backend', 'other'] as ProjectCategory[]).map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              link={project.liveUrl || project.githubUrl || '#'}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              className="h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16" data-aos="fade-up">
            <p className="text-lg text-muted-foreground">No projects found for this category.</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 underline text-primary"
            >
              View all projects
            </button>
          </div>
        )}
      </Section>
    </PageLayout>
  );
} 