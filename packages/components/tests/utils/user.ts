import userEvent from '@testing-library/user-event'

const user = userEvent.setup({
  pointerEventsCheck: 0
})

export default user
