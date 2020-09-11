import { ShallowWrapper } from 'enzyme';

export const findByTestAtrr = (
  component: ShallowWrapper<Readonly<{}>>,
  attr: string
) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};
