<template>
  <div class="page">
    <div class="page-header">
      <form-title title="kollektionen"/>
    </div>
    <div class="page-body">
      <table-collections :listItems="collections" />
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
import FormTitle from '~/components/forms/form-title.vue'

export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableCollections,
    FormTitle
  },

  computed: {
    onboarding() {
      return this.$store.state.ressources.collections.onboarding
    },
    collections() {
      return this.$store.state.ressources.collections.list
    },
  },
  async fetch() {
    let collections = await fetch(
      process.env.API_URL + '/api/collections'
    ).then((res) => res.json())
    this.$store.commit('ressources/collections/setCollections', collections)
  },
  data: () => {
    return {
      doc: false,
      page: 0,
    }
  },
  methods: {
    openNewDocument() {
      this.$router.push(`/ressources/collections/new`)
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
