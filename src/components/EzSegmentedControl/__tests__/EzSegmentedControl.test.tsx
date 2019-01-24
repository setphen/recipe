import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzSegmentedControl.md';
import EzSegmentedControl from '../EzSegmentedControl';
import {mount, renderToHtml} from '../../../jest-globals';

const scope = {EzSegmentedControl};

describe('EzSegmentedControl', () => {
  visualSnapshots({markdown, scope});

  describe('onChange', () => {
    it('is triggers onChange when segment is clicked', () => {
      const spy = jest.fn();

      const component = mount(
        <EzSegmentedControl
          name="test-segment"
          label="test segment"
          active="firstValue"
          className="test"
          labelPosition="left"
          onChange={spy}
          options={[
            {label: 'first', value: 'firstValue'},
            {label: 'second', value: 'secondValue'},
            {label: 'third', value: 'thirdValue'},
          ]}
        />
      );

      component
        .find('input')
        .last()
        .simulate('change', {target: {checked: true}});

      expect(spy).toHaveBeenCalledWith('thirdValue');
    });
  });

  it('should meet accessibility guidelines', async () => {
    const spy = jest.fn();

    const wrapper = renderToHtml(
      <EzSegmentedControl
        name="test-segment"
        label="accessibility test"
        active="firstValue"
        className="test"
        labelPosition="left"
        onChange={spy}
        options={[
          {label: 'first', value: 'firstValue'},
          {label: 'second', value: 'secondValue'},
          {label: 'third', value: 'thirdValue'},
        ]}
      />
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
