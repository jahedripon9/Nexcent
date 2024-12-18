import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCity,
	faHandshakeAngle,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

// Array of services with icon, title, and description
const serviceList = [
	{
		color: "",
		icon: faUsers,  // Icon representing 'Branding' service
		title: "Branding",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		color: "",
		icon: faCity,  // Icon representing 'Content Marketing' service
		title: "Content Marketing",
		description:
			"It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account",
	},
	{
		color: "",
		icon: faHandshakeAngle,  // Icon representing 'Web Development' service
		title: "Web Development",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
	},
];

// ServiceItem component: Displays individual service with an icon, title, and description
const ServiceItem = ({ service }) => (
	<div className="bg-white dark:bg-slate-800 h-full shadow-xl rounded-[20px] p-6 lg:px-6 lg:py-10">
		{/* Icon container: Background color and icon */}
		<div
			className={`w-24 h-24 rounded-full text-3xl inline-flex justify-center items-center mb-6 bg-${service.color}-600 bg-opacity-10 text-${service.color}-600`}
		>
			<FontAwesomeIcon icon={service.icon} className="bg-green-200 p-3 rounded-l-2xl rounded-t-2xl shadow-xl" />
		</div>
		{/* Service title */}
		<h4 className="font-medium text-2xl mb-4">{service.title}</h4>
		{/* Service description */}
		<p className="opacity-80">{service.description}</p>
	</div>
);

// Prop types validation to ensure 'service' is an object
ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,  // service is an object and is required
};

// Main Community section component
const Community = () => {
	return (
		<section className="ezy__service2 light py-10 md:py-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				{/* Section heading */}
				<div className="grid grid-cols-12 md:mb-12">
					<div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
                        Manage your entire community in a single system
						</h2>
						<p className="text-lg opacity-80">
                        Who is Nextcent suitable for?
						</p>
					</div>
				</div>

				{/* Grid layout for service items */}
				<div className="grid grid-cols-12 gap-6 text-center pt-12">
					{/* Mapping through serviceList array to render each service item */}
					{serviceList.map((service, i) => (
						<div className="col-span-12 md:col-span-4" key={i}>
							<ServiceItem service={service} />  {/* Render each service item here */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Community;
