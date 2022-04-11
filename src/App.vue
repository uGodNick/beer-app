<template>
  <div class="d-flex flex-column min-vh-100">
    <header class="d-flex flex-wrap shadow-sm mb-1 bg-body rounded">
      <div class="col-12 col-md-6 col-lg-5 fs-1 fw-bold p-1 mt-2 text-lg-end">
        RandomBeer.ORG
      </div>
      <nav class="col-12 col-md-6 col-lg-4">
        <div
          class="d-flex justify-content-center justify-content-md-start mt-3 mt-lg-4">
          <router-link
            class="p-2"
            to="/beer"
            >Beer</router-link
          >
          <router-link
            class="p-2"
            to="/user"
            >Profile</router-link
          >
        </div>
      </nav>
    </header>

    <router-view class="container" />

    <footer
      class="d-flex flex-column flex-sm-column flex-md-row mt-auto bg-light">
      <div class="col p-2">
        task from
        <a
          href="https://bandaumnikov.ru/"
          target="_blank"
          >bandaumnikov</a
        >
      </div>
      <div class="col p-2">
        completed by
        <a
          href="https://github.com/uGodNick"
          target="_blank"
          >Nikita Kashin</a
        >
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a,
footer a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
