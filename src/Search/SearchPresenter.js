import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
  margin-left: 5%;
  margin-top: 30px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 24px;
  margin-bottom: 35px;
  border-bottom: 1px solid grey;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

// form -input 형태의 페이지, searchTerm이 입력되면 container의 searchByTerm이 작동하여
// movieResults, tvResults 의 결과를 가져온다. 여기서 중요한 점은
// handleSubmit 시 페이지 리프레쉬 안되게 하기, 각 결과의 유무를 확인하기, 에러 시 에러 메시지 나타내기

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  updateTerm,
  error,
}) => (
  <>
    <Helmet>
      <title>Search｜HEEFLEX</title>
    </Helmet>

    <Container>
      <Form onSubmit={handleSubmit} draggable="false">
        <Input
          placeholder="검색어를 입력해주세요."
          value={searchTerm}
          onChange={updateTerm}
          draggable="false"
        />
        {loading ? (
          <Loader />
        ) : (
          <div>
            {movieResults && movieResults.length > 0 && (
              <Section title="Movie Results">
                {movieResults.map((movie) => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    isMovie={true}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                  />
                ))}
              </Section>
            )}
            {tvResults && tvResults.length > 0 && (
              <Section title="TV Results">
                {tvResults.map((tv) => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    imageUrl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={
                      tv.first_air_date && tv.first_air_date.substring(0, 4)
                    } // stirng 에서 4번째까지 불러오는거 년도 만 필요하기 때문
                  />
                ))}
              </Section>
            )}
          </div>
        )}
        {error ? <Message text={error} color="#ffc312" /> : null}
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text="관련된 결과가 없습니다." color="#ED4C67" />
          )}
      </Form>
    </Container>
  </>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
