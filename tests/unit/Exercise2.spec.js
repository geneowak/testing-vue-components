import ExerciseForm from '@/components/Exercise2';
import { mount } from '@vue/test-utils';

test('follow the user through the form', async () => {
  const wrapper = mount(ExerciseForm);

  expect(wrapper).toMatchSnapshot();

  const form = wrapper.find('form');

  const input = form.find('input');

  await input.setValue('shopping');
  await form.trigger('submit');

  expect(wrapper.findAll('li')).toHaveLength(1);

  expect(wrapper).toMatchSnapshot();

  const button = wrapper.find('#shopping-0');
  await button.trigger('click');

  expect(form.findAll('li')).toHaveLength(0);
});
