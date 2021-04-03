<template>
  <div class="page">
    <div class="page-header">
      <h2 v-if="this.list.length !== 0">kollektionen</h2>
    </div>
    <div class="page-body">
      <table-collections :listItems="list" />
    </div>

    <menu-bar :openDocument="openNewDocument" />
  </div>
</template>

<script>
import NoDataFound from '@/components/pages/no-data-found'
import PageTitle from '~/components/page/page-title'
import MenuBar from '~/components/menu-bar/menu-bar'
import LoadingSpinner from '~/components/pages/loading-spinner'
import ErrorOccured from '@/components/pages/error-occured'
import TableCollections from '~/components/tables/ressources/table-collections.vue'

export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableCollections,
  },
  beforeMount() {
    this.getCollections()
  },
  computed: {
    onboarding() {
      return this.$store.state.ressources.collections.onboarding
    },
  },
  data: () => {
    return {
      doc: false,
      list: [],
      typ: '',
      page: 0,
    }
  },
  methods: {
    openNewDocument() {
      this.$router.push(`/ressources/collections/new`)
    },
    async getCollections() {
      this.list = await this.$axios
        .$post('http://localhost:4000', {
          query: `
      query {
        collections {
          id
          collectionId
          title
          description
          navigationRoute
        }
      }
        `,
        })
        .then((res) => {
          return res.data.collections
        })
      console.log(this.list)
    },
  },
}
</script>

<style lang="scss">
.page {
  height: 100vh;
}
.page-header {
  width: 100%;
  min-height: 90px;
  h1 {
    text-transform: uppercase;
  }
}
.page-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 90px);
}
</style>
