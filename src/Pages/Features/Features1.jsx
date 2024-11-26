import Featureimg from '../../assets/pana.png'

const Feature1 = () => {
	return (
		<section className="py-5 md:py-10 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				{/* Main container with flexible layout */}
				<div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
					{/* Left side image container */}
					<div className="w-full lg:w-1/2">
						{/* Image with background settings and responsive height */}
						<div>
							<img 
								className='bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[400px] lg:h-[600px]' 
								src={Featureimg} 
								alt="Feature Image" 
							/>
						</div>
					</div>

					{/* Right side content with heading and description */}
					<div className="w-full lg:w-1/2 flex flex-col items-center md:items-start justify-center">
						<div className="px-6 mt-12 lg:mt-0">
							{/* Heading */}
							<h1 className="text-2xl font-bold leading-tight md:text-[45px] capitalize mb-4">
								How to design your site footer like we did
							</h1>

							{/* Description text */}
							<p className="sm:text-lg text-sm opacity-80 leading-7 mb-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
							</p>

							{/* Learn more button */}
							<button className="text-white bg-green-600 py-3 px-6 rounded hover:bg-opacity-90">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature1;
