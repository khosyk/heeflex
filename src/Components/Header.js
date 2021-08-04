import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 120px;
    text-align: center;
    border-bottom: 5px solid
        ${(props) => (props.current ? "#126402" : "transparent")};
    transition: all 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
    transition: all 0.5s ease-in-out;
`;

export default withRouter(({ location: { pathname } }) => (
    <SHeader>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </SHeader>
));