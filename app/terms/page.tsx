"use client"


import React, { useState, useEffect } from 'react';

const slides = [
  {
    heading: 'What makes Our Programs Unique?',
    text: 'We believe the best learning happens during real-world, hands-on experiences. Our unique curriculum integrates practical engagement and global exposure to prepare students for fulfilling careers from day one.',
    button: 'Explore Programs',
    highlightHeading: 'Global Learning Approach',
    highlightText: 'Our vision for education is borderless. We provide immersive experiences through various learning hubs to ensure access to knowledge anytime, anywhere.',
    highlightNumber: '7',
    highlightNote: 'Global learning hubs complementing our campuses'
  },
  {
    heading: 'Career-Ready Graduates',
    text: 'We prepare students with practical skills and global perspectives, ensuring they are job-ready the moment they graduate.',
    button: 'View Careers Support',
    highlightHeading: 'Industry Partnerships',
    highlightText: 'Collaboration with top companies gives our students internship and real-world opportunities during studies.',
    highlightNumber: '150+',
    highlightNote: 'Top-tier companies connected with our ecosystem'
  },
  {
    heading: 'Innovative Curriculum',
    text: 'Our curriculum evolves with the times, combining traditional knowledge with cutting-edge methods and digital tools.',
    button: 'See Curriculum',
    highlightHeading: 'Next-Gen Learning',
    highlightText: 'Interactive and tech-driven modules designed to equip you for the fast-paced digital economy.',
    highlightNumber: '24/7',
    highlightNote: 'Access to a digital learning environment globally'
  },
  {
    heading: 'Global Faculty',
    text: 'Learn from educators and professionals from all over the world bringing diverse knowledge and expertise.',
    button: 'Meet the Faculty',
    highlightHeading: 'International Experts',
    highlightText: 'Experienced mentors and instructors who bring real-world insights into the classroom.',
    highlightNumber: '30+',
    highlightNote: 'Nationalities represented in our faculty'
  },
];

export default function UniqueProgramSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 bg-white relative overflow-hidden transition-all duration-700">
      {/* Left Section */}
      <div className="lg:w-1/2 z-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
          {current.heading}
        </h2>
        <p className="text-lg text-blue-900 mb-6">
          {current.text}
        </p>
        <button className="mt-4 text-red-700 font-bold flex items-center gap-2 hover:underline">
          <span className="text-xl">&#10095;</span> {current.button}
        </button>
      </div>

      {/* Right Section - Red Circle Background */}
      <div className="lg:w-1/2 relative flex flex-col items-center justify-center text-white mt-10 lg:mt-0">
        <div className="absolute w-[200%] h-[200%] bg-red-700 rounded-full -right-1/2 -top-1/2 z-0"></div>
        <div className="z-10 text-center px-6">
          <h3 className="text-2xl font-semibold">{current.highlightHeading}</h3>
          <p className="mt-4 text-lg max-w-md">
            {current.highlightText}
          </p>
        </div>

        {/* Circle Number */}
        <div className="z-10 mt-10 w-40 h-40 bg-red-800 rounded-full flex flex-col items-center justify-center text-white text-center">
          <span className="text-5xl font-bold">{current.highlightNumber}</span>
          <p className="text-sm px-4">{current.highlightNote}</p>
        </div>
      </div>
    </section>
  );
}
