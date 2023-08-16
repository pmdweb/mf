import Image from "next/image";

const MiniLogo = ({ text, logo }) => {
	const imageLink = "/../public/assets/images/" + logo + ".png";
	return (
		<div>
			<Image alt={text} src={imageLink} width={64} height={42} />
		</div>
	);
};

export default MiniLogo;
