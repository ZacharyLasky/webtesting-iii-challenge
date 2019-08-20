// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './controls';

describe('<Controls />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should button fire when toggle locked is called', () => {
    const mockClosed = jest.fn()
    const { getByText } = render(<Controls toggleLocked={mockClosed} locked={true} closed={true}/>)
    fireEvent.click(getByText("Unlock Gate"))
    expect(mockClosed).toHaveBeenCalled()
  })

  it('should button fire when toggle closed is called', () => {
    const mockClosed = jest.fn()
    const { getByText } = render(<Controls toggleClosed={mockClosed} locked={false} closed={false}/>)
    fireEvent.click(getByText("Close Gate"))
    expect(mockClosed).toHaveBeenCalled()
  })

  it("should", () => {
    const { getByText } = render(<Controls/>)
    expect(getByText("Lock Gate").disabled).toBeTruthy()
  })
  
  it("should", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />)
    expect(getByText("Open Gate").disabled).toBeTruthy()
  })
});