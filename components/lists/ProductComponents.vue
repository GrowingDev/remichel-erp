<template>
  <div class="product-components">
    <div class="header">
      <button id="btn-add-components" @click="toogle">Hinzufügen</button>
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <div
      v-for="component in components"
      :key="component.article.articleId"
      class="article-list-item"
    >
      <label>
        <!--<input type="checkbox" :value="item.checked" v-model="item.checked" /> -->
      </label>
      <label>{{ component.article.articleId }}</label>
      <label>{{ component.article.title }}</label>
      <label>{{ component.article.description }}</label>
      <label
        ><input
          type="number"
          class="article-list-item-amount"
          v-model="component.amount"
      /></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductComponents',

  model: {
    event: "toogleSelect"
  },
  props: {
    components: Array,
    toogle: Function,
  },
  methods:{
    selectComponents(){
      this.state = !this.state
    }
  },
  computed: {
    headers() {
      return ['artikelnr', 'artikel', 'beschreibung', 'Menge']
    },
  },
}
</script>

<style lang="scss" scoped>
.product-components {
  border: 1px solid silver;
  height: 500px;
  width: 100%;
  overflow: auto;
}
.header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100px 2fr 2fr 2fr 120px;
  background: #212121;
  color: white;
  justify-items: stretch;
  align-items: center;
  font-weight: bold;
  p {
    margin: 15px;
    text-transform: uppercase;
  }
}

.article-list-item {
  display: grid;
  grid-template-rows: 80px;
  grid-template-columns: 100px 2fr 2fr 2fr 120px;
  color: black;
  justify-items: stretch;
  align-items: center;
  cursor: pointer !important;
  .article-list-item-amount {
    width: 60px !important;
  }
}
.article-list-item:nth-child(2n + 0) {
  background: rgb(228, 228, 228);
}
.article-list-item:hover {
  color: white;
  background: #303030;
}
#btn-add-components {
  border: none;
  color: black;
  margin-left: 5px;
}
</style>
