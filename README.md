# Saurabh Singh Gautam - Portfolio Website

This is a modern portfolio website built with Next.js, TypeScript, and Tailwind CSS for Saurabh Singh Gautam, a software engineer with 4 years of experience.

## Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Dark/Light Mode**: Automatically adapts to user's system preferences
- **Fast Performance**: Built with Next.js for optimal performance
- **Responsive**: Looks great on all devices - mobile, tablet, and desktop
- **Animations**: Smooth animations using Framer Motion and AOS
- **Contact Form**: Interactive contact form for potential clients or employers

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, AOS (Animate on Scroll)
- **Icons**: React Icons, Heroicons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm 9.0.0 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saurabhsinghgautam/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app/`: Contains the main pages of the portfolio
- `src/components/`: Reusable components
  - `common/`: Common components like AosProvider
  - `layout/`: Layout components like Navbar, Footer
  - `ui/`: UI components like Button, Card, Section
- `src/lib/`: Utility libraries
- `src/utils/`: Helper functions

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/layout/Navbar.tsx`: Update the name and navigation links
- `src/components/layout/Footer.tsx`: Update social media links
- `src/app/about/page.tsx`: Update your about information
- `src/app/experience/page.tsx`: Update your experience information
- `src/app/projects/page.tsx`: Update your projects information
- `src/app/contact/page.tsx`: Update your contact information

### Styling

The site uses Tailwind CSS for styling. You can customize the colors and other design elements in:

- `src/app/globals.css`: Update root variables for colors and theme
- `tailwind.config.js`: Update Tailwind configuration

## Deployment

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically

## License

This project is open source and available under the [MIT License](LICENSE).
