import { lazy } from "react"
import MemberRoutes from "./Member"


// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template"

// ** Default Route
const DefaultRoute = "/home"

// ** Merge Routes
const Routes = [
  ...MemberRoutes,
  {
    path: "/home",
    component: lazy(() => import("../../views/Home"))
  },
  {
    path: "/second-page",
    component: lazy(() => import("../../views/SecondPage"))
  },
  {
    path: "/operation",
    component: lazy(() => import("../../views/operation/OperationsPage"))
  },
  {
    path: "/setup/classes/adult",
    component: lazy(() => import("../../views/setups/classes-setup/adult-class/AdultClassSetupPage"))
  },
  {
    path: "/setup/classes/junior",
    component: lazy(() => import("../../views/setups/classes-setup/junior-class/JuniorClassSetupPage"))
  },
  {
    path: "/setup/operations",
    component: lazy(() => import("../../views/setups/operations/OperationsSetupPage"))
  },
  {
    path: "/setup/committee",
    component: lazy(() => import("../../views/setups/committee/CommitteeSetupPage"))
  },
  {
    path: "/setup/contribution",
    component: lazy(() => import("../../views/setups/contribution/ContributionsSetupPage"))
  },

  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true
    }
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout"
  }
]

export { DefaultRoute, TemplateTitle, Routes }
