import TestComponent from '@/components/Test';
import List from '@/components/List';
import { mount } from '@vue/test-utils';

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: { value: 'World' },
  });
  expect(wrapper).toMatchSnapshot();
});

test('ListComponent', async () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;

  await wrapper.setData({
    marvelMovies: [...movies, 'Black Widow'],
  });

  expect(wrapper).toMatchSnapshot();
});
