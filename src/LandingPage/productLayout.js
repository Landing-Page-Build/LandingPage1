import Product from "./proudct";

const ProductLayout = () => {
	return (
		<div className="lg:px-16 px-8 py-4">
			<div className="text-center text-[#E11173] xl:text-4xl text-2xl">
				<span>PROBIERE UNSERE HALLOWEEN PRODUKTE!</span>
			</div>
			<div className="flex flex-wrap gap-4 my-6 justify-center">
				<Product url="./1.png" />
				<Product url="./2.png" />
				<Product url="./3.png" />
				<Product url="./4.png" />
				<Product url="./1.png" />
				<Product url="./2.png" />
			</div>
		</div>
	)
}

export default ProductLayout;