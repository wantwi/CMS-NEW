import { lazy } from "react"


const MemberRoutes = [
    {
        path: "/member/adult",
        component: lazy(() => import("../../views/member/adult/AdultPage"))
      },
      {
        path: "/adult/add",
        component: lazy(() => import("../../views/member/adult/AddPage"))
        
      },
      {
        path: "/adult/edit/:id",
        component: lazy(() => import("../../views/member/adult/AddPage"))
      },
      {
        path: "/member/junior",
        component: lazy(() => import("../../views/member/junior/JuniorPage"))
      },
      {
        path: "/member/leader",
        component: lazy(() => import("../../views/member/leader/LeaderPage"))
      },
      {
        path: "/member/committee",
        component: lazy(() => import("../../views/member/committee/CommitteePage"))
      }
]

export default MemberRoutes