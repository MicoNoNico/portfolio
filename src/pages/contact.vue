<script>
import emailjs from '@emailjs/browser'
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon,
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('contact_service', 'template_contact', this.$refs.form, 'hJzNR03AN7-iC4wCe')
        .then((result) => {
          this.$refs.form.reset()
          alert('Message sent!')
        }, (error) => {
          alert('Message not sent', error)
        })
    },
  },
}
</script>

<template>
  <main>
    <div class="wrap columns is-half-desktop is-two-thirds-tablet is-full-mobile my-25">
      <div class="column text-left">
        <h1 class="home-title text-light-900 mt-30">
          Get in touch with me
        </h1>
        <h3 class="home-subtitle is-4 mt-5">
          Feel free to get in touch if you have any questions
        </h3>
        <div class="bg-dark-200 text-center mt-10 rounded-2xl is-hidden-touch">
          <a href="https://www.linkedin.com/in/niccolo-chiodo/"><Icon icon="mdi:linkedin" target="_blank" height="60" color="white" class="display-inline m-3" /></a>
          <a href="https://github.com/MicoNoNico"><Icon icon="mdi:github" target="_blank" width="60" color="white" class="display-inline m-3" /></a>
        </div>
        <div class="bg-dark-200 text-center mt-10 rounded-2xl is-hidden-desktop">
          <a href="https://www.linkedin.com/in/niccolo-chiodo/"><Icon icon="mdi:linkedin" target="_blank" height="40" color="white" class="display-inline m-3" /></a>
          <a href="https://github.com/MicoNoNico"><Icon icon="mdi:github" target="_blank" width="40" color="white" class="display-inline m-3" /></a>
        </div>
      </div>
      <div class="column">
        <form ref="form" @submit.prevent="sendEmail">
          <div class="field mt-20">
            <div class="control">
              <input name="from_name" class="input" type="text" placeholder="Name" required>
            </div>
          </div>

          <div class="field mt-10">
            <div class="control">
              <input name="from_email" class="input" type="email" placeholder="Email" required>
            </div>
          </div>

          <div class="field mt-10">
            <div class="control">
              <input name="subject" class="input" type="text" placeholder="Subject" required>
            </div>
          </div>

          <div class="field mt-10">
            <div class="control">
              <textarea name="message" class="textarea" placeholder="Message" required />
            </div>
          </div>

          <div class="field mt-10">
            <div class="control">
              <button class="button is-primary bg-teal-400 px-10 font-bold" type="submit">
                Submit Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: contact-layout
</route>
