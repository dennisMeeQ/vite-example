import { render, screen } from '@/test-utils';

import { Homepage } from './Homepage';

test('renders the static texts correctly', () => {
  render(<Homepage />);

  expect(screen.getByText('Foo')).toBeVisible();
});
