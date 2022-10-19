import { FaFacebookSquare } from "react-icons/fa";
import Instagram from "../Icons/Instagram"

const Footer = () => {
	return (
		<>
			<div className="py-4 bg-[#E11173] flex justify-center">
				<div className="flex items-center gap-2">
					<FaFacebookSquare
						size={45}
						color={"white"}
						style={{ marginLeft: 20 }}
					/>
					<Instagram />
				</div>
			</div>
			<div className="bg-black lg:px-16 px-8 py-8 grid sm:grid-cols-3 text-center">
				<div className="text-white text-xl">
					<p>WIDERRUF</p>
					<p>AGB</p>
					<p>IMPRESSUM</p>
					<p>DATENSCHUTZ</p>
				</div>
				<div className="text-white text-xl">
					<p>WIDERRUF</p>
					<p className="text-lg">Bürgermeister-Ebert-Straße 1</p>
					<p className="text-lg">6124 Eichenzell</p>
					<p>T: 0800 7767677</p>
					<p>M: info@lunch4you.de</p>
				</div>
				<div className="text-white text-xl">
					<p>SICHERE ZAHLUNGSARTEN</p>
					<img className="mx-auto" src="./paymentCards.png" alt="" />
				</div>
			</div>
		</>
	)
}

export default Footer;