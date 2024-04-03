import { render } from '@testing-library/react';
import React from 'react';
import ScoreCardIcon from '~src/components/common/Icons/ScoreCardIcon/ScoreCardIcon';

describe('src/components/common/ScoreCardIcon', () => {
  it('render the component correctly', () => {
    const { container } = render(<ScoreCardIcon />);
    expect(container).toMatchSnapshot();
  });

  it('fills the icon correctly', () => {
    const { container } = render(<ScoreCardIcon fill="blue" />);
    expect(container).toMatchSnapshot();
  });
});
