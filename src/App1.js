/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import image1 from './images/18-185317_fifa-real-cristiano-17-16-18-ronaldo-clipart.png'
// import image2 from './images/f3696b2734a3aa00c95dbfcb294d6431.jpg'

const App1 = () => {
    const [isActive, setIsActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isActive === true){
            setIsActive(false)
        }else{
            setIsActive(true)
        }
       
    }
    return (
        <div className="text-gray-600 font-mono grid md:grid-cols-3">
            <div className="md:col-span-1 md:flex md:justify-end">
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold uppercase p-4 border-b-2 border-gray-300">
                            <a href="/" className=" hover:text-gray-900"> food ninga</a>
                        </h1>
                        <div className="px-4 cursor-pointer md:hidden">
                        <svg className="w-6 h-6" onClick={handleSubmit} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </div>
                    </div>
                    <ul className={`text-sm mt-6 ${isActive ? 'hidden' : ''} md:block`} >
                        <li className="text-gray-900 font-bold py-1">
                            <a href="#" className="px-4 flex justify-end border-r-4 border-red-500">
                                <span>Home</span>
                                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                                <span>About</span>
                                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                                <span>Contact</span>
                                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                                <span>Blog</span>
                                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <main className="px-16 py-6 bg-gray-100 md:col-span-2">
                <div className="flex justify-center md:justify-end">
                    <a href="#" className="text-blue-700 btn border-green-700 md:border-2 hover:bg-gray-400 hover:text-blue-50 transition ease-out duration-500">Log In</a>
                    <a href="#" className="text-pink-700 ml-2 btn border-blue-500 md:border-2 hover:bg-red-400 hover:text-blue-50 transition ease-out duration-500">Sign Up</a>
                </div>

                <div className="flex items-center justify-center">
                    <div className="bg-red-500 h-4 w-6"></div>
                    <div className="bg-blue-500 h-8 w-6"></div>
                    <div className="bg-green-500 h-12 w-6"></div>
                </div>

                <header>
                    <h2 className="text-gray-900 text-6xl font-semibold">Recipes</h2>
                    <h3 className="text-2xl font-semibold">For Ninjas</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 pb-3 border-b-2 border-red-500">Latest Recipes</h4>
                    <div className="mt-8 lg:grid grid-cols-3 gap-10">
                        {/* cards */}
                        <div className="card hover:shadow-lg">
                            <img src={image1} alt="" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">chills Stew</span>
                                <span className="block text-green-500 text-sm">Recipes by Rapoo</span>
                            </div>
                            <div className="badge">
                            <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className="card hover:shadow-lg">
                            <img src={image1} alt="" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">chills Stew</span>
                                <span className="block text-green-500 text-sm">Recipes by Rapoo</span>
                            </div>
                            <div className="badge">
                            <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className="card hover:shadow-lg">
                            <img src={image1} alt="" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">chills Stew</span>
                                <span className="block text-green-500 text-sm">Recipes by Rapoo</span>
                            </div>
                            <div className="badge">
                            <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>25 mins</span>
                            </div>
                        </div>
                    </div>

                    <h4 className="font-bold mt-12 pb-3 border-b-2 border-red-500">most popular</h4>
                    <div className="mt-8">
                        {/* cards */}
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-gray-700 text-yellow-100 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
                    </div>
                </div>
            </main>
            
        </div>
    )
}

export default App1
