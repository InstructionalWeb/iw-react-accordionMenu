import React from 'react';
import ReactDOM from 'react-dom';
import AccordionMenu from '../src/index';

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
  }
];

const App = function() {
  return (
    <div>
      <h1>hello world</h1>

      <h2>Simple List</h2>
      <AccordionMenu data={menu2} />

      <h2>Menu with Children</h2>
      <AccordionMenu data={menuWithChildren} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
