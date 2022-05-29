export const state = () => ({
  list: [],
  products: [],
  availableComponents: [],
  product: null
})
export const getters = {
  product: (state) => {
    return state.product
  },
  availableComponents: (state) => {
    return state.availableComponents
  },
  productComponents: (state) => {
    return state.product.productComponents
  },
}


export const mutations = {
  setProduct(state, product) {
    state.product = product
  },
  setAvailableComponents(state, availableComponents) {
    state.availableComponents = availableComponents
  },
  setProducts(state, products) {
    state.products = products
  },
  selectArticle(state, article) {

  },

  removeComponent(state, index) {
    state.product.productComponents.splice(index, 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
  incrementAmount(state, i) {
    state.product.productComponents[i].amount++
  },
  decrementAmount(state, i) {
    state.product.productComponents[i].amount--
  },
  setProducts(state, products){
    state.list = products
  }

}
