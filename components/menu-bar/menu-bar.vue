<template>
  <div id="action-bar">
    <button
      v-if="saveDocument"
      @click="saveDocument"
      id="action-item"
      title="Dokument speichern"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="24px"
        height="24px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
    </button>
    <button
      v-if="btnTemplateHandler"
      @click="btnTemplateHandler"
      id="action-item"
      title="Vorlage öffnen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        />
      </svg>
    </button>
    <button
      v-if="btnContactHandler"
      @click="btnContactHandler"
      id="action-item"
      title="Kontakt öffnen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <rect fill="none" height="24" width="24" />
        <path
          d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M12,10c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2s-2-0.9-2-2 C10,10.9,10.9,10,12,10z M16,18H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,15.21,11.01,15,12,15c0.99,0,1.93,0.21,2.78,0.58 C15.52,15.9,16,16.62,16,17.43V18z"
        />
      </svg>
    </button>
    <button
      v-if="btnBillHandler && this.$route.params.id"
      @click="btnBillHandler"
      id="action-item"
      title="Rechnung öffnen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0,0h24v24H0V0z" fill="none" />
        <g>
          <path
            d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"
          />
          <rect height="2" width="6" x="9" y="7" />
          <rect height="2" width="2" x="16" y="7" />
          <rect height="2" width="6" x="9" y="10" />
          <rect height="2" width="2" x="16" y="10" />
        </g>
      </svg>
    </button>
    <button
      v-if="newDocument"
      @click="newDocument"
      id="action-item"
      title="Neues Dokument erstellen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </button>
    <button
      v-if="deleteDocument && this.$route.params.id"
      @click="deleteDocument"
      id="action-item"
      title="Löschen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        />
      </svg>
    </button>
    <button
      v-if="openList && updateList"
      @click="updateList"
      id="action-item"
      title="Artikelliste öffnen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <g>
              <path
                d="M14,10H2v2h12V10z M14,6H2v2h12V6z M2,16h8v-2H2V16z M21.5,11.5L23,13l-6.99,7l-4.51-4.5L13,14l3.01,3L21.5,11.5z"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
    <button
      v-if="!openList && updateList"
      @click="updateList"
      id="action-item"
      title="Artikelliste schließen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
        />
      </svg>
    </button>

    <button
      v-if="btnCallHandler && this.$route.params.id"
      @click="btnCallHandler"
      id="action-item"
      title="Kunde anrufen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
        />
      </svg>
    </button>
    <button
      v-if="btnMailHandler && this.$route.params.id"
      @click="btnMailHandler"
      id="action-item"
      title="Kunde per Mail kontaktieren"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        />
      </svg>
    </button>
    <button
      v-if="!noPrint"
      @click="printDocument"
      id="action-item"
      title="Dokument speichern"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"
        />
      </svg>
    </button>
    <button @click="navigateBack" id="action-item" title="Zurück">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        />
      </svg>
    </button>
  </div>
</template>

<script>


export default {
  name: 'MenuBar',
  props: {
    newDocument: Function,
    saveDocument: Function,
    deleteDocument: Function,
    btnTemplateHandler: Function,
    updateList: Function,
    btnCallHandler: Function,
    btnMailHandler: Function,
    btnBillHandler: Function,
    btnContactHandler: Function,
    openList: Boolean,
    noPrint: Boolean,
  },
  methods: {
    navigateBack() {
       this.$router.back()
    },
    printDocument() {

    },
  },
}
</script>

<style scoped lang="scss">
#action-bar {
  min-height: 400px;
  background: #212121;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all ease 200ms;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
}

#action-item {
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  cursor: pointer;
  border-right: 2px solid transparent;
  outline: none !important;
  svg {
    fill: #868686;
  }
}

#action-item:hover {
  background-color: #303030;
  border-right: 2px solid rgb(214, 187, 146);

  svg {
    fill: #fff;
  }
}
@media print {
  #action-bar {
    display: none;
  }
}
</style>
