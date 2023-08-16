"use client"
import Grid from "@mui/material/Unstable_Grid2"
import { styled } from "@mui/material/styles"
import Nav from "@components/Nav"
import Section1 from "@components/Section1"
import Section2 from "@components/Section2"
import Section3 from "@components/Section3"
import Section4 from "@components/Section4"
import Section5 from "@components/Section5"
import Section6 from "@components/Section6"
import Footer from "@components/Footer"


const minifiedLogo = styled(Grid)(({ theme }) => ({
	customMediaQuery: {
		[theme.breakpoints.down("cellphone")]: {
			display: "none",
		},
		[theme.breakpoints.down("tablet")]: {
			display: "none",
		},
	},
}));

const Landing = () => {
	return (
		<div className="
			w-full
			cellphone:w-[22.5rem]
			tablet:w-[45rem]
			desktop:w-[90rem]
			min-h-screen
			overflow-x-hidden
		">
			<section className="flex justify-center bg-base-do-fundo w-full overflow-hidden">
				<Section1 />
			</section>
			<section className="flex justify-center bg-base-do-fundo w-full">
				<Section2 />
			</section>
			<section className="flex justify-center bg-base-do-fundo w-full flex-wrap">
				<Section3 />
			</section>
			<section className="flex justify-center bg-base-do-fundo w-full flex-wrap">
				<Section4 />
			</section>
			<section className="flex justify-center bg-base-do-fundo w-full">
				<Section5 />
			</section>
			<section className="flex justify-center bg-fundo-dark w-full">
				<Section6 />
			</section>
			<Footer />
		</div>
	);
};

export default Landing;
