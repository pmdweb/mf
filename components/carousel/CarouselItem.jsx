import Image from "next/legacy/image"

const CarouselItem = ({item}) => {
	return (
		<div className={'w-[300px] p-0 border-0 m-0'}>
			<Image width={300} height={250} alt={'Categorias'} src={item.link} />
		</div>
	);
};

export default CarouselItem