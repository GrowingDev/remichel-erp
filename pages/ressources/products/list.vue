<template>
  <div class="page">
    <div class="page-header">
     <form-title title="verkaufsartikel" />
    </div>
    <div class="page-body">
      <table-products  />
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
import TableProducts from '~/components/tables/ressources/table-products.vue'
import FormTitle from '~/components/forms/form-title.vue'
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableProducts,
    FormTitle
  },
  async fetch() {
    let products = await fetch(
      process.env.API_URL + '/api/products'
    ).then((res) => res.json())
    this.$store.commit('ressources/products/setProducts', products)
  },
  computed: {
    onboarding() {
      return this.$store.state.ressources.products.onboarding
    },

  },
  data: () => {
    return {
      typ: '',
      page: 0,
    }
  },
  methods: {
    openNewDocument() {
      this.$router.push(`/ressources/products/new`)
    }
  },
}
</script>

<style scoped>
h2 {
  font-size: 1.953rem;
  width: 100%;
  border-bottom: 2px solid black;
}
</style>
