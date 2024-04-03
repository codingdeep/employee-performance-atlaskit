import {Routes} from 'react-resource-router'
import HomePage from "~src/pages/homePage/HomePage";
import GoalsPage from "~src/pages/goal/GoalsPage";
export const appRoutes: Routes = [
    {
        name: 'home',
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        name: 'goals',
        path: '/goals',
        exact: true,
        component: GoalsPage
    }
]
