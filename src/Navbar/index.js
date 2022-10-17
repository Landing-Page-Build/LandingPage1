import { useState } from 'react';
import HeartIcon from '../Icons/HeartIcon.svg';
import Expressversand from '../Icons/Expressversand.svg';
import Icon_Herz_light from '../Icons/Icon_Herz_light.svg';

const menuData = [
	{ title: "German Style", to: "/1" },
	{ title: "Indian Style", to: "/1" },
	{ title: "Fit Style", to: "/1" },
	{ title: "Asia Style", to: "/1" },
	{ title: "Italia Style", to: "/1" },
	{ title: "Mediterranean Style", to: "/1" },
	{ title: "Currywurst", to: "/1" },
	{ title: "East European Style", to: "/1" },
	{ title: "Glutenfrei", to: "/1" },
	{ title: "Laktosefrei", to: "/1" },
	{ title: "Vegan", to: "/1" },
	{ title: "Vegetarisch", to: "/1" },
]
const Navbar = () => {
	const [show, setShow] = useState(true);

	return (
		<div>
			<div className="bg-[#232b36] py-2 px-2">
				<div className="grid md:grid-cols-2 text-2xl">
					<div className="text-white">
						<div className="flex justify-center">
							<img src={HeartIcon} className="w-10 h-10" alt="heart-icon" />
							FRISCH, GESUND & LECKER
						</div>
					</div>
					<div className="text-white">
						<div className="flex justify-center">
							<img src={Expressversand} className="w-10 h-10" alt="heart-icon" />
							EXPRESSVERSAND IN DEUTSCHLAND
						</div>
					</div>
				</div>
			</div>
			<div className="flex text-black justify-center items-center md:gap-x-12 gap-x-4 relative px-2">
				<h1 className="font-semibold text-lg">UNSERE MENÜS</h1>
				<img src="./logo_new.png" alt="Logo" className="w-20 h-20" />
				<h1 className="font-semibold text-lg">ÜBER LUNCH4Y0U</h1>
				<button className="bg-[#E11173] py-2 px-4 text-2xl text-white absolute right-10">AKTION</button>
			</div>
			<div className="hidden md:block">
				<div className="bg-[#E11173] flex justify-center py-4 text-white text-sm font-semibold md:gap-x-12 gap-x-4 overflow-scroll">
					{
						menuData.map((val, key) => {
							return (
								<div className='cursor-pointer' key={key}>
									<div>{val.title}</div>
								</div>
							)
						})
					}
				</div>
			</div>
			<div className="md:hidden">
				<div className="bg-[#E11173] flex justify-end px-4 py-2 text-white text-sm font-semibold">
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" width="30" height="30" viewBox="0 0 24 24">
							<path fill="#ffffff" d="M13.4,12l6.3-6.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4 l6.3,6.3l-6.3,6.3C4.1,18.5,4,18.7,4,19c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.4,0.3,0.7,0.3 s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z" />
						</svg>
					</button>
				</div>
				<div className="flex flex-col px-4 bg-[#E11173] gap-y-2 pb-2">
					{
						show ? (
							menuData.map((val, key) => {
								return (
									<div className="text-white cursor-pointer text-lg" key={key}>
										<div>{val.title}</div>
									</div>
								)
							})) : ""
					}
				</div>
			</div>
		</div>
	)
}

export default Navbar;