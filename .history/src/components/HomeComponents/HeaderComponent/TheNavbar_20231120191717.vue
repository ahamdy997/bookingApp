<template>
  <nav class="flex items-center justify-between w-86 m-auto h-17">
    <div class="flex items-center gap-1">
      <figure>
        <img
          src="@/assets/header-logo/logo.svg"
          width="24"
          height="24"
          alt="dream place logo"
        />
      </figure>
      <p class="logo-name text-lg">my Dream Place</p>
    </div>

    <div class="gap-12 flex items-start">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Discover</router-link>
      <router-link to="/about">Activities</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/about">Contact</router-link>
    </div>

    <div class="register">
      <button
        type="button"
        class="rounded-md border-solid border cursor-pointer text-white py-2.5 px-4.5"
      >
        Register
      </button>
    </div>
  </nav>
</template>

<style scoped>
button {
  border-color: var(--mainBlue);
  background: var(--mainBlue);
}
a {
  color: #333;
}
p.logo-name {
  color: #1b1f2d;
}
</style>
