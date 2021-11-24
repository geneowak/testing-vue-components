import GithubCard from '@/components/GithubCard';
import { mount } from '@vue/test-utils';

describe('methods', () => {
  test('composeURL', () => {
    const { composeUrl } = GithubCard.methods;

    expect(composeUrl(123)).toBe('https://api.github.com/users/123');
    expect(composeUrl('hello')).toBe('https://api.github.com/users/hello');
  });

  test('fetchData', async () => {
    const jsonMock = jest.fn().mockResolvedValue('Github Data');
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock,
    });
    const { vm } = mount(GithubCard);

    await vm.fetchData();

    expect(window.fetch).toHaveBeenCalled();
    expect(jsonMock).toHaveBeenCalled();
    expect(vm.data).toBe('Github Data');
  });
});
