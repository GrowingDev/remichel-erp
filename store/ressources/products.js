export const state = () => ({
  list: [],
  products: [],
  availableComponents: [],
  product: {
    productDescription: {},
    productCalculation: {},
    productImages: {},
  },
})
export const getters = {
  product: (state) => {
    return state.product
  },
  productIDs: (state) => {
    return state.productIds
  },
  availableComponents: (state) => {
    return state.availableComponents
  },
}

export const actions = {
  addComponent({ commit }, { article }) {
    try {
      commit('addComponent', article)
    } catch (error) {
      console.log(error)
    }
  },
  removeComponent({ commit }, { index }) {
    try {
      commit('removeComponent', index)
    } catch (error) {
      console.log(error)
    }
  },
  async initAvailableComponentsState({ commit }) {
    try {
      const availableComponents = await this.$axios
        .$post('https://api.remichelgroup.com', {
          query: `
      query {
        articles {
          id
          articleId
          title
          description
          total
        }
      }
        `,
        })
        .then((res) => {
          console.log(res.data.articles)
          return res.data.articles
        })
      commit('setAvailableComponents', availableComponents)
    } catch (error) {
      console.log(error)
    }
  },
  async initProductsState({ commit }) {
    try {
      const products = await this.$axios
        .$post('https://api.remichelgroup.com/', {
          query: `
  query {
    products {
      id
      productId
      productDescription{
        title
      productGroup
      }
    }
  }
    `,
        })
        .then((res) => {
          return res.data.products
        })
      commit('setProducts', products)
    } catch (error) {
      console.log(error)
    }
  },
  async initProductState({ commit }, { id }) {
    try {
      const product = await this.$axios
        .$post('https://api.remichelgroup.com', {
          query: `
   query Product($id: ID!) {
    product(id: $id) {
      id
      productId
productDescription{
title
etui
furniture
productGroup
inlay
package
weight
size
ean
eori
  }
  productImages{
    front
    back
    etui
    boxing
  }
  productComponents{
    articleId
    title
    description
    amount
    cost
  }
  productCalculation{
    set
    completition
    packaging
    logistic
    license
    price_Customer
    price_private
    price_business
    bill_sum_01
    bill_sum_02
    bill_sum_03
    bill_sum_04
  }
    }
  }
    `,
          fetchPolicy: 'no-cache',
          variables: {
            id: id,
          },
        })
        .then((res) => {
          return res.data.product
        })

      commit('setProduct', product)
    } catch (error) {
      console.log(error)
    }
  },
  async updateProduct({ commit }) {
    try {
      commit('updateProduct')
    } catch (error) {
      console.log(error)
    }
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
  addComponent(state, article) {
    state.product.productComponents.push({
      articleId: article.articleId,
      title: article.title,
      description: article.description,
      amount: 1,
      cost: article.total,
    })
  },
  updateProduct(state) {
    this.$axios
      .$post('https://api.remichelgroup.com/', {
        query: `
     mutation updateProduct($id: ID!, $input: productInput) {
updateProduct(id:$id,input: $input) {
  productDescription {
    title
  }
  productImages{
      front
      back
      etui
      boxing
    }

}
}
      `,
        fetchPolicy: 'no-cache',
        variables: {
          id: state.product.id,
          input: {
            productDescription: state.product.productDescription,
            productCalculation: state.product.productCalculation,
            productComponents: state.product.productComponents,
            productImages: state.product.productImages,
          },
        },
      })
      .then((res) => {
        console.log(res)
        this.$router.back()
      })
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
}
