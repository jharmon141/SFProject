<template>

    <div id="app">
        <main>
        <transition name="fade" mode="out-in">
        <router-view v-bind="{firstName, lastName, dob, phone, zip, submit, delPerson, allPersons}"></router-view>
        </transition>
        </main>
        <v-snackbar 
                     :bottom="bottom"
                     v-model="snackbar"
                     >
                     {{snackMessage}} 
                     <v-btn flat class="pink--text" @click.native="snackbar = false">OK</v-btn>
        </v-snackbar>
    </div>

</template>

<script>
import store from './store/index.js'
import gql from 'graphql-tag'

const createPerson = gql`
    mutation($firstname: String!, $lastname: String!, $dob: String!, $phone: String!, $zip: String!){
        createPerson(firstname: $firstname, lastname: $lastname, dob: $dob, phone: $phone, zip: $zip){
            id
            firstname
            lastname
            dob
            phone
            zip
        }
    }
`

const deletePerson = gql`
mutation deletePerson($id: ID!) {
    deletePerson(id: $id){
        id
    }
}
`
const allPersons = gql`
query allPersons {
    allPersons(orderBy: createdAt_DESC) {
        id
        firstname
        lastname
        dob
        phone
        zip
    }
}
`
export default {
    name: 'app',

    data: () => ({
        allPersons: Array,
        firstName: '',
        lastName: '',
        dob: '',
        phone: '',
        zip: '',
        snackbar: false,
        bottom: true,
        snackMessage: '',
    }),

    methods: {

        toggleSnackbar(message){
            this.snackbar = true
            this.snackMessage = message
            setTimeout(()=> {this.snackbar = false}, 3000)
        },

        submit(firstname, lastname, dob, phone, zip) {

            this.$apollo.mutate({
                mutation: createPerson,
                variables: {
                    firstname,
                    lastname,
                    dob,
                    phone,
                    zip
                },
                updateQueries: {
                    allPersons: (prev, { mutationResult }) => {
                        return {
                            allPersons: [mutationResult.data.createPerson, ...prev.allPersons],
                        }
                    },
                },
            }).then((data) => {
                this.toggleSnackbar("Person added!")
                this.$router.push({ path: '/table' })
            }).catch((error) => {
                console.error(error)
            })
        },

        delPerson(item) {
            // Mutation
            let id = item.id

            this.$apollo.mutate({
                mutation: deletePerson,
                variables: {
                    id
                },
                updateQueries: {
                    allPersons: (prev, { mutationResult }) => {
                        return {
                            allPersons: prev.allPersons.filter(( obj )=> {
                                return obj.id !== mutationResult.data.deletePerson.id;
                            })
                        }
                    }
                }
            }).then((data) => {
                // Result
                this.toggleSnackbar("Person removed")
            }).catch((error) => {
                // Error
                console.error(error)
            })
        },

    },

    // Apollo GraphQL
    apollo: {
        allPersons: {
            query: allPersons,
            loadingKey: 'loading',
        },
    }

}
</script>

<style>

input {
    padding: 8px;
    border: solid 1px #bbb;
    border-radius: 2px;
}

input:focus {
    box-shadow: none;
    outline: none;
    border-color: #40b883;
}

html {
    position: relative;
    min-height: 100%;
}

body {
    min-height: 100%;
    overflow-x: initial !important;
}

.columns {
    height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #929191;
  min-height: 100%;
}

hr {
    background-color: white !important;
}

.fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>
<style src="bulma/css/bulma.css"></style>
<style src="animate.css/animate.min.css"></style>
