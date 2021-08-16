import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Helmet from 'react-helmet';
import Icon from '../image/HF.png';
import NoImage from '../image/noImage.jpg';
import ImdbIcon from '../image/imdb.png';
import RottenTomatoesIcon from '../image/rt.png';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  color: ${(props) => console.log(props)};
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
`;

const Cover = styled.div`
  width: 300px;
  min-width: 250px;
  height: auto;
  background-image: url('${(props) => props.posterImage}');
  background-position: center center;
  background-size: cover;
  z-index: 1;
  border-radius: 2px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Data = styled.div`
  width: 70%;
  min-width: 500px;
  margin-left: 30px;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
  text-shadow: 0.1px 0.5px 2px black;
`;

const InfoContainer = styled.div``;

const Info = styled.span`
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0.1px 0.5px 1px black;
`;

const Divider = styled.span``;

const RatingsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const Rating = styled.span`
  display: inline-block;
  padding-bottom: 1px;
  font-size: 14px;
`;

const RatingStar = styled.span`
  font-size: 16px;
  color: #ffc312;
  padding-bottom: 3px;
  text-shadow: 0.2px 0.2px 5px darkgreen;
  margin-right: 3px;
`;

const Hf = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-right: 3px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const RatingBlock = styled.div`
  display: flex;
  align-items: center;
`;

const ImdbLogo = styled.img`
  width: 40px;
  height: 35px;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 3px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const RottenTomatoesLogo = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-left: 8px;
  margin-right: 5px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Overview = styled.p`
  margin-top: 5px;
  width: 75%;
  font-size: 16px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0.1px 0.5px 1px black;
`;

const Trailer = styled.a`
  display: block;
  margin-top: 15px;
  font-size: 18px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    color: #fbc531;
    transform: translate(1px);
    text-shadow: 0.1px 0.1px 1px #44bd32, 0.1px 0.1px 1px #44bd32,
      0.1px 0.1px 1px #44bd32;
    transition: all 0.2s ease-in-out;
  }
`;

const NoTrailer = styled.div`
  margin-top: 15px;
  font-size: 18px;
`;

const CheckBlock = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CheckButton = styled.button`
  width: fit-content;
  text-align: left;
  overflow: hidden;
  min-width: 1000px;
  line-height: 20px;
  height: 24px;
  border: none;
  border-left: 2px solid white;
  cursor: pointer;
  font-size: 18px;
  background-color: transparent;
  color: white;
  font-weight: 600;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    color: #4cd137;
    transform: translateY(-1px);
    text-shadow: 0.1px 0.1px 1px #2f3640, 0.1px 0.1px 1px #2f3640,
      0.1px 0.1px 1px #2f3640;
  }
`;

const Collections = styled.div`
  width: 100%;
`;

const CollectionBlock = styled.div``;

const CollectionPostersBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
`;

const CollectionPosters = styled.img`
  width: auto;
  min-height: 200px;
  height: 50%;
  max-height: 300px;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0.1px 0.1px 1px white, 0.1px 0.1px 1px white,
    0.1px 0.1px 1px white;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  :not(:first-child) {
    margin-left: 20px;
  }
`;

const CollectionCompanies = styled.div`
  margin-top: 10px;
  font-size: 13px;
  padding-left: 8px;
  text-shadow: 0.1px 0.5px 2px black, 0.1px 0.5px 2px black;
`;

const CollectionCompaniesBlock = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 10px;
`;

const CollectionCompany = styled.li`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
`;

const CollectionCompanyLogo = styled.img`
  width: auto;
  height: 50px;
  background-color: white;
  box-shadow: 0.1px 0.1px 1px black, 0.1px 0.1px 1px black,
    0.1px 0.1px 1px black, 0.1px 0.1px 2px white;
  border-radius: 2px;
  padding: 1px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const CollectionCompanyName = styled.span`
  color: black;
  background-color: white;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid black;
  font-weight: 600;
  height: 50px;
  width: auto;
  min-width: 100px;
  max-width: 120px;
  padding: 5px;
  box-shadow: 2px 3px 1px black, 0.1px 0.1px 5px white;
  overflow-wrap: break-word;
  overflow: hidden;
`;

const TvCollectionBlock = styled.div`
  margin-top: 20px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 15px;
`;

const TvCollectionSeason = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
`;

const TvCollectionSeasonPoster = styled.img`
  width: auto;
  height: 180px;
  max-width: 125px;
  border-radius: 2px;
  box-shadow: 0.1px 0.1px 1px white, 0.1px 0.1px 1px white,
    0.1px 0.1px 1px white;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  :not(:first-child) {
    margin-left: 20px;
  }
`;

const TvCollectionSeasonInfo = styled.div`
  position: absolute;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  text-shadow: 0.1px 0.5px 2px black, 0.1px 0.5px 2px black,
    0.1px 0.5px 2px black;
