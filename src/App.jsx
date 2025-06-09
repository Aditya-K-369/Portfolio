import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CodingProfile from './components/CodingProfile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <Navbar />
     <HomePage />

    <div className="description-section" id="about">
      <div>
        <div className="description-text">
        <div className="description-section-white" ></div>
        <h1 className="description-title">About Me</h1>
          As a skilled software developer, I bring expertise in designing, developing, and implementing software
          solutions that meet clients' needs. With a strong foundation in programming languages and frameworks, I am
          adopt at translating complex requirements into efficient and scalable code. My passion for problem-solving and
          attention to detail drive me to consistently deliver high-quality software products.Passionate problem solver and innovative software developer. I thrive in collaborative environments, leveraging my skills to design and develop cutting-edge software applications. Continuously staying updated with the latest industry trends and best practices. My goal is to create robust and scalable software solutions that drive productivity and exceed client expectations. Let's transform ideas into reality together.
        </div>
        </div>
      </div>
      <CodingProfile />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
    </>
  )
}

export default App
