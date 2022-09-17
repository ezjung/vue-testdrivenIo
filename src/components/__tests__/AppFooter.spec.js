import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

describe('AppFooter.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(AppFooter, {
      slots: {
        message: 'Vue Project from TestDriven.io Course',
        link: '<a href="https://testdriven.io">TestDriven.io</a>'
      }      
    })

    // check that the title is rendered
    expect(wrapper.text()).toMatch('Vue Project')

    // check that the link is rendered
    const items = wrapper.findAll('a')
    expect(items.length).toEqual(1)
    expect(items[0].text()).toMatch('TestDriven.io')
  })
})