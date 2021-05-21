<template>
  <div class="product-components">
    <div class="product-components-header">
      <button id="btn-add-components" @click="toogle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
        </svg>
      </button>
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>
    <ul>
      <product-component
        v-for="(component, index) in productComponents"
        :component="component"
        :index="index"
        :key="component.articleId"
      />
    </ul>
  </div>
</template>

<script>
import ProductComponent from '@/components/lists/product-components/ProductComponent.vue'
export default {
  name: 'ProductComponents',
  components: {
    ProductComponent,
  },
  computed: {
    productComponents() {
      return this.$store.state.ressources.products.product.productComponents
    },
    headers() {
      return ['artikelnr', 'artikel', 'beschreibung', 'Menge', 'Gesamt']
    },
  },
  model: {
    event: 'toogleSelect',
  },
  props: {
    components: Array,
    toogle: Function,
  },
  beforeMount() {},
}
</script>

<style lang="scss" scoped>
.product-components {
  border: 1px solid silver;
  height: 500px;
  width: 100%;
  overflow: auto;
  ul {
    padding: 0;
  }
}
.product-components-header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 50px 120px 2fr 2fr 100px 100px;
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

#btn-add-components {
  border: none;
  fill: #868686;
  background: none;
  margin-left: 5px;
  width: max-content;
}
#btn-add-components:hover {
  fill: white;
  cursor: pointer;
}
#btn-remove-component {
  border: none;
  svg {
    fill: #868686;
  }
  background: none;
  margin-left: 5px;
  width: max-content;
}
#btn-remove-component:hover {
  svg:hover {
    fill: white;
  }
  cursor: pointer;
}
</style>