`;

const TvCollectionSeasonName = styled.span``;

const TvCollectionSeasonDate = styled.span``;

/// collection 포스터 추가하고 tv 채널 업데이트 하면 종료.

const DetailPresenter = ({
  result,
  imdbResult,
  loading,
  error,
  isLoaded,
  handleLoad,
  isMovie,
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Helmet>
            <title>{`${
              result.original_title
                ? result.original_title
                : result.original_name
            }｜HEEFLEX`}</title>
          </Helmet>
          <Backdrop
            bgImage={
              result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                : NoImage
            }
          />
          <Content>
            <Cover
              posterImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                  : NoImage
              }
            />
            <Data>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <InfoContainer>
                <Info>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Info>
                <Divider> ㆍ </Divider>
                <Info>
                  {result.runtime ? result.runtime : result.episode_run_time}{' '}
                  min
                </Info>
                <Divider> ㆍ </Divider>
                <Info>
                  {result.genres &&
                    result.genres.map((genres, index) =>
                      index === result.genres.length - 1
                        ? genres.name
                        : `${genres.name} / `
                    )}
                </Info>
                {/* genres의 index 0,1,2... length는 1~ 각 오브젝트를 길이와 비교하여, 마지막 오브젝트에 슬래쉬를 뺌 */}
                <RatingsContainer>
                  <Hf
                    role="img"
                    aria-label="HEEFLEX"
                    alt="HEEFLEX logo"
                    src={Icon}
                  />
                  <RatingStar role="img" aria-label="rating">
                    ★
                  </RatingStar>
                  <Rating>
                    {result.vote_average
                      ? ` ${result.vote_average} / 10`
                      : 'Not Rated'}
                  </Rating>
                  {imdbResult ? (
                    <RatingBlock>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.imdb.com/title/${result.imdb_id}/`}
                        alt="go to imdb"
                      >
                        <ImdbLogo
                          role="img"
                          aria-label="imdb logo"
                          alt="imdb logo"
                          src={ImdbIcon}
                        />
                      </a>
                      <RatingStar role="img" aria-label="rating">
                        ★
                      </RatingStar>
                      <Rating>
                        {imdbResult.imDb
                          ? ` ${imdbResult.imDb} / 10`
                          : 'Not Rated'}
                      </Rating>
                      <RottenTomatoesLogo
                        role="img"
                        aria-label="RottenTomatoes logo"
                        alt="RottenTomatoes logo"
                        src={RottenTomatoesIcon}
                      />
                      <RatingStar role="img" aria-label="rating">
                        ★
                      </RatingStar>
                      <Rating>
                        {imdbResult.rottenTomatoes
                          ? ` ${imdbResult.rottenTomatoes} / 100`
                          : 'Not Rated'}
                      </Rating>{' '}
                    </RatingBlock>
                  ) : null}
                </RatingsContainer>
                <Overview>
                  {result.overview
                    ? result.overview
                    : "Overview hasn't updated yet"}
                </Overview>
                {result.videos.results.length > 0 ? (
                  <Trailer
                    href={`https://www.youtube.com/watch?v=${result.videos.results[0].key}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {'>> Watch Trailer in Youtube'}
                  </Trailer>
                ) : (
                  <NoTrailer>There is no trailer.</NoTrailer>
                )}
                <CheckBlock>
                  <CheckButton onClick={handleLoad}>
                    Click to check out{' '}
                    {result.original_title
                      ? result.original_title
                      : result.original_name}
                    's collection
                  </CheckButton>
                  {isLoaded ? (
                    <CollectionBlock>
                      {/* movie's collection data */}
                      {isMovie && result.belongs_to_collection ? (
                        <Collections>
                          <CollectionPostersBlock>
                            {result.belongs_to_collection.poster_path ? (
                              <CollectionPosters
                                src={`https://image.tmdb.org/t/p/original${result.belongs_to_collection.poster_path}`}
                                alt="collection poster"
                                arial-label="collection poster"
                              ></CollectionPosters>
                            ) : null}
                            {result.belongs_to_collection.backdrop_path ? (
                              <CollectionPosters
                                src={`https://image.tmdb.org/t/p/original${result.belongs_to_collection.backdrop_path}`}
                                alt="collection poster"
                                arial-label="collection poster"
                              ></CollectionPosters>
                            ) : null}
                          </CollectionPostersBlock>
                        </Collections>
                      ) : null}
                      {/* tv's collection data : if isMovie false and there is seasons */}
                      {!isMovie && result.seasons.length > 0 ? (
                        <TvCollectionBlock>
                          {result.seasons.map((season) => (
                            <TvCollectionSeason>
                              <TvCollectionSeasonPoster
                                alt="season poster"
                                arial-label="season poster"
                                src={
                                  season.poster_path
                                    ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                                    : NoImage
                                }
                              />
                              <TvCollectionSeasonInfo>
                                <TvCollectionSeasonName>
                                  {season.name}
                                </TvCollectionSeasonName>
                                <Divider> ㆍ </Divider>
                                <TvCollectionSeasonDate>
                                  {season.air_date.substring(0, 7)}
                                </TvCollectionSeasonDate>
                              </TvCollectionSeasonInfo>
                            </TvCollectionSeason>
                          ))}
                        </TvCollectionBlock>
                      ) : null}

                      <CollectionCompanies>
                        Production Companies
                      </CollectionCompanies>
                      <CollectionCompaniesBlock>
                        {result.production_companies.map((companies) => (
                          <CollectionCompany key={companies.id}>
                            {companies.logo_path ? (
                              <CollectionCompanyLogo
                                alt={`${companies.name}`}
                                arial-label={`${companies.name}`}
                                src={`https://image.tmdb.org/t/p/original${companies.logo_path}`}
                              />
                            ) : (
                              <CollectionCompanyName>
                                {companies.name}
                              </CollectionCompanyName>
                            )}
                          </CollectionCompany>
                        ))}
                      </CollectionCompaniesBlock>
                    </CollectionBlock>
                  ) : null}
                </CheckBlock>
                {error ? <Message text={`Error_Detail : ${error}`} /> : null}
              </InfoContainer>
            </Data>
          </Content>
        </Container>
      )}
    </>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
