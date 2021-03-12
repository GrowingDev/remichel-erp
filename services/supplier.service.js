import ApolloService from '@/api/apollo.service'

const SupplierService = {
  getSupplier(id) {
    return ApolloService.post({
      query: `
      query Supplier($id: ID!) {
        supplier(id: $id) {
          id
          supplierId
          status
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
    }).then((res) => {
      if (res.data.data.supplier) {
        return res.data.data.supplier
      } else {
        return supplierModel
      }
    })
  },
  getSuppliers(axios) {
    return ApolloService.post(axios,{
      query: `
      query {
        suppliers {
          id
          supplierId
          contactPerson {
            email
            phone01
          }
          billingAddress {
            title
          }
        }
      }
        `,
    }).then((res) => {
      return res.data.data.suppliers
    })
  },
  updateSupplier(id) {
    console.log(id)
  },
  deleteSupplier(id) {
    console.log(id)
  },
}

export default SupplierService
