import HeartIcon from '../Icons/HeartIcon.svg';
import Expressversand from '../Icons/Expressversand.svg';

const Navbar = () => {
	return (
		<div>
			<div className="bg-[#232b36] py-2">
				<div className="grid grid-cols-2 text-2xl">
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
			<div className="flex text-black">
				<h1>UNSERE MENÜS</h1>
				<h1>UNSERE MENÜS</h1>
			</div>
		</div>
	)
}

export default Navbar;