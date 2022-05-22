import React from 'react';
import renderer from 'react-test-renderer';
import DetailScreen from '../../../src/components/detailScreen';

it('renders correctly', () => {
  renderer.create(
    <DetailScreen
      backgroundImage={require('../../../src/assets/images/homeBG.png')}
      title={'test title'}
      count={'0 test'}
      memberCount={'0 test'}
    />,
  );
});

it('renders correctly DetailScreen screen even with empty', () => {
  const tree = renderer
    .create(
      <DetailScreen
        backgroundImage={require('../../../src/assets/images/homeBG.png')}
        title={'test title'}
        count={'0 test'}
        memberCount={'0 test'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
