export const state = () => ({
  list: [],
  article: {},
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

  setArticle(state, article){
    state.article = article
  },
  setArticles(state, articles){
    state.list = articles
  }

}
