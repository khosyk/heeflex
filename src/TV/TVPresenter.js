import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Error from 'Components/Message';
import Poster from 'Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
  margin-left: 5%;
  margin-top: 30px;
`;

const TVPresenter = ({ airingToday, topRated, popular, error, loading }) =>
  <>
  <Helmet><title>TV｜HEEFLEX</title></Helmet>
  {loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title="Popular TV Shows">
          {popular.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)} // stirng 에서 4번째까지 불러오는거 년도 만 필요하기 때문
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today TV Shows">
          {airingToday.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)} // stirng 에서 4번째까지 불러오는거 년도 만 필요하기 때문
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated TV Shows">
          {topRated.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)} // stirng 에서 4번째까지 불러오는거 년도 만 필요하기 때문
            />
          ))}
        </Section>
      )}
      {error ? <Error text={error} color="#ffc312" /> : null}
    </Container>
  )}
  </>
  ;

TVPresenter.propTypes = {
    airingToday: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default TVPresenter;
