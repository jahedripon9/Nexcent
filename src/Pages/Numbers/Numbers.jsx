import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faHand, faHandPointer, faUser } from "@fortawesome/free-solid-svg-icons";

// Array of card data with count, title, and associated icon
const cards = [
	{
		count: "2,245,341",
		title: "Members",
        icon: faUser
	},
	{
		count: "46,328",
		title: "Club",
        icon: faHand
	},
	{
		count: "828,867",
		title: "Event Bookings",
        icon: faHandPointer
	},
	{
		count: "1,926,436",
		title: "Payments",
        icon: faCreditCard
	},
];

// CardItem component to display individual card information (icon, count, and title)
const CardItem = ({ item }) => (
	<div className="w-1/2 mb-12 text-center ">
        {/* Icon displayed here */}
        <FontAwesomeIcon icon={item.icon} className="text-[45px] text-green-600" />
		{/* Displaying the count for the card */}
		<h3 className="my-5 text-sm sm:text-[45px] font-black">{item.count}</h3>
		{/* Displaying the title of the card */}
		<h5 className="font-medium text-sm sm:text-[17px] opacity-80">{item.title}</h5>
	</div>
);

// Prop types validation for the CardItem component
CardItem.propTypes = {
	item: PropTypes.object.isRequired,  // item is an object and is required
};

// Cards component - renders a list of CardItem components
const Cards = () => {
	// Dividing the cards array into two halves for a two-column layout
	const divider = Math.ceil(cards.length / 2);

	return (
		<div className="flex flex-wrap gap-6 items-center justify-center text-center mt-12">
			{/* First half of the cards */}
			<div className="flex justify-center items-center w-full gap-8">
				{cards.slice(0, divider).map((item, i) => (
					<CardItem item={item} key={i} />  // Mapping each card item to the CardItem component
				))}
			</div>

			{/* Second half of the cards */}
			<div className="flex justify-center items-center w-full gap-8">
				{cards.slice(divider).map((item, i) => (
					<CardItem item={item} key={i} />  // Mapping each card item to the CardItem component
				))}
			</div>
		</div>
	);
};

// Main Numbers section component that displays a title, description, and the Cards component
const Numbers = () => {
	return (
		<section className="ezy__numbers8 light py-14 md:py-24 bg-slate-50 rounded-lg dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				{/* Grid layout for the main content */}
				<div className="grid grid-cols-12 gap-6 max-w-7xl">
                    {/* Left section with title and description */}
                    <div className="col-span-12 lg:col-span-5 text-center lg:text-start">
						<div className="w-full h-full flex justify-center items-center">
                            <div className="col-span-12 md:col-span-8">
								{/* Title of the section */}
								<h1 className="text-[30px] leading-snug font-bold md:text-5xl mb-2">
                                	Helping a local  <span className="text-green-500">business reinvent itself</span>
								</h1>
								{/* Short description */}
								<p className="text-xl leading-snug opacity-75 mt-6">
                                	We reached here with our hard work and dedication
								</p>
							</div>
						</div>
					</div>

					{/* Right section with the Cards component */}
					<div className="col-span-12 lg:col-span-5 lg:col-start-8">
						<Cards />  {/* Render the Cards component here */}
					</div>
					
				</div>
			</div>
		</section>
	);
};

export default Numbers;
