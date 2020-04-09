import React, { useState } from "react";
import {
  Pagination,
  PaginationItems,
  Carousel,
  Slider,
  Background,
  Swipeable,
  Layout,
} from "./styles";
import classNames from "classnames";

const ImageSlider = (props) => {
  const [pagination, setPagination] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const images = [
    "static/01.jpg",
    "static/02.jpg",
    "static/03.jpg",
    "static/04.jpg",
    "static/05.jpg",
    "static/06.jpg",
    "static/07.jpg",
    "static/08.jpg",
    "static/09.jpg",
    "static/10.jpg",
    "static/11.jpg",
    "static/12.jpg",
    "static/13.jpg",
    "static/14.jpg",
    "static/15.jpg",
    "static/16.jpg",
    "static/17.jpg",
    "static/18.jpg",
    "static/19.jpg",
  ];

  const paginationCreator = () => {
    const paginationLength = Math.floor(images.length / 3);
    const totalPagination = [];
    for (let index = 0; index < paginationLength; index++) {
      totalPagination.push(
        <PaginationItems
          totalItems={paginationLength}
          key={`page-${index}`}
          className={classNames({
            active: index === pagination,
          })}
        />
      );
    }
    return totalPagination;
  };

  let width;
  const getNextSlide = (pager) => {
    const nextSlider = pagination + pager;
    const length = Math.floor(images.length / 3);
    if (nextSlider < 0) {
      return {
        page: length,
        imgWidth: width * (length - 1),
      };
    }
    if (nextSlider >= length) {
      return { page: 0, imgWidth: 0 };
    }
    return { page: nextSlider, imgWidth: translateValue + width * pager };
  };
  const changeSlide = (pager) => {
    if (!width) {
      const imgSlider = document.getElementById("slider");
      if (imgSlider) {
        width = imgSlider.offsetWidth;
      }
    }
    const next = getNextSlide(pager);
    setPagination(next.page);
    setTranslateValue(next.imgWidth);
  };

  return (
    <Layout>
      <Carousel>
        <Slider id="slider" translateValue={translateValue}>
          {images.map((image, index) => (
            <article key={`article-${index}`}>
              <img key={`image-${index}`} src={image} alt={`image-${index}`} />
              <Background />
              {/* <article key={index}>
                <Text2>{teacher.name}</Text2>
                <Text4 as="p">{teacher.description}</Text4>
                {url && <a href={url}>{teacher.campus.description}</a>}
              </article> */}
            </article>
          ))}
        </Slider>
      </Carousel>
      <Pagination>
        <section>{paginationCreator()}</section>
        <Swipeable>
          <img
            onClick={() => changeSlide(-1)}
            src="static/icons/arrowleft.png"
            alt="arrow-left"
          />
          <img
            onClick={() => changeSlide(1)}
            src="static/icons/arrowRight.png"
            alt="arrow-right"
          />
        </Swipeable>
      </Pagination>
    </Layout>
  );
};

export default ImageSlider;
