import BasicAccordion from "./BasicAccordion";
import PurpleButton from "./PurpleButton";

const FAQ = () => {
	return (
		<div className="
			flex 
		    flex-col
		    justify-center
			bg-base-do-fundo
			px-[1rem] tablet:px-[2rem] desktop:px-[4rem] cellphone:px-[8.593px]
			py-[.25rem] tablet:py-[.5rem] desktop:py-[1.5rem] cellphone:py-[9.504px]
			w-[calc(100% - 8rem)]
		">
			<h1 className="
				font-roboto 
				text-base cellphone:text-[1.5rem] tablet:text-[1.4rem] desktop:text-[2.3rem]
				font-bold
				tracking-normal
				text-center
				red_blue_gradient
				pb-2
				mb-[80px] cellphone:mb-[32px]
				mt-[104px]  tablet:mt-[64px] cellphone:mt-[32px]
				">
				Perguntas Frequentes
			</h1>
			<div>
				<BasicAccordion />
			</div>

			<div className="flex justify-center mt-16 mb-16" >
				<PurpleButton text="cadastrar" />
			</div>

		</div>
	);
};

export default FAQ;
