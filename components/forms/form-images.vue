<template>
  <div id="image-form">
    <label id="furniture-front">bild furniture front</label>
    <label id="furniture-back">bild furniture back</label>
    <label id="etui">bild etui</label>
    <label id="packaging">bild verpackung</label>

    <div class="img-box furniture-front-image">
      <img
        v-if="this.$route.params.id"
        :src="`https://remichel-cc.com/uploads/${this.$route.params.id}-front.png`"
        onerror="this.style.display='none'"
      />
      <img
        v-if="uploadFront.image"
        :src="uploadFront.image"
        onerror="this.style.display='none'"
      />
    </div>
    <div class="img-box furniture-back-image">
      <img
        v-if="this.$route.params.id"
        :src="`https://remichel-cc.com/uploads/${this.$route.params.id}-back.png`"
        onerror="this.style.display='none'"
      />
      <img
        v-if="uploadBack.image"
        :src="uploadBack.image"
        onerror="this.style.display='none'"
      />
    </div>
    <div class="img-box etui-img">
      <img
        v-if="this.$route.params.id"
        :src="`https://remichel-cc.com/uploads/${this.$route.params.id}-etui.png`"
        onerror="this.style.display='none'"
      />
      <img
        v-if="uploadEtui.image"
        :src="uploadEtui.image"
        onerror="this.style.display='none'"
      />
    </div>
    <div class="img-box packaging-img">
      <img
        v-if="this.$route.params.id"
        :src="`https://remichel-cc.com/uploads/${this.$route.params.id}-packaging.png`"
        onerror="this.style.display='none'"
      />
      <img
        v-if="uploadPackage.image"
        :src="uploadPackage.image"
        onerror="this.style.display='none'"
      />
    </div>
    <input
      type="file"
      id="input-furniture-front"
      accept="image/x"
      ref="img01"
      @change="onFileChange($event, 0)"
    />
    <label class="img-button" for="input-furniture-front">Bild auswählen</label>
    <input
      type="file"
      id="input-furniture-back"
      accept="image/x"
      ref="img02"
      @change="onFileChange($event, 1)"
    />
    <label class="img-button" for="input-furniture-back">Bild auswählen</label>
    <input
      type="file"
      id="input-etui"
      accept="image/x"
      ref="img02"
      @change="onFileChange($event, 2)"
    />
    <label class="img-button" for="input-etui">Bild auswählen</label>
    <input
      type="file"
      id="input-packaging"
      accept="image/x"
      ref="img04"
      @change="onFileChange($event, 3)"
    />
    <label class="img-button" for="input-packaging">Bild auswählen</label>
  </div>
</template>

<script>
export default {
  name: 'FormImages',
  data() {
    return {
      uploadFront: {
        image: null,
      },
      uploadBack: {
        image: null,
      },
      uploadEtui: {
        image: null,
      },
      uploadPackage: {
        image: null,
      },
    }
  },
  methods: {
    onFileChange(e, i) {
      let item
      switch (i) {
        case 0:
          item = this.uploadFront
          break
        case 1:
          item = this.uploadBack
          break
        case 2:
          item = this.uploadEtui
          break
        case 3:
          item = this.uploadPackage
          break
        default:
          break
      }

      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(item, files[0])
    },
    createImage(item, file) {
      // const image = new Image()

      const reader = new FileReader()

      reader.onload = (e) => {
        item.image = e.target.result
      }
      reader.readAsDataURL(file)
      console.log(this.$refs)
    },
    getImgUrl(img) {
      let imageUrl = 'https://api.remichelgroup.com/uploads/' + img + '.png'
      return imageUrl
    },
    submitFile(file) {
      let formData = new FormData()

      formData.append('file', file)

      axios
        .post(`${process.env.PRODUCT_SERVICE}/upload-image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function () {
          console.log('SUCCESS!!')
        })
        .catch(function () {
          console.log('FAILURE!!')
        })
    },
  },
}
</script>

<style scoped lang="scss">
#image-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px 150px 30px 30px 150px 30px;
  width: 100%;
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch !important;
  align-items: stretch;
  grid-template-areas:
    'furniture_front_l furniture_back_l'
    'furniture_front_i furniture_back_i '
    'furniture_front_b furniture_back_b '
    'etui_l packaging_l '
    'etui_i packaging_i'
    'etui_b packaging_b';
}
label {
  background: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px;
  color: #323232;
  text-transform: uppercase;
  align-self: stretch;
  text-align: center;
}
input {
  display: none;
}
#furniture-front {
  grid-area: furniture_front_l;
}
#furniture-front-image {
  grid-area: furniture_front_i;
}
#furniture-back {
  grid-area: furniture_back_l;
}
#furniture-back-image {
  grid-area: furniture_back_i;
}
#etui {
  grid-area: etui_l;
}
#packaging {
  grid-area: packaging_l;
}
.furniture-img {
  grid-area: furniture_i;
}
.etui-img {
  grid-area: etui_i;
}
.packaging-img {
  grid-area: packaging_i;
}

.img-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: auto;
  }
}
.img-button {
  border: none;
  background: #212121;
  color: #868686;
  border-bottom: 2px solid #212121;
  text-transform: uppercase;
}
.img-button:hover {
  background: #505050;
  border-bottom: 2px solid #d6bb92;
  color: white;
  cursor: pointer;
}
</style>
