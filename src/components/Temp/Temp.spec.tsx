import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAtrr } from '../../Utils/Utils';
import Temp from './Temp';
import { Itemp } from './TempTypes';

const setUp = (temp: Itemp) => {
  const component = shallow(<Temp {...temp} />);
  return component;
};

describe('Temperatur', () => {
  let component: ShallowWrapper<Readonly<{}>>;
  const tempProps = {
    temp: 23.4,
  };
  beforeEach(() => {
    component = setUp(tempProps);
  });

  it('should render the temperature correctly', () => {
    const wrapper = findByTestAtrr(component, 'temp');
    expect(wrapper.length).toBe(1);
  });
});
