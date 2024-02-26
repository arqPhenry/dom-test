import { createHighlights, createServices } from './src/components/hooks.js';

const highlightsData = [
    { title: "Responsive Design", content: "I specialize in creating responsive designs that look amazing on any device, ensuring a seamless user experience across platforms." },
    { title: "React.js Expertise", content: "As a React.js enthusiast, I build dynamic and interactive user interfaces that engage your audience and drive results." },
    {title: "Bootstrap Mastery", content: "With a solid command of Bootstrap, I leverage its powerful grid system and components to deliver polished and professional websites."},
    {title: "Tailwind Wizardry", content: "I harness the flexibility of Tailwind CSS to create custom, utility-first designs that align perfectly with your brand identity."}
]

const servicesData = [
    {title: "Custom Web Development", content: "Elevate your online presence with bespoke web solutions tailored to your unique requirements. Let's turn your vision into reality.", button: "Get Started", image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {title: "UI/UX Design", content: "Craft intuitive and visually stunning user interfaces that captivate your audience and drive engagement. Let's create experiences that leave a lasting impression.", button: "See Designs", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {title: "Performance Optimization", content: "Optimize your website for speed and performance to enhance user satisfaction and boost conversion rates. Let's supercharge your digital presence.", button: "Optimize Now", image: "https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
]

document.addEventListener("DOMContentLoaded", 
    createHighlights(highlightsData),
    createServices(servicesData)
);