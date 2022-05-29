<template>
  <div id="select-articles">
    <div id="select-article-header">
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <article-list-item
      v-for="article in articles"
      :key="article.id"
      :data="article"
      :components="components"
    />
  </div>
</template>

<script>
import ArticleListItem from './ArticleListItem.vue'

export default {
  name: 'SelectArticles',
  components: {
    ArticleListItem,
  },
  data() {
    return {
      articles: [],
      productComponents: [],
      selected: false,
    }
  },
  async mounted() {
    this.productComponents = await this.$axios.$get(
      process.env.API_URL + `/api/products/components/${this.$route.params.id}`
    )
  },
  async fetch() {
    this.articles = await fetch(process.env.API_URL + '/api/articles').then(
      (res) => res.json()
    )
  },
  computed: {
    headers() {
      return ['artikelnr', 'artikel', 'beschreibung', 'Preis']
    },
  },

  props: {
    toogle: Function,
    components: Array,
  },
  methods: {
    selectArticle() {
      console.log('test')
      this.selected = !this.selected
    },
    checkDuplicate(item) {
      console.log(item)
      return item
    },
  },
}
</script>

<style lang="scss" scoped>
#select-articles {
  position: relative;
  left: 0;
  top: 5%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #303030;
  background: white;
  z-index: 10 !important;

  min-height: 500px;
  width: 100%;
  overflow: auto;

}

#select-article-header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 120px 1fr 1fr 1fr;
  background: #212121;
  color: white;
  justify-items: stretch;
  padding: 1rem;
  align-items: center;
  font-weight: bold;
  text-align: center;
  p {
    text-transform: uppercase;
  }
}

p:nth-last-child(1) {
  justify-self: end;
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
