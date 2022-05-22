import React from 'react';
import renderer from 'react-test-renderer';

import Notif from '../../../../src/screens/notif/notif';

it('renders correctly', () => {
  renderer.create(<Notif />);
});

it('renders correctly notif screen even with empty', () => {
  const tree = renderer.create(<Notif />).toJSON();
  expect(tree).toMatchSnapshot();
});
