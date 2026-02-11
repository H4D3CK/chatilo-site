<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100">
    <header class="border-b border-zinc-800">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 class="text-xl font-bold text-primary">Chatilo</h1>
        <ul class="flex gap-6 text-sm">
          <li><NuxtLink to="/">Início</NuxtLink></li>
          <li><NuxtLink to="/comandos">Comandos</NuxtLink></li>
          <li><NuxtLink to="/termos">Termos</NuxtLink></li>
          <li><NuxtLink to="/privacidade">Privacidade</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-12">
      <slot />
    </main>

    <footer
      class="border-t border-zinc-800 text-center text-sm py-6 text-zinc-400"
    >
      © {{ new Date().getFullYear() }} Chatilo
    </footer>
  </div>
</template>
