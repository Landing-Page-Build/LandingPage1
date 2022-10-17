import { useState } from 'react';
import HeartIcon from '../Icons/HeartIcon.svg';
import ListIcon from '../Icons/ListIcon';
import CloseIcon from '../Icons/CloseIcon';
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
	const [show, setShow] = useState(false);

	return (
		<div>
			<div className="bg-[#232b36] py-2 px-2">
				<div className="grid md:grid-cols-2 md:text-2xl text-lg">
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
			<div className={`flex text-black justify-center items-center md:gap-x-12 gap-x-4 relative px-2`}>
				<div className="flex justify-end px-4 text-sm font-semibold items-center absolute left-5 md:hidden">
					{
						show ? (
							<button onClick={() => setShow(false)}>
								<CloseIcon />
							</button>
						) : (
							<button onClick={() => setShow(true)} className="flex justify-center items-center">
								<ListIcon />
							</button>
						)
					}
				</div>
				<button className="font-semibold text-lg focus:bg-[#E11173] p-2 hidden md:block">UNSERE MENÜS</button>
				<img src="./logo_new.png" alt="Logo" className="w-20 h-20" />
				<button className="font-semibold text-lg focus:bg-[#E11173] p-2 hidden md:block">ÜBER LUNCH4Y0U</button>
				<button className="bg-[#E11173] py-2 md:px-4 px-2 md:text-2xl text-xl text-white absolute right-10">AKTION</button>
				<img src="https://lunch4you.de/frontend/img/karoc.png" className="absolute right-20" alt="Not found" />
			</div>
			<div className={`bg-white w-full absolute overflow-hidden transform transition-all duration-150 ease-in-out ${show ? 'h-24' : 'h-0'}`}>
				<div className="flex flex-col items-start">
					<button className="w-full font-semibold text-lg focus:bg-[#E11173] focus:outline-none p-2">UNSERE MENÜS</button>
					<button className="w-full font-semibold text-lg focus:bg-[#E11173] focus:outline-none p-2">ÜBER LUNCH4Y0U</button>
				</div>
			</div>
			<div className="bg-[#E11173] flex py-4 px-4 text-white text-sm font-semibold overflow-scroll">
				<div className="mx-auto flex gap-x-4">
					{
						menuData.map((val, key) => {
							return (
								<div className='cursor-pointer' key={key}>
									<div className='whitespace-nowrap'>{val.title}</div>
								</div>
							)
						})
					}
				</div>
			</div>
			{/* <div className="md:hidden">
				<div className="bg-[#E11173] flex justify-end px-4 py-2 text-white text-sm font-semibold items-center">
					{
						show ? (
							<button onClick={() => setShow(false)}>
								<CloseIcon />
							</button>
						) : (
							<button onClick={() => setShow(true)} className="flex justify-center items-center">
								<ListIcon />
							</button>
						)
					}
				</div>
				{
					show ? (
						<div className="flex flex-col px-4 bg-[#E11173] gap-y-2 pb-2">
							{
								menuData.map((val, key) => {
									return (
										<div className="text-white cursor-pointer text-lg" key={key}>
											<div>{val.title}</div>
										</div>
									)
								})
							}
						</div>
					) : ""
				}
			</div> */}
		</div>
	)
}

export default Navbar;