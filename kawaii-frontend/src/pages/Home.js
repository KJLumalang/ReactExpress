import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useInView } from 'framer-motion';
import Typewriter from 'typewriter-effect';

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

	return (
		<div className="overflow-hidden">
			{/* Socials Sticky */}
			<div className="fixed flex top-4 right-4 z-50">
				<a href="https://www.facebook.com" class="p-2 rounded-lg flex items-center justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100 bg-blue-600 text-white hover:bg-blue-700">
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 71 72" fill="none">
						<path
							d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
							fill="#ffffff" />
					</svg>
				</a>
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
				variants={fadeIn}
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
