<template>
    <v-col cols="12" md="10" lg="6">
        <v-card flat class="" style="padding: 0px 40px">
            <v-card-title primary-title class="layout justify-center">
                <div class="text-h5 text-center">
                    {{ $t('contact.title') }}
                </div>
            </v-card-title>
            <v-card-text class="text-body-1">
                {{ $t('contact.content') }}
                <br /><br />
            </v-card-text>

            <v-form ref="contactFormRef" lazy-validation @submit.prevent="sendContactForm">
                <!-- <v-text-field label="Label" v-model="contact.firstname"></v-text-field> -->
                <v-text-field name="firstname" :label="`Firstname`" :counter="30" @update:focused="onFocus"
                    :rules="[() => !!contactForm.firstname || 'This field is required',
                    () => !!contactForm.firstname && contactForm.firstname.length <= 30 || 'Firstname must be less than 30 characters']" v-model="contactForm.firstname">
                </v-text-field>

                <v-text-field name="lastname" :label="`${$t('form.lastname')}`" :counter="32"
                    :rules="[() => !!contactForm.lastname || 'This field is required',
                    () => !!contactForm.lastname && contactForm.lastname.length <= 30 || 'Lastname must be less than 25 characters']" @update:focused="onFocus" v-model="contactForm.lastname">
                </v-text-field>

                <v-text-field name="email" :label="`${$t('form.email')}`"
                    :rules="[(v) => !!v || `${$t('form.email')} ${$t('validation.is_required')}`, (v) => /.+@.+\..+/.test(v) || `${$t('form.email')} ${$t('validation.is_valid')}`]"
                    @update:focused="onFocus" v-model="contactForm.email"></v-text-field>

                <v-textarea name="message" rows="6" :label="`${$t('form.your_message')}`" :rules="[]" @focus="onFocus"
                    v-model="contactForm.message"></v-textarea>
                <div class="my-2 text-center">
                    <!-- <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" /> -->
                </div>
                <!-- <div class="text-center" v-if="!messageSentSuccess && !messageSentError"> -->
                <div class="my-2 text-center">
                    <v-btn type="submit" color="secondary" :disabled="!valid" :loading="loading" class="" style=""><span
                            class="text-white">{{ $t('form.submit')
                            }}</span></v-btn>
                </div>
            </v-form>




            <v-alert type="warning" closable v-if="messageInvalidCaptcha">
                {{ $t('form.message_invalid_recaptcha') }}
            </v-alert>
            <v-alert type="success" closable v-if="messageSentSuccess">
                {{ $t('form.message_success') }}
            </v-alert>
            <v-alert type="error" closable v-if="messageSentError">{{ $t('form.message_error') }}</v-alert>

        </v-card>
    </v-col>
    <v-col cols="12">
        <form action="https://formspree.io/f/movaqpky" method="POST">
            <label>
                Your email:
                <input type="email" name="email" />
            </label>

            <label>
                Your message:
                <textarea name="message"></textarea>
            </label>

            <button type="submit">Send</button>
        </form>
    </v-col>
</template>

<script setup lang="ts">
import axios from 'axios'

// Data
const loading = ref(false)
const messageInvalidCaptcha = ref(false)
const messageSentSuccess = ref(false)
const messageSentError = ref(false)
const contactFormRef = ref(null)
let contactForm = ref({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
})
// let form = ref({
//     firstname: '',
//     lastname: '',
//     email: '',
//     message: ''
// })
// let person = ref({
//     surname: ''
// })
const valid = ref(true)

// Methods
const onFocus = () => {
    messageInvalidCaptcha.value = false
    messageSentSuccess.value = false
    messageSentError.value = false
}
const encodeHTML = (s: string) => {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

}

const sendContactForm = async (e: any) => {
    try {
        const data = new FormData(e.target);
        console.log('data: ', data);
        const res = await fetch('https://formspree.io/f/xrgnejnw', {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' },
        });
    } catch (error) {
        console.log('error: ', error);
    }
}

