<template>
  <div class="page">
    <div class="page-header">
      <h2 v-if="this.list.length !== 0">artikel</h2>
    </div>
    <div class="page-body">
      <table-articles :listItems="list" />
    </div>
    <menu-bar :openDocument="openNewDocument" />
  </div>
</template>

<script>
import NoDataFound from '@/components/pages/no-data-found'
import PageTitle from '~/components/page/page-title'
import MenuBar from '~/components/menu-bar/menu-bar'
import LoadingSpinner from '~/components/pages/loading-spinner.vue'
import ErrorOccured from '~/components/pages/error-occured.vue'
import TableArticles from '@/components/tables/ressources/table-articles'
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableArticles,
  },
  beforeMount() {
    this.getArticles()
  },
  computed: {
    onboarding() {
      return this.$store.state.ressources.articles.onboarding
    },
  },
  data: () => {
    return {
      list: [],
      typ: '',
      page: 0,
    }
  },

  methods: {
    openNewDocument() {
      this.$router.push(`/ressources/articles/new`)
    },
    async getArticles() {
      this.list = await this.$axios
        .$post('https://api.remichel-cc.com/api', {
          query: `
      query {
        articles {
          id
          articleId
          title
          description
          articleGroup
          supplier
          supplierArticleId
        }
      }
        `,
        })
        .then((res) => {
          return res.data.articles
        })
      console.log(this.list)
    },
  },
}
</script>
