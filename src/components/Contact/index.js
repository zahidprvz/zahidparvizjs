import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'



const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dnx139j', 'template_3v8i70f', refForm.current, 'RzkdNka2Z1Gf5hVrt')
          .then((result) => {
              alert('Your mail has been sent...');
          }, (error) => {
              alert('Failed to send mail, please try again!');
          });
      };


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        ></AnimatedLetters>
                    </h1>

                    <p>
                        I am interested in freelance oppurtunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>

                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>

                                <li>
                                    <input placeholder='Subject' type="text" name='Subject' required />
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>

                            </ul>
                        </form>
                    </div>

                </div>
            </div>

            <Loader type='pacman' />

        </>
    )
}

export default Contact