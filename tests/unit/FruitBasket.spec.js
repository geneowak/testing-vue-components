import FruitBasket from '@/components/FruitBasket';
import { mount } from '@vue/test-utils';

test('can add fruits to basket with DOM', async () => {
  const addToBasketSpy = jest.spyOn(FruitBasket.methods, 'addToBasket');
  const wrapper = mount(FruitBasket);

  const input = wrapper.find('input');
  const button = wrapper.find('button');
  expect(wrapper.findAll('li').length).toBe(0);

  input.element.value = 'pear';
  input.trigger('input');
  expect(wrapper.vm.fruit).toBe('pear');

  await button.trigger('click');
  expect(addToBasketSpy).toHaveBeenCalled();
  expect(wrapper.vm.fruit).toBe('');
  expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['pear']));
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.findAll('li').length).toBe(1);
});
