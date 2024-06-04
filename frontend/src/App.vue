<template>
  <nav class="z-50 fixed top-0">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/experience">Experience</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
