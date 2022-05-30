<template>
  <div id="product">
    <div id="product-basedata">
      <form-title title="produkt anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Setnummer"
        placeholder="Setnummer"
        v-model="product.id"
      />
      <form-input
        label="Bezeichnung"
        placeholder="Bezeichnung"
        v-model="product.name"
      />
      <form-input
        label="Kollektion"
        placeholder="Kollektion"
        v-model="product.collection"
      />
      <form-input
        label="Furniture"
        placeholder="Furniture"
        v-model="product.furniture"
      />
      <form-input label="Inlay" placeholder="Inlay" v-model="product.inlay" />
      <form-input label="Etui" placeholder="Etui" v-model="product.etui" />
      <form-input
        label="Verpackung"
        placeholder="Verpackung"
        v-model="product.box"
      />
      <form-input
        label="Maße Clip"
        placeholder="Maße Clip"
        v-model="product.size"
      />
      <form-input
        label="Gewicht Clip"
        placeholder="Gewicht Clip"
        v-model="product.weight"
      />
      <form-input label="EAN" placeholder="EAN" v-model="product.ean" />
      <form-input label="EORI" placeholder="EORI" v-model="product.eori" />

      <form-input
        label="Verkaufspreis B2C"
        placeholder="Verkaufspreis B2C"
        v-model="product.price_b2c"
      />
      <form-input
        label="Verkaufspreis B2B"
        placeholder="Verkaufspreis B2B"
        v-model="product.price_b2b"
      />
      <div class="placeholder"></div>
      <h2>Kalkulation</h2>

      <form-currency-input
        label="Summe Artikel"
        v-model="calcComponents"
        :disabled="true"
      />
      <form-currency-input
        label="Komplettierung"
        v-model="product.calculation.completition"
      />
      <form-currency-input
        label="Überverpackung"
        v-model="product.calculation.boxing"
      />
      <form-currency-input
        label="Logistik"
        v-model="product.calculation.logistic"
      />
      <div class="placeholder"></div>
      <form-currency-input
        label="Gesamtsumme"
        :disabled="true"
        v-model="calcArticles"
      />
      <form-percent-input
        label="Lizenzgebühr Prozentsatz"
        v-model="product.calculation.license"
      />
      <form-currency-input
        label="Lizenzgebühr"
        v-model="calcLicense"
        :disabled="true"
      />
      <div class="placeholder"></div>
      <form-currency-input
        label="EP Netto"
        v-model="calcEpNetto"
        :disabled="true"
      />
      <form-currency-input
        label="EH Spanne +100%"
        v-model="calcMarge"
        :disabled="true"
      />
      <form-currency-input
        label="Gesamt Netto"
        v-model="calcMarge"
        :disabled="true"
      />
      <form-currency-input
        label="Mehrwertsteuer 20%"
        v-model="calcMwst"
        :disabled="true"
      />

      <form-currency-input
        label="VK B2C"
        v-model="calcPriceB2C"
        :disabled="true"
      />

      <div class="placeholder"></div>
      <div id="action-header">
        <h2 style="width: fit-content; margin: 0">Komponenten</h2>
        <button class="btn-add-article" @click="toogleSelectArticles">
          {{select ? 'Komponenten anzeigen': 'Verfügbare Artikel anzeigen'}}
        </button>
      </div>

      <select-articles v-if="select" :components="this.product.productComponents"/>
      <product-components v-else :components="this.product.productComponents" />
      <div class="placeholder"></div>
      <h2>Produktbilder</h2>
      <div class="images">
        <div class="row-image">
          <div class="image-box">
            <h3>Vorderseite</h3>
            <img
              class="thumbnail"
              :src="`https://api.andreasbenz.org/images/${this.$route.params.id}-front.png`"
              alt="Kein Bild vorhanden"
              onerror="this.src='https://api.andreasbenz.org/images/error.png'"
            />
          </div>
          <div class="image-box">
            <h3>Rückseite</h3>
            <img
              class="thumbnail"
              :src="`https://api.andreasbenz.org/images/${this.$route.params.id}-back.png`"
              alt="Kein Bild vorhanden"
              onerror="this.src='https://api.andreasbenz.org/images/error.png'"
            />
          </div>
        </div>
        <div class="row-image">
          <div class="image-box">
            <h3>Etui</h3>
            <img
              class="thumbnail"
              :src="`https://api.andreasbenz.org/images/${this.$route.params.id}-etui.png`"
              onerror="this.src='https://api.andreasbenz.org/images/error.png'"
            />
          </div>
          <div class="image-box">
            <h3>Box</h3>
            <img
              class="thumbnail"
              :src="`https://api.andreasbenz.org/images/${this.$route.params.id}-package.png`"
              onerror="this.src='https://api.andreasbenz.org/images/error.png'"
            />
          </div>
        </div>
      </div>
      <div class="placeholder"></div>
      <form @submit.prevent="onUpload" id="form-upload">
        <strong> Produktfotos müssen wie folgt bezeichnet werden:</strong>
        <ul id="list">
          <li>Vorderseite: Produktnummer-front</li>
          <li>Rückseite: Produktnummer-back</li>
          <li>Etui: Produktnummer-etui</li>
          <li>Verpackung: Produktnummer-package</li>
          <li>Beispiel: 10000-package</li>
        </ul>
        <label for="file-upload" class="btn-upload">Fotos auswählen</label>
        <input
          id="file-upload"
          type="file"
          name="imagesArray"
          multiple
          @change="onChange"
        />
        <Transition>
          <button class="btn-upload" v-if="this.imagesArray">
            Jetzt Hochladen
          </button>
        </Transition>
      </form>

      <div class="list-container">
        <div class="placeholder"></div>
      </div>

      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteProduct" />
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
import SelectArticles from '~/components/lists/SelectArticles.vue'
import ProductComponents from '~/components/lists/ProductComponents.vue'
import FormPercentInput from '~/components/forms/form-percent-input.vue'
export default {
  name: 'ProductPage',
  components: {
    FormTitle,
    FormCurrencyInput,
    FormSelect,
    FormInput,
    menubar,
    FormImages,
    ProductComponents,
    SelectArticles,
    FormPercentInput,
  },
  data() {
    return {
      imagesArray: null,
      select: false,
      components: [],
      total: 0,
      product: {
        calculation: {
          completition: null,
          boxing: null,
          logistic: null,
        },
        img_urls: {},
        productComponents: [],
      },
    }
  },
  async mounted() {
    if (this.$route.params.id !== 'new') {
      this.product = await fetch(
        process.env.API_URL + `/api/products/${this.$route.params.id}`
      ).then((res) => res.json())
          this.components = await fetch(
        process.env.API_URL + `/api/products/components/${this.$route.params.id}`
      ).then((res) => res.json())
    }
  },
  computed: {
    calcComponents() {

      this.components.forEach(component => {
        const sum = component.amount * component.price;
        this.total = this.total + sum
      });
      return this.total.toFixed(2)
    },
    calcArticles() {
      const completition = parseInt(this.product.calculation.completition)
      const packaging = parseInt(this.product.calculation.boxing)
      const logistic = parseInt(this.product.calculation.logistic)
      const components = parseInt(this.calcComponents)
      let result = completition + packaging + logistic + components

      return result
    },
    calcLicense() {
      let onePercent = this.calcArticles / 100

      let sum = onePercent * parseInt(this.product.calculation.license)

      return sum
    },
    calcEpNetto() {
      const netto = this.calcArticles + this.calcLicense
      return netto.toFixed(2)
    },
    calcMarge() {
      return this.calcEpNetto * 2
    },

    calcTotalNet() {
      return this.calcMarge
    },
    calcMwst() {
      let mwst = this.calcMarge * 0.2
      return mwst.toFixed(2)
    },
    calcPriceB2C() {
      let price = this.calcTotalNet * 1.2
      return price.toFixed(2)
    },
  },

  methods: {
    toogleSelectArticles() {
      this.select = !this.select
    },
    uploadFile(event) {
      this.files = event.target.files
    },

    onChange(event) {
      this.imagesArray = event.target.files
    },
    onUpload() {
      const formData = new FormData()
      for (const i of Object.keys(this.imagesArray)) {
        formData.append('imagesArray', this.imagesArray[i])
      }
      this.$axios
        .post(process.env.API_URL + `/api/images/`, formData, {})
        .then((res) => {
          console.log(res)
        })
    },
    saveDocument() {
      if (this.$route.params.id !== 'new') {

        this.$axios
          .$put(
            process.env.API_URL + `/api/products/${this.$route.params.id}`,
            this.product
          )
          .then((res) => {
            this.$router.back()
          })
      } else {
        this.product.productComponents.push({
          productId: 10001,
          articleId: 10002,
          title: 'testcomponent',
          description: '',
          amount: 2,
        })

        this.$axios
          .$post(process.env.API_URL + `/api/products/`, this.product)
          .then((res) => {
            this.$router.back()
          })
      }
    },
    deleteProduct() {
      this.$axios
        .$delete(process.env.API_URL + `/api/products/${this.$route.params.id}`)
        .then((res) => {
          this.$router.back()
        })
    },
  },
}
</script>


