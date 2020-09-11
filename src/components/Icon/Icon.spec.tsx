import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAtrr } from '../../Utils/Utils';
import { Iicon } from './IconTypes';
import Icon from './Icon';

const setUp = (icon: Iicon) => {
  const component = shallow(<Icon {...icon} />);
  return component;
};

describe('Icon', () => {
  let component: ShallowWrapper<Readonly<{}>>;
  const iconProps = {
    icon: 'Clouds',
  };
  beforeEach(() => {
    component = setUp(iconProps);
  });

  it('should render the icon correctly', () => {
    const wrapper = findByTestAtrr(component, 'icon');
    expect(wrapper.length).toBe(1);
  });
});
