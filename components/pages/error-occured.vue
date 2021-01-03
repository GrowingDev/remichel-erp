<template>
  <div id="error-occured">
    <div id="error-occured-header">
      <h2>Es ist ein Fehler aufgetreten</h2>
    </div>
    <div id="error-occured-body">
      <p id="error-occured-description">Leider konnte keine Verbindung zur Datenbank hergestellt werden. Bitte überprüfe deine Netzwerkeinstellungen und versuche es später noch einmal!</p>
    </div>
    <div id="error-occured-footer">
      <button
        class="btn-default error-occured-next"
        @click="refresh"
      >
        Refresh
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorOccured',
  props: {
    refresh: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
#error-occured {
  color: $background-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  text-align: center;
  position: relative;
  top: 30%;
}

#error-occured-header {
  height: 50px;
  width: 100%;
  h2 {
    text-transform: uppercase;
    font-weight: 400;
  }
}
#error-occured-body {
  width: 100%;
  height: 150px;
  display:flex;
  flex-direction: column;
  justify-content: center;
}
#error-occured-footer {
  width: 100%;
  height: 50px;
}
</style>
