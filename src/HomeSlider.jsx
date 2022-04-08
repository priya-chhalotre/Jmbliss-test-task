import React, { useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import APIUrl from "./Api";

const HomeSlider = () => {
	const sliderImage = (APIUrl.defaults.assetsURL)
	const [sliderdata, setSlider] = useState([]);
	useEffect(async () => {
		const result = await APIUrl.get(`/get_sliders`)
		setSlider(result.data);
	}, []);
	return (
		<>
			<Slider className="slider-wrapper">
				{sliderdata.map((item, index) => (
					<div
					    id={item.id}
						key={index}
						className="slider-content"
						style={{ background: `url('${sliderImage}/${item.images}') no-repeat` }}
					>
						<div className="inner">
							<h1>{item.slide_title}</h1>
							<p>{item.slide_content}</p>
						</div>
					</div>
				))}
			</Slider>
		</>
	);
}
export default HomeSlider;