export const state = () => ({
  list: [],
  onboarding: [
    {
      title: 'Keine Kunden gefunden',
      description:
        'Klicke einfach auf das + Symbol in der rechten Menüleiste , um deinen ersten Kunden anzulegen.',
      action: {
        active: true,
        title: 'Was ist ein Kunde?'
      },
    },
    {
      title: 'Was ist ein Kunde?',
      description:
        'Ein Kunde ist...',
      action: {
        active: true,
        title: 'Weiter'
      },
    },
    {
      title: 'Was ist ein Kunde?',
      description:
        'Ein Kunde kann...',
      action: {
        active: true,
        title: 'Weiter'
      },
    },
    {
      title: 'Was ist ein Kunde?',
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

}
