// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Display from './display';

describe('<Display />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display open and unlocked', () => {
    const { queryByText } = render(<Display/>)
    expect(queryByText(/unlocked/i)).toBeTruthy()
    expect(queryByText(/open/i)).toBeTruthy()
  })

  it('should closed equal false and locked equal false', () => {
    const { queryByText } = render(<Display closed={true} locked={true}/>)
    expect(queryByText(/locked/i)).toBeTruthy()
    expect(queryByText(/closed/i)).toBeTruthy()
  })

  it('should have red led as class when locked or closed', () => {
    const { queryAllByTestId } = render(<Display closed={true} locked={true}/>)
    expect(queryAllByTestId("led red-led")).toBeTruthy()
  })

  it('should have green led as class when locked or closed', () => {
    const { queryAllByTestId } = render(<Display closed={false} locked={false}/>)
    expect(queryAllByTestId("led red-green")).toBeTruthy()
  })
  
});

