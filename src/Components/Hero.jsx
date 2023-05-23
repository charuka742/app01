import React from 'react';
import {AiOutlineCloudUpload} from 'react-icons/ai';
import {BsFillDatabaseFill} from 'react-icons/bs';
import {FaRegPaperPlane} from 'react-icons/fa';
import {GoServer} from 'react-icons/go';

import bgimg from '../Assets/cyber-bg (1).png';

export const Hero = () => {
  return (
    <div name='home' className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">

        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="text-5xl py-3 md:text-7xl font-bold ">
            Cloud Management
          </h1>
          <p className="text-2xl ">This is our tech Brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>

        </div>

        <div>
          <img classname="w-full" src={bgimg} alt="/" />
        </div>

        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
     mx-1 md:left-1/2 transform md:translate-x-[-50%] bg-zinc-200 border border-slate-300
     rounded-xl text-center shadow-xl">
          
          <p className="font-semibold">
            Data Services
          </p>

          <div className=" grid grid-cols-2 sm:flex md:justify-between flex-wrap px-4">
            <p className="flex py-2 px-4 text-slate-500 ">
              <AiOutlineCloudUpload className="h-6 w-6 mr-1  text-indigo-600" />
              App Security
            </p>
            <p className="flex py-2 px-4 text-slate-500 ">
              <BsFillDatabaseFill className="h-6 w-6 mr-1  text-indigo-600" />
              Dashboard Design
            </p>
            <p className="flex py-2 px-4 text-slate-500 ">
              <GoServer className="h-6 w-6 mr-1  text-indigo-600" />
              Cloud Data
            </p>
            <p className="flex py-2 px-4 text-slate-500 ">
              <FaRegPaperPlane className="h-6 w-6 mr-1  text-indigo-600" />
              API
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
