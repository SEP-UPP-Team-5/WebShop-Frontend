export const AppConstants = {
     API_HOST : "http://localhost:8080",

     USERS : {
        LIST: '/users',
        ADD: '/users',
        LOGIN: '/users/login',
        GET_ONE: '/users/{0}',
        DELETE: '/users/{0}',
        GET_BY_USERNAME: '/users/username/'

    },
    PRODUCTS : {
        LIST: '/purchase/products',
        GET_ONE: '/purchase/products/{0}',
        ADD: '/purchase/products/addNew',
    },
    PURCHASE : {
        GET_BY_ID: '/purchase/{0}',
        BUY: '/purchase/addNew'
    }
}