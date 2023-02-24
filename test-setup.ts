import { beforeEach } from 'vitest'

beforeEach(() => {
  if (typeof document !== 'undefined') {
    document.body.innerHTML = ''
    document.head.innerHTML = ''
  }
})
