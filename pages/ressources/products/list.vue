<template>
  <div class="page">
    <div class="page-header">
      <h2 v-if="this.list.length !== 0">Produkte</h2>
    </div>
    <div class="page-body">
      <table-products :listItems="list" />
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
export default {
  name: 'list',
  components: {
    NoDataFound,
    PageTitle,
    MenuBar,
    LoadingSpinner,
    ErrorOccured,
    TableProducts,
  },
  beforeMount() {
    this.getProducts()
  },
  computed: {
    onboarding() {
      return this.$store.state.ressources.products.onboarding
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
      this.$router.push(`/ressources/products/new`)
    },
    async getProducts() {
      this.list = await this.$axios
        .$post('https://api.remichelgroup.com/', {
          query: `
      query {
        products {
          id
          productId
          productDescription{
            title
          productGroup
          }
        }
      }
        `,
        })
        .then((res) => {
          return res.data.products
        })
      console.log(this.list)
    },
  },
}
</script>
