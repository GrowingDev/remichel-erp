export const state = () => ({
  subNavigation: false,
  selectedSubNavigation: {},
  subNavigations: [
    {
      title: 'stammdaten',
      links: [
        {
          index: '1',
          title: 'kunden',
          route: '/base-data/customers/list',
        },
        {
          index: '2',
          title: 'lieferanten',
          route: '/base-data/suppliers/list',
        },
        {
          index: '3',
          title: 'mitarbeiter',
          route: '/base-data/employees/list',
        },
        {
          index: '4',
          title: 'accounts',
          route: '/base-data/accounts/list',
        },
        {
          index: '0',
          title: 'zurück',
          route: '/dashboard',
        },
      ],
    },
    {
      title: 'warenwirtschaft',
      links: [
        {
          index: '1',
          title: 'artikel',
          route: '/ressources/articles/list',
        },
        {
          index: '2',
          title: 'verkaufsartikel',
          route: '/ressources/products/list',
        },
        {
          index: '3',
          title: 'kollektionen',
          route: '/ressources/collections/list',
        },
        {
          index: '0',
          title: 'zurück',
          route: '/dashboard',
        },
      ],
    },
    {
      title: 'bestellungen',
      links: [
        {
          index: '1',
          title: 'kundenaufträge',
          route: '/orders/customers/list',
        },
        {
          index: '2',
          title: 'druckaufträge',
          route: '/orders/prints/list',
        },
        {
          index: '3',
          title: 'produktionsaufträge',
          route: '/orders/production/list',
        },
        {
          index: '0',
          title: 'zurück',
          route: '/dashboard',
        },
      ],
    },
    {
      title: 'postausgang',
      links: [
        {
          index: '1',
          title: 'rechnungen',
          route: '/outbox/invoices/list',
        },
        {
          index: '2',
          title: 'lieferscheine',
          route: '/outbox/shipping-notes/list',
        },
        {
          index: '3',
          title: 'mahnungen',
          route: '/outbox/payment-reminders/list',
        },
        {
          index: '4',
          title: 'auftragsbestätigungen',
          route: '/outbox/order-confirmations/list',
        },
        {
          index: '5',
          title: 'angebote',
          route: '/outbox/deals/list',
        },
        {
          index: '6',
          title: 'geschäftsbriefe',
          route: '/outbox/business-letters/list',
        },
        {
          index: '0',
          title: 'zurück',
          route: '/dashboard',
        },
      ],
    },
    {
      title: 'posteingang',
      links: [
        {
          index: '1',
          title: 'rechnungen',
          route: '/inbox/invoices/list',
        },
        {
          index: '0',
          title: 'zurück',
          route: '/dashboard',
        },
      ],
    },
     {
      title: 'personalwesen',
      links: [
        {
          index: '1',
          title: 'mitarbeiter',
          route: '/employees/employees',
        },
        {
          index: '0',
          title: 'zurück',
          route: '/dashboard',
        },
      ],
    },
    {
      title: 'reporting',
      links: [
        {
          index: '1',
          title: 'lagerstand',
          route: '/reporting/inventory',
        },
        {
          index: '2',
          title: 'depots',
          route: '/reporting/depots',
        },
        {
          index: '0',
          title: 'zurück',
          route: '/dashboard',
        },
      ],
    },
  ],
  mainNavigation: [
    {
      index: '1',
      title: 'stammdaten',
      route: '/base-data',
    },
    {
      index: '2',
      title: 'warenwirtschaft',
      route: '/ressources',
    },
    {
      index: '3',
      title: 'bestellungen',
      route: '/orders',
    },
    {
      index: '4',
      title: 'postausgang',
      route: '/outbox',
    },
    {
      index: '5',
      title: 'posteingang',
      route: '/inbox',
    },
    {
      index: '6',
      title: 'personalwesen',
      route: '/employees',
    },
    {
      index: '7',
      title: 'reporting',
      route: '/reporting',
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
  selectSubNavigation(state, navigationIndex) {
    if(navigationIndex < state.mainNavigation.length){
      state.selectedSubNavigation = state.subNavigations[navigationIndex]
      state.subNavigation = !state.subNavigation
    }

  },
  toogleSubNavigation (state, ) {
    state.subNavigation = !state.subNavigation
  },
  navigateTo(state, index) {
    if(index < state.selectedSubNavigation.links.length){
    const selectedRoute = state.selectedSubNavigation.links[index - 1].route
      this.$router.push({
        path: selectedRoute,
      })
    }

  }
}
