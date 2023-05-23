import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTwitch,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <p className="font-bold uppercase pt-2">Solutions</p>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>

          </ul>
        </div>
        <div>
          <p className="font-bold uppercase pt-2">Support</p>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>

          </ul>
        </div>
        <div>
          <p className="font-bold uppercase pt-2">Company</p>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>

          </ul>
        </div>
        <div>
          <p className="font-bold uppercase pt-2">Legal</p>
          <ul>
            <li className="py-1">Clain</li>
            <li className="py-1">Private</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Terms</li>

          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2 ">
          <p className="font-bold uppercase pt-2">
            Subscribe to our newsLetter
          </p>
          <p className='py-4'>
            The latest news, articles, and resources, sent to your inboxes weekly
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-lg mb-4' type="email" placeholder='Enter Your Email' />
            <button className='p-2 mb-4'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] mx-auto items-center justify-between px-2 py-4 sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved.</p>

        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaTwitter />
          <FaTwitch />

        </div>
      </div>
    </div>
  );
};

export default Footer;
