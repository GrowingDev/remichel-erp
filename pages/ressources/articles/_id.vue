<template>
  <div id="article">
    <div id="article-basedata">
      <form-title title="artikel anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="artikelnummer"
        placeholder="Artikelnummer"
        v-model="article.articleId"
      />
      <form-input
        label="Artikel"
        placeholder="Artikel"
        v-model="article.title"
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
        v-model="article.articleGroup"
      />
      <form-select
        label="Lieferant"
        defaultOption="Bitte wählen Sie"
        :options="article.supplier"
      />
      <form-input
        label="Externe Artikelnummer"
        placeholder="Externe Artikelnummer"
        v-model="article.supplierArticleId"
      />
      <form-input label="EAN" placeholder="EAN" v-model="article.ean" />
      <h3>Kalkulation</h3>
      <form-currency-input
        label="Einkaufspreis"
        placeholder="Einkaufspreis"
        v-model="article.purchasingPrice_01"
      />
      <form-currency-input
        label="Aufschlag"
        placeholder="Aufschlag"
        v-model="article.surcharge"
      />
      <form-currency-input
        label="Netto"
        placeholder="Netto"
        v-model="article.net"
      />
      <form-input
        label="Steuersatz in Prozent z.B 10%"
        placeholder="Steuersatz in Prozent z.B 10%"
        v-model="article.tax"
      />
      <form-currency-input
        label="Gesamt"
        placeholder="Gesamt"
        v-model="article.total"
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
  mounted() {
    if (this.$route.params.id !== 'new') {
     this.getArticle(this.$route.params.id)
    }
  },
  data() {
    return {
      article: {

      },
      groups: [
        {
          value: 'STANDARD',
          text: 'STANDARD',
        },
        {
          value: 'FLÜGEL',
          text: 'FLÜGEL',
        },
        {
          value: 'HALTEBÜGEL',
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
          value: 'BÜGELHALTER',
          text: 'BÜGELHALTER',
        },
        {
          value: 'ÖFFNER',
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
  methods: {
    getArticle(id) {
      console.log(id)
      this.$axios
        .$post('http:localhost:4000', {
          query: `
       query Article($id: ID!) {
        article(id: $id) {
          id
          articleId
          title
          description
          articleGroup
          supplier
          supplierArticleId
          ean
          eori
          tax
          total
          purchasingPrice_01
          purchasingPrice_02
          purchasingPrice_03
          purchasingPrice_04
          net
          surcharge

        }
      }
        `,
          fetchPolicy: 'no-cache',
          variables: {
            id: id,
          },
        })
        .then((res) => {
          this.article = res.data.article
          console.log(this.article)
        })
    },
    saveDocument() {

    },
    deleteDocument() {

    },
  },
}
</script>

<style lang="scss" scoped >
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
  margin: 25px;
}
</style>
