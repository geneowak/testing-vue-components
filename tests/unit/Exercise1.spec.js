import UserList from '@/components/Exercise1';
import { mount } from '@vue/test-utils';
import { name } from 'faker';

test('component renders the users', async () => {
  const wrapper = mount(UserList, {
    propsData: {
      users: [name.findName()],
    },
  });

  const li = wrapper.find('li');

  expect(li.text()).toBe(wrapper.props('users')[0]);

  await wrapper.setProps({
    users: [name.findName(), name.findName(), name.findName(), name.findName()],
  });

  const lists = wrapper.findAll('li');
  expect(lists.length).toEqual(wrapper.props('users').length);
});

test('it filters the users appropriately', async () => {
  const wrapper = mount(UserList, {
    propsData: {
      users: [name.findName(), name.findName(), name.findName(), name.findName()],
    },
  });
  expect(wrapper.findAll('li').length).toEqual(wrapper.props('users').length);

  const userName = wrapper.props('users')[2];

  await wrapper.setData({ filter: userName });

  expect(wrapper.findAll('li')).toHaveLength(1);
  expect(wrapper.find('li').text()).toBe(userName);
});
