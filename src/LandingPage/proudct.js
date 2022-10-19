import { useState } from "react"

const Info = [
	{ title: "CAL" },
	{ title: "PROTEIN" },
	{ title: "CARBS" },
	{ title: "FAT" },
	{ title: "ZUCKER" },
]

const Product = ({ url, title, price }) => {
	const [number, setNumber] = useState(0);

	const onMinus = () => {
		setNumber(number - 1);
	}

	return (
		<div className="my-2">
			<div className="h-80">
				<img className="w-full h-full " src={url} alt="" />
			</div>
			<div className="font-semibold p-4">
				<div className="flex justify-between">
					<span>{title}</span>
					<span>{price}$</span>
				</div>
				<div className="flex gap-1 justify-between items-center flex-col sm:flex-row">
					<div className="flex">
						{
							Info.map((val, key) => {
								return (
									<div className="flex-col text-center" key={key}>
										<div className="bg-gray-600 rounded-full sm:w-10 sm:h-10 w-8 h-8 text-center sm:pt-2 pt-1 mx-auto">
											<span className="text-white">128</span>
										</div>
										<span className="text-xs">{val.title}</span>
									</div>
								)
							})
						}
					</div>
					<div className="border-2 border-black">
						<button className="px-2" onClick={() => {setNumber(number - 1)}}>-</button>
						<input className="sm:w-28 w-16 focus:outline-none ring-2 ring-black px-2" value={number} />
						<button className="px-2" onClick={() => {setNumber(number + 1)}}>+</button>
					</div>
				</div>
			</div>
			<div className="md:text-lg text-base grid grid-cols-3 gap-4">
				<button className="col-span-1 bg-[#03ACDE] text-white px-4">MEHR DAZU</button>
				<button className="col-span-2 bg-[#E11473] text-white px-4">JETZT KAUFEN</button>
			</div>
		</div>
	)
}

export default Product;