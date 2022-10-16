import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="py-4 bg-[#E11173] flex justify-center">
				<div className="flex">
					<FaInstagram
						style={{ paddingLeft: 50 }}
						size={30}
						color={"white"}
					/>
					<FaFacebookSquare
						size={30}
						color={"white"}
						style={{ marginLeft: 20 }}
					/>
				</div>
			</div>
			<div className="bg-black px-24 py-8 grid grid-cols-3">
				<div className="text-white text-xl">
					<Link to="/">WIDERRUF</Link>
					<p>AGB</p>
					<p>IMPRESSUM</p>
					<p>DATENSCHUTZ</p>
				</div>
				<div className="text-white text-xl">
					<p>WIDERRUF</p>
					<p>Bürgermeister-Ebert-Straße 1</p>
					<p>6124 Eichenzell</p>
					<p>T: 0800 7767677</p>
					<p>M: info@lunch4you.de</p>
				</div>
				<div className="text-white text-xl">
					<p>SICHERE ZAHLUNGSARTEN</p>
					<img src="./paymentCards.png" alt="" />
				</div>
			</div>
		</>
	)
}

export default Footer;