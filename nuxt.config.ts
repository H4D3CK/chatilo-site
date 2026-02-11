export default defineNuxtConfig({
    css: [
    '@/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  app: {
    head: {
      title: 'Chatilo - Bot Discord',
      meta: [
        { name: 'description', content: 'Chatilo - Bot Discord inteligente e minimalista' }
      ]
    }
  }
})