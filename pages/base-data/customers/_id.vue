<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="kunden anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Kundennummer"
        placeholder="Kundennummer"
        v-model="customer.customerId"
      />
      <form-input
        label="Kundengruppe"
        placeholder="Kundengruppe"
        v-model="customer.customerGroup"
      />
      <section class="section-container" v-if="!privateCustomer">
        <form-input label="Steuernummer" placeholder="Steuernummer" v-model="customer.identification.taxId"/>
        <form-input
          label="UID"
          placeholder="UID"
          v-model="customer.identification.cId"
        />
        <form-input
          label="EORI"
          placeholder="EORI"
          v-model="customer.identification.eori"
        />
        <form-input
          label="Homepage"
          placeholder="Homepage"
          v-model="customer.contact.homepage"
        />
      </section>
      <h3>Ansprechpartner</h3>
      <form-input
        label="Anrede"
        placeholder="Anrede"
        v-model="customer.contactPerson.gender"
      />
      <form-input
        label="Vorname"
        placeholder="Vorname"
        v-model="customer.contactPerson.preName"
      />
      <form-input
        label="Nachname"
        placeholder="Nachname"
        v-model="customer.contactPerson.lastName"
      />
      <form-input
        label="Primäre Telefonnummer"
        placeholder="Primäre Telefonnummer"
        v-model="customer.contactPerson.phone01"
      />
      <form-input
        label="Sekundäre Telefonnummer"
        placeholder="Sekundäre Telefonnummer"
        v-model="customer.contactPerson.phone02"
      />
      <form-input
        label="E-Mail"
        placeholder="E-Mail"
        v-model="customer.contactPerson.email"
      />
      <h3>Rechnungsadresse</h3>

      <form-input
        placeholder="Name"
        label="Name"
        v-model="customer.billingAddress.title"
      />
      <form-input
        label="Strasse"
        placeholder="Strasse"
        v-model="customer.billingAddress.street"
      />
      <form-input label="Nr" placeholder="Nr" v-model="customer.billingAddress.streetNr" />

      <form-input
        label="straßenzusatz"
        placeholder="Straßenzusatz"
        v-model="customer.billingAddress.streetExtension"
      />

      <form-input
        label="Postleitzahl"
        placeholder="Postleitzahl"
        v-model="customer.billingAddress.postCode"
      />
      <form-input label="Ort" placeholder="Ort" v-model="customer.billingAddress.city" />
      <form-input
        label="Land"
        placeholder="Land"
        v-model="customer.billingAddress.country"
      />
      <section class="section-container" v-if="customer.shippingAddress">
        <h3>Lieferadresse</h3>
        <form-input
          placeholder="Name"
          label="Name"

        />
        <form-input
          label="Strasse"
          placeholder="Strasse"
          v-model="customer.shippingAddress.street"
        />
        <form-input
          label="Nr"
          placeholder="Nr"
          v-model="customer.shippingAddress.streetNr"
        />

        <form-input
          label="straßenzusatz"
          placeholder="Straßenzusatz"
          v-model="customer.shippingAddress.streetExtension"
        />

        <form-input
          label="Postleitzahl"
          placeholder="Postleitzahl"
          v-model="customer.shippingAddress.postCode"
        />
        <form-input label="Ort" placeholder="Ort" v-model="customer.shippingAddress.city" />
        <form-input
          label="Land"
          placeholder="Land"
          v-model="customer.shippingAddress.country"
        />
      </section>
      <h3>Bestellhistorie</h3>

      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import formInput from '~/components/forms/form-input.vue'
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  components: { formInput, FormTitle, MenuBar },
  name: 'CustomerPage',
  beforeMount() {
    if (this.$route.params.id !== 'new') {
      this.getCustomers(this.$route.params.id)
    }
  },
  methods: {
    getCustomers(id) {
      console.log(id)
      this.$axios
        .$post('https://api.remichelgroup.com', {
          query: `
       query Customer($id: ID!) {
        customer(id: $id) {
          id
          customerId
          status
          customerGroup
          billingAddress {
            title
            street
            streetNr
            streetExtension
            postCode
            country
            city
          }
          contact {
            phone01
            homepage
          }
          identification {
            taxId
            cId
            ean
            eori
            optionalId
          }
          contactPerson {
            gender
            preName
            lastName
            phone01
            phone02
            email
          }
          shippingAddress {
            title
            street
            streetNr
            streetExtension
            postCode
            country
            city
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
          this.customer = res.data.customer
          console.log(this.customer)
        })
    },
    saveDocument() {},
  },
  data() {
    return {
      customer: {
        identification: {},
        contact: {},
        contactPerson: {},
        billingAddress:{},
        shipingAddress:{}
      },
      privateCustomer: false,
      seperateShippingAddress: false,
      listColumns: [
        'Auftragsnummer',
        'Rechnungsbetrag',
        'Bestellt am',
        'Status',
      ],
    }
  },
}
</script>

<style lang="scss">
.base-input-input--b:hover {
  background: #b6b6b6;
}
.base-input-input--a:hover {
  background: #b6b6b6;
}
</style>

