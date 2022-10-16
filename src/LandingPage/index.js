import Pumpkin from "../Icons/Pumpkin.svg";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div>
			<img className="w-full" src="/lunch4you_rabatt.png" alt="" />
			<div className="bg-[#E11173] px-24 h-80 mt-10 grid grid-cols-2 py-4">
				<div className="text-white text-3xl">
					<p>
						Zu Halloween haben wir jetzt ein ganz besonderes Special für euch. Probiert unsere schaurig leckeren Menüs in unserer Halloween-Probier-Box zum Super-Sparpeis!
					</p>
					<br></br>
					<p>
						Zum Beispiel unsere cremige Kürbissuppe, mit Original-Kürbissen aus der Rhön. Oder unsere handgerollten Rinderrouladen in dunkler Sauce mit Semmelknödeln und Rotkraut.
					</p>
				</div>
				<div className="-mt-44">
					<img src={Pumpkin} alt="" className="w-[150rem]" />
				</div>
			</div>
			<div className="flex px-24 h-80 mt-10 pb-12 items-center">
				<div>
					<p className="text-[#E11173] text-4xl">
						Nutze Jetzt deine
					</p>
					<p className="text-[#E11173] text-4xl">
						Rabattcode: Halloween2022!
					</p>
				</div>
			</div>
			<img className="w-full" src="/halloween.png" alt="" />
			<div className="py-4">
				<div className="text-center text-[#E11173] text-4xl">
					<span>PROBIERE UNSERE HALLOWEEN PRODUKTE!</span>
				</div>
			</div>
			<div className="px-24 py-8 bg-[#E11173]">
				<p className="text-3xl text-white">
					Ob zuhause, oder im Büro - in nur 4min hast du Leckere Gerichte auf dem Teller -ganz nach deinem Stil und deinem Geschmack. Vorbei ist die Zeit, in der du unnötiges Geld ausgegeben hast, um teure Zutaten zu kaufen, die sowieso dann nur noch Platz im Schrank wegnehmen. Und dazu noch - kein stressiges einkaufen und zubereiten mehr. Leckere Fertiggericht, die vielfältig und lecker sind. Einfach für zu Hause.
				</p>
			</div>
			<div className="px-24 py-4 grid grid-cols-4">
				<div className="col-span-3">
					<p className="text-[#E11173] text-4xl py-2">wie LanGe isc mein Menü HaLCBar?</p>
					<p className="text-xl">
						Unsere Menüs haben ab Produktionsdatum eine Mindesthaltbarkeit von 5 Tagen im Kühlschrank bei 4°. Gerne kannst du unsere Menüs aber auch einfrieren - du kannst einfach die komplette Packung in dein Gefrierfach packen. Du hast dann die Möglichkeit dein Menü am Vorabend langsam im Kühlschrank auftauen zu lassen. Oder auch direkt in die Mikrowelle zu stellen. Die Zubereitungszeit in der Mikrowelle erhöht sich bei eingefrorenen Gerichten und Power deiner Mikrowelle auf 8min.
					</p>
					<p className="text-[#E11173] text-4xl py-2">WIE BEREITE ICH MEINE MENUS ZU?</p>
					<p className="text-xl">
						Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consecte
					</p>
					<p className="text-[#E11173] text-4xl py-2">WIE BEREITE ICH MEINE MENUS ZU?</p>
					<p className="text-xl">
						Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consecte
					</p>
				</div>
				<div>

				</div>
			</div>
			<Footer />
		</div>)
}

export default LandingPage;