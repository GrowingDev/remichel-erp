<template>
  <div id="product">
    <div id="product-basedata">
      <form-title title="produkt anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Setnummer"
        placeholder="Setnummer"
        v-model="product.productId"
      />
      <form-input
        label="Bezeichnung"
        placeholder="Bezeichnung"
        v-model="product.productDescription.title"
      />
      <form-input
        label="Kollektion"
        placeholder="Kollektion"
        v-model="product.productDescription.productGroup"
      />
      <form-input
        label="Furniture"
        placeholder="Furniture"
        v-model="product.productDescription.furniture"
      />
      <form-input
        label="Inlay"
        placeholder="Inlay"
        v-model="product.productDescription.inlay"
      />
      <form-input
        label="Etui"
        placeholder="Etui"
        v-model="product.productDescription.etui"
      />
      <form-input
        label="Verpackung"
        placeholder="Verpackung"
        v-model="product.productDescription.package"
      />
      <form-input
        label="Maße Clip"
        placeholder="Maße Clip"
        v-model="product.productDescription.size"
      />
      <form-input
        label="Gewicht Clip"
        placeholder="Gewicht Clip"
        v-model="product.productDescription.weight"
      />
      <form-input
        label="EAN"
        placeholder="EAN"
        v-model="product.productDescription.ean"
      />
      <form-input
        label="EORI"
        placeholder="EORI"
        v-model="product.productDescription.eori"
      />

      <form-input
        label="Verkaufspreis B2C"
        placeholder="Verkaufspreis B2C"
        v-model="product.productCalculation.price_business"
      />
      <form-input
        label="Verkaufspreis B2B"
        placeholder="Verkaufspreis B2B"
        v-model="product.productCalculation.price_private"
      />
            <div class="placeholder"></div>
            <h3>Produktbilder</h3>
      <!--      <h3>Kalkulation</h3>
    <form-currency-input
        label="Summe Artikel"
        v-model="product.productCalculation.set"
      />
      <form-currency-input
        label="Komplettierung"
        v-model="product.productCalculation.completition"
      />
      <form-currency-input
        label="Überverpackung"
        v-model="product.productCalculation.packaging"
      />
      <form-currency-input
        label="Logistik"
        v-model="product.productCalculation.logistic"
      />
      <div class="placeholder"></div>
      <form-currency-input label="Gesamtsumme" />
      <form-currency-input
        label="Lizenzgebühr 6%"
        v-model="product.productCalculation.license"
      />
      <div class="placeholder"></div>
      <form-currency-input label="EP Netto" />
      <form-currency-input label="EH Spanne +100%" />
      <form-currency-input label="Gesamt Netto" />
      <form-currency-input label="Mehrwertsteuer 20%" />

      <form-currency-input
        label="VK B2C"
        v-model="product.productCalculation.price_Customer"
      />
      <div class="placeholder"></div>
      <form-currency-input label="RECHNUNGSBETRAG B2B NETTO" />
      <form-currency-input
        label="RECHNUNGSBETRAG B2B INKL. STEUER"
        v-model="product.productCalculation.bill_sum_02"
      />
      <form-currency-input
        label="RECHNUNGSBETRAG B2C NETTO"
        v-model="product.productCalculation.bill_sum_03"
      />
      <form-currency-input
        label="RECHNUNGSBETRAG B2C INKL. STEUER"
        v-model="product.productCalculation.bill_sum_04"
      />
      <div class="placeholder"></div>
      -->
      <form-images />
      <div class="list-container">
        <div class="placeholder"></div>

      </div>
      <menu-bar :saveDocument="save" :deleteDocument="deleteProduct"/>
    </div>
  </div>
</template>

<script>
import FormCurrencyInput from '~/components/forms/form-currency-input.vue'
import FormImages from '~/components/forms/form-images.vue'
import FormInput from '~/components/forms/form-input.vue'
import FormSelect from '~/components/forms/form-select.vue'
import FormTitle from '~/components/forms/form-title.vue'
import menubar from '~/components/menu-bar/menu-bar.vue'

export default {
  name: 'ProductPage',
  components: {
    FormTitle,
    FormCurrencyInput,
    FormSelect,
    FormInput,
    menubar,
    FormImages,
  },
  mounted() {
    if (this.$route.params.id !== 'new') {
      this.getProduct(this.$route.params.id)
    }
  },
  data() {
    return {
      product: {
        productDescription: {},
        productCalculation: {},
        productComponents: {},
      },
    }
  },

  methods: {
    updateList() {},
    save(){

      if(this.$route.params.id == "new"){
        this.createProduct()
      }else{
        this.updateProduct()
      }
    },
    getProduct(id) {
      console.log(id)
      this.$axios
        .$post('https://api.remichel-cc.com/api', {
          query: `
       query Product($id: ID!) {
        product(id: $id) {
          id
          productId
  productDescription{
    title
    etui
    furniture
    productGroup
    inlay
    package
    weight
    size
    ean
    eori
      }
      productCalculation{
        set
        completition
        packaging
        logistic
        license
        price_Customer
        price_private
        price_business
        bill_sum_01
        bill_sum_02
        bill_sum_03
        bill_sum_04
      }
        }
      }
        `,
          fetchPolicy: 'no-cache',
          variables: {
            id: id,
          },
        })
        .then((res) => {
          this.product = res.data.product
          console.log(this.product)
        })
    },
    createProduct() {
      this.$axios
        .$post('http://localhost:4000', {
          query: `
       mutation CREATEPRODUCT($input: productInput!) {
        createProduct(input: $input) {
          productDescription {
            title
          }
        }
        }
        `,
          fetchPolicy: 'no-cache',
          variables: {
            input: this.product,
          },
        })
        .then((res) => {
          this.$router.back()
        })
    },
    updateProduct() {
      this.$axios
        .$post('http://localhost:4000', {
          query: `
       mutation updateProduct($id: ID!, $input: productInput) {
  updateProduct(id:$id,input: $input) {
    productDescription {
      title
    }
  }
}
        `,
          fetchPolicy: 'no-cache',
          variables: {
            id: this.product.id,
            input: {
              productDescription: this.product.productDescription,
              productCalculation: this.product.productCalculation,
              productComponents: this.product.productComponents
            },
          },
        })
        .then((res) => {
          this.$router.back()
        })
    },
    deleteProduct(id) {
      console.log('delete Product', this.product.id)

      this.$axios
        .$post('https://api.remichel-cc.com/api', {
          query: `mutation DELETEPRODUCT($id: ID!) {
                    deleteProduct(id: $id) {
                id
            }
            }`,
          fetchPolicy: 'no-cache',
          variables: {
            id: this.product.id,
          },
        })
        .then((res) => {
          this.product = res.data.product
          console.log(this.product)
          this.$router.back()
        })
    },
  },
}
</script>


<style lang="scss" scoped >
#product {
  padding: 100px;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  float: right;
  width: calc(100vw - 320px);

  h3 {
    justify-self: flex-start;
    margin-bottom: 2rem;
    margin-top: 2rem;
    margin-left: 5px;
  }
  #product-basedata {
    background: white;
    padding: 50px;
    width: 210mm;
    text-transform: uppercase;
  }
}
.placeholder {
  margin: 25px;
}
</style>
