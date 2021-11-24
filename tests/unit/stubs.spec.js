import ListComponent from '@/components/List';
import { shallowMount } from '@vue/test-utils';

const listItem = {
  template: '<li>{{ movie }}</li>',
  props: ['movie'],
};

test('ShallowMount', () => {
  const wrapper = shallowMount(ListComponent, {
    stubs: {
      ListItem: listItem,
    },
  });
  expect(wrapper).toMatchSnapshot();
});
