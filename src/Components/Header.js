import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: powderblue;
  }
`;

const Item = styled.li`
  
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <SHeader>
      <List>
        <Item>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item>
          <SLink to="/search">search</SLink>
        </Item>
      </List>
    </SHeader>
  );
};

export default Header;
