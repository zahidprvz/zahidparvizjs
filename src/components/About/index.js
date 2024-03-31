import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);


    return (

        <>

            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idex={15}
                        />
                    </h1>
                    <p>
                        Greetings! I am a dedicated Computer Science professional with a strong background in software development and a particular focus on Flutter app development and AI research. Graduating from the University of Gujrat, Pakistan, I've cultivated a diverse skill set across various programming languages and technologies.
                        <br /><br />
                        My journey in technology has been marked by a passion for innovation and problem-solving. I excel in areas such as Data Structures and Algorithms, Object-Oriented Programming, Database Management, App Development, Artificial Intelligence, and Deep Learning.
                        <br /><br />
                        As a seasoned Flutter developer, I have crafted numerous cross-platform mobile applications that seamlessly blend functionality with exceptional user experiences. Moreover, my expertise extends to AI/ML/DL model training, where I've demonstrated a talent for developing intelligent solutions that drive tangible results.
                    </p>
                    <p>
                        What sets me apart is my dedication to continuous learning and exploration. Whether delving into cutting-edge AI research or engaging in robotics projects as a hobbyist, I thrive on staying at the forefront of technological advancements.
                        <br /><br />
                        With a proven track record of delivering successful projects across various domains, from .NET and Kotlin for mobile app development to SQL for database management and Python for AI applications, I bring versatility and adaptability to every endeavor.
                        <br /><br />
                        I am currently seeking opportunities to apply my skills and expertise in Flutter development and AI research to contribute meaningfully to innovative projects. If you're looking for a passionate professional who is eager to make a difference, let's connect and discuss how I can add value to your team or organization.
                        <br /><br />
                        Let's collaborate and bring ideas to life!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faRobot} color='#5ED4F4' />
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#ffd700' />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                    </div>

                </div>
            </div>

            <Loader type="pacman" />

        </>
    )
}


export default About