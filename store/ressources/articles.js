export const state = () => ({
  list: [],
  onboarding: [
    {
      title: 'Keine Artikel gefunden',
      description:
        'Klicke einfach auf das + Symbol in der rechten Menüleiste , um deinen ersten Artikel anzulegen.',
      action: {
        active: true,
        title: 'Was ist ein Artikel?'
      },
    },
    {
      title: 'Was ist ein Artikel?',
      description:
        'Ein Artikel ist...',
      action: {
        active: true,
        title: 'Weiter'
      },
    },
    {
      title: 'Was ist ein Artikel?',
      description:
        'Ein Artikel kann...',
      action: {
        active: true,
        title: 'Weiter'
      },
    },
    {
      title: 'Was ist ein Artikel?',
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
