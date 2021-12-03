import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CarouselCard from './CarouselCard'
import { ReactComponent as ArrowRight } from "../Images/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "../Images/ArrowLeft.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CenterMode = () => {

    const [cards, setCards] = useState([
        <CarouselCard name="Andrei" text="Mi-am luat în sfârșit restanța!" index={1} />,
        <CarouselCard name="Mihai" text="Predare excelentă!" index={2} />,
        <CarouselCard name="George" text="Dacă nu ar fi fost Bazaroo n-aș fi reușit în viață!" index={3} />,
    ]);

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <ArrowRight className="h-6 w-6 md:h-10 md:w-10" />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <ArrowLeft className="h-6 w-6 md:h-10 md:w-10" />
            </div>
        );
    };

    const settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow type="next" />,
        prevArrow: <PrevArrow type="prev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <div>
            <p className="text-6xl pb-16">Ce zic utilizatorii? </p>
            <Slider {...settings} >
                {cards}
            </Slider>
        </div>
    );
}

export default CenterMode;