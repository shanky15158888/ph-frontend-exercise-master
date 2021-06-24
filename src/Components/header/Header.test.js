import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

test('Header testing', () => {
  const component = renderer.create(
    <Header width="18"/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});