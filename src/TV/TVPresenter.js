import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = () => {
    return (
        <>
            <div>TVMEMEMOEOMEM</div>
        </>
    );
};

TVPresenter.propTypes = {
    airingToday: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default TVPresenter;
