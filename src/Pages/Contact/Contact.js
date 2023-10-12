import React from 'react';
import CommonButton from '../../Components/CommonButton/CommonButton';
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div>
            <h2 className='text-3xl font-medium text-white mt-12 text-center md:text-left'>Contact Me</h2>
            <div className='flex justify-between'>
                <div className='w-1/2 flex flex-col justify-around ms-5'>
                    <p className='text-gray-300 text-lg font-medium'>Get in touch with me today! Whether you have a question, feedback, or just want to say hello, I would love to hear from you. Fill out the form and I will get back to you as soon as possible.</p>
                    <div className='flex flex-col gap-5 text-gray-200 text-lg font-medium'>
                        <div className='flex items-center gap-3'>
                            <MapPinIcon className='w-5 h-5 text-blue-400' />
                            <p><span className='font-bold'>Address :</span> Kishoreganj Sadar, Kishoreganj, Dhaka, Bangladesh.</p>
                        </div>
                        <div className='flex items-center gap-3'>

                            <DevicePhoneMobileIcon className='w-5 h-5 text-blue-400' />
                            <p><span className='font-bold'>Mobile :</span> +88 01916196714, +88 01626775472</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <EnvelopeIcon className='w-5 h-5 text-blue-400' />
                            <p><span className='font-bold'>Email :</span> ashrafdkia@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <FontAwesomeIcon icon={faFacebook} className='text-blue-400 w-7 h-7' />
                        <FontAwesomeIcon icon={faLinkedin} className='text-blue-400 w-7 h-7' />
                        <FontAwesomeIcon icon={faGithubSquare} className='text-blue-400 w-7 h-7' />
                    </div>
                </div>
                <div className='md:w-96 lg:w-[500px] rounded-xl px-4 pt-8 pb-3 bg-gray-800 shadow-xl'>
                    <form className='w-full flex flex-col gap-5'>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Your Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-44" placeholder="Message"></textarea>
                        </div>
                        <div className='flex justify-end'>
                            <CommonButton>send</CommonButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;