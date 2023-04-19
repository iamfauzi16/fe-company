
import Button from './components/button'
import ImageOnBoarding from '../../public/banner.jpg'

import Image from 'next/image'
import { GlobeAsiaAustraliaIcon, BookOpenIcon } from '@heroicons/react/24/outline'
export default function index(params) {

  return(
    <div className="container">

      <navbar className="flex justify-between items-center text-xl py-4">
        <div>
          Logo
        </div>
        <div>
          <ul className="flex gap-12 font-light">
            <li>Root</li>
            <li>Product</li>
            <li>Service</li>
            <li>About</li>

          </ul>
        </div>
        <div>
        <Button type="submit" model="flex items-center gap-x-2 w-auto h-12 px-4 bg-blue-600 text-xl text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 ring-blue-400 transition duration-200"> <GlobeAsiaAustraliaIcon className="h-6 w-6 text-white" />Get Started</Button>

        </div>
      </navbar>
      <div className="lg:flex lg:flex-col justify-center items-center md:flex md:flex-col p-24">
        <div>
          <p className="lg:text-5xl font-bold text-center text-3xl">Realize Your Dream Website - Reliable Website Application Development Service</p>
          <p className="lg:mt-4 text-center lg:text-2xl font-light text-gray-500 text-xl">Inovation - Security - Services & Professional</p>
        </div>
        <div className="flex lg:flex-row  lg:gap-x-4 mt-8 flex-col  gap-y-4">
          <Button type="submit" model="flex items-center gap-x-2 w-auto h-16 px-4 bg-blue-600 text-xl text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 ring-blue-400 transition duration-200"> <GlobeAsiaAustraliaIcon className="h-6 w-6 text-white" />Get Started</Button>
          <Button type="submit" model="flex items-center gap-x-2 w-auto px-4 border-2 w-auto h-16 text-xl font-medium border-gray rounded-lg hover:bg-black hover:text-white transition duration-100"><BookOpenIcon className="h-6 w-6 hover:text-white" />My Services</Button>
        </div>
      </div>

      <div className="bg-slate-200 rounded-lg p-8">
        {/* <Image src={ImageOnBoarding} alt="gambar"  className=" w-96"/> */}
        <div className="flex flex-col justify-center items-center gap-y-4 text-center">
          <p className="text-4xl font-semibold">We Professional Agency</p>
          <p className="w-1/2 text-xl">We are consultants to help you build your business products online, we will provide the best service and try to meet your needs so that your business runs well.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-6 rounded-sm ">
            <p className="text-3xl font-extrabold text-gray-300">1</p>
            <p className="text-lg font-medium">Landing Page Design</p>

            <p className="text-gray-500 font-normal text-base mt-2">Fugiat ea irure adipisicing dolore ad deserunt proident tempor. Commodo id non commodo incididunt in. Elit cillum ut est magna id ad.</p>
          </div>
          <div className=" bg-white p-6 rounded-sm ">
            <p className="text-3xl font-extrabold text-gray-300">2</p>
            <p className="text-lg font-medium">Adsense Your Product</p>
            <p className="text-gray-500 font-normal text-base mt-2">Fugiat ea irure adipisicing dolore ad deserunt proident tempor. Commodo id non commodo incididunt in. Elit cillum ut est magna id ad.</p>

          </div>
          <div className=" bg-white p-6 rounded-sm ">
             <p className="text-3xl font-extrabold text-gray-300">3</p>
             <p className="text-lg font-medium">Sistem Management Build</p>
             <p className="text-gray-500 font-normal text-base mt-2">Fugiat ea irure adipisicing dolore ad deserunt proident tempor. Commodo id non commodo incididunt in. Elit cillum ut est magna id ad.</p>

          </div>
        </div>
      </div>
    </div>
  )
};
