import React from "react";
import PurpleButton from "./PurpleButton";
import MiniLogo from "./MiniLogo";
import { Button } from "@mui/material";

const Nav = () => {
	return (
		<nav className="
			flex justify-between
			bg-base-do-fundo
			px-[1rem] tablet:px-[2rem] desktop:px-[4rem]
			py-[.25rem] tablet:py-[.5rem] desktop:py-[1.5rem]
			w-[calc(100% - 8rem)]
		">
			<MiniLogo text='logo' logo='logo2' />
			<div className="hidden desktop:block" >
				<PurpleButton text='Secondary' link='http://google.com' variant='outlined' /> 
			</div>

		</nav>
	);
};

export default Nav;