import logo from '../../public/logo.png'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='  flex flex-wrap md:flex-nowrap col-span-3 mx-10 '>
      <Image
        src={logo}
        alt="logo"
        width={900}
        height={900}
        className="rounded-full bg-transparent col-span-2 mx-auto my-auto"
      />
      <div className='col-span-1 '>
        <h1 className="text-3xl font-bold text-center  ">Introduction</h1>
        <br />
        <p className=" text-xl bg-teal-500 p-4 rounded-md shadow-md"> Hello, I&apos;m Azfar Suhail, a proficient software developer with a diverse skill set encompassing C++, C, Python, Next.js, and various other cutting-edge technologies. My journey in the world of programming reflects a commitment to continuous learning and a passion for staying abreast of the latest advancements in the tech industry. <br />
  My expertise spans the spectrum of programming languages. In C++ and C, I excel in crafting efficient and optimized solutions, demonstrating a deep understanding of low-level programming concepts. My mastery of Python empowers me to develop scalable and versatile applications, showcasing proficiency in high-level programming paradigms. <br />
  When it comes to web development, I navigate the complexities with ease, particularly in Next.js. This React framework enables me to build robust and performant web applications, leveraging both server-side rendering and client-side rendering for dynamic and responsive user interfaces. <br />
  Collaboration is a key aspect of my approach. I&apos;m always ready to engage in joint projects, bringing a mix of technical expertise and a collaborative mindset to the table. Whether it&apos;s a team effort or an individual challenge, I enjoy contributing creative solutions to technical problems. <br />
  Driven by a genuine enthusiasm for problem-solving, I thrive in environments that encourage innovation and critical thinking. My commitment to excellence and adaptability makes me a valuable asset in any software development endeavor. I am not just a software developer; I am a dedicated learner, collaborator, and problem solver, always eager to contribute to the ever-evolving landscape of technology.
</p>
      </div>
    </div>
  )
}
