import {Routes} from 'react-resource-router'
import HomePage from "~src/pages/homePage/HomePage";
import GoalsPage from "~src/pages/goal/GoalsPage";
import FeedbackPage from '~src/pages/feedback/FeedbackPage';
import AssessmentPage from "~src/pages/assessment/AssessmentPage";
import CalibrationsPage from "~src/pages/calibration/CalibrationsPage";

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
    },
    {
        name: 'feedback',
        path: '/feedback',
        exact: true,
        component: FeedbackPage
    },
    {
        name: 'assessment',
        path: '/assessment',
        exact: true,
        component: AssessmentPage
    },
    {
        name: 'calibrations',
        path: '/calibrations',
        exact: true,
        component: CalibrationsPage
    }

]
