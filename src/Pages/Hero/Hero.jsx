import heroImg from '../../assets/Illustration.png'

const Hero = () => {
	return (
		<section className="ezy__header25 light pt-12 bg-slate-50 rounded-lg shadow-sm dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1] container px-4 mx-auto">
			<div className="">
				{/* Grid Layout: The hero section is split into two parts, text and image */}
				<div className="grid grid-cols-12 gap-y-6 lg:gap-x-6 text-center lg:text-start items-center my-0 sm:my-24 mx-12">
					
					{/* Text content on the left */}
					<div className="col-span-12 lg:col-span-8 py-12">
						{/* Heading: Main title of the Hero section */}
						<h1 className="text-4xl font-bold leading-[1.1] md:text-[70px] mb-2">
                            Lessons and insights
						</h1>

						{/* Subheading: Bold and large text to grab attention */}
						<p className="text-4xl md:text-[75px] leading-snug opacity-100 my-6 font-bold text-green-700">
                            from 8 years
						</p>

						{/* Description: Smaller text that elaborates the purpose */}
						<p className="text-sm md:text-[18px] leading-snug opacity-80 mb-6">
                            Where to grow your business as a photographer: site or social media?
						</p>

						{/* Call-to-Action Button: Register button */}
						<div>
							<a
								href="#!"  // Link for registration (can be replaced with a valid URL)
								className="bg-green-600 rounded py-3 px-8 hover:bg-opacity-90 duration-300 text-white text-xl inline-flex mt-6 md:mt-12"
							>
								Register
							</a>
						</div>
					</div>

					{/* Image on the right side */}
					<div className="col-span-12 lg:col-span-4">
						<div className="relative">
							{/* Hero Image: Positioned relative for centering */}
							<img
								src={heroImg}  // The image imported from assets
                                width={700}  // Width of the image
								alt=""  // Alt text for accessibility (consider adding a description)
								className="relative left-1/2 -translate-x-[55%] img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
