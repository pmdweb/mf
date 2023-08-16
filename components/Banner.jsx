"use client"

import { Grid } from "@mui/material";
import Form from "./Form";
import FormIan from "./FormIan";


const Section = () => {
	return (
		<section>
			<Grid container xs={12}>
				<Grid item xs={12} sm={6} md={5}>
					<Form className="w-full" />
				</Grid>
				<Grid item xs={12} sm={6} md={5}>
					<FormIan className="w-full" />
				</Grid>
			</Grid>
		</section>
	);
};

export default Section;
