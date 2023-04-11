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
                <p>Hi there, I'm Zahid Parviz, a BSCS student at the University of Gujrat. As an avid learner and technology enthusiast, I'm always keeping up with the latest developments in computing and technology, with a particular interest in artificial intelligence.</p>
                <p>I'm constantly seeking out new knowledge and challenges, and I love exploring diverse interests such as music, science, biology, astronomy, space, and poetry. I find that this helps keep my mind engaged and energized. The right mindset and clarity in goals have always helped me in choosing the right subjects and fields to study.</p>
                <p> When I'm not busy learning or working on AI projects or Development, you might find me playing flute or stargazing. Overall, I'm passionate about using technology to make a positive impact on the world and I'm excited to see what the future holds.</p>
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