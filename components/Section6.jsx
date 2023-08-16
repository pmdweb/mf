import { Link,Grid } from "@mui/material"
import MyQuestions from "./MyQuestions"


const Section6 = () => {
	return (
		<Grid container
			className="desktop:flex  desktop:p-16 desktop:items-start desktop:self-stretch text-white  desktop:gap-0
		 			tablet:px-6 tablet:py-16 tablet:gap-10 
				    cellphone:px-4 cellphone:py-8 cellphone:gap-6
		            ">
			<Grid item cellphone={12} tablet={12} desktop={4}>
				<Grid container  >
					<Grid item cellphone={12} >Serviços </Grid>
					<Grid item cellphone={12}>
				 	<ul className=" list-none grid  tablet:grid-cols-3 desktop:grid-cols-2 no-underline  m-0 p-0" style={{ marginBottom: "10px" }} >
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer"  }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer"  }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							
						</ul>
						<div className="desktop:hidden cellphone:w-full tablet:w-[672px] cellphone:border-b tablet:border-b cellphone:border-linha-footer tablet:border-linha-footer cellphone:border-solid tablet:border-solid "></div>
					</Grid>
				</Grid>
			</Grid>
			<Grid item cellphone={12} tablet={12} desktop={4}>
				<Grid container  >
					<Grid item cellphone={12} >Informações </Grid>
					<Grid item cellphone={12}>
				 	<ul className=" list-none grid  tablet:grid-cols-3 desktop:grid-cols-2 no-underline  m-0 p-0" style={{ marginBottom: "10px" }} >
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
							<li><Link color="rgba(255, 255, 255, 0.75)" style={{ textDecoration: "underline transparent", cursor: "pointer" }}>Lorem ipsum</Link></li>
						</ul>
						<div className="desktop:hidden cellphone:w-full tablet:w-[672px] cellphone:border-b tablet:border-b cellphone:border-linha-footer tablet:border-linha-footer cellphone:border-solid tablet:border-solid "></div>

					</Grid>
				</Grid>
			</Grid>
			<Grid item cellphone={12} tablet={12} desktop={4} className="flex justify-end" >
		 	<MyQuestions />
	 		</Grid>
		</Grid>
	);
};

export default Section6
