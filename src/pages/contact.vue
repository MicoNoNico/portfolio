<script>
import emailjs from '@emailjs/browser'
export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('contact_service', 'template_contact', this.$refs.form, 'hJzNR03AN7-iC4wCe')
    },
  },
}
</script>

<template>
  <main class="wrap is-half-desktop is-two-thirds-tablet is-full-mobile mb-25">
    <h1 class="title is4 text-light-900 mt-10">
      Contact Me
    </h1>
    <form ref="form" @submit.prevent="sendEmail">
      <div class="field mt-20">
        <div class="control">
          <input name="from_name" class="input" type="text" placeholder="Name">
        </div>
      </div>

      <div class="field mt-10">
        <div class="control">
          <input name="from_email" class="input" type="email" placeholder="Email">
        </div>
      </div>

      <div class="field mt-10">
        <div class="control">
          <input name="subject" class="input" type="text" placeholder="Subject">
        </div>
      </div>

      <div class="field mt-10">
        <div class="control">
          <textarea name="message" class="textarea" placeholder="Message" />
        </div>
      </div>

      <div class="field mt-10">
        <div class="control">
          <button class="button is-link px-10" type="submit">
            Submit Message
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
