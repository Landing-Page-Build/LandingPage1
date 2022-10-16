const Info = [
	{ title: "CAL" },
	{ title: "PROTEIN" },
	{ title: "CARBS" },
	{ title: "FAT" },
	{ title: "ZUCKER" },
]

const Product = ({ url }) => {
	return (
		<div>
			<div className="w-[500px] h-40">
				<img className="w-full h-full" src={url} alt="" />
			</div>
			<div className="font-semibold p-4">
				<div className="flex justify-between">
					<span>HALLOWEEN PAKET</span>
					<span>$9.20</span>
				</div>
				<div className="flex gap-1">
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
			</div>
			<div className="flex justify-between">
				<button className="bg-blue-400 text-white px-4">MEHR DAZU</button>
				<button className="bg-pink-600 text-white px-4">JETZT KAUFEN</button>
			</div>
		</div>
	)
}

export default Product;