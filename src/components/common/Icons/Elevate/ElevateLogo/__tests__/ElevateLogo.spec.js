import { render } from '@testing-library/react';
import React from 'react';
import ElevateLogo from '~src/components/common/Icons/Elevate/ElevateLogo/ElevateLogo';

describe('~src/components/common/Icons/Elevate/ElevateLogo/ElevateLogo', () => {
  it('render the component correctly', () => {
    const { container } = render(<ElevateLogo />);
    expect(container).toMatchSnapshot();
  });
});
