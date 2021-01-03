<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="items of list">{{ mountain.title }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        typ: '',
        page: 0,
      }
    },
    async fetch() {
      this.list = await fetch(`http://localhost:9091/list`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        Typ: this.typ,
        Page: this.page,
      }),
    }).then(res => res.json()).then((res) => console.log(res))
    }
  }
</script>
