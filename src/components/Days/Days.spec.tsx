import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAtrr } from '../../Utils/Utils';
import Days from './Days';
import { Iday } from './DaysTypes';

const setUp = (day: Iday) => {
  const component = shallow(<Days {...day} />);
  return component;
};

describe('Days', () => {
  let component: ShallowWrapper<Readonly<{}>>;
  const daysProps = {
    day: 'Mon',
  };
  beforeEach(() => {
    component = setUp(daysProps);
  });

  it('should render the days correctly', () => {
    const wrapper = findByTestAtrr(component, 'Days');
    expect(wrapper.length).toBe(1);
  });
});
