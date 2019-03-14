import React from 'react';
// import { css, cx } from "emotion";
import styled from 'styled-components';
import Submenu from './Submenu';
import uuid4 from 'uuid/v4';

class AccordionMenu extends React.Component {
  buildNav = nav => {
    return nav.map(item => {
      if (item.children) {
        return (
          <Submenu key={uuid4()} title={item.title} children={item.children} />
        );
      }
      return (
        <li className="iw-accordionMenu__menuItem" key={uuid4()}>
          <a className="iw-accordionMenu__menuLink" href={item.url}>
            {item.title}
          </a>
        </li>
      );
    });
  };

  render() {
    return (
      <Nav className="iw-accordionMenu">
        <div
          style={{
            marginLeft: '-1rem'
          }}
        >
          <ul className="iw-accordionMenu__menu">
            {this.buildNav(this.props.data)}
          </ul>
        </div>
      </Nav>
    );
  }
}

export default AccordionMenu;

const Nav = styled.nav`
  text-align: left;
  width: 100%;
  box-sizing: border-box;

  ul {
    display: block;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 1rem;
    width: 100%;
  }

  a,
  button {
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    padding: 10px;
    padding-left: 24px;
    text-decoration: none;
    background: transparent;
    border: none;
    font-size: 1rem;
    border-bottom: 1px dashed #ccc;
    margin-bottom: 5px;
    color: #222;

    &:hover {
      background: #ccc;
    }
  }
`;
