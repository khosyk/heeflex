/* eslint-disable import/no-anonymous-default-export */
import { movieApi, tvApi } from "Components/api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: true,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
    };

    updateTerm = (e) => {
        const {target :{value}} = e;
        this.setState({
            searchTerm : value
        })
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const {
                data: { results: movieResults },
            } = await movieApi.search(searchTerm);
            const {
                data: { results: tvResults },
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults,
            });
        } catch (error) {
            this.setState({ error: "can't find result" });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { movieResults, tvResults, searchTerm, error, loading } =
            this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}
