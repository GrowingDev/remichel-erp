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
      <h3>Kalkulation</h3>
      <form-currency-input
        label="Summe Artikel"
        v-model="componentCosts"
        :disabled="true"
      />
      <form-currency-input label="Komplettierung" v-model="completition" />
      <form-currency-input label="Überverpackung" v-model="packaging" />
      <form-currency-input label="Logistik" v-model="logistic" />
      <div class="placeholder"></div>
      <form-currency-input label="Gesamtsumme" v-model="firstTotal" :disabled="true"/>
      <form-percent-input
        label="Lizenzgebühr Prozentsatz"
        v-model="licensePercent"
      />
      <form-currency-input label="Lizenzgebühr" v-model="license" :disabled="true"/>
      <div class="placeholder"></div>
      <form-currency-input label="EP Netto" v-model="epNet" :disabled="true" />
      <form-currency-input label="EH Spanne +100%" v-model="epNet" :disabled="true"/>
      <form-currency-input label="Gesamt Netto" v-model="totalNet" :disabled="true"/>
      <form-currency-input label="Mehrwertsteuer 20%" v-model="mwst" :disabled="true"/>

      <form-currency-input
        label="VK B2C"
        v-model="vkB2C"
        :disabled="true"
      />

      <div class="placeholder"></div>
      <h3>Produktkomponent</h3>
      <product-components
        :components="product.productComponents"
        :toogle="toogleSelectComponents"
        v-if="!select"
      />
      <selectable-components
        v-if="select"
        :toogle="toogleSelectComponents"
        :items="product.productComponents"
      />
      <h3>Produktbilder</h3>
      <h4>Front</h4>
      <div class="img-box furniture-front-image">
        <img
          v-if="product.productImages.front"
          :src="`https://uploads.remichelgroup.com/static/${product.productImages.front}`"
          onerror="this.style.display='none'"
        />
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input type="file" @change="uploadFile" class="btn-upload" />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block btn-lg btn-submit">
            Datei Hochladen
          </button>
        </div>
      </form>
      <h4>Back</h4>
      <div class="img-box furniture-front-image">
        <img
          v-if="product.productImages.back"
          :src="`https://uploads.remichelgroup.com/static/${product.productImages.back}`"
          onerror="this.style.display='none'"
        />
      </div>
      <form @submit.prevent="handleSubmitBack">
        <div class="form-group">
          <input class="btn-upload" type="file" @change="uploadFile" />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block btn-lg btn-submit">
            Datei Hochladen
          </button>
        </div>
      </form>
      <h4>Etui</h4>
      <div class="img-box furniture-front-image">
        <img
          v-if="product.productImages.etui"
          :src="`https://uploads.remichelgroup.com/static/${product.productImages.etui}`"
          onerror="this.style.display='none'"
        />
      </div>
      <form @submit.prevent="handleSubmitEtui">
        <div class="form-group">
          <input type="file" @change="uploadFile" class="btn-upload" />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block btn-lg btn-submit">
            Datei Hochladen
          </button>
        </div>
      </form>
      <h4>Verpackung</h4>
      <div class="img-box furniture-front-image">
        <img
          v-if="product.productImages.etui"
          :src="`https://uploads.remichelgroup.com/static/${product.productImages.boxing}`"
          onerror="this.style.display='none'"
        />
      </div>
      <form @submit.prevent="handleSubmitBoxing">
        <div class="form-group">
          <input class="btn-upload" type="file" @change="uploadFile" />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block btn-lg btn-submit">
            Hochladen
          </button>
        </div>
      </form>

      <div class="list-container">
        <div class="placeholder"></div>
      </div>

      <menu-bar :saveDocument="save" :deleteDocument="deleteProduct" />
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
import ProductComponents from '~/components/lists/product-components/ProductComponents.vue'
import SelectableComponents from '~/components/lists/SelectableComponents.vue'
import FormPercentInput from '~/components/forms/form-percent-input.vue'
export default {
  name: 'ProductPage',
  computed: {
    product() {
      return this.$store.state.ressources.products.product
    },
    componentCosts() {
      let sum
      let arr = this.$store.state.ressources.products.product.productComponents.map(
        function (component) {
          let totalCosts = component.cost * component.amount
          sum + totalCosts
          return totalCosts
        }
      )
      return arr.reduce(function (acc, val) {
        return acc + val
      }, 0)
    },
    completition: {
      // getter
      get: function () {
        return this.product.productCalculation.completition
      },
      // setter
      set: function (newValue) {
        this.product.productCalculation.completition = parseFloat(newValue)
      },
    },
    packaging: {
      // getter
      get: function () {
        return this.product.productCalculation.packaging
      },
      // setter
      set: function (newValue) {
        this.product.productCalculation.packaging = parseFloat(newValue)
      },
    },
    logistic: {
      // getter
      get: function () {
        return this.product.productCalculation.logistic
      },
      // setter
      set: function (newValue) {
        this.product.productCalculation.logistic = parseFloat(newValue)
      },
    },

    licensePercent: {
      // getter
      get: function () {
        return this.product.productCalculation.licensePercent
      },
      // setter
      set: function (newValue) {
        this.product.productCalculation.licensePercent = parseFloat(newValue)
      },
    },
    license() {
      let onePercent = this.firstTotal / 100
      let sum = onePercent * this.product.productCalculation.licensePercent
      return sum
    },
    epNet() {
      let net = this.license + this.firstTotal

      return net
    },
    retailProfit() {
      return this.epNet
    },
    totalNet() {
      return this.epNet * 2
    },
    mwst() {
      let totalNet = this.epNet * 2

      return totalNet * 0.2
    },
    vkB2C(){
      return this.mwst + this.epNet * 2
    },
    firstTotal() {
      let firstTotal =
        this.componentCosts +
        this.product.productCalculation.completition +
        this.product.productCalculation.packaging +
        this.product.productCalculation.logistic
      return firstTotal
    },
  },
  async beforeMount() {
    this.$store.dispatch('ressources/products/initProductState', {
      id: this.$route.params.id,
    })
  },
  components: {
    FormTitle,
    FormCurrencyInput,
    FormSelect,
    FormInput,
    menubar,
    FormImages,
    ProductComponents,
    SelectableComponents,
    FormPercentInput,
  },
  data() {
    return {
      files: null,
      select: false,
    }
  },
  methods: {
    toogleSelectComponents() {
      this.select = !this.select
    },
    uploadFile(event) {
      this.files = event.target.files
    },

    updateList() {},
    save() {
      if (this.$route.params.id == 'new') {
        this.createProduct()
      } else {
        this.updateProduct()
      }
    },
    handleSubmit() {
      const formData = new FormData()
      for (const i of Object.keys(this.files)) {
        formData.append('files', this.files[i])
      }
      this.$axios
        .post('https://uploads.remichelgroup.com/uploadFront/', formData, {})
        .then((res) => {
          this.product.productImages.front = res.data
        })
    },
    handleSubmitBack() {
      const formData = new FormData()
      for (const i of Object.keys(this.files)) {
        formData.append('files', this.files[i])
      }
      this.$axios
        .post('https://uploads.remichelgroup.com/uploadFront/', formData, {})
        .then((res) => {
          this.product.productImages.back = res.data
        })
    },
    handleSubmitEtui() {
      const formData = new FormData()
      for (const i of Object.keys(this.files)) {
        formData.append('files', this.files[i])
      }
      this.$axios
        .post('https://uploads.remichelgroup.com/uploadFront/', formData, {})
        .then((res) => {
          this.product.productImages.etui = res.data
        })
    },
    handleSubmitBoxing() {
      const formData = new FormData()
      for (const i of Object.keys(this.files)) {
        formData.append('files', this.files[i])
      }
      this.$axios
        .post('https://uploads.remichelgroup.com/uploadFront/', formData, {})
        .then((res) => {
          this.product.productImages.boxing = res.data
        })
    },
    createProduct() {
      this.$axios
        .$post('https://api.remichelgroup.com/', {
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
      this.$store.dispatch('ressources/products/updateProduct')
    },
    deleteProduct(id) {
      console.log('delete Product', this.product.id)

      this.$axios
        .$post('https://api.remichelgroup.com/', {
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
.btn-upload {
  background: #303030 !important;
  color: white;
  width: 300px;
  border: none;
}

.btn-submit {
  background: #303030;
  border: none;
  color: white;
  padding: 5px;
  width: 300px;
  margin-top: 10px;
}
</style>
