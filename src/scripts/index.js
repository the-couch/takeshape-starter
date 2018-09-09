import operator from 'operator'

import '../styles/main.css'

const app = operator('#root')

app.on('after', ({ title, pathname }) => {
  document.title = title
  window.history.pushState({}, '', pathname)
})
