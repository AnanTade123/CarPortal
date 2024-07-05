import { FaLocationDot } from "react-icons/fa6";
import { BsLightningFill } from "react-icons/bs";
import { RiInformationFill } from "react-icons/ri";

const LiveBid = () => {
  return (
    <>
      <div className="mx-4 mb-10 sm:mx-12">
        <h1 className="text-2xl font-bold text-center mb-8 sm:text-3xl">Bidding Car Live</h1>
        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {/* Car 1 */}
          <div className="relative mx-auto w-full max-w-sm">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-lg bg-white p-4 shadow-md border">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img className="h-full w-full object-cover" src="https://fastly-production.24c.in/hello-ar/dev/uploads/664db851724c78c7fc582356/b1bb3305-0394-48a0-b46d-ba534863c117/slot/10190831792-8a6e77eec6204a84b3a57dd2b38fbb43-Exterior-6.jpg?w=690&auto=format" alt="Car 1" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="line-clamp-1 text-[14px] font-semibold text-gray-800" title="New York">2017 Renault Duster</h2>
                  <i className="fa fa-heart"></i>
                </div>
                
                <div className="flex md:space-x-2 space-x-1 mt-3">
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">40,000 km</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">1st owner</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Petrol</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">MH-12</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Engine 4.5 ✰</div>
                </div>
                
                <div className="mt-4 -ml-4   flex justify-between items-center">
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-[16px] bg-indigo-300 p-3 text-white">Highest Bid ₹ 6,64,000</span>
                  </p>
                  <div className="text-center ">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-[16px] md:ml-8 ml-20  text-red-600">Last Call</span>
                    </p>
                    <p className="text-slate-700 inline-block whitespace-nowrap rounded-xl font-medium leading-tight md:ml-10 ml-14">00h 03m 43s</p>
                  </div>
                </div>

                <div className="mt-4 md:-ml-2 -ml-3">
                  <p className="flex text-[16px] line-clamp-1 text-black">
                    <span className="mr-1 md:-ml-1 mt-1 "><BsLightningFill /></span>
                    Fair market value: ₹ 2,79,241
                    <span className="md:ml-16 ml-20 mt-1"><RiInformationFill size={20} /></span>
                  </p>
                </div>

                <div className="mt-4">
                  <p className="flex line-clamp-1 text-[12px] text-gray-800">
                    <span className="mr-1 mt-1"><FaLocationDot /></span>
                    4219 Bay Point Drive, Saswad
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button type="button" className="px-4 py-2 bg-[#9FA8DA] text-white rounded-lg">View</button>
                </div>
              </div>
            </a>
          </div>

          {/* Car 2 */}
          <div className="relative mx-auto w-full max-w-sm">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-lg bg-white p-4 shadow-md border">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img className="h-full w-full object-cover" src="https://fastly-production.24c.in/hello-ar/dev/uploads/7d0f9d86-e4d0-47cc-b3e1-05ae929f07e7/c7c1b2e0-6548-4e5a-8a8b-864a1e22babc/43.jpg?w=690&auto=format" alt="Car 2" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="line-clamp-1 text-[14px] font-semibold text-gray-800" title="New York">2016 Maruti Wagon R 1.0</h2>
                  <i className="fa fa-heart text-brown-500"></i>
                </div>
                
                <div className="flex space-x-1.5 mt-3">
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">40,000 km</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">1st owner</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Petrol</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">MH-12</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Engine 4.5 ✰</div>
                </div>
                
                <div className="mt-4 -ml-4 flex justify-between items-center">
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-[16px] bg-indigo-300 p-3 text-white">Highest Bid ₹ 6,64,000</span>
                  </p>
                  <div className="text-center ">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-[16px] md:ml-8 ml-20  text-red-600">Last Call</span>
                    </p>
                    <p className="text-slate-700 inline-block whitespace-nowrap rounded-xl font-medium leading-tight md:ml-10 ml-14">00h 03m 43s</p>
                  </div>
                </div>

                <div className="mt-4 md:-ml-2 -ml-3">
                  <p className="flex text-[16px] line-clamp-1 text-black">
                    <span className="mr-1 md:-ml-1 mt-1 "><BsLightningFill /></span>
                    Fair market value: ₹ 2,79,241
                    <span className="md:ml-16 ml-20 mt-1"><RiInformationFill size={20} /></span>
                  </p>
                </div>

                <div className="mt-4">
                  <p className="flex line-clamp-1 text-[12px] text-gray-800">
                    <span className="mr-1 mt-1"><FaLocationDot /></span>
                    3035 Masters Drive, Chinchwad
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button type="button" className="px-4 py-2 bg-[#9FA8DA] text-white rounded-lg">View</button>
                </div>
              </div>
            </a>
          </div>

          {/* Car 3 */}
          <div className="relative mx-auto w-full max-w-sm">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-lg bg-white p-4 shadow-md border">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img className="h-full w-full object-cover" src="https://fastly-production.24c.in/hello-ar/dev/uploads/664ad77bd97f2f3591c4f6c9/292b17b1-5526-4a55-8849-6f8e23f5358f/slot/10027633791-f0e3d8f4a6d7419ca5f3b420d1a39753-Exterior-6.jpg?w=690&auto=format" alt="Car 3" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="line-clamp-1 text-[14px] font-semibold text-gray-800" title="New York">2023 Honda City</h2>
                  <i className="fa fa-heart text-brown-500"></i>
                </div>
                
                <div className="flex space-x-1.5 mt-3">
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">40,000 km</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">1st owner</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Petrol</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">MH-12</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Engine 4.5 ✰</div>
                </div>
                
                <div className="mt-4 -ml-4 flex justify-between items-center">
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-[16px] bg-indigo-300 p-3 text-white">Highest Bid ₹ 6,64,000</span>
                  </p>
                  <div className="text-center ">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-[16px] md:ml-8 ml-20  text-red-600">Last Call</span>
                    </p>
                    <p className="text-slate-700 inline-block whitespace-nowrap rounded-xl font-medium leading-tight md:ml-10 ml-14">00h 03m 43s</p>
                  </div>
                </div>

                <div className="mt-4 md:-ml-2 -ml-3">
                  <p className="flex text-[16px] line-clamp-1 text-black">
                    <span className="mr-1 md:-ml-1 mt-1 "><BsLightningFill /></span>
                    Fair market value: ₹ 2,79,241
                    <span className="md:ml-16 ml-20 mt-1"><RiInformationFill size={20} /></span>
                  </p>
                </div>

                <div className="mt-4">
                  <p className="flex line-clamp-1 text-[12px] text-gray-800">
                    <span className="mr-1 mt-1"><FaLocationDot /></span>
                    4219 Bay Point Drive, Saswad
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button type="button" className="px-4 py-2 bg-[#9FA8DA] text-white rounded-lg">View</button>
                </div>
              </div>
            </a>
          </div>

          {/* Repeat for additional cars as needed */}
          {/* Car 4 */}
          <div className="relative mx-auto w-full max-w-sm">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-lg bg-white p-4 shadow-md border">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img className="h-full w-full object-cover" src="https://fastly-production.24c.in/hello-ar/dev/uploads/664ad77bd97f2f3591c4f6c9/292b17b1-5526-4a55-8849-6f8e23f5358f/slot/10027633791-f0e3d8f4a6d7419ca5f3b420d1a39753-Exterior-6.jpg?w=690&auto=format" alt="Car 3" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="line-clamp-1 text-[14px] font-semibold text-gray-800" title="New York">2023 Honda City</h2>
                  <i className="fa fa-heart text-brown-500"></i>
                </div>
                
                <div className="flex space-x-1.5 mt-3">
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">40,000 km</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">1st owner</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Petrol</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">MH-12</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Engine 4.5 ✰</div>
                </div>
                
                <div className="mt-4 -ml-4 flex justify-between items-center">
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-[16px] bg-indigo-300 p-3 text-white">Highest Bid ₹ 6,64,000</span>
                  </p>
                  <div className="text-center ">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-[16px] md:ml-8 ml-20  text-red-600">Last Call</span>
                    </p>
                    <p className="text-slate-700 inline-block whitespace-nowrap rounded-xl font-medium leading-tight md:ml-10 ml-14">00h 03m 43s</p>
                  </div>
                </div>

                <div className="mt-4 md:-ml-2 -ml-3">
                  <p className="flex text-[16px] line-clamp-1 text-black">
                    <span className="mr-1 md:-ml-1 mt-1 "><BsLightningFill /></span>
                    Fair market value: ₹ 2,79,241
                    <span className="md:ml-16 ml-20 mt-1"><RiInformationFill size={20} /></span>
                  </p>
                </div>

                <div className="mt-4">
                  <p className="flex line-clamp-1 text-[12px] text-gray-800">
                    <span className="mr-1 mt-1"><FaLocationDot /></span>
                    4219 Bay Point Drive, Saswad
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button type="button" className="px-4 py-2 bg-[#9FA8DA] text-white rounded-lg">View</button>
                </div>
              </div>
            </a>
          </div>

          {/* Car 5 */}
          <div className="relative mx-auto w-full max-w-sm">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-lg bg-white p-4 shadow-md border">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img className="h-full w-full object-cover" src="https://fastly-production.24c.in/hello-ar/dev/uploads/664ad77bd97f2f3591c4f6c9/292b17b1-5526-4a55-8849-6f8e23f5358f/slot/10027633791-f0e3d8f4a6d7419ca5f3b420d1a39753-Exterior-6.jpg?w=690&auto=format" alt="Car 3" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="line-clamp-1 text-[14px] font-semibold text-gray-800" title="New York">2023 Honda City</h2>
                  <i className="fa fa-heart text-brown-500"></i>
                </div>
                
                <div className="flex space-x-1.5 mt-3">
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">40,000 km</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">1st owner</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Petrol</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">MH-12</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Engine 4.5 ✰</div>
                </div>
                
                <div className="mt-4 -ml-4 flex justify-between items-center">
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-[16px] bg-indigo-300 p-3 text-white">Highest Bid ₹ 6,64,000</span>
                  </p>
                  <div className="text-center ">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-[16px] md:ml-8 ml-20  text-red-600">Last Call</span>
                    </p>
                    <p className="text-slate-700 inline-block whitespace-nowrap rounded-xl font-medium leading-tight md:ml-10 ml-14">00h 03m 43s</p>
                  </div>
                </div>

                <div className="mt-4 md:-ml-2 -ml-3">
                  <p className="flex text-[16px] line-clamp-1 text-black">
                    <span className="mr-1 md:-ml-1 mt-1 "><BsLightningFill /></span>
                    Fair market value: ₹ 2,79,241
                    <span className="md:ml-16 ml-20 mt-1"><RiInformationFill size={20} /></span>
                  </p>
                </div>

                <div className="mt-4">
                  <p className="flex line-clamp-1 text-[12px] text-gray-800">
                    <span className="mr-1 mt-1"><FaLocationDot /></span>
                    4219 Bay Point Drive, Saswad
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button type="button" className="px-4 py-2 bg-[#9FA8DA] text-white rounded-lg">View</button>
                </div>
              </div>
            </a>
          </div>

          {/* Car 6 */}
          <div className="relative mx-auto w-full max-w-sm">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-lg bg-white p-4 shadow-md border">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img className="h-full w-full object-cover" src="https://fastly-production.24c.in/hello-ar/dev/uploads/664ad77bd97f2f3591c4f6c9/292b17b1-5526-4a55-8849-6f8e23f5358f/slot/10027633791-f0e3d8f4a6d7419ca5f3b420d1a39753-Exterior-6.jpg?w=690&auto=format" alt="Car 3" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="line-clamp-1 text-[14px] font-semibold text-gray-800" title="New York">2023 Honda City</h2>
                  <i className="fa fa-heart text-brown-500"></i>
                </div>
                
                <div className="flex space-x-1.5 mt-3">
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">40,000 km</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">1st owner</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Petrol</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">MH-12</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Engine 4.5 ✰</div>
                </div>
                
                <div className="mt-4 -ml-4 flex justify-between items-center">
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-[16px] bg-indigo-300 p-3 text-white">Highest Bid ₹ 6,64,000</span>
                  </p>
                  <div className="text-center ">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-[16px] md:ml-8 ml-20  text-red-600">Last Call</span>
                    </p>
                    <p className="text-slate-700 inline-block whitespace-nowrap rounded-xl font-medium leading-tight md:ml-10 ml-14">00h 03m 43s</p>
                  </div>
                </div>

                <div className="mt-4 md:-ml-2 -ml-3">
                  <p className="flex text-[16px] line-clamp-1 text-black">
                    <span className="mr-1 md:-ml-1 mt-1 "><BsLightningFill /></span>
                    Fair market value: ₹ 2,79,241
                    <span className="md:ml-16 ml-20 mt-1"><RiInformationFill size={20} /></span>
                  </p>
                </div>
                <div className="mt-4">
                  <p className="flex line-clamp-1 text-[12px] text-gray-800">
                    <span className="mr-1 mt-1"><FaLocationDot /></span>
                    4219 Bay Point Drive, Saswad
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button type="button" className="px-4 py-2 bg-[#9FA8DA] text-white rounded-lg">View</button>
                </div>
              </div>
            </a>
          </div>

          {/* Car 7 */}
          <div className="relative mx-auto w-full max-w-sm">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-lg bg-white p-4 shadow-md border">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img className="h-full w-full object-cover" src="https://fastly-production.24c.in/hello-ar/dev/uploads/664ad77bd97f2f3591c4f6c9/292b17b1-5526-4a55-8849-6f8e23f5358f/slot/10027633791-f0e3d8f4a6d7419ca5f3b420d1a39753-Exterior-6.jpg?w=690&auto=format" alt="Car 3" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="line-clamp-1 text-[14px] font-semibold text-gray-800" title="New York">2023 Honda City</h2>
                  <i className="fa fa-heart text-brown-500"></i>
                </div>
                
                <div className="flex space-x-1.5 mt-3">
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">40,000 km</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">1st owner</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Petrol</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">MH-12</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Engine 4.5 ✰</div>
                </div>
                
                <div className="mt-4 -ml-4 flex justify-between items-center">
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-[16px] bg-indigo-300 p-3 text-white">Highest Bid ₹ 6,64,000</span>
                  </p>
                  <div className="text-center ">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-[16px] md:ml-8 ml-20  text-red-600">Last Call</span>
                    </p>
                    <p className="text-slate-700 inline-block whitespace-nowrap rounded-xl font-medium leading-tight md:ml-10 ml-14">00h 03m 43s</p>
                  </div>
                </div>

                <div className="mt-4 md:-ml-2 -ml-3">
                  <p className="flex text-[16px] line-clamp-1 text-black">
                    <span className="mr-1 md:-ml-1 mt-1 "><BsLightningFill /></span>
                    Fair market value: ₹ 2,79,241
                    <span className="md:ml-16 ml-20 mt-1"><RiInformationFill size={20} /></span>
                  </p>
                </div>
                <div className="mt-4">
                  <p className="flex line-clamp-1 text-[12px] text-gray-800">
                    <span className="mr-1 mt-1"><FaLocationDot /></span>
                    4219 Bay Point Drive, Saswad
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button type="button" className="px-4 py-2 bg-[#9FA8DA] text-white rounded-lg">View</button>
                </div>
              </div>
            </a>
          </div>

          {/* Car 8 */}
          <div className="relative mx-auto w-full max-w-sm">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-lg bg-white p-4 shadow-md border">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img className="h-full w-full object-cover" src="https://fastly-production.24c.in/hello-ar/dev/uploads/664ad77bd97f2f3591c4f6c9/292b17b1-5526-4a55-8849-6f8e23f5358f/slot/10027633791-f0e3d8f4a6d7419ca5f3b420d1a39753-Exterior-6.jpg?w=690&auto=format" alt="Car 3" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="line-clamp-1 text-[14px] font-semibold text-gray-800" title="New York">2023 Honda City</h2>
                  <i className="fa fa-heart text-brown-500"></i>
                </div>
                
                <div className="flex space-x-1.5 mt-3">
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">40,000 km</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">1st owner</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Petrol</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">MH-12</div>
                  <div className="p-2 text-[11px] bg-gray-100 rounded-md">Engine 4.5 ✰</div>
                </div>
                
                <div className="mt-4 -ml-4 flex justify-between items-center">
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-[16px] bg-indigo-300 p-3 text-white">Highest Bid ₹ 6,64,000</span>
                  </p>
                  <div className="text-center ">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-[16px] md:ml-8 ml-20  text-red-600">Last Call</span>
                    </p>
                    <p className="text-slate-700 inline-block whitespace-nowrap rounded-xl font-medium leading-tight md:ml-10 ml-14">00h 03m 43s</p>
                  </div>
                </div>

                <div className="mt-4 md:-ml-2 -ml-3">
                  <p className="flex text-[16px] line-clamp-1 text-black">
                    <span className="mr-1 md:-ml-1 mt-1 "><BsLightningFill /></span>
                    Fair market value: ₹ 2,79,241
                    <span className="md:ml-16 ml-20 mt-1"><RiInformationFill size={20} /></span>
                  </p>
                </div>

                <div className="mt-4">
                  <p className="flex line-clamp-1 text-[12px] text-gray-800">
                    <span className="mr-1 mt-1"><FaLocationDot /></span>
                    4219 Bay Point Drive, Saswad
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button type="button" className="px-4 py-2 bg-[#9FA8DA] text-white rounded-lg">View</button>
                </div>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LiveBid;