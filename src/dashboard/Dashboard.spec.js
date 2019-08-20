// Test away
import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './dashboard';

describe('<Dashboard />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

