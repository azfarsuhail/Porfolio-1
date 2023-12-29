'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'Learing Typescript',
        description: "PIAIC's 45 TypeScript Questions offers concise answers and solutions to 40 TypeScript questions from PIAIC. This structured repository covers fundamental TypeScript concepts, providing clear explanations and code snippets. Users can easily navigate through questions, review solutions, and contribute to the repository's content for a collaborative learning experience.",
        technologies: ['Typescript', 'Node JS'],
        image: 'data:image/png;base64,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', 
        link: 'https://github.com/azfarsuhail/typescript', 
    },
    {
        id: 2,
        title: 'ATM Application',
        description: 'A TypeScript and Node.js ATM app using Inquirer for a secure and intuitive banking experience. Features include user authentication, balance inquiries, and seamless transactions. TypeScript ensures code reliability, while the modular design allows for scalability.',
        technologies: ['Typescript', 'Node JS' , 'Inquirer'],
        image: 'https://play-lh.googleusercontent.com/HDvcBYx8o2RqTeviL40N_HyP-ccg68LH9Sa1MN_sEkxI8cOKwRYWS3XrEda38PolbT0', 
        link: 'https://github.com/azfarsuhail/Node_Projects/tree/main/ATM%20Application', 
    },
    {
        id: 3,
        title: 'Calculator in TS',
        description: 'This TypeScript calculator application utilizes the power of Inquirer to create an interactive command-line interface. It enables users to perform various arithmetic operations seamlessly. The calculator supports addition, subtraction, multiplication, and division, providing a straightforward and efficient way to perform calculations using TypeScript. Feel free to explore, use, and enhance the calculator for your mathematical needs.',
        technologies: ['Typescript', 'Node JS' , 'Inquirer'],
        image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81lLtZIG6NL._AC_UF1000,1000_QL80_.jpg', 
        link: 'https://github.com/azfarsuhail/Node_Projects/tree/main/Calculator', 
    },
    {
        id: 4,
        title: 'Number Guessing Game',
        description: ' Embark on a thrilling TypeScript adventure with this number guessing game! Powered by Inquirer, this command-line game challenges users to guess a randomly generated number within a specified range. Sharpen your TypeScript skills as you engage in a fun and interactive gaming experience. Explore the game, make your guesses, and enjoy the excitement of getting it right. Level up your coding proficiency while having a blast!',
        technologies: ['Typescript', 'Node JS' , 'Inquirer'],
        image: 'https://i.pinimg.com/474x/99/d9/23/99d9239aafdc5dd180eeae9bc30dcc6a.jpg', 
        link: 'https://github.com/azfarsuhail/Node_Projects/tree/main/Number%20Guessing%20Game' 
    },
    {
        id:5,
        title:'Google Test App',
        description:'My first step, Diving into Web Development through Next JS, targeting Google Inc.',
        technologies:['TypeScript','Node JS','React JS','Shadcn UI','Vercel','Next JS'],
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
        link:'https://github.com/azfarsuhail/NextJS/tree/main/Google'
    },
    {
        id: 6,
        title: 'Ticket Management System in C++',
        description:"The C++ code defines a reservation system with classes for tickets and a reservation system. It allows users to book, cancel, and display ticket information through a simple command-line interface. The system is object-oriented, featuring an abstract base class (ITicket) and a concrete class (Ticket). The main functionality is encapsulated in the ReservationSystem class.",
        image: 'https://assets-global.website-files.com/60edc0a8835d5b38bf11f03f/61cf04c1ec15b5390aed45da_Benefits-of-Ticketing-Management-System.png',
        technologies: ['C++', 'OOP'],
        link: 'https://github.com/azfarsuhail/TicketManagementSystem'
    }
];

const Portfolio = () => {
    return (
        <div className="container mx-auto my-8">
            <h2 className="text-4xl font-bold mb-8">My Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {projects.map((project) => (
                    <div key={project.id} className=" bg-teal-500 p-4 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-400 duration-300">
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-32 object-contain mb-4 rounded-md bg-inherit"
                            width={300} 
                            height={200} 
                        />

                        <h3 className="text-xl font-semibold mb-2 bg-inherit">{project.title}</h3>
                        <p className="text-gray-600 mb-4 bg-inherit">{project.description}</p>
                        <div className="flex flex-wrap bg-inherit">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-gray-500  text-gray-200 py-1 px-2 rounded-full text-sm mr-2 mb-2"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4 bg-inherit">
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-blue-950 hover:underline bg-inherit"
                            >
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Portfolio;
