import Image from "next/legacy/image";
import PurpleButton from "./PurpleButton";
import MiniLogo from "./MiniLogo";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Section2 = () => {
	return (
		<section className="
			desktop:flex desktop:justify-between
			tablet:flex tablet:justify-between
			w-full
			bg-[#1e1e1e]">
			<div className="flex flex-col w-full tablet:w-1/2 desktop:w-1/2">
				<div className="ml-8 mt-8 mb-6 desktop:mb-[10rem]">
					<MiniLogo text="logo" logo="logo2" />
				</div>
				<div className="flex flex-col items-center pb-8">
					<h1 className="font-roboto font-bold tracking-normal
						text-center 
						text-base cellphone:text-[1rem] tablet:text-[1.4rem] desktop:text-[2.3rem]
						text-white
						pb-8
						desktop:pt-8
						">
						Ofereça serviços <br /> para festas com a gente.
					</h1>
					<PurpleButton text="Cadastrar" link='http://localhost:3000/landing' />
					<ArrowDropDownOutlinedIcon />
				</div>
			</div>
			<div className="
				tablet:w-1/2
				desktop:w-1/2"
			>
				<Image
					src="/assets/images/imagemFigma.png"
					width={720}
					height={850}
					alt="Banner2"
					layout="responsive"
					priority
				/>
			</div>
		</section>
	);
};



export default Section2;
