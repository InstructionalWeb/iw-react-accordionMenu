import React from 'react';
import ReactDOM from 'react-dom';
import AccordionMenu from '../src/index';
import Styled from 'styled-components';

const ActiveIcon = (props) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"/>
    </svg>
  )
};

const Icon = (props) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>
    </svg>
  );
}

const menuWithChildren = [
  {
    title: 'One Fish',
    url: '#'
  },
  {
    title: 'Two Fish',
    url: '#'
  },
  {
    title: 'Red Fish',
    url: '#',
    children: [
      {
        title: 'Child 1',
        url: '#'
      },
      {
        title: 'Child 2',
        url: '#',
        children: [
          {
            title: 'Grandchild 1',
            url: '#'
          },
          {
            title: 'Grandchild 2',
            url: '#'
          },
          {
            title: 'Grandchild 3',
            url: '#'
          }
        ]
      },
      {
        title: 'Child 3',
        url: '#'
      }
    ]
  },
  {
    title: 'Blue Fish',
    url: '#'
  }
];

const menu2 = [
  {
    title: 'One Fish',
    url: '#'
  },
  {
    title: 'Two Fish',
    url: '#'
  },
  {
    title: 'Red Fish',
    url: '#'
  },
  {
    title: 'Blue Fish',
    url: '#'
  }
];

const App = function() {
  return (
    <div>
      <h1>Instructional Web React Accordion Menu</h1>

      <h2>Menu with Children</h2>
      <AccordionMenu 
        data={menuWithChildren}
      />

      <h2>Menu with Custom Icons</h2>
      <AccordionMenu 
        data={menuWithChildren}
        icon={Icon}
        activeIcon={ActiveIcon}
      />

      <h2>Simple List With Custom CSS</h2>
      <SimpleList data={menu2} />
    </div>
  );
};

const SimpleList = Styled(AccordionMenu)`
  background: rgba(106, 179, 204, 0.15);
  padding: 1rem;

  .iw-accordionMenu__menuLink {
    border-bottom: 2px solid rgba(0,0,0,0.15);
    padding-left: 0;
  }

  .iw-accordionMenu__menuItem:last-child .iw-accordionMenu__menuLink {
    border: none;
  }
`;

ReactDOM.render(<App />, document.getElementById('app'));
