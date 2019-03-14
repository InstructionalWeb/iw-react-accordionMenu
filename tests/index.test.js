import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import AccordionMenu from '../src/index';

const simpleMenu = [
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

test('it renders a simple array of links', () => {
  const { getByText } = render(<AccordionMenu data={simpleMenu} />);

  expect(getByText('One Fish')).toBeInTheDocument();
  expect(getByText('One Fish')).toHaveAttribute(
    'class',
    'iw-accordionMenu__menuLink'
  );
  expect(getByText('Two Fish')).toBeInTheDocument();
  expect(getByText('Two Fish')).toHaveAttribute(
    'class',
    'iw-accordionMenu__menuLink'
  );
  expect(getByText('Red Fish')).toBeInTheDocument();
  expect(getByText('Red Fish')).toHaveAttribute(
    'class',
    'iw-accordionMenu__menuLink'
  );
  expect(getByText('Blue Fish')).toBeInTheDocument();
  expect(getByText('Blue Fish')).toHaveAttribute(
    'class',
    'iw-accordionMenu__menuLink'
  );
});
