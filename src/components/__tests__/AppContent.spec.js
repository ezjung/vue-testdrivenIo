import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppContent from '@/components/AppContent.vue'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// Set the mock adapter for mocking the axios library
let mock = new MockAdapter(axios);

describe('AppContent.vue Test with successful HTTP GET', () => {
  let wrapper = null

  beforeEach(() => {
    // Mock any GET request to the specified URL
    // NOTE: arguments for reply are (status, data, headers)
    mock.onGet("https://jsonplaceholder.typicode.com/users").reply(200, [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv'
      }
    ]);

    // render the component
    wrapper = shallowMount(AppContent)
  })

  afterEach(() => {
    mock.reset();
    wrapper.unmount()
  })

  it('renders message when component is created', () => {
    // check that the heading text is rendered
    const heading = wrapper.findAll('h1')
    expect(heading.length).toEqual(1)
    expect(heading[0].text()).toMatch('List of Users:')

    // Check that one GET call was made to axios.get()
    expect(mock.history.get.length).toBe(1);
    expect(mock.history.get[0].url).toMatch('https://jsonplaceholder.typicode.com/users')
    expect(mock.history.get[0].method).toMatch('get')

    // Check that the user data is properly set
    expect(wrapper.vm.users.length).toEqual(2)
    expect(wrapper.vm.users[0].name).toMatch('Leanne Graham')
    expect(wrapper.vm.users[0].username).toMatch('Bret')
    expect(wrapper.vm.users[0].email).toMatch('Sincere@april.biz')
    expect(wrapper.vm.users[1].name).toMatch('Ervin Howell')
    expect(wrapper.vm.users[1].username).toMatch('Antonette')
    expect(wrapper.vm.users[1].email).toMatch('Shanna@melissa.tv')
  })
})

describe('AppContent.vue Test with Failed HTTP GET', () => {
  let wrapper = null

  afterEach(() => {
    mock.reset();
    wrapper.unmount()
  })

  it('loads no user data when the HTTP GET request timeout', () => {
    // Set the mock call to GET to timeout
    mock.onGet("https://jsonplaceholder.typicode.com/users").timeout()

    // Render the component
    wrapper = shallowMount(AppContent)

    // Check that one GET call was made to axios.get()
    expect(mock.history.get.length).toBe(1);
    expect(mock.history.get[0].url).toMatch('https://jsonplaceholder.typicode.com/users')
    expect(mock.history.get[0].method).toMatch('get')

    // Check that there is no user data loaded when the GET request times out
    expect(wrapper.vm.users.length).toEqual(0)
  })

  it('loads no user data when the HTTP GET request fails', () => {
    // Set the mock call to GET to fail (404 - Not Found)
    mock.onGet("https://jsonplaceholder.typicode.com/users").reply(404)

    // Render the component
    wrapper = shallowMount(AppContent)

    // Check that one GET call was made to axios.get()
    expect(mock.history.get.length).toBe(1);
    expect(mock.history.get[0].url).toMatch('https://jsonplaceholder.typicode.com/users')
    expect(mock.history.get[0].method).toMatch('get')

    // Check that there is no user data loaded when the GET request fails
    expect(wrapper.vm.users.length).toEqual(0)
  })
})