import AlertMessage from '@/components/AlertMessage';
import { mount } from '@vue/test-utils';

jest.useFakeTimers();

describe('lifecycle methods', () => {
  test('mounted assigns interval', () => {
    const wrapper = mount(AlertMessage);
    expect(wrapper.vm.interval).not.toBe(undefined);
  });

  test('counter works', () => {
    const { vm } = mount(AlertMessage);
    expect(vm.counter).toBe(0);
    jest.advanceTimersByTime(1000);
    expect(vm.counter).toBe(1);
    jest.advanceTimersByTime(1000);
    expect(vm.counter).toBe(2);
  });

  test('instance gets destroyed', () => {
    const beforeDestroyedSPy = jest.spyOn(AlertMessage, 'beforeDestroy');
    const { vm } = mount(AlertMessage);
    vm.counter = vm.timer - 1;
    jest.advanceTimersByTime(1000);
    expect(beforeDestroyedSPy).toHaveBeenCalled();
  });
});
