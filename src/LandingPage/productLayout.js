import Product from "./proudct";

const ProductLayout = () => {
	return (
		<div className="lg:px-16 px-8 py-4">
			<div className="text-center text-[#E11173] xl:text-4xl text-2xl">
				<span>PROBIERE UNSERE HALLOWEEN PRODUKTE!</span>
			</div>
			<div className="flex flex-wrap gap-4 my-6 justify-center">
				<Product url="./halloween.png" />
				<Product url="./paymentCards.png" />
				<Product url="./halloween.png" />
				<Product url="./halloween.png" />
				<Product url="./paymentCards.png" />
				<Product url="./halloween.png" />
			</div>
		</div>
	)
}

export default ProductLayout;