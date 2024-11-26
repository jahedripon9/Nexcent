import logo1 from '../../assets/Logo-1.png';
import logo2 from '../../assets/Logo-2.png';
import logo3 from '../../assets/Logo-3.png';
import logo4 from '../../assets/Logo-4.png';
import logo5 from '../../assets/Logo-5.png';
import logo6 from '../../assets/Logo-6.png';

// Client logos data
const clientLogos = [
	{
		logo: logo1,
		alt: "Client Logo 1",
	},
	{
		logo: logo2,
		alt: "Client Logo 2",
	},
	{
		logo: logo3,
		alt: "Client Logo 3",
	},
	{
		logo: logo4,
		alt: "Client Logo 4",
	},
	{
		logo: logo5,
		alt: "Client Logo 5",
	},
	{
		logo: logo6,
		alt: "Client Logo 6",
	},
];

const OurClient = () => {
	return (
		<section className="ezy__clients2 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white my-10">
			<div className="container px-4 mx-auto">
				{/* Section heading and subheading */}
				<div className="grid grid-cols-12 justify-center mb-12">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 2xl:col-span-6 2xl:col-start-4 text-center">
						<h2 className="font-bold text-[25px] lg:text-[45px] leading-none mb-6">
							Our Clients
						</h2>
						<p className="text-lg leading-6 opacity-70 mb-4">
							We have been working with some Fortune 500+ clients
						</p>
					</div>
				</div>

				{/* Display client logos */}
				<div className="flex flex-wrap justify-center items-center text-center">
					{/* Iterate over client logos */}
					{clientLogos.map((client, i) => (
						<img
							src={client.logo} // Correct image source
							alt={client.alt} // Descriptive alt text for accessibility
							className="max-h-[50px] h-full max-w-full px-24 my-0" // Styling the logos
							key={i} // Unique key for each element in the list
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurClient;
