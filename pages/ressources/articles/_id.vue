<template>
  <div id="article">
    <div id="article-basedata">
      <form-title title="artikel anlage" style="align-self: center" />
      <div class="placeholder"></div>

      <form-input
        label="artikelnummer"
        placeholder="Artikelnummer"
        v-model="article.id"
        :disabled="true"
      />
      <form-input
        label="Artikel"
        placeholder="Artikel"
        v-model="article.name"
      />
      <form-input
        label="Beschreibung"
        placeholder="Beschreibung"
        v-model="article.description"
      />
      <form-select
        label="Artikelgruppe"
        defaultOption="Bitte wählen Sie"
        :options="groups"
        v-model="article.article_type"
      />
      <form-select
        label="Lieferant"
        defaultOption="Bitte wählen Sie"
        :options="article.supplier"
      />
      <form-input
        label="Externe Artikelnummer"
        placeholder="Externe Artikelnummer"
        v-model="article.supplier_id"
      />
      <form-input label="EAN" placeholder="EAN" v-model="article.ean" />
      <div class="placeholder"></div>
      <h2>Kalkulation</h2>
      <form-currency-input
        label="Einkaufspreis"
        placeholder="Einkaufspreis"
        v-model="article.price"
      />
      <form-currency-input
        label="Aufschlag"
        placeholder="Aufschlag"
        v-model="article.marge"
      />
      <form-currency-input
        label="Netto"
        placeholder="Netto"
        v-model="calcNetto"
      />
      <form-currency-input
        label="MEHRWERTSTEUER 20%"
        placeholder="MEHRWERTSTEUER 20%"
        v-model="calcMwst"
      />
      <form-currency-input
        label="Gesamt"
        placeholder="Gesamt"
        v-model="calcTotal"
      />
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormCurrencyInput from '~/components/forms/form-currency-input.vue'
import FormInput from '~/components/forms/form-input.vue'
import FormSelect from '~/components/forms/form-select.vue'
import FormTitle from '~/components/forms/form-title.vue'
import menuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  name: 'ArticlePage',
  components: { menuBar, FormInput, FormSelect, FormCurrencyInput, FormTitle },
  data() {
    return {
      article: {},
      groups: [
        {
          value: 'STANDARD',
          text: 'STANDARD',
        },
        {
          value: 'FLUEGEL',
          text: 'FLÜGEL',
        },
        {
          value: 'HALTEBUEGEL',
          text: 'HALTEBÜGEL',
        },
        {
          value: 'ETUI',
          text: 'ETUI',
        },
        {
          value: 'DESIGN',
          text: 'DESIGN',
        },
        {
          value: 'BUEGELHALTER',
          text: 'BÜGELHALTER',
        },
        {
          value: 'OEFFNER',
          text: 'ÖFFNER',
        },
        {
          value: 'VERPACKUNG',
          text: 'VERPACKUNG',
        },
        {
          value: 'DRUCKERZEUGNIS',
          text: 'DRUCKERZEUGNIS',
        },
        {
          value: 'SONSTIGE',
          text: 'SONSTIGE',
        },
      ],
    }
  },
  async fetch() {
    if (this.$route.params.id !== 'new') {
      this.article = await fetch(
        process.env.API_URL + `/api/articles/${this.$route.params.id}`
      ).then((res) => res.json())
    }
  },
  computed: {
    calcNetto() {
      let netto = parseInt(this.article.price) + parseInt(this.article.marge)
      return netto
    },
    calcMwst() {
      let netto = parseInt(this.article.price) + parseInt(this.article.marge)
      let mwst = netto * 0.2
      return mwst.toFixed(2)
    },
    calcTotal() {
      let netto = parseInt(this.article.price) + parseInt(this.article.marge)
      return netto * 1.2
    },
  },
  methods: {
    saveDocument() {
      if (this.$route.params.id !== 'new') {
        this.article.total = this.calcTotal

        this.$axios
          .$put(
            process.env.API_URL + `/api/articles/${this.$route.params.id}`,
            this.article
          )
          .then((res) => {
            this.$router.back()
          })
      } else {
        this.article.total = this.calcTotal
        this.$axios
          .$post(process.env.API_URL + `/api/articles/`, this.article)
          .then((res) => {
            this.$router.back()
          })
      }
    },
    deleteDocument() {
      this.$axios
        .$delete(process.env.API_URL + `/api/articles/${this.$route.params.id}`)
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
  margin-bottom: 40px;
}
h3 {
  font-size: 1.563rem;
}
#article {
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
  #article-basedata {
    background: white;
    padding: 50px;
    width: 210mm;
    text-transform: uppercase;
  }
}
.placeholder {
  margin: 80px;
}
</style>
