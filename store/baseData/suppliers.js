export const state = () => ({
  list: [],
  supplier: null,
  contact: null,
  billing_address: null,
  shipping_address:null,
  onboarding: [
    {
      title: 'Keine Lieferanten gefunden',
      description:
        'Klicke einfach auf das + Symbol in der rechten Menüleiste , um deinen ersten Lieferanten anzulegen.',
      action: {
        active: false,
        title: '',
      },
    },
  ],
})

export const mutations = {
  setSuppliers(state, suppliers){
    state.list = suppliers;
  }
}
