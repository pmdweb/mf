import ArrowDropDownOutlined from "@mui/icons-material/ArrowDropDownOutlined"
import { Typography } from "@mui/material"
import DashedCircle from "./DashedCircle"
import LandingCard from "./LandingCard"
import PurpleButton from "./PurpleButton"

const Section4 = () => {
	const chipOrange = '#F85412'
	const chipGreen = '#5CC46C'
	const chipYellow = '#FCDC2C'
	const chipBlue = '#3380BF'
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
				pb-4
				pt-6
				desktop:w-[32rem]
				desktop:ml-16
				desktop:mt-[6.6rem]
				desktop:mb-[5.5rem]
				z-[0]
				">
					O que nós fazemos por
					<span className="relative z-[0]">&nbsp;você
						<span className="absolute bottom-[2px] left-[20px] bg-[#6E36DF] w-[7.3rem] h-[1rem] z-[-1]"></span>
					</span>
				</h1>
				<div
					className="font-roboto
					text-grafite-80
					text-center
					align-middle
					h-full
					desktop:w-[550px]
					desktop:mt-[12rem]
					leading-tight
					tablet:mb-16
					cellphone:mb-16
			">
					<Typography xs={{ verticalAlign: 'middle', lineHeight: '1' }} className=" text-black">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
				</div>
			</div>
			<div className="relative">
				<div className="absolute -top-60 left-[1200px]">
					<DashedCircle />
				</div>
			</div>
			<div
				className="
				bg-fundo-dark
				w-full
				px-20
				pt-20
				pb-14
				relative
				z-[20]
			">
				<div className="
					absolute
					-top-12
					cellphone:left-4
					tablet:left-10
				">
					<div className="
						flex
						gap-2
						w-[80rem]
						
						"
					>
						<LandingCard title="ANUNCIAMOS NA PLATAFORMA" body='Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' chipColor={chipOrange} />
						<LandingCard title="DEIXAMOS TUDO ORGANIZADO" body='Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' chipColor={chipGreen} />
						<LandingCard title="AMBIENTE FAVORÁVEL" body='Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' chipColor={chipYellow} />
						<LandingCard title="MARKETING" body='Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.' chipColor={chipBlue} />
					</div>
				</div>
			</div>

			<div className="
				bg-fundo-dark
				w-full
				font-roboto
				text-center
			    text-white
				align-middle
				py-8
				px-4
				desktop:px-[16rem]">
				Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				<br /><br /><br />
				<PurpleButton text='Cadastrar' link='http://localhost:3000/landing' />
				<br /><br />
				<ArrowDropDownOutlined />
			</div>
		</>
	)
}

export default Section4
