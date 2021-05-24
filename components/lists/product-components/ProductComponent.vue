<template>
  <li class="product-component">
    <button id="btn-remove-component" @click="removeComponent(index)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        />
      </svg>
    </button>
    <label>{{ component.articleId }}</label>
    <label>{{ component.title }}</label>
    <label>{{ component.description }}</label>
    <label id="amount">
      <button class="btn-amount" @click="incrementAmount">+</button>
      <button class="btn-amount" @click="decrementAmount">-</button>
      {{ component.amount }}
    </label>

    <label>{{ totalCost }}</label>
  </li>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: {
    component: Object,
    index: Number
  },
  computed: {
    totalCost() {
      return this.component.amount * this.component.cost
    },
  },
  methods: {
    removeComponent(index) {
      this.$store.dispatch('ressources/products/removeComponent', {
        index: index,
      })
    },
    incrementAmount(){
      this.$store.commit('ressources/products/incrementAmount',this.index)
    },
    decrementAmount(){
     this.$store.commit('ressources/products/decrementAmount',this.index)
    }
  },
}
</script>

<style lang="scss" scoped>
.product-component {
  display: grid;
  grid-template-rows: 80px;
  grid-template-columns: 50px 120px 2fr 2fr 100px 100px;
  color: black;
  justify-items: stretch;
  align-items: center;
  cursor: pointer !important;
  .article-list-item-amount {
    width: 60px !important;
  }
   label {
    margin: 5px;
  }
}
.product-component:nth-child(2n + 0) {
  background: rgb(228, 228, 228);
}
.product-component:hover {
  color: white;
  background: #303030;
}
#btn-remove-component {
  border: none;
  svg {
    fill: #868686;
  }
  background: none;
  margin-left: 5px;
  width: max-content;
}
#btn-remove-component:hover {
  svg:hover {
    fill: white;
  }
  cursor: pointer;
}
.btn-amount {
  background: #868686;
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    margin:5px;
}
.btn-amount:hover {
  cursor: pointer;

}
#amount {
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
