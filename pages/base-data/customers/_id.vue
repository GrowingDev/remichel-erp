<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="kunden anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Kundengruppe"
        placeholder="Kundengruppe"
        v-model="customer.customer_type"
      />
      <section class="section-container">
        <form-input
          label="Steuernummer"
          placeholder="Steuernummer"
          v-model="customer.taxId"
        />
        <form-input label="UID" placeholder="UID" v-model="customer.uId" />
        <form-input label="EORI" placeholder="EORI" v-model="customer.eori" />
        <form-input
          label="Phone"
          placeholder="Phone"
          v-model="customer.business_phone"
        />
        <form-input
          label="Homepage"
          placeholder="Homepage"
          v-model="customer.business_homepage"
        />
      </section>
      <div class="placeholder"></div>
      <h2>Ansprechpartner</h2>
      <form-select
        label="Anrede"
        defaultOption="Bitte wählen Sie"
        :options="genders"
        v-model="customer.contact.gender"
      />
      <form-input
        label="Titel"
        placeholder="Titel"
        v-model="customer.contact.title"
      />
      <form-input
        label="Vorname"
        placeholder="Vorname"
        v-model="customer.contact.pre_name"
      />
      <form-input
        label="Nachname"
        placeholder="Nachname"
        v-model="customer.contact.last_name"
      />
      <form-input
        label="Primäre Telefonnummer"
        placeholder="Primäre Telefonnummer"
        v-model="customer.contact.phone_01"
      />
      <form-input
        label="Sekundäre Telefonnummer"
        placeholder="Sekundäre Telefonnummer"
        v-model="customer.contact.phone_02"
      />
      <form-input
        label="E-Mail"
        placeholder="E-Mail"
        v-model="customer.contact.mail"
      />
      <div class="placeholder"></div>
      <h2>Rechnungsadresse</h2>

      <form-input
        placeholder="Name"
        label="Name"
        v-model="customer.billing_address.name"
      />
      <form-input
        label="Strasse"
        placeholder="Strasse"
        v-model="customer.billing_address.street"
      />
      <form-input
        label="Nr"
        placeholder="Nr"
        v-model="customer.billing_address.street_nr"
      />

      <form-input
        label="straßenzusatz"
        placeholder="Straßenzusatz"
        v-model="customer.billing_address.extension"
      />

      <form-input
        label="Postleitzahl"
        placeholder="Postleitzahl"
        v-model="customer.billing_address.post_code"
      />
      <form-input
        label="Ort"
        placeholder="Ort"
        v-model="customer.billing_address.city"
      />
      <form-input
        label="Land"
        placeholder="Land"
        v-model="customer.billing_address.country"
      />
      <div class="placeholder"></div>
      <section class="section-container" v-if="customer.shipping_address">
        <h2>Lieferadresse</h2>
        <form-input
          placeholder="Name"
          label="Name"
          v-model="customer.shipping_address.name"
        />
        <form-input
          label="Strasse"
          placeholder="Strasse"
          v-model="customer.shipping_address.street"
        />
        <form-input
          label="Nr"
          placeholder="Nr"
          v-model="customer.shipping_address.street_nr"
        />

        <form-input
          label="straßenzusatz"
          placeholder="Straßenzusatz"
          v-model="customer.shipping_address.extension"
        />

        <form-input
          label="Postleitzahl"
          placeholder="Postleitzahl"
          v-model="customer.shipping_address.post_code"
        />
        <form-input
          label="Ort"
          placeholder="Ort"
          v-model="customer.shipping_address.city"
        />
        <form-input
          label="Land"
          placeholder="Land"
          v-model="customer.shipping_address.country"
        />
      </section>
      <div class="placeholder"></div>
      <h2>Bestellhistorie</h2>

      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import formInput from '~/components/forms/form-input.vue'
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'
import FormSelect from '~/components/forms/form-select.vue'

export default {
  components: { formInput, FormTitle, MenuBar, FormSelect },
  name: 'CustomerPage',
  async mounted() {
    if (this.$route.params.id !== 'new') {
      this.customer = await fetch(
        process.env.API_URL + `/api/entitys/${this.$route.params.id}`
      ).then((res) => res.json())
    }
  },
  data() {
    return {
      customer: {
        customer_type: 'B2C',
        contact: {},
        billing_address: {},
        shipping_address: {},
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
            this.customer
          )
          .then((res) => {
            console.log(res)
            this.$router.back()
          })
      } else {
        this.$axios
          .$post(process.env.API_URL + `/api/entitys/`, this.customer)
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

<style lang="scss" scoped>
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
.base-input-input--b:hover {
  background: #b6b6b6;
}
.base-input-input--a:hover {
  background: #b6b6b6;
}
.placeholder {
  margin: 80px;
}
</style>

