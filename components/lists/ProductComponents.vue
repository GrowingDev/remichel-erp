<template>
  <div id="select-components">
    <div class="header">
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>

    <product-component-list-item
      v-for="component in productComponents"
      :key="component.id"
      :data="component"
      :load="loadComponents"
    />
  </div>
</template>

<script>
import ProductComponentListItem from './ProductComponentListItem.vue'

export default {
  name: 'ProductComponents',
  components: {
    ProductComponentListItem,
  },
  data() {
    return {
      productComponents: [],
      selected: false,
    }
  },
  async mounted() {
    this.$axios
      .$get(
        process.env.API_URL +
          `/api/products/components/${this.$route.params.id}`
      )
      .then((res) => {
        console.log(res)
        this.productComponents = res
      })
  },
  computed: {
    headers() {
      return ['artikelnr', 'artikel', 'Preis', 'Anzahl', 'Gesamt']
    },
  },

  props: {
    toogle: Function,
    components: Array,
  },
  methods: {
    loadComponents() {
      this.$axios
        .$get(
          process.env.API_URL +
            `/api/products/components/${this.$route.params.id}`
        )
        .then((res) => {
          console.log(res)
          this.productComponents = res
        })
    },
    selectArticle() {
      console.log('test')
      this.selected = !this.selected
    },
  },
}
</script>

<style lang="scss" scoped>
#select-components {
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
  ul {
    padding: 0;
  }
}
.selected {
  color: white;
  background: #303030;
}
.header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 150px 1fr 100px 100px 100px 50px;
  background: #212121;
  color: white;
  justify-items: center;
  align-items: center;
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  p {
    width: max-content;
    text-transform: uppercase;
  }
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
