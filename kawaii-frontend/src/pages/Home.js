import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { duration } from '@mui/material';

const HomePage = () => {
	useEffect(() => {
		const lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});

		const raf = (time) => {
		lenis.raf(time);
		requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => lenis.destroy();
	}  , []);

	const fadeIn = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -50 },
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: -500 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -500 },
	};

	const bounce = {
		hidden: { opacity: 0, y: -100 },
		visible: {
			opacity: 1,
			y: [-80, -50, -25, 0],
			transition: {
				stiffness: 300,
				damping: 10,
				delay: 1.5, // Delay to stagger the appearance of icons
			},
		},
	};

	return (
		<div className="overflow-hidden">
			{/* Socials Sticky */}
			<div className="fixed flex top-4 space-x-3 right-4 z-50">

				<motion.a 
				href="https://www.facebook.com"
				title='Facebook'
				type="button"
				class="inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-600 text-white hover:bg-blue-700"
				variants={bounce}
				initial="hidden"
				animate="visible"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				>	
					<span class="[&>svg]:h-4 [&>svg]:w-4">
						{/* Facebook Icon */}
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 71 72" fill="none">
							<path
								d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
								fill="#ffffff" />
						</svg>
					</span>
				</motion.a>

				<motion.a 
				href="https://github.com/KJLumalang"
				title='Github'
				type="button"
				class="inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg duration-300 bg-[#333] hover:bg-blue-700"
				variants={bounce}
				initial="hidden"
				animate="visible"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}>
					<span class="[&>svg]:h-4 [&>svg]:w-4">
						{/* Github Icon */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
							<path
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
						</svg>
					</span>
				</motion.a>

				<motion.a 
				href="https://linkedin.com/in/kimjeirolumalang"
				title='LinkedIn'
				type="button"
				class="inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg duration-300 bg-[#0077b5] hover:bg-blue-700"
				variants={bounce}
				initial="hidden"
				animate="visible"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}>
					<span class="[&>svg]:h-4 [&>svg]:w-4">
						{/* LinkedIn Icon */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
							<path
								d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
						</svg>
					</span>
				</motion.a>

			</div>

			{/* Introduction Section */}
			<motion.section
				className="h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 md:px-8"
				style={{ backgroundImage: "url('/images/bg1.jpg')" }}
			>
				<motion.div
				className="text-center flex-grow flex flex-col justify-center"
				variants={fadeIn}
				initial="hidden"
				whileInView="visible"
				exit="exit"
				transition={{ duration: 1.5 }}
				viewport={{ once: false, amount: 0.5 }}
				>
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Kim Jeiro M. Lumalang</h1>
					{/* Typewriter Animation */}
					<p className="text-lg md:text-2xl mb-4">
					<Typewriter
						options={{
						strings: [
							"Hello!",
							"I am a full-stack software developer.",
							"I develop websites.",
							"I manage cloud servers.",
							"I build Android apps."
						],
						autoStart: true,
						loop: true,
						deleteSpeed: 30,
						}}
					/>
					</p>
				</motion.div>
				<div className="mb-6">
					<p className="text-base md:text-sm text-center mb-2">Scroll down to explore more about me</p>
					<motion.div
					animate={{ y: ['0rem', '1rem', '0rem'] }}
					transition={{ 
						repeat: Infinity, 
						duration: 1, 
						ease: 'easeInOut' 
					}}
					className="flex justify-center"
					>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 mx-auto">
						<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.25L12 12.75l7.5-7.5M4.5 11.25L12 18.75l7.5-7.5" />
					</svg>
					</motion.div>
				</div>
			</motion.section>

			{/* Projects Section */}
			<motion.section
				className="h-screen flex flex-col justify-center items-center bg-black text-white px-4 md:px-8"
			>
				<motion.div
				className="text-center"
				variants={fadeInLeft}
				initial="hidden"
				whileInView="visible"
				exit="exit"
				transition={{ duration: 3 }}
				viewport={{ once: false, amount: 0.5 }}
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
					<p className="text-base md:text-xl mb-8">Here are some of the projects I've worked on:</p>
					<div className="space-y-4">
						<motion.div className="bg-gray-700 p-4 rounded-lg text-base md:text-lg">Project 1 - Travel and Gatepass Online Filing System</motion.div>
						<motion.div className="bg-gray-700 p-4 rounded-lg text-base md:text-lg">Project 2 - School Interactive Map</motion.div>
						<motion.div className="bg-gray-700 p-4 rounded-lg text-base md:text-lg">Project 3 - Docurx</motion.div>
						<motion.div className="bg-gray-700 p-4 rounded-lg text-base md:text-lg">Project 4 - Point of Sale System</motion.div>
						<motion.div className="bg-gray-700 p-4 rounded-lg text-base md:text-lg">And more...</motion.div>
					</div>
				</motion.div>
			</motion.section>

			{/* Skills Section */}
			<motion.section
				className="h-screen flex flex-col justify-center items-center bg-black text-white px-4 md:px-8"
			>
				<motion.div
				className="text-center"
				variants={fadeIn}
				initial="hidden"
				whileInView="visible"
				exit="exit"
				transition={{ duration: 3 }}
				viewport={{ once: false, amount: 0.5 }}
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-4">Skills</h2>
					<p className="text-base md:text-xl mb-8">Technologies I work with:</p>
					<div className="space-y-4">
						<div className="bg-gray-600 p-4 rounded-lg text-base md:text-lg">Node.js/Express, PHP/Laravel, Java</div>
						<div className="bg-gray-600 p-4 rounded-lg text-base md:text-lg">React, Bootstrap, Tailwind CSS, JavaScript</div>
						<div className="bg-gray-600 p-4 rounded-lg text-base md:text-lg">MySQL, Firebase</div>
					</div>
				</motion.div>
			</motion.section>

			{/* REST API Section */}
			<motion.section
				className="h-screen flex flex-col justify-center items-center bg-black text-white px-4 md:px-8"
			>
				<motion.div
				className="text-center"
				variants={fadeIn}
				initial="hidden"
				whileInView="visible"
				exit="exit"
				transition={{ duration: 3 }}
				viewport={{ once: false, amount: 0.5 }}
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-4">React + Express REST API</h2>
					<p className="text-base md:text-xl mb-8">I also have CRUD sample!</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-blue-500 text-white p-3 rounded-xl w-full md:w-64 text-base md:text-lg"
					>
						<a href="/users">Let's Try!</a>
					</motion.button>
				</motion.div>
			</motion.section>
		</div>
	);
};

export default HomePage;
