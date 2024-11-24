import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faHand, faHandPointer, faUser } from "@fortawesome/free-solid-svg-icons";

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

const CardItem = ({ item }) => (
	<div className="w-1/2 mb-12 text-center ">
        <FontAwesomeIcon icon={item.icon} className="text-[45px]  text-green-600 " />
		<h3 className="my-5 text-sm sm:text-[45px] font-black">{item.count}</h3>
		<h5 className="font-medium text-sm sm:text-[17px] opacity-80">{item.title}</h5>
	</div>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Cards = () => {
	const divider = Math.ceil(cards.length / 2);

	return (
		<div className="flex flex-wrap gap-6 items-center justify-center text-center mt-12">
			<div className="flex justify-center items-center w-full gap-8">
				{cards.slice(0, divider).map((item, i) => (
					<CardItem item={item} key={i} />
				))}
			</div>
			<div className="flex justify-center items-center w-full gap-8">
				{cards.slice(divider).map((item, i) => (
					<CardItem item={item} key={i} />
				))}
			</div>
		</div>
	);
};

const Numbers = () => {
	return (
		<section className="ezy__numbers8 light py-14 md:py-24 bg-slate-50 rounded-lg  dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 max-w-7xl">
                <div className="col-span-12 lg:col-span-5 text-center lg:text-start">
						<div className="w-full h-full flex justify-center items-center">
                        <div className="col-span-12 md:col-span-8">
						<h1 className="text-[30px] leading-snug font-bold md:text-5xl mb-2">
                        Helping a local  <span className="text-green-500">business reinvent itself</span>
						</h1>
						<p className="text-xl leading-snug opacity-75 mt-6">
                        We reached here with our hard work and dedication
						</p>
					</div>
						</div>
					</div>
					<div className=" col-span-12 lg:col-span-5 lg:col-start-8">
						<Cards />
					</div>
					
				</div>
			</div>
		</section>
	);
};
export default Numbers