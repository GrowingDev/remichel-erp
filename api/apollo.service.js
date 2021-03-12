import JwtService from './jwt.service'
import { API_URL } from './config'
const ApolloService = {
  setHeader() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Barea ${JwtService.getToken()}`
  },

  async post(axios,payload) {
    try {
      return await axios.post(API_URL, payload)
    } catch (error) {
      throw new Error(`[RWV] ApolloService ${error}`)
    }
  },

  mutation(mutationType, inputType, type, input) {
    return $axios
      .post(API_URL, {
        query: `
    mutation ${mutationType} ($input: ${inputType} !) {
      ${type}(input: $input) {
        ... on Token{token}

    ... on ErrorMessage{message reason}

      }
    }
      `,
        variables: {
          input: input,
        },
      })
      .catch((error) => {
        throw new Error(`[RWV] ApolloService ${error}`)
      })
  },
}

export default ApolloService
