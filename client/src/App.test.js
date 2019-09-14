import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <div className="color">hello world</div>
  );
  // the querying functionality is accessed through the wrapper:
  const element = wrapper.queryByText(/hello/i);

  // assertions will come in here
  expect(element).toBeTruthy(); // jest matcher
  expect(element).toBeInTheDocument(); // jest-dom matcher
  expect(element).toBeVisible(); // jest-dom matcher
});



