import React from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid/v4';
import TweenLite from 'gsap';
import Arrow from './arrow';
// import SubmenuList from "./SubmenuList";

class Submenu extends React.Component {
  state = {
    isOpen: false
  };
  toggleSubmenu = () => {
    this.setState(
      prevState => {
        return {
          isOpen: !prevState.isOpen
        };
      },
      () => {
        if (this.state.isOpen) {
          TweenLite.set(this.submenu, { height: 'auto' });
          TweenLite.from(this.submenu, 0.15, { height: 0 });
        } else {
          TweenLite.to(this.submenu, 0.15, { height: 0 });
        }
      }
    );
  };
  buildNav = nav => {
    const submenuId = uuid4();
    return nav.map(item => {
      if (item.children) {
        return (
          <Submenu key={uuid4()} title={item.title} children={item.children} />
        );
      }
      return (
        <li key={uuid4()} className="iw-accordionMenu__menuItem">
          <a className="iw-accordionMenu__menuLink" href={item.url}>
            {item.title}
          </a>
        </li>
      );
    });
  };
  render() {
    return (
      <li className="iw-accordionMenu__menuItem">
        <button
          className="iw-accordionMenu__menuToggle"
          onClick={this.toggleSubmenu}
        >
          <Arrow
            style={{
              display: 'inline-block',
              position: 'absolute',
              left: 0,
              top: '0.45rem'
            }}
            expanded={this.state.isOpen}
          />{' '}
          {this.props.title}
        </button>
        <SubmenuList
          className="iw-accordionMenu__submenu"
          ref={el => (this.submenu = el)}
        >
          <li>{this.buildNav(this.props.children)}</li>
        </SubmenuList>
      </li>
    );
  }
}

export default Submenu;

const SubmenuList = styled.ul`
  display: block;
  height: 0;
  overflow: hidden;

  &.active {
  }
`;
