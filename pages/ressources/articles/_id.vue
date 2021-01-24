<template>
  <div id="article">
    <div id="article-basedata">
      <form-title title="artikel anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="artikelnummer"
        placeholder="Artikelnummer"
        v-model="article.articleID"
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
        v-model="article.group"
      />
      <form-select
        label="Lieferant"
        defaultOption="Bitte wählen Sie"
        :options="articleDetails.supplier"
      />
      <form-input
        label="Externe Artikelnummer"
        placeholder="Externe Artikelnummer"
      />
      <form-input label="EAN" placeholder="EAN" />
      <h3>Kalkulation</h3>
      <form-currency-input label="Einkaufspreis" placeholder="Einkaufspreis" />
      <form-currency-input label="Aufschlag" placeholder="Aufschlag" />
      <form-currency-input label="Netto" placeholder="Netto" />
      <form-currency-input
        label="Steuersatz in Prozent z.B 10%"
        placeholder="Steuersatz in Prozent z.B 10%"
      />
      <form-currency-input label="Gesamt" placeholder="Gesamt" />
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
    console.log(process.env.BACKEND_URL)

    if (this.$route.params.id !== 'new') {
      this.list = fetch(
        `${process.env.BACKEND_URL || 'http://localhost:9091'}/get`,
        {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({
            ArticleID: parseInt(this.$route.params.id),
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          this.article = res
          console.log(this.article)
        })
    }
  },
  data() {
    return {
      article: {
        articleID: '',
        title: '',
        description: '',
        group: '',
      },

      articleDetails: {
        supplier: '',
        supplierArticleID: '',
        ean: '',
      },
      calculation: {
        purchasingPrice_01: '',
        surcharge: '',
        tax: '',
        total: '',
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
    saveDocument() {
      console.log(this.article)
      this.list = fetch(`https://api.remichel-cc.com/create`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          Title: this.article.title,
          Description: this.article.description,
          Group: this.article.group,
          Typ: '',
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.article = res
          console.log(this.article)
          this.$router.back()
        })
    },
    deleteDocument() {
      this.list = fetch(
        `${process.env.BACKEND_URL || 'http://localhost:9091'}/delete`,
        {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({
            ArticleID: parseInt(this.$route.params.id),
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          this.$router.back()
        })
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
