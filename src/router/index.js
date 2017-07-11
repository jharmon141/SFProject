import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Table from '@/components/Table'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'Form',
            component: Form
        },
        {
            path: '/table',
            name: 'Table',
            component: Table
        }
    ]
})
