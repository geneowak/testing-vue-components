import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';

import SaladBowlComponent from '@/components/SaladBowl';
import saladStore from '@/store/salad-store';

const localVue = createLocalVue();
localVue.use(Vuex);

let store;

beforeEach(() => {
  store = new Vuex.Store(saladStore);
});

test('store is loaded', () => {
  const wrapper = mount(SaladBowlComponent, {
    localVue,
    store,
  });

  store.state.salad.push('avocado');
  expect(wrapper.vm.salad).toEqual(['avocado']);
});

test('store works', () => {
  const { vm } = mount(SaladBowlComponent, {
    localVue,
    store,
  });

  vm.addIngredient('doodo');
  expect(vm.salad).toEqual(['doodo']);
});
