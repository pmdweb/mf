"use client"
import Form from "./Form";
import Banner1Fotos from "./Banner1Fotos";

import React from 'react';
import PreRegisterForm from "./PreRegisterForm";

const Section1 = () => {
	return (
		<div className="
			cellphone:flex cellphone:justify-center
			cellphone:bg-[url(/assets/images/imagem2.png)] cellphone:bg-no-repeat 
			cellphone:bg-contain cellphone:bg-top
			desktop:flex desktop:justify-start desktop:pl-16 desktop:bg-none
			w-full
		 	">
			<div className="
				flex justify-center
			">
				<PreRegisterForm />
			</div>
			<div className="
				hidden
				desktop:block 
				mt-4
				mr-6
			">
				<Banner1Fotos />
			</div>
		</div>
	);
};

export default Section1;


// tablet:max-[1439px]:bg-[url(/assets/images/imagem2.png)]
// bg-no-repeat bg-cover bg-center
// tablet:max-[1439px]:w-[100vw]
// tablet:max-[1439px]:h-[362px]
// cellphone:max-[719px]:w-[100vw]
// cellphone:max-[719px]:bg-[url(/assets/images/imagem2.png)]

// tablet:max-[1439px]:hidden cellphone:max-[719px]:hidden