// Test away!
import React from 'react';
import renderer from 'react-test-renderer';

import Display from './display';

describe('<Display />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});