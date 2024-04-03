import { render } from '@testing-library/react';
import React from 'react';
import ElevateIcon from '~src/components/common/Icons/Elevate/ElevateIcon/ElevateIcon';

describe('~src/components/common/Icons/Elevate/ElevateIcon/ElevateIcon', () => {
  it('render the component correctly', () => {
    const { container } = render(<ElevateIcon />);
    expect(container).toMatchSnapshot();
  });
});
