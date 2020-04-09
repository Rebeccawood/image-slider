import styled from "styled-components";

const Carousel = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Slider = styled.section`
  display: flex;
  margin-top: 3.2rem;
  transform: translateX(-${(props) => props.translateValue}px);
  transition: transform 1s ease-out;
  width: 100%;

  & > article {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    padding: 3.2rem;
    position: relative;
    width: 25%;

    & > img {
      border-radius: 10%;
      border: 2px solid #d1b4c7;
      box-shadow: #d1b4c7 14px -13px 10px;
      height: 21.6rem;
      max-width: 100%;
      width: 21.6rem;
      object-fit: cover;
      z-index: 1;
    }
  }
`;

const Background = styled.div`
  background-color: #e6d1df;
  border-radius: 10%;
  display: block;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 75%;
`;

const PaginationItems = styled("article")`
  background-color: #d1b4c7;
  height: 0.2rem;
  margin-right: 0.4rem;
  width: ${(props) => 100 / props.totalItems}%;

  &.active {
    background-color: red;
  }
`;

const Pagination = styled.section`
  display: block;
  margin-top: 2.4rem;
  padding: 2rem 0;
  width: 100%;

  & > section {
    align-items: center;
    display: flex;
    margin-right: 6rem;
    width: 100%;
  }
`;

const Swipeable = styled.div`
  display: flex;
  margin-top: 35px;

  img {
    cursor: pointer;
    width: 10%;
  }

  img:first-child {
    margin-right: 2.4rem;
  }
`;

const Layout = styled.section`
  margin: 4.8rem;
  position: absoloute;
`;

export {
  Carousel,
  Slider,
  Background,
  PaginationItems,
  Pagination,
  Swipeable,
  Layout,
};
