import React from 'react';
import styled from 'styled-components';
import TweenLite from 'gsap';

class SubmenuList extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    if (this.props.isOpen) {
      TweenLite.set(this.submenu, { height: 'auto' });
      TweenLite.from(this.submenu, 0.25, { height: 0 });
    } else {
      TweenLite.to(this.submenu, 0.25, { height: 0 });
    }

    return <List ref={el => (this.submenu = el)}>Submenu List</List>;
  }
}

export default SubmenuList;

const List = styled.ul`
  display: none;

  &.active {
    display: block;
  }
`;
