export const state = () => ({
  list: [],
  onboarding: [
    {
      title: 'Keine Verkaufsartikel gefunden',
      description:
        'Klicke einfach auf das + Symbol in der rechten Menüleiste , um dein erstes Produkt anzulegen.',
      action: {
        active: true,
        title: 'Was ist ein Produkt?'
      },
    },
    {
      title: 'Was ist ein Produkt?',
      description:
        'Ein Produkt ist...',
      action: {
        active: true,
        title: 'Weiter'
      },
    },
    {
      title: 'Was ist ein Produkt?',
      description:
        'Ein Produkt kann...',
      action: {
        active: true,
        title: 'Weiter'
      },
    },
    {
      title: 'Was ist ein Produkt?',
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
