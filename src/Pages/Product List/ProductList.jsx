import  { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faShoppingCart,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import classNames from "classnames";

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_11_1.png",
		title:
			"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM",
		subTitle: "Computer & Accessories",
		spec: {
			ram: "16GB RAM",
			drive: "1TB SSD Hard Drive",
			gen: "10-core Intel Xeon<",
			brand: "MAC OS",
			security: "secured",
		},
		discountPrice: "1199.5",
		realPrice: "2399",
		discount: "-50%",
		rating: 3.5,
		count: "8",
		shipping: "50",
		availibility: "Available",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_11_2.png",
		title:
			"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM",
		subTitle: "Computer & Accessories",
		spec: {
			ram: "16GB RAM",
			drive: "1TB SSD Hard Drive",
			gen: "10-core Intel Xeon<",
			brand: "MAC OS",
			security: "secured",
		},
		discountPrice: "1199.5",
		realPrice: "2399",
		discount: "-50%",
		rating: 4.5,
		count: "8",
		shipping: "50",
		availibility: "Available",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_11_3.png",
		title:
			"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM",
		subTitle: "Computer & Accessories",
		spec: {
			ram: "16GB RAM",
			drive: "1TB SSD Hard Drive",
			gen: "10-core Intel Xeon<",
			brand: "MAC OS",
			security: "secured",
		},
		discountPrice: "1199.5",
		realPrice: "2399",
		discount: "-50%",
		rating: 4,
		count: "8",
		shipping: "50",
		availibility: "Available",
	},
];

const Rating = ({ rating }) => (
	<span>
		{[...Array(5)].map((_, i) => {
			const index = i + 1;
			let content = "";
			if (index <= Math.floor(rating))
				content = <FontAwesomeIcon icon={faStar} />;
			else if (rating > i && rating < index + 1)
				content = <FontAwesomeIcon icon={faStarHalfAlt} />;
			else if (index > rating) content = <FontAwesomeIcon icon={farStar} />;

			return <Fragment key={i}>{content}</Fragment>;
		})}
	</span>
);

Rating.propTypes = {
	rating: PropTypes.number,
};

const specifications = [
	{
		value: "16GB RAM",
	},
	{
		value: "1TB SSD Hard Drive",
	},
	{
		value: "10-core Intel Xeon",
	},
	{
		value: "Mac OS",
	},
	{
		value: "Secured",
	},
];

const SpecificationItem = ({ item }) => <li>{item.value}</li>;

SpecificationItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const ProductItem = ({ product }) => {
	return (
		<div className="grid grid-cols-12">
			{/* image */}
			<div className="col-span-12 xl:col-span-4 relative">
				<h6 className="absolute top-3 right-5 bg-green-500 text-white py-1 px-3 rounded-2xl">
					New
				</h6>

				<a href="#!">
					<img
						src={product.img}
						alt="..."
						className="rounded-lg max-w-full h-auto w-full max-h-full"
					/>
				</a>
			</div>
			<div className="col-span-12 lg:col-span-7 xl:col-span-5 pt-6 xl:pt-0 lg:px-6">
				<a href="#!">
					<h5 className="text-[19px] font-medium leading-tight hover:underline">
						{product.title}
					</h5>
				</a>
				<a href="#!">
					<h5 className="text-sm leading-none opacity-60 hover:underline font-medium mt-2">
						{product.subTitle}
					</h5>
				</a>
				<ul className="text-base list-disc opacity-60 pl-6 pt-6">
					{specifications.map((item, i) => (
						<SpecificationItem item={item} key={i} />
					))}
				</ul>
			</div>
			
		</div>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const ProductList = () => {
	return (
		<section className="ezy__eproductlist1 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="col-span-12 xl:col-span-4 relative">
					{products.map((product, i) => (
						<div className={classNames({ "mt-5": i })} key={i}>
							<ProductItem product={product} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductList
