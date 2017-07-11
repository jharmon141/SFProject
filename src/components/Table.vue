<template>

    <div class="columns main">

        <div class="column is-10 is-offset-1">

        <table class="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Phone Number</th>
                    <th>Zip Code</th>
                    <th class="deleteIcon">Remove</th>
                </tr>
            </thead>
            <tfoot>
                <tr v-for="person in allPersons" :key="person.id">
                    <td>{{person.firstname}}</td>
                    <td>{{person.lastname}}</td>
                    <td>{{person.dob}}</td>
                    <td>{{person.phone}}</td>
                    <td>{{person.zip}}</td>
                    <td class="deleteIcon">
                        <span v-on:click="delPerson(person)"> 
                        <icon name="trash" scale="2"></icon>
                        </span>
                    </td>
                </tr>
            </tfoot>

        </table>

        
        <router-link to="/" tag="h1" exact>
            <a>
                <icon name="arrow-left" scale="1"></icon>
                Back to form
            </a>
        </router-link>

        </div>

    </div>

</template>

<script>

export default {

    name: "Table",

    props: ['allPersons', 'delPerson'],



}

</script>

<style>

table {
    margin-top: 50px;
    font-size: 22px;
}

.deleteIcon {
    text-align: center !important;
}

.fa-icon:hover {
    color: red !important;
}

h1 {
    margin-top: 75px;
    text-align: left;
    font-size: 24px;
}

a {
  color: #929191;
}

a:hover {
  color: red;
}
</style>
