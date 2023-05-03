import { Admin } from "./pages/Admin"
import Exercises from "./pages/Exercises"
import Grammar from "./pages/Grammar"
import Login from "./pages/Login"
import Main from "./pages/Main"
import Registration from "./pages/Registration"
import Vocabulary from "./pages/Vocabulary"
import { ADMIN_ROUTE, EXERCISES_ROUTE, GRAMMAR_ROUTE, REGISTR_ROUTE, VOCABULARY_ROUTE, MAIN_ROUTE, LOGIN_ROUTE} from "./utils/consts"

export const authRoutes = [
{
    path: ADMIN_ROUTE,
    Component: Admin
},
{
    path: VOCABULARY_ROUTE,
    Component: Vocabulary
},
{
    path: GRAMMAR_ROUTE,
    Component: Grammar
},
{
    path: EXERCISES_ROUTE,
    Component: Exercises
}
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTR_ROUTE,
        Component: Registration
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }


]