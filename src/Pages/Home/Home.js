import React, { useEffect, useState } from 'react';
import myPhoto from '../../Asset/Ashraf-portfolio.png';
import Skills from './Skills';
import CommonButton from '../../Components/CommonButton/CommonButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <div>
            <section className='flex my-5'>
                <div className='w-1/2 flex gap-16'>
                    <div className='flex flex-col gap-8 justify-center'>
                        <FontAwesomeIcon icon={faFacebook} className='text-blue-400 w-5 h-5' />
                        <FontAwesomeIcon icon={faLinkedin} className='text-blue-400 w-5 h-5' />
                        <FontAwesomeIcon icon={faGithubSquare} className='text-blue-400 w-5 h-5' />
                    </div>
                    <div className='flex flex-col gap-8 justify-center'>
                        <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e4a9fe] to-[#c2abff]'>Hello there</h2>
                        <div>
                            <h2 className='text-[#dcceed] text-4xl font-bold'>Md. Ashraful Islam
                            </h2>
                            <h3 className='text-3xl text-[#c277bd]'>Front-end Developer | React Developer</h3>
                        </div>
                        <div className='text-gray-400 text-lg font-bold'>
                            <h2>Motivated and Enthusiastic Web Developer.</h2>
                            <h2>Seeking Opportunities to Grow and Learn.</h2>
                        </div>
                        <Link to='/contact'>
                            <CommonButton>
                                <div className='flex gap-6 items-center'>
                                    <p>Say Hello</p>
                                    <FontAwesomeIcon icon={faLocationArrow} className='w-6 h-6 text-gray-200' />
                                </div>
                            </CommonButton>
                        </Link>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={myPhoto} alt="myPicture" className='w-full bg-transparent h-screen' />
                    {/* <div className="absolute inset-0 bg-transparent opacity-50"></div> */}
                </div>
            </section>
            <section className='my-5' id="projects">
                <div className='flex gap-16'>
                    <div className=''>

                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold text-white mb-3'>Projects</h2>
                        <h1 className='text-5xl font-semibold text-[#e4a9fe] w-3/4'>I have successfully completed various <span className='text-[#c37]'>projects</span>, including developing an <span className='text-[#c37]'>e-commerce</span>platform</h1>
                    </div>
                </div>
            </section>
            <section>
                <h2>Skills</h2>
                <p>I offer professional MERN development services.With expertise in building robust web applications</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        skills.map((skill, index) => <Skills
                            key={index}
                            skill={skill}
                        ></Skills>)
                    }
                </div>
            </section>
            <section>
                <h2>Testimonial</h2>
            </section>
            <section>
                <h2>Experience</h2>
            </section>
            <section>
                <h2>Contact</h2>
            </section>
        </div>
    );
};

export default Home;