<style lang="scss" scoped >
h2 {
  font-size: 1.953rem;
  width: 100%;
  border-bottom: 2px solid black;
  justify-self: flex-start;
  margin-bottom: 40px;
}
h3 {
  margin-top: 1rem;
  font-size: 1.563rem;
}
#action-header {
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;

  padding-bottom: 40px;
}
ul {
  list-style: none;
  padding: 0;
}
.row-image {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
}
.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#product {
  padding: 100px;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  float: right;
  width: calc(100vw - 320px);

  #product-basedata {
    background: white;
    padding: 50px;
    width: 210mm;
    text-transform: uppercase;
  }
}
.placeholder {
  margin: 80px;
}
.btn-upload {
  background: #303030 !important;
  color: white;
  width: 300px;
  border: none;
  width: 100%;
}

.btn-submit {
  background: #303030;
  border: none;
  color: white;
  padding: 5px;
  width: 300px;
  margin-top: 10px;
}
.images {
  margin-top: 40px;
  width: 100%;
  text-align: left;
}
#list > li:hover {
  background: none;
}
input[type='file'] {
  opacity: 0; /* make transparent */
  z-index: -1; /* move under anything else */
  position: absolute; /* don't let it take up space */
}
.btn-upload {
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #868686;
  font-size: 18px;
  width: 100%;
  text-transform: uppercase;
  background: #303030;
  border: none;
  margin-top: 40px;
  text-align: center;
}
.btn-upload:hover {
  color: white;
  cursor: pointer;
}

#form-upload {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.btn-add-article {
  color: #868686;
  font-size: 14px;
  width: fit-content;
  padding: 16px;

  height: max-content;
  justify-self: center;
  text-transform: uppercase;
  background: #303030;
  border: none;
  margin-left: auto;
  text-align: center;
  height: 100%;
}
.btn-add-article:hover {
  color: white;
  cursor: pointer;
}
</style>
