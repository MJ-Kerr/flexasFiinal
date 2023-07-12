import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaPlay, FaPause, FaExpand, FaCompress } from 'react-icons/fa';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './carousel.css';

const CarouselLg = () => {
    const isMobile = useMediaQuery({ maxWidth: 900 });
    const handleFullScreen = useFullScreenHandle();

    const renderPlayPauseButton = (onClick, isPlaying) => (
        <button onClick={onClick}>
            {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
    );

    const renderFullscreenButton = (onClick, isFullscreen) => (
        <button onClick={onClick}>
            {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
    );

    if (isMobile) {
        return (
            <div className="slider" id="pictures">
                <FullScreen handle={handleFullScreen}>
                    <Carousel autoPlay renderPlayPauseButton={renderPlayPauseButton} renderFullscreenButton={renderFullscreenButton}>
                        <div>
                            <img src="https://i.imgur.com/qpCi2kk.jpg" alt="dj" />
                        </div>
                        <div>
                            <img src="https://i.imgur.com/6WJLGGv.jpg" alt="dj" />
                        </div>
                        <div>
                            <img src="https://i.imgur.com/KvuqyEy.jpg" alt="dj" />
                        </div>
                        <div>
                            <img src="https://i.imgur.com/jpkviKW.jpg" alt="dj" />
                        </div>
                        <div>
                            <img src="https://i.imgur.com/69Bftc2.jpg" alt="dj" />
                        </div>
                        <div>
                            <img src="https://i.imgur.com/BloZbUk.jpg" alt="dj" />
                        </div>
                        <div>
                            <img src="https://i.imgur.com/DDF8OIJ.jpg" alt="dj" />
                        </div>
                        <div>
                            <img src="https://i.imgur.com/7HYZXo0.jpg" alt="dj" />
                        </div>
                        <div>
                            <img src="https://i.imgur.com/iITlt9g.jpg" alt="dj" />
                        </div>
                    </Carousel>
                </FullScreen>
            </div>
        );
    }

    return (
        <div className="carousel-container" id="pictures">
            <div className="carousel-lg">
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
            </div>
        </div>
    );
};

export default CarouselLg;
