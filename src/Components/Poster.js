import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import noImage from '../image/noImage.jpg';

const Container = styled.div``;

const RatingBox = styled.div`
  top: 165px;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.2s linear;
`;

const Rating = styled.div``;

const RatingStar = styled.span`
  font-size: 16px;
  color: #ffc312;
  text-shadow: 0.2px 0.2px 3px white, 0.2px 0.2px 3px green;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 2px;
  background-position: center center;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
    box-shadow: 0.1px 0.1px 5px yellow;
    transition: box-shadow 0.2s ease-in-out;

    ${RatingBox} {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  display: block;
  padding-top: 3px;
  font-size: 14px;
`;

const Year = styled.div`
  font-size: 12px;
  padding-top: 3px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl ? `https://image.tmdb.org/t/p/w200${imageUrl}` : noImage
          }
        />
        <RatingBox>
          <Rating>
            <RatingStar role="img" aria-label="rating">
              ★
            </RatingStar>
            {''} {rating}/10
          </Rating>
        </RatingBox>
        <Title>
          {title.length > 15 ? `${title.substring(0, 16)}...` : title}
        </Title>
        <Year>{year}</Year>
      </ImageContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
};

export default Poster;
