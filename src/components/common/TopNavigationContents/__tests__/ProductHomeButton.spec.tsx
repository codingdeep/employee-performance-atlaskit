import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ProductHomeButton from '~src/components/common/TopNavigationContents/ProductHomeButton';
import { useRouterActions } from 'react-resource-router';

jest.mock('react-resource-router', () => ({
  useRouterActions: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  createRouterSelector: () => () => 'path',
  useQueryParams: () => [undefined, () => null],
}));

describe('', () => {
  const { push } = useRouterActions();
  it('should render the component successfully', function () {
    const { container } = render(<ProductHomeButton />);
    expect(container).toBeInTheDocument();
  });
  it('should call the root route on click home button', function () {
    const { getByTestId } = render(<ProductHomeButton />);
    const button = getByTestId('product-home-button-container');
    fireEvent.click(button);
    expect(push).toHaveBeenCalledWith('/');
  });
});
