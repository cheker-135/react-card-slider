import React, { useState } from "react";
import "./CardSlider.css";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';


const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: image1, 
      author: "SHUBHAM",
      title: "GENSHIN IMPACT",
      topic: "Ganyu",
      description:
        "She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as the general secretary of the Liyue Qixing.",
    },
    {
      img: image2,
      author: "JAMES",
      title: "GENSHIN IMPACT",
      topic: "Venti",
      description:
        "Venti is a wandering bard and one of the Seven, known as the Anemo Archon and God of Freedom.",
    },
    {
      img: image3,
      author: "JAMES",
      title: "GENSHIN IMPACT",
      topic: "Venti",
      description:
        "Venti is a wandering bard and one of the Seven, known as the Anemo Archon and God of Freedom.",
    },
    {
      img: image4,
      author: "JAMES",
      title: "GENSHIN IMPACT",
      topic: "Venti",
      description:
        "Venti is a wandering bard and one of the Seven, known as the Anemo Archon and God of Freedom.",
    },
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel">
      <div
        className="list"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="item">
            <img src={slide.img} alt={slide.topic} />
            <div className="content">
              <h3 className="author">{slide.author}</h3>
              <h1 className="title">{slide.title}</h1>
              <h2 className="topic">{slide.topic}</h2>
              <p className="description">{slide.description}</p>
              <div className="buttons">
                <button
                  onClick={() =>
                    window.open(
                      "https://shubhamzone.vercel.app/projects",
                      "_blank"
                    )
                  }
                >
                  SEE MORE
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/imshubhamchavan/", "_blank")
                  }
                >
                  GITHUB
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={goToPrevSlide}>
          &lt;
        </button>
        <button id="next" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
