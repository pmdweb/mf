
import ArrowDropDownOutlined from "@mui/icons-material/ArrowDropDownOutlined"
import { Typography } from "@mui/material"
import CarouselContainer from "./carousel/CarouselContainer"
import CategoryCard from "./CategoryCard"
import LandingCard from "./LandingCard"
import PurpleButton from "./PurpleButton"

const Section3 = () => {
	const chipOrange = '#F85412'
	const chipGreen = '#5CC46C'
	const chipYellow = '#FCDC2C'
	const chipBlue = '#3380BF'
	const mocText = 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' //TODO Remover mock
	const link = [
		'/assets/images/servicos01.png',
		'/assets/images/servicos02.png',
		'/assets/images/servicos03.png',
		'/assets/images/servicos04.png']

	return (
		<>
			<div className="
			w-full
			mx-6 cellphone:mx-6 tablet:mx-3
			desktop:flex desktop:justify-between
		">
				<h1 className="
				font-roboto 
				text-base cellphone:text-[1.5rem] tablet:text-[1.4rem] desktop:text-[3.5rem]
				font-bold
				tracking-normal
				text-center desktop:text-left
				text-[#1e1e1e]
				pb-2
				desktop:w-[44.75rem]
				desktop:ml-16
				desktop:mt-[5rem]
				desktop:mb-[10rem]
				z-[0]
				">
					Serviços que você pode oferecer na
					<span className="relative z-[0]">&nbsp;plataforma
						<span className="absolute bottom-[2px] left-[20px] bg-[#6E36DF] w-[13.3rem] h-[1rem] z-[-1]"></span>
					</span>
				</h1>
				<div
					className="font-roboto
					text-grafite-80
					text-center
					align-middle
					h-full
					desktop:w-[550px]
					desktop:mt-[8rem]
			">
				</div>
			</div>
			<div
				className="
				bg-fundo-dark
				relative
			">
				<div className="absolute -top-24 left-[19rem]">
					<CarouselContainer />
				</div>
			</div>

			<div className="
				bg-fundo-dark
				w-full
				font-roboto
				text-center
				align-middle
				py-[1rem]
				px-[10rem]">
				<h1 className="font-roboto font-bold tracking-normal
						text-center 
						text-base cellphone:text-[1rem] tablet:text-[1.4rem] desktop:text-[4rem]
						text-white
						bg-fundo-dark
						gap-16
						pb-6
						pt-60">
					Ofereça serviços para o Brasil inteiro<br /> com <span className="blue_green_gradient" >mais visualizações.</span>
				</h1>
			</div>
			<div className="
				bg-fundo-dark
				text-[rgba(255,255,255,.75)]
				w-full
				font-roboto
				text-base
				font-normal
				text-center
				align-middle
				py-4
				px-16">
				Veja nossos termos e políticas
				<br /><br />
				<PurpleButton text='Cadastrar' link='http://localhost:3000/landing' />
				<br /><br />
				<ArrowDropDownOutlined />
			</div>
		</>
	)
}

export default Section3