<template>
  <div class="doc">
    <div class="doc-basedata">
      <form-title title="Druck auftrag" style="align-self: center" />
      <div class="placeholder"></div>
      <form-input
        label="Druckauftragsnummer"
        placeholder="Druckauftragsnummer"
        v-model="print.id"
        :disabled="true"
      />
      <form-input
        label="Kundenauftragsnummer"
        placeholder="Kundenauftragsnummer"
        v-model="print.orderId"
      />
      <form-input
        label="Erstellt am"
        placeholder="Erstellt am"
        v-model="print.createdAt"
        :disabled="true"
      />
      <div class="placeholder"></div>
      <h2>Drucksachen</h2>
      <div class="row-images">
        <div class="image-box">
          <img
            class="thumbnail"
            :src="`https://api.andreasbenz.org/images/${this.$route.params.id}-print-front.png`"
            alt="Kein Bild vorhanden"
            onerror="this.src='https://api.andreasbenz.org/images/error.png'"
          />
          <h3>Vorderseite</h3>
        </div>
        <div class="image-box">
          <img
            class="thumbnail"
            :src="`https://api.andreasbenz.org/images/${this.$route.params.id}-print-back.png`"
            alt="Kein Bild vorhanden"
            onerror="this.src='https://api.andreasbenz.org/images/error.png'"
          />
          <h3>Rückseite</h3>
        </div>
      </div>
      <div class="placeholder"></div>
      <form @submit.prevent="onUpload" id="form-upload">
        <strong> Drucksachen müssen wie folgt bezeichnet werden:</strong>
        <ul id="list">
          <li>Vorderseite: Produktnummer-print-front</li>
          <li>Rückseite: Produktnummer-print-back</li>
          <li>Beispiel: 10000-print-front</li>
        </ul>
        <label for="file-upload" class="btn-upload"
          >Drucksachen auswählen</label
        >
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

    </div>
     <menu-bar :saveDocument="saveDocument" :deleteDocument="deleteDocument" />
  </div>
</template>

<script>
import FormInput from '~/components/forms/form-input.vue'
import FormTitle from '~/components/forms/form-title.vue'
import MenuBar from '~/components/menu-bar/menu-bar.vue'

export default {
  name: 'PrintGroup',
  components: { FormInput, MenuBar, FormTitle },
  async mounted() {
    if (this.$route.params.id !== 'new') {
      this.print = await fetch(
        process.env.API_URL + `/api/prints/${this.$route.params.id}`
      ).then((res) => res.json())
    }
  },
  data() {
    return {
      print: {},
      imagesArray: null,
    }
  },
  methods: {
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
            process.env.API_URL + `/api/prints/${this.$route.params.id}`,
            this.print
          )
          .then((res) => {
            this.$router.back()
          })
      } else {
        this.$axios
          .$post(process.env.API_URL + `/api/prints/`, this.print)
          .then((res) => {
            this.$router.back()
          })
      }
    },
    deleteDocument() {
      this.$axios
        .$delete(process.env.API_URL + `/api/prints/${this.$route.params.id}`)
        .then((res) => {
          console.log(res)
          this.$router.back()
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.row-images {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 50%;
}

.thumbnail {
  border-radius: 50%;
  width: 198px;
  height: 96px;
  object-fit: none;
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
  transition: all 0.4s;
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
h2 {
  font-size: 1.953rem;
  width: 100%;
  margin-bottom: 40px;
  border-bottom: 2px solid black;
}
h3 {
  font-size: 1.563rem;
}
.placeholder {
  margin: 80px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
