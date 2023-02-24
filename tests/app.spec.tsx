import { describe, it, expect, vi } from 'vitest'
import { App } from '../src/main'
import { mount } from '@vue/test-utils'

describe('App', () => {
  it('test', async () => {
    const wrapper = mount(App, {
      props: {
        colors: ['red', 'yellow']
      }
    })

    expect(wrapper.find('.app').attributes('style')).toContain(
      'background-image: linear-gradient(to right, red 0%, yellow 100%);'
    )
  })
})
