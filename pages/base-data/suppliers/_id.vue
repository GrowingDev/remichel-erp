<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="lieferanten anlage" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Lieferantennummer"
        placeholder="Lieferantennummer"
        v-model="supplier.supplierId"
      />
      <form-input
        label="Steuernummer"
        placeholder="Steuernummer"
        v-model="supplier.identification.taxId"
      />
      <form-input
        label="UID"
        placeholder="UID"
        v-model="supplier.identification.cId"
      />
      <form-input
        label="EORI"
        placeholder="EORI"
        v-model="supplier.identification.eori"
      />
      <h3>Kontakt</h3>
      <form-input label="Telefonnummer" placeholder="Telefonnummer" v-model="supplier.contact.phone01" />
      <form-input label="Homepage" placeholder="Homepage" v-model="supplier.contact.homepage"/>
      <h3>Ansprechpartner</h3>
      <form-input label="Anrede" placeholder="Anrede" v-model="supplier.contactPerson.gender"/>
      <form-input label="Vorname" placeholder="Vorname"  v-model="supplier.contactPerson.preName"/>
      <form-input label="Nachname" placeholder="Nachname"  v-model="supplier.contactPerson.lastName"/>
      <form-input
        label="Primäre Telefonnummer"
        placeholder="Primäre Telefonnummer"
         v-model="supplier.contactPerson.phone01"
      />
      <form-input
        label="Sekundäre Telefonnummer"
        placeholder="Sekundäre Telefonnummer"
         v-model="supplier.contactPerson.phone02"
      />
      <form-input label="E-Mail" placeholder="E-Mail"  v-model="supplier.contactPerson.email"/>
      <h3>Rechnungsadresse</h3>

      <form-input placeholder="Name" label="Name"  v-model="supplier.billingAddress.title"/>

      <form-input placeholder="Strasse" label="Strasse"  v-model="supplier.billingAddress.street"/>
      <form-input placeholder="Nr" label="Nr"  v-model="supplier.billingAddress.streetNr"/>

      <form-input placeholder="Straßenzusatz" label="Straßenzusatz"  v-model="supplier.billingAddress.streetExtension"/>

      <form-input placeholder="Postleitzahl" label="Postleitzahl"  v-model="supplier.billingAddress.postCode"/>
      <form-input placeholder="Ort" label="Ort" v-model="supplier.billingAddress.city" />

      <form-input placeholder="Land" label="Land"  v-model="supplier.billingAddress.country"/>

      <section class="section-container">
        <h3>Lieferadresse</h3>

       <form-input placeholder="Name" label="Name"  v-model="supplier.shippingAddress.title"/>

      <form-input placeholder="Strasse" label="Strasse"  v-model="supplier.shippingAddress.street"/>
      <form-input placeholder="Nr" label="Nr"  v-model="supplier.shippingAddress.streetNr"/>

      <form-input placeholder="Straßenzusatz" label="Straßenzusatz"  v-model="supplier.shippingAddress.streetExtension"/>

      <form-input placeholder="Postleitzahl" label="Postleitzahl"  v-model="supplier.shippingAddress.postCode"/>
      <form-input placeholder="Ort" label="Ort" v-model="supplier.shippingAddress.city" />

      <form-input placeholder="Land" label="Land"  v-model="supplier.shippingAddress.country"/>
      </section>
      <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
    </div>
  </div>
</template>

<script>
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'
import FormInput from '@/components/forms/form-input.vue'
export default {
  name: 'SupplierPage',
  components: {
    FormInput,
    MenuBar,
    FormTitle,
  },
  beforeMount() {
    if (this.$route.params.id !== 'new') {
      this.getSupplier(this.$route.params.id)
    }
  },
  data: () => {
    return {
      supplier: {
        identification: {},
        contact:{},
        contactPerson:{},
        billingAddress:{},
        shippingAddress:{}
      },
    }
  },
  methods: {
    getSupplier(id) {
      console.log(id)
      this.$axios
        .$post('http:localhost:4000', {
          query: `
       query Supplier($id: ID!) {
        supplier(id: $id) {
          id
          supplierId
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
          this.supplier = res.data.supplier
          console.log(this.supplier)
        })
    },
    saveDocument() {},
    deleteDocument() {},
  },
}
</script>
