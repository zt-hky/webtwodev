import React from 'react'
import Login from 'pages/login'
import Page404 from 'pages/404'
import HomePage from 'pages/home'

const routes = [{
        path: '/',
        exact: true,
        main: () => < HomePage / >
    },
    {
        path: '/404',
        exact: true,
        main: () => < Page404 / >
    },
    {
        path: '/Login',
        exact: true,
        main: () => < Login / >
    },
]