import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import proImg from "../../assets/image9.png";
import logo1 from '../../assets/Logo-1.png';
import logo2 from '../../assets/Logo-2.png';
import logo3 from '../../assets/Logo-3.png';
import logo4 from '../../assets/Logo-4.png';
import logo5 from '../../assets/Logo-5.png';
import logo6 from '../../assets/Logo-6.png';
const clientLogos = [
    {
		logo: logo1, // Remove extra {}
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

const ProductList = () => {
  return (
    <section className="ezy__featured7 light relative py-8 md:py-12  dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1] bg-slate-50 rounded-lg ">
      <div className="container px-4">
        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 md:py-12">
                <div className="">
                  <img
                    className="bg-center bg-no-repeat bg-cover rounded-xl min-h-[450px] h-full"
                    src={proImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 pb-6 md:py-6 relative">
                <div className=" dark:bg-[#1E2735] absolute -top-[10%] right-0 left-0 bottom-0 md:top-0 md:-left-[20%] rounded-xl rotate-180 -z-[1]"></div>
                <div className="p-3 lg:p-8 mb-2">
                  <p>
                    Maecenas dignissim justo eget nulla rutrum molestie.
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt
                    ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                    tristique quam in, gravida enim. Nullam ut molestie arcu, at
                    hendrerit elit. Morbi laoreet elit at ligula molestie, nec
                    molestie mi blandit. Suspendisse cursus tellus sed augue
                    ultrices, quis tristique nulla sodales. Suspendisse eget
                    lorem eu turpis vestibulum pretium. Suspendisse potenti.
                    Quisque malesuada enim sapien, vitae placerat ante feugiat
                    eget. Quisque vulputate odio neque, eget efficitur libero
                    condimentum id. Curabitur id nibh id sem dignissim finibus
                    ac sit amet magna.
                  </p>
                  <h2 className="text-2xl font-semibold text-green-400 my-4">Tim Smith</h2>
                  <p className="font-normal text-base text-gray-400">British Dragon Boat Racing Association</p>
                </div>

                <div className="px-6 lg:px-12 text-end flex items-center justify-start">
                  <div className="flex flex-wrap items-center justify-center gap-5">
                    {clientLogos.map((client, i) => (
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className="max-h-10 h-auto max-w-full grayscale mx-0 transition-all duration-500 ease-in-out hover:grayscale-0 pr-5 mt-5"
                        key={i}
                      />
                    ))}
                  </div>
                  <div className="mt-4">
                  <button className="text-xl font-semibold text-green-400 ">Meet all customers</button>
                  <FontAwesomeIcon className="text-xl text-green-400 ps-2" icon={faArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductList;
