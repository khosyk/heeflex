import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contatiner = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top: 25px;
`;

function Section({ title, children }) {
    return (
        <Contatiner>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Contatiner>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Section;