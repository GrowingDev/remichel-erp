<template>
  <div id="image-form">
    <label id="furniture-front">bild furniture front</label>
    <label id="furniture-back">bild furniture back</label>
    <label id="etui">bild etui</label>
    <label id="packaging">bild verpackung</label>

    <div class="img-box furniture-front-image">
      <img
        v-if="this.$route.params.id"
        :src="
          `https://remichel-cc.com/uploads/${this.$route.params.id}-front.png`
        "
        onerror="this.style.display='none'"
      />
      <img :src="imgFront" onerror="this.style.display='none'" />
    </div>
    <div class="img-box furniture-back-image">
      <img
        v-if="this.$route.params.id"
        :src="
          `https://remichel-cc.com/uploads/${this.$route.params.id}-back.png`
        "
        onerror="this.style.display='none'"
      />
      <img :src="imgBack" onerror="this.style.display='none'" />
    </div>
    <div class="img-box etui-img">
      <img
        v-if="this.$route.params.id"
        :src="
          `https://remichel-cc.com/uploads/${this.$route.params.id}-etui.png`
        "
        onerror="this.style.display='none'"
      />
      <img :src="imgEtui" onerror="this.style.display='none'" />
    </div>
    <div class="img-box packaging-img">
      <img
        v-if="this.$route.params.id"
        :src="
          `https://remichel-cc.com/uploads/${this.$route.params.id}-packaging.png`
        "
        onerror="this.style.display='none'"
      />
      <img :src="imgPackaging" onerror="this.style.display='none'" />
    </div>
    <input
      type="file"
      id="input-furniture-front"
      accept="image/x"
      ref="img01"
      v-on:change="this.handleFrontImg"
    />
    <label class="img-button" for="input-furniture-front">Bild auswählen</label>
    <input
      type="file"
      id="input-furniture-back"
      accept="image/x"
      ref="img02"
      v-on:change="this.handleBackImg"
    />
    <label class="img-button" for="input-furniture-back">Bild auswählen</label>
    <input
      type="file"
      id="input-etui"
      accept="image/x"
      ref="img02"
      v-on:change="this.handleEtuiImg"
    />
    <label class="img-button" for="input-etui">Bild auswählen</label>
    <input
      type="file"
      id="input-packaging"
      accept="image/x"
      ref="img04"
      v-on:change="this.handlePackagingImg"
    />
    <label class="img-button" for="input-packaging">Bild auswählen</label>
  </div>
</template>

<script>
export default {
  name: 'FormImages',
  data() {
    return {
      imgEtui: '',
      imgFront: '',
      imgBack: '',
      imgPackaging: '',
    }
  },
  methods: {
    getImgUrl(img) {
      let imageUrl = 'https://remichel-cc.com/uploads/' + img + '.png'
      console.log(imageUrl)
      return imageUrl
    },
    transformImage(image, suffix) {
      var blob = image.slice(0, image.size, 'image/png')
      const newFile = new File([blob], `${this.$route.params.id}-${suffix}`, {
        type: 'image/png',
      })
      return newFile
    },
    handleFrontImg(e) {
      const img = e.target.files[0]
      this.imgFront = URL.createObjectURL(img)
      const file = this.transformImage(img, 'front')
      this.$store.commit('setImageFront', file.name)
      this.$store.commit('setRawImages', file)
      console.log(file.name)
    },
    handleBackImg(e) {
      const img = e.target.files[0]
      this.imgBack = URL.createObjectURL(img)
      const file = this.transformImage(img, 'back')
      this.$store.commit('setImageBack', file.name)
      this.$store.commit('setRawImages', file)
      console.log(file.name)
    },
    handleEtuiImg(e) {
      const img = e.target.files[0]
      this.imgEtui = URL.createObjectURL(img)
      const file = this.transformImage(img, 'etui')
      this.$store.commit('setImageEtui', file.name)
      this.$store.commit('setRawImages', file)
      console.log(file.name)
    },
    handlePackagingImg(e) {
      const img = e.target.files[0]
      this.imgPackaging = URL.createObjectURL(img)
      const file = this.transformImage(img, 'packaging')
      this.$store.commit('setImagePackaging', file.name)
      this.$store.commit('setRawImages', file)
      console.log(file.name)
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
