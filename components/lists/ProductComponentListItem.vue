<template>
  <div class="component-list-item">
    <label>{{ data.articleId }}</label>
    <label>{{ data.title }}</label>
    <label>{{ data.price }}€</label>
    <label>
      <button @click="decreaseAmount">-</button>
      <p>{{ data.amount }}</p>
      <button @click="increaseAmount">+</button></label
    >
    <label>{{ total }}€</label>
    <button @click="deleteArticle">-</button>
  </div>
</template>

<script>
export default {
  name: 'ProductComponentListItem',

  props: {
    data: Object,
    load: Function
  },
  computed: {
    total() {
      const total = this.data.price * this.data.amount
      return total.toFixed(2)
    },
  },
  methods: {
    deleteArticle() {
      this.$axios
        .$delete(
          process.env.API_URL + `/api/products/components/${this.data.id}`
        )
        .then((res) => {
          console.log(res)
          this.load()
        })
    },
    increaseAmount() {

      this.$axios
        .$put(
          process.env.API_URL + `/api/products/components/${this.data.id}`,
          {
            amount: this.data.amount + 1,
          }
        )
        .then((res) => {

          this.data.amount = res.amount
        })
    },
    decreaseAmount() {
      if (this.data.amount !== 1) {
        this.$axios
          .$put(
            process.env.API_URL + `/api/products/components/${this.data.id}`,
            {
              amount: this.data.amount - 1,
            }
          )
          .then((res) => {
            this.data.amount = res.amount
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.component-list-item {
  display: grid;
  padding:1rem;
  grid-template-rows: auto;
  grid-template-columns: 150px 1fr  100px 100px 100px 50px;
  color: black;
  justify-items: center;
  align-items: center;
  width: 100%;
  border: none;
  font-size: 1rem;
  text-align: center;
  cursor: pointer !important;
  .article-list-item-amount {
    width: 60px !important;
  }
  label {

    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p {
      margin: 8px;
    }
    button {
      border: 1px solid black;
      font-size: 1rem;
    }
  }
}
.component-list-item:nth-child(2n + 0) {
  background: rgb(228, 228, 228);
}
.component-list-item:hover {
  color: white;
  background: #303030;
}

</style>
