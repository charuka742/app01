import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai';

const Pricing = () => {
  return (
    <div name='pricing' className="text-white w-full my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay">
         
      </div>
      <div className="max-w-[1240px] mx-auto my-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold">
            The right price for your research.
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Facilis maiores, quaerat dolorum molestiae magnam nobis debitis similique sequi deserunt nulla?
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">

            <span className="uppercase py-1 px-3 bg-indigo-200 text-indigo-900 text-sm rounded-full ">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold text-slate-500 py-4 flex">
                $49
                <span className="text-xl  flex flex-col justify-end">.99 /mo</span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptates.
            </p>

            <div className="text-2xl">
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">

            <span className="uppercase py-1 px-3 bg-indigo-200 text-indigo-900 text-sm rounded-full ">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold text-slate-500 py-4 flex">
                $99
                <span className="text-xl  flex flex-col justify-end">.99 /mo</span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptates.
            </p>

            <div className="text-2xl">
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
