import React from 'react';
import {FiPhone} from 'react-icons/fi';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {TbSteeringWheel} from 'react-icons/tb';
import {BiChip} from 'react-icons/bi';

import supportimg from '../Assets/support (1).jpg';

const Support = () => {
  return (
    <div name='support' className="w-full  mt-24">

      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={supportimg}
          alt="/"
          className="w-full h-full object-cover mix-blend-overlay "
        />
      </div>

      <div className="max-w-[1240px] relative mx-auto text-white">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center font-bold">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ullam voluptatem expedita delectus tenetur,
            consectetur sed quis magnam itaque cum, placeat reiciendis quia. Delectus, officia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black ">
          
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <FiPhone  size={70} className=" w-18 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">
                Sales
              </h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore aperiam explicabo e
                xcepturi voluptas cumque porro laudantium sunt officia nostrum sint?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                contact us <AiOutlineArrowRight classname='w-5 ml-2' />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <TbSteeringWheel size={70} className=" w-18 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">
              Technical Support
              </h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore aperiam explicabo e
                xcepturi voluptas cumque porro laudantium sunt officia nostrum sint?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                contact us <AiOutlineArrowRight classname='w-5 ml-2' />
              </p>
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <BiChip size={70} className=" w-18 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"/>
              <h3 className="font-bold text-2xl my-6">
              Media inquiries
              </h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore aperiam explicabo e
                xcepturi voluptas cumque porro laudantium sunt officia nostrum sint?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                contact us <AiOutlineArrowRight classname='w-5 ml-2' /></p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Support;