const sendContactForm3 = async () => {
    console.log('sendContactForm');
    // for (let i = 0; i < notifications.length; i++) {
    //     notifications[i].classList.add("hidden");
    // }
    console.log('contactForm: ', contactForm);
    console.log('contactForm.value: ', contactForm.value);

    const formData = new FormData();
    formData.append("firstname", contactForm.value.firstname)
    formData.append("lastname", contactForm.value.firstname)
    formData.append("email", contactForm.value.firstname)
    formData.append("message", contactForm.value.firstname)
    console.log('formData: ', formData);

    const firstname = formData.get("firstname")
    console.log('firstname: ', firstname);
    // return

    // const sendMessageButton = document.getElementById("sendMessageButton")
    // sendMessageButton.setAttribute('disabled', '');

    try {
        // const reCaptchaValue = grecaptcha.getResponse()
        // console.log('reCaptchaValue: ', reCaptchaValue);
        // if (reCaptchaValue.length < 1) {
        //     document.querySelector(".message.warning").classList.remove("hidden");
        //     return
        // }

        // fetch("https://formspree.io/f/xrgnejnw", {
        //     method: "POST",
        //     body: formData,
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // }).then(response => {
        //     if (response.ok) {
        //         console.log("success")
        //     } else {
        //         throw 'send_error'
        //     }
        // })
        // return

        // const res = await fetch('https://dummyjson.com/products/add', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         title: 'BMW Pencil',
        //         /* other product data */
        //     })
        // })
        // const abc = await res.json()
        // console.log('abc: ', abc);
        // return

        const response = await fetch("https://formspree.io/f/xrgnejnw", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('response: ', response);
        if (response.ok) {
            // document.querySelector(".message.success").classList.remove("hidden");
            contactForm.value.reset();
        } else {
            throw 'send_error'
        }

    } catch (e) {
        console.error(e);
        // document.querySelector(".message.error").classList.remove("hidden");

    } finally {
        // sendMessageButton.removeAttribute('disabled');
    }
}


const sendContactForm2 = async () => {
    try {
        // const token = await this.$recaptcha.getResponse()
        // console.log('ReCaptcha token:', token)
        console.log('sendContactForm')
        // const { valid } = contact.value.validate()
        const { valid } = await contactFormRef.value?.validate()
        console.log('valid: ', valid)
        // return
        if (valid) {
            loading.value = true
            const res = await fetch('https://script.google.com/macros/s/AKfycbyUbXcwQHeGAjSrDHbIx84PcM1FCEs-S3SnwZjHKQ/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    firstname: `${encodeHTML(contactForm.value.firstname)}`,
                    lastname: `${encodeHTML(contactForm.value.lastname)}`,
                    email: `${encodeHTML(contactForm.value.email)}`,
                    message: `${encodeHTML(contactForm.value.message)}`,
                }),
            })
            // await this.$recaptcha.reset()

            if (res.status === 200) {
                contactFormRef.value.reset()
                messageInvalidCaptcha.value = false
                messageSentError.value = false
                messageSentSuccess.value = true
            }
        }
    } catch (error) {
        console.log('error: ', error)
        if (error == 'Failed to execute') {
            messageInvalidCaptcha.value = true
        } else {
            messageSentSuccess.value = false
            messageSentError.value = true
        }
    } finally {
        loading.value = false
    }
}
const onSuccess = (token: string) => {
    console.log('Succeeded:', token)
}
const onExpired = () => {
    console.log('Expired')
}
const onError = (error: any) => {
    console.log('Error happened:', error)
}

// export default {
//     async mounted() {},
//     data() {
//         return {
//             loading: false,
//             messageInvalidCaptcha: false,
//             messageSentSuccess: false,
//             messageSentError: false,
//             form: {
//                 firstname: '',
//                 lastname: '',
//                 email: '',
//                 message: '',
//             },
//             valid: true,
//         }
//     },
//     computed: {},
//     methods: {
//         onFocus() {
//             this.messageInvalidCaptcha = false
//             this.messageSentSuccess = false
//             this.messageSentError = false
//         },
//         encodeHTML(s) {
//             return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
//         },
//         async sendContactForm() {
//             try {
//                 const token = await this.$recaptcha.getResponse()
//                 console.log('ReCaptcha token:', token)
//                 const valid = this.$refs.form.validate()
//                 console.log('valid: ', valid)
//                 if (valid) {
//                     this.loading = true
//                     const res = await fetch('https://script.google.com/macros/s/AKfycbyUbXcwQHeGAjSrDHbIx84PcM1FCEs-S3SnwZjHKQ/exec', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/x-www-form-urlencoded',
//                         },
//                         body: new URLSearchParams({
//                             firstname: `${this.encodeHTML(this.form.firstname)}`,
//                             lastname: `${this.encodeHTML(this.form.lastname)}`,
//                             email: `${this.encodeHTML(this.form.email)}`,
//                             message: `${this.encodeHTML(this.form.message)}`,
//                         }),
//                     })
//                     await this.$recaptcha.reset()

//                     if (res.status === 200) {
//                         this.$refs.form.reset()
//                         this.messageInvalidCaptcha = false
//                         this.messageSentError = false
//                         this.messageSentSuccess = true
//                     }
//                 }
//             } catch (error) {
//                 console.log('error: ', error)
//                 if (error == 'Failed to execute') {
//                     this.messageInvalidCaptcha = true
//                 } else {
//                     this.messageSentSuccess = false
//                     this.messageSentError = true
//                 }
//             } finally {
//                 this.loading = false
//             }
//         },
//         onSuccess(token) {
//             console.log('Succeeded:', token)
//         },
//         onExpired() {
//             console.log('Expired')
//         },
//         onError(error) {
//             console.log('Error happened:', error)
//         },
//     },
// }
</script>
