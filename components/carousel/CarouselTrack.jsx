"use client"

import { useState } from "react"
import CarouselItem from "./CarouselItem"

const CarouselTrack = ({ items }) => {
	const numItens = items.item.length
	const translateSize = (items.itemSize+items.gapSize)
	const itemsToShow = items.toShow
	const trackSize = (itemsToShow * 300) + ((itemsToShow - 1) * 40)

	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
	};
	const handleNext = () => {
		setActiveIndex((prevIndex) => (activeIndex + 1 === numItens ? activeIndex : prevIndex + 1));
	};

	return (
		<>
			<div className="carousel-container flex items-center overflow-x-hidden" style={{ width: `${trackSize}px` }}>
				<div className="carousel-track">
					<div className="carousel flex gap-10" style={{ transform: `translateX(-${(activeIndex * translateSize)}px)` }}>
						{items.item.map((item, index) => (
							<div key={item.id}>
								<CarouselItem key={item.id} item={item} />
								{index === activeIndex && (
									<div className="carousel-content">
										<p>{item.content}</p>
										<h3>{item.title}</h3>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
			<button onClick={handlePrev} className="px-3 py-2 border-0 bg-gray-500 text-white font-bold rounded-full mr-1">&lt;</button>
			<button onClick={handleNext} className="px-3 py-2 border-0 bg-gray-500 text-white font-bold rounded-full">&gt;</button>
		</>
	);
}
export default CarouselTrack