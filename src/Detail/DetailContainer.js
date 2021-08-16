/* eslint-disable import/no-anonymous-default-export */
import { imdbTest, movieApi, tvApi } from 'Components/api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
  constructor(props) {
    //왜 생성자 함수를 사용했는가? componentDidMount 사용이 용이...
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      imdbResult: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parseId = Number(id);
    if (isNaN(parseId)) {
      return push('/');
    }
    let result = null;
    let imdbResult = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parseId)); //괄호의 유무의
        ({ data: imdbResult } = await imdbTest.rating(result.imdb_id));
      } else {
        ({ data: result } = await tvApi.tvDetail(parseId));
      }
    } catch (error) {
      this.setState({
        error: "Can't find information.",
      });
    } finally {
      this.setState({ loading: false, result, imdbResult, isMovie });
    }
  }

  handleLoad = () => {
    let isLoaded = this.state.isLoaded;
    this.setState({ isLoaded: !isLoaded });
  };

  render() {
    const { result, error, loading, imdbResult, isMovie } = this.state;
    var { isLoaded } = this.state;

    return (
      <DetailPresenter
        result={result}
        imdbResult={imdbResult}
        error={error}
        loading={loading}
        isLoaded={isLoaded}
        handleLoad={this.handleLoad}
        isMovie={isMovie}
      />
    );
  }
}
