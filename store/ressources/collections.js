export const state = () => ({
  list: [],
  onboarding: [
    {
      title: 'no collections found',
      description:
        'Klicke einfach auf das + Symbol in der rechten Menüleiste , um deine erste Kollektion anzulegen.',
      action: {
        active: true,
        title: 'Was ist eine Kollektion?'
      },
    },
    {
      title: 'Was ist ein Kollektion?',
      description:
        'Eine Kollektion ist...',
      action: {
        active: true,
        title: 'Weiter'
      },
    },
    {
      title: 'Was ist eine Kollektion?',
      description:
        'Eine Kollektion kann...',
      action: {
        active: true,
        title: 'Weiter'
      },
    },
    {
      title: 'Was ist eine Kollektion?',
      description:
        'Ende',
      action: {
        active: false,
        title: 'Weiter'
      },
    },
  ],
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false,
      id: Date.now()
    })
  },
  remove (state, todo) {
    state.list = state.list.filter(item => item.id !== todo.id)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
