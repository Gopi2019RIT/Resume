import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//import { BsLink } from "react-icons/bs";
import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      img:"/profile/download (1).jpg",
      name: "Restaurant Management System.",
      tech: [ "HTML", "CSS","MSSQL"],
     
    },
    {
      img:"/profile/download.jpg",
      name: "Ration Shop Management System",
      tech: ["HTML","CSS","JS","MSSQL"],
      
    },
    {
      img: "/profile/download(2).jpg",
      name: "MINESWEEPER GAME",
      tech: ["JAVA SWING","JAVA API"],
      //link: "https://waminipatil.github.io/expense-tracker/",
    },
    {
      img:"/profile/downloads.jpg",
      name: "VISUALIZING AND PREDICTING HEART DISEASE WITH INTERACTIVE DASHBOARD",
      tech: ["PYTHON","DJANGO", "HTML", "CSS"],
    },
    {
      img:"/profile/water.jpg",
      name: "WATER FLOW INDICATOR",
      tech: ["EMBEDDED"],
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.controls}>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {projects.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={process.env.PUBLIC_URL + card.img}
              alt={card.name}
              className={styles.card_img}
            />
            <div className={styles.text_info}>
              <div className={styles.card_header}>
                <h2>{card.name}</h2>
              </div>
              <div className={styles.techContainer}>
                {card.tech.map((item) => (
                  <div className={styles.tech}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCard;
