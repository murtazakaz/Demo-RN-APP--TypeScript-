import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../../../src/screens/home/home';

it('renders correctly', () => {
  renderer.create(<Home />);
});

it('renders correctly home screen even with empty', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
