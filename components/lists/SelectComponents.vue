<template>
  <div id="select-components">
    <div class="header">
      <button id="btn-add-components" @click="toogle">Abschließen</button>
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <div
      v-for="article in list"
      :key="article.articleId"
      class="article-list-item"
    >
      <label style="text-align:center">
        <input type="checkbox" :value="false"  />
      </label>
      <label>{{ article.articleId }}</label>
      <label>{{ article.title }}</label>
      <label>{{ article.description }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectComponents',
  props: {
    toogle: Function,
  },
  beforeMount() {
    this.getArticles()
  },
  data: () => {
    return {
      list: null,
      selectableItems: null,
    }
  },
  computed: {
    headers() {
      return [ 'artikelnr', 'artikel', 'beschreibung']
    },
  },
  methods: {
    async getArticles() {
      this.list = await this.$axios
        .$post('https://api.remichelgroup.com', {
          query: `
      query {
        articles {
          id
          articleId
          title
          description
        }
      }
        `,
        })
        .then((res) => {
          return res.data.articles
        })

    },
    createListItems(list){
        console.log(list)

    }
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
}
.header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
