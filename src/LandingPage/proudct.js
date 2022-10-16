import { useState } from "react"

const Info = [
	{ title: "CAL" },
	{ title: "PROTEIN" },
	{ title: "CARBS" },
	{ title: "FAT" },
	{ title: "ZUCKER" },
]

const Product = ({ url }) => {
	const [number, setNumber] = useState(0);

	return (
		<div className="w-[450px] my-2">
			<div className="h-40">
				<img className="w-full h-full" src={url} alt="" />
			</div>
			<div className="font-semibold p-4">
				<div className="flex justify-between">
					<span>HALLOWEEN PAKET</span>
					<span>$9.20</span>
				</div>
				<div className="flex gap-1 justify-between items-center">
					<div className="flex">
						{
							Info.map((val, key) => {
								return (
									<div className="flex-col text-center">
										<div className="bg-gray-600 rounded-full w-10 h-10 text-center pt-2 mx-auto">
											<span className="text-white">128</span>
										</div>
										<span className="text-xs">{val.title}</span>
									</div>
								)
							})
						}
					</div>
					<div className="border-2 border-black">
						<button className="px-2">-</button>
						<input className="w-28 focus:outline-none" value={number} />
						<button className="px-2">+</button>
					</div>
				</div>
			</div>
			<div className="flex justify-between text-lg">
				<button className="bg-[#03ACDE] text-white px-4">MEHR DAZU</button>
				<button className="bg-[#E11473] text-white px-4">JETZT KAUFEN</button>
			</div>
		</div>
	)
}

export default Product;