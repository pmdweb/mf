import React from "react";
import Image from "next/image";

const Banner1 = () => {
	return (
		<div className="w-[964px] h-[598px] flex pl-6 ">
			<div className="w-[180px] h-[598px] flex flex-col justify-center items-center mr-4">
				<Image
					width={180}
					height={240}
					src="/assets/images/imagem1.png"
					alt="imagem1"
					className="mb-4 rounded-[14px]"
				/>
			</div>

			<div className="w-[180px] h-[598px] flex flex-col  gap-4  mr-4 ">

				<Image
					width={180}
					height={164}
					src="/assets/images/imagem2.png"
					alt="imagem2"
					className="rounded-[14px] mb-4 mt-[38px]"
				/>
				<Image
					width={180}
					height={240}
					src="/assets/images/imagem3.png"
					alt="imagem3"
					className="rounded-[14px]"
				/>
			</div>

			<div className=" flex-col inline-flex items-start  mr-4 mb-0">
				<Image
					width={180}
					height={240}
					src="/assets/images/imagem4.png"
					alt="imagem4"
					className="mb-4 mt-[85px] rounded-[14px]"
				/>
				<Image
					width={180}
					height={240}
					src="/assets/images/imagem5.png"
					alt="imagem5"
					className="rounded-[14px] mb-0 "
				/>
			</div>

			<div className="w-[180px] h-[598px] flex flex-col justify-center items-center gap-4 mr-4">
				<Image
					width={180}
					height={240}
					src="/assets/images/imagem6.png"
					alt="imagem6"
					className="mb-4 mt-0 rounded-[14px] "
				/>
				<Image
					width={180}
					height={240}
					src="/assets/images/imagem7.png"
					alt="imagem7"
					className="rounded-[14px]  mb-24"
				/>
			</div>

			<div className="w-[180px] h-[598px] flex flex-col mt-[5.3125rem]  ">
				<Image
					width={180}
					height={240}
					src="/assets/images/imagem8.png"
					alt="imagem8"
					className="mb-4 rounded-[14px] "
				/>
				<Image
					width={180}
					height={240}
					src="/assets/images/imagem9.png"
					alt="imagem9"
					className="rounded-xl  "
				/>
			</div>
		</div>
	);
};

export default Banner1;
