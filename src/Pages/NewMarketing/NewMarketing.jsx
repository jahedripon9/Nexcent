// Importing necessary libraries and assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img18 from '../../assets/image18.png';
import img19 from '../../assets/image19.png';
import img20 from '../../assets/image20.png';

// Team members data
const teamMembers = [
  {
    img: img18,
    name: "Creating Streamlined Safeguarding Processes with OneRen",
    socialLinks: [{ icon: faArrowRight, href: "#!" }],
  },
  {
    img: img19,
    name: "What are your safeguarding responsibilities and how can you manage them?",
    socialLinks: [{ icon: faArrowRight, href: "#!" }],
  },
  {
    img: img20,
    name: "Revamping the Membership Model with Triathlon Australia",
    socialLinks: [{ icon: faArrowRight, href: "#!" }],
  },
];

// Component to display a single team member
const TeamMemberItem = ({ member }) => (
  <div className="group relative">
    {/* Member image */}
    <img src={member.img} alt={member.name} className="h-auto w-full mx-auto" />

    {/* Hover card with member details */}
    <div className="absolute -bottom-12 left-[10%] p-5 w-[80%] bg-white shadow-xl dark:bg-slate-800 text-center overflow-hidden z-[1] group-hover:bg-gray-100 group-hover:pt-7 group-hover:px-5 group-hover:pb-8 duration-300 group-hover:text-black">
      <h3 className="sm:text-xl text-sm font-semibold leading-normal opacity-80 mb-1">
        {member.name}
      </h3>
      {/* Read More button */}
      <div className="mt-4">
        <button className="text-lg font-semibold text-green-400">Read More</button>
        <FontAwesomeIcon className="text-xl text-green-400 ps-2" icon={faArrowRight} />
      </div>
    </div>
  </div>
);

// Prop validation for the `TeamMemberItem` component
TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired, // Ensures member data is passed correctly
};

// Main `NewMarketing` component
const NewMarketing = () => {
  return (
    <section className="ezy__team12 light py-10 md:py-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        
        {/* Header section */}
        <div className="flex justify-center text-center">
          <div className="sm:max-w-auto">
            <h3 className="text-3xl leading-none md:text-[45px] font-bold">
              Caring is the new marketing
            </h3>
            <p className="sm:text-xl text-[12px] leading-normal opacity-80 mt-4 mb-10 md:mx-72 mx-0">
              The Nexcent blog is the best place to read about the latest membership insights, trends, and more. See whos joining the community, read about how our community is increasing their membership income, and lots more.
            </p>
          </div>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div
              className="col-span-3 lg:col-span-1 my-12 lg:my-0 xl:p-12"
              key={i}
            >
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewMarketing;
