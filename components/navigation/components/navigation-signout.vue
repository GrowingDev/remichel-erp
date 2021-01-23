<template>
  <button class="btn-menu-back">
    <div class="button-content">
      <div class="link-index">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
          />
        </svg>
      </div>
      <a href="https://remichelgroup.com">Abmelden</a>
    </div>
  </button>
</template>

<script>
export default {
  name: 'NavigationSignout',
}
</script>

<style lang="scss">
.btn-menu-back {
  width: 100%;
  background: none;
  border: none;
  list-style: none;
  padding: 0;
  border-left: 2px solid transparent;
  text-align: left;
  font-size: 16px;
  text-transform: uppercase;

  color: $menu-btn-color-default !important;
  cursor: pointer;
  text-decoration: none !important;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  fill: $menu-btn-color-default;
  outline: none;

   a {
    outline: 0;
    text-decoration: none !important;
    color: $menu-btn-color-default !important;
  }
}
.link-index {
  color: white;
  width: 50px;
  height: 50px;
  text-align: center;
  font-weight: 800;
  font-size: 18px;
  transition: all 0.5s ease !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  fill: $menu-btn-color-default;
}
.button-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.btn-menu-back:hover {
  background: #303030;
  color: $color-primary !important;
  fill: white;
  outline: none !important;

  .link-index {
    fill: #d6bb92;

    margin-right: 15px;
  }
}
</style>
