<template>
  <main class="min-h-screen flex flex-col font-unbounded">
    <nav class="flex flex-row gap-8 justify-center font-bold text-xl space-x-4 p-6">
      <router-link to="/">Home</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/team">Team</router-link>
    </nav>
    <div class="flex flex-col w-full items-center justify-center">
      <router-view></router-view>
    </div>
  </main>
</template>
<style>
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: black;
}
</style>
