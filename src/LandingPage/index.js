import Pumpkin from "../Icons/Pumpkin.svg";

const LandingPage = () => {
	return (
		<div>
			<img className="w-full" src="/lunch4you_rabatt.png" alt="" />
			<div className="bg-[#E11173] px-24 max-h-72 mt-10 grid grid-cols-2 py-4">
				<div className="text-white text-lg">
					<p>
						Zu Halloween haben wir jetzt ein ganz besonderes Special für euch. Probiert unsere schaurig leckeren Menüs in unserer Halloween-Probier-Box zum Super-Sparpeis!
					</p>
					<br></br>
					<p>
						Zum Beispiel unsere cremige Kürbissuppe, mit Original-Kürbissen aus der Rhön. Oder unsere handgerollten Rinderrouladen in dunkler Sauce mit Semmelknödeln und Rotkraut.
					</p>
				</div>
				<div>
					<img src={Pumpkin} alt="" /></div>
			</div>
		</div>)
}

export default LandingPage;