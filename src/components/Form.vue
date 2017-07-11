<template>

    <div>

        <div class="columns main">

            <div class="column is-half is-offset-one-quarter">
                <h1 class="animated slideInDown">Add a person:</h1>

                <form class="animated slideInUp">

                    <span class="error" v-show="errors.has('firstName')">Please enter a first name</span>
                    <input :class="{ 'errorInput': errors.has('name') }" v-model="firstName" placeholder="First Name" v-validate="'required'" type="text" name="firstName">

                    <span class="error" v-show="errors.has('lastName')">Please enter a last name</span>
                    <input :class="{ 'errorInput': errors.has('email') }" v-model="lastName" placeholder="Last Name" v-validate="'required'" type="text" name="lastName">

                    <span class="error" v-show="errors.has('dob')">Please enter a date of birth</span>
                    <input :class="{ 'errorInput': errors.has('dob') }" v-model="dob" placeholder="Date of Birth" v-validate="'required'" type="text" name="dob"></input>

                    <span class="error" v-show="errors.has('phone')">Please enter a phone number</span>
                    <input :class="{ 'errorInput': errors.has('phone') }" v-model="phone" placeholder="Phone Number" v-validate="'required'" type="text" name="phone"></input>

                    <span class="error" v-show="errors.has('zip')">Please enter a zip code</span>
                    <input :class="{ 'errorInput': errors.has('zip') }" v-model="zip" placeholder="Zip Code" v-validate="'required'" type="text" name="zip"></input>

                    <span type="submit" class="button is-outlined is-danger" @click="handleSubmit">Submit</span>

                </form>
            </div>
        </div>

        <div class="columns">

            <div class="column is-3 is-offset-7">

                <router-link class="link" to="/table" tag="h1" exact>
                    <a>
                        To table 
                        <icon name="arrow-right" scale="1"></icon>
                    </a>
                </router-link>

            </div>

        </div>

    </div>

</template>


<script>

export default {

    name: 'Form',

    props: ['submit'],

    data: () => ({
        firstName: '',
        lastName: '',
        dob: '',
        phone: '',
        zip: '',
    }),

    methods: {
        handleSubmit() {

            if (this.firstName === '') {
                this.$swal({
                    title: 'Oops!',
                    text: 'Please enter a first name!',
                    type: 'warning',
                })
            }

            else if (this.lastName === '') {
                this.$swal({
                    title: 'Oops!',
                    text: 'Please enter a last name!',
                    type: 'warning',
                })
            }

            else if (this.dob === '') {
                this.$swal({
                    title: 'Oops!',
                    text: 'Please enter a date of birth!',
                    type: 'warning',
                })
            }

            else if (this.phone === '') {
                this.$swal({
                    title: 'Oops!',
                    text: 'Please enter a phone number!',
                    type: 'warning',
                })
            }

            else if (this.zip === '') {
                this.$swal({
                    title: 'Oops!',
                    text: 'Please enter a zip code!',
                    type: 'warning',
                })
            }

            else {
                this.submit(this.firstName, this.lastName, this.dob, this.phone, this.zip)
            }
        }
    }

}

</script>

<style>

h1 {
    font-size: 32px;
    margin-bottom: 50px;
    text-align: center;
}

.button {
    width: 100%;
    height: 50px !important;
    margin-top: 15px;
}

input {
    margin-bottom: 25px !important;
    height: 50px;
    font-size: 18px;
    width: 100%;
    padding: 9px;
}

.error {
    color: red;
    font-size: 14px;
    text-align: left !important;
    background-color: white !important;
}

.link {
    text-align: right;
}

</style>
