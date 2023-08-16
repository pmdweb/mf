"use client"
import CarouselTrack from "./CarouselTrack"

const CarouselContainer = () => {
	const items = {
		'itemSize': 300,
		'gapSize': 40,
		'toShow': 3.5,
		'item':[
			{ 'id': 1, 'title': 'Item 1', 'content': 'Content for Item 1', 'link': '/assets/images/servicos01.png'},
			{ 'id': 2, 'title': 'Item 2', 'content': 'Content for Item 2', 'link': '/assets/images/servicos02.png'},
			{ 'id': 3, 'title': 'Item 3', 'content': 'Content for Item 3', 'link': '/assets/images/servicos03.png'},
			{ 'id': 4, 'title': 'Item 4', 'content': 'Content for Item 4', 'link': '/assets/images/servicos04.png'},
			{ 'id': 5, 'title': 'Item 5', 'content': 'Content for Item 5', 'link': '/assets/images/servicos01.png'},
			{ 'id': 6, 'title': 'Item 6', 'content': 'Content for Item 6', 'link': '/assets/images/servicos02.png'},
			{ 'id': 7, 'title': 'Item 7', 'content': 'Content for Item 7', 'link': '/assets/images/servicos03.png'},
			{ 'id': 8, 'title': 'Item 8', 'content': 'Content for Item 8', 'link': '/assets/images/servicos04.png'},
			{ 'id': 9, 'title': 'Item 9', 'content': 'Content for Item 9', 'link': '/assets/images/servicos01.png'},
			{ 'id': 10, 'title': 'Item 10', 'content': 'Content for Item 10', 'link': '/assets/images/servicos02.png'}
		]
	}

	return (
		<div className="max-w-[90rem] overflow-x-hidden">
			<CarouselTrack items={items} />
		</div>
	);
};

export default CarouselContainer