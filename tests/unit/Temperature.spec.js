import Temperature from '@/components/Temperature';
import { mount } from '@vue/test-utils';

describe('computed', () => {
  let vm;

  beforeEach(() => {
    ({ vm } = mount(Temperature));
  });

  test('celsius from celsius', () => {
    vm.degrees = 32;
    expect(vm.celsius).toBe(32);
  });

  test('fahrenheit from celsius', () => {
    vm.degrees = 32;
    expect(vm.fahrenheit).toBe(89.6);
  });

  test('celsius from fahrenheit', () => {
    vm.degrees = 89.6;
    vm.type = 'fahrenheit';
    expect(vm.celsius).toBe(32);
  });

  test('fahrenheit from fahrenheit', () => {
    vm.degrees = 89.6;
    vm.type = 'fahrenheit';
    expect(vm.fahrenheit).toBe(89.6);
  });
});

describe('watcher', () => {
  test('it changes type to fahrenheit if degrees ends with f', async () => {
    const wrapper = mount(Temperature, {
      propsData: { temp: 40 },
    });
    const { vm } = wrapper;

    expect(vm.type).toBe('celsius');
    expect(vm.degrees).toBe(40);

    await wrapper.setProps({ temp: '32f' });
    expect(vm.type).toBe('fahrenheit');
    expect(vm.degrees).toBe(32);
  });
});
