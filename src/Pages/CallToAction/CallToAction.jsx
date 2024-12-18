import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CallToAction = () => {
	return (
		<section className="ezy__cta18 light py-14 md:py-24 dark:bg-[#0b1727] text-zinc-900 dark:text-white bg-slate-50 rounded-lg ">
			<div className="container px-4">
				{/* Grid container for layout */}
				<div className="grid grid-cols-12 justify-center">
					{/* The main content will span 8 columns on medium and larger screens */}
					<div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
						{/* Heading text */}
						<h1 className="text-2xl md:text-5xl leading-none font-bold mb-4">
                            Pellentesque suscipit fringilla libero eu.
						</h1>
					
						{/* Button that triggers demo action */}
						<button className="bg-green-600 border border-green-600 text-white hover:bg-opacity-90 px-8 py-3 rounded transition">
                            Get a Demo 
                            {/* FontAwesome arrow icon */}
                            <FontAwesomeIcon className="text-md text-white ps-2 " icon={faArrowRight} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
