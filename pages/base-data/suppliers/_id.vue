<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="lieferanten anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Lieferantennummer"
        placeholder="Lieferantennummer"
        v-model="supplier.id"
        :disabled="true"
      />
      <form-input
        label="Unternehmen"
        placeholder="Unternehmen"
        v-model="supplier.company"
      />
      <form-input
        label="Steuernummer"
        placeholder="Steuernummer"
        v-model="supplier.taxId"
      />

      <form-input label="UID" placeholder="UID" v-model="supplier.uId" />
      <form-input label="EORI" placeholder="EORI" v-model="supplier.eori" />
            <div class="placeholder"></div>
      <h2>Kontakt</h2>
      <form-input
        label="Telefonnummer"
        placeholder="Telefonnummer"
        v-model="supplier.business_phone"
      />
      <form-input
        label="Homepage"
        placeholder="Homepage"
        v-model="supplier.business_homepage"
      />
            <div class="placeholder"></div>
      <h2>Ansprechpartner</h2>
      <form-select
        label="Anrede"
        defaultOption="Bitte wählen Sie"
        :options="genders"
        v-model="supplier.contact.gender"
      />
      <form-input
        label="Titel"
        placeholder="Titel"
        v-model="supplier.contact.title"
      />
      <form-input
        label="Vorname"
        placeholder="Vorname"
        v-model="supplier.contact.pre_name"
      />
      <form-input
        label="Nachname"
        placeholder="Nachname"
        v-model="supplier.contact.last_name"
      />
      <form-input
        label="Primäre Telefonnummer"
        placeholder="Primäre Telefonnummer"
        v-model="supplier.contact.phone_01"
      />
      <form-input
        label="Sekundäre Telefonnummer"
        placeholder="Sekundäre Telefonnummer"
        v-model="supplier.contact.phone_02"
      />
      <form-input
        label="E-Mail"
        placeholder="E-Mail"
        v-model="supplier.contact.mail"
      />
            <div class="placeholder"></div>
      <h2
      >Rechnungsadresse</h2>

      <form-input
        placeholder="Name"
        label="Name"
        v-model="supplier.billing_address.name"
      />

      <form-input
        placeholder="Strasse"
        label="Strasse"
        v-model="supplier.billing_address.street"
      />
      <form-input
        placeholder="Nr"
        label="Nr"
        v-model="supplier.billing_address.street_nr"
      />

      <form-input
        placeholder="Straßenzusatz"
        label="Straßenzusatz"
        v-model="supplier.billing_address.extension"
      />

      <form-input
        placeholder="Postleitzahl"
        label="Postleitzahl"
        v-model="supplier.billing_address.post_code"
      />
      <form-input
        placeholder="Ort"
        label="Ort"
        v-model="supplier.billing_address.city"
      />

      <form-input
        placeholder="Land"
        label="Land"
        v-model="supplier.billing_address.country"
      />
      <div class="placeholder"></div>
      <section class="section-container">
        <h2>Lieferadresse</h2>

        <form-input
          placeholder="Name"
          label="Name"
          v-model="supplier.shipping_address.name"
        />

        <form-input
          placeholder="Strasse"
          label="Strasse"
          v-model="supplier.shipping_address.street"
        />
        <form-input
          placeholder="Nr"
          label="Nr"
          v-model="supplier.shipping_address.street_nr"
        />

        <form-input
          placeholder="Straßenzusatz"
          label="Straßenzusatz"
          v-model="supplier.shipping_address.extension"
        />

        <form-input
          placeholder="Postleitzahl"
          label="Postleitzahl"
          v-model="supplier.shipping_address.post_code"
        />
        <form-input
          placeholder="Ort"
          label="Ort"
          v-model="supplier.shipping_address.city"
        />

        <form-input
          placeholder="Land"
          label="Land"
          v-model="supplier.shipping_address.country"
        />
      </section>
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'
import FormInput from '@/components/forms/form-input.vue'
import FormSelect from '~/components/forms/form-select.vue'

export default {
  name: 'SupplierPage',
  components: {
    FormInput,
    MenuBar,
    FormTitle,
    FormSelect
  },
  async mounted() {
    if (this.$route.params.id !== 'new') {
      this.supplier = await fetch(
        process.env.API_URL + `/api/entitys/${this.$route.params.id}`
      ).then((res) => res.json())
    }
  },
  data() {
    return {
      supplier: {
        customer_type: 'SUPPLIER',
        contact: {},
        shipping_address: {},
        billing_address: {},
      },
      genders: [
        {
          value: 'MALE',
          text: 'Herr',
        },
        {
          value: 'FEMALE',
          text: 'Frau',
        },
        {
          value: 'DIVERSE',
          text: 'Diverse',
        },
      ],
    }
  },

  methods: {
    saveDocument() {
      if (this.$route.params.id !== 'new') {
        this.$axios
          .$put(
            process.env.API_URL + `/api/entitys/${this.$route.params.id}`,
            this.supplier
          )
          .then((res) => {
            console.log(res)
            this.$router.back()
          })
      } else {
        this.$axios
          .$post(process.env.API_URL + `/api/entitys/`, this.supplier)
          .then((res) => {
            console.log(res)
            this.$router.back()
          })
      }
    },
    deleteDocument() {
      this.$axios
        .$delete(process.env.API_URL + `/api/entitys/${this.$route.params.id}`)
        .then((res) => {
          console.log(res)
          this.$router.back()
        })
    },
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 40px;
  font-size: 1.953rem;
  width: 100%;
  border-bottom: 2px solid black;
}
h3 {
  font-size: 1.563rem;
}
.placeholder {
  margin: 80px;
}
</style>
