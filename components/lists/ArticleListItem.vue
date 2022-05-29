<template>
  <button
    class="article-list-item"
    @click="selectArticle"
    :class="{ visible: isVisible }"
  >
    <label>{{ data.id }}</label>
    <label>{{ data.name }}</label>
    <label>{{ data.description }}</label>
    <label>{{ data.total }}€</label>
  </button>
</template>

<script>
export default {
  name: 'ArticleListItem',

  props: {
    data: Object,
    components: Array,
  },

  computed: {
    isVisible() {
    return true
    },
  },
  methods: {
    selectArticle() {
      this.$axios
        .$post(process.env.API_URL + `/api/products/components/`, {
          articleId: this.data.id,
          title: this.data.name,
          description: this.data.description,
          amount: 1,
          price: this.data.total,
          productId: this.$route.params.id,
        })
        .then((res) => {
          console.log(res)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.article-list-item {
  display: none;
  grid-template-rows: auto;
  grid-template-columns: 120px 1fr 1fr 1fr;
  color: black;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer !important;
  .article-list-item-amount {
    width: 60px !important;
  }
  label {
    margin: 5px;
    text-align: center;
  }
}
label:nth-last-child(1) {
  justify-self: end;
  margin-right: 8px;
}
.article-list-item:nth-child(2n + 0) {
  background: rgb(228, 228, 228);
}
.article-list-item:hover {
  color: white;
  background: #303030;
}
.visible {
  display: grid;
}
</style>
