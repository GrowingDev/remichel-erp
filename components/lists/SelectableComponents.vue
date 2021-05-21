<template>
  <div id="select-components">
    <div class="header">
      <button class="btn" @click="toogle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
      </button>
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>
    <ul>
      <li
        v-for="article in availableComponents"
        :key="article.articleId"
        class="article-list-item"
        @click="addComponent(article)"
      >
        <label></label>
        <label>{{ article.articleId }}</label>
        <label>{{ article.title }}</label>
        <label>{{ article.description }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectableComponents',
  computed: {
    availableComponents() {
      return this.$store.state.ressources.products.availableComponents
    },
    headers() {
      return ['artikelnr', 'artikel', 'beschreibung']
    },
  },
  async beforeMount() {
    this.$store.dispatch('ressources/products/initAvailableComponentsState')
  },
  props: {
    toogle: Function,
  },
  methods: {
    addComponent(article) {
      this.$store.dispatch('ressources/products/addComponent', {
        article: article,
      })
    },
  },
}
</script>

<style lang="scss" >
#select-components {
  position: relative;
  left: 0;
  top: 5%;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  background: white;
  z-index: 10 !important;
  border: 1px solid silver;
  height: 500px;
  width: 100%;
  overflow: auto;
  ul {
    padding: 0;
  }
}
.header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 50px 120px  1fr 1fr;
  background: #212121;
  color: white;
  justify-items: stretch;
  align-items: center;
  font-weight: bold;
  p {
    margin: 5px;
    text-transform: uppercase;
  }
}

.article-list-item {
  display: grid;
  grid-template-rows: 80px;
  grid-template-columns: 50px 120px 1fr 1fr;
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
.article-list-item:nth-child(2n + 0) {
  background: rgb(228, 228, 228);
}
.article-list-item:hover {
  color: white;
  background: #303030;
}

.btn {
  border: none;
  fill: #868686;
  background: none;
  margin-left: 5px;
  width: max-content;
}
.btn:hover {
  fill: white;
  cursor: pointer;
}
</style>
