/* eslint-disable import/no-anonymous-default-export */
import { tvApi } from "Components/api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
    state = {
        airingToday: null,
        latest: null,
        popular: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: airingToday },
            } = await tvApi.airingToday();
            const {
                data: { results: latest },
            } = await tvApi.latest();
            const {
                data: { results: popular },
            } = await tvApi.popular();
            this.setState({
                airingToday,
                latest,
                popular,
            });
        } catch (error) {
            this.setState({
                error: "Can't find tv information.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { airingToday, latest, popular, error, loading } = this.state;
        return (
            <TVPresenter
                airingToday={airingToday}
                latest={latest}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}
