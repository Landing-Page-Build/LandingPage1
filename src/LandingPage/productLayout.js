import Product from "./proudct";

const ProductLayout = () => {
	return (
		<div className="py-4">
			<div className="text-center text-[#E11173] text-4xl">
				<span>PROBIERE UNSERE HALLOWEEN PRODUKTE!</span>
			</div>
			<div className="flex flex-wrap gap-4 lg:px-24 px-8 my-6">
				<Product url="./halloween.png" />
				<Product url="./paymentCards.png" />
				<Product url="./halloween.png" />
				<Product url="./halloween.png" />
				<Product url="./paymentCards.png" />
				<Product url="./halloween.png" />
				<Product url="./paymentCards.png" />
			</div>
		</div>
	)
}

export default ProductLayout;