import {
  createBrowserRouter,
} from 'react-router-dom'
import App from '../../App'
import StepAccount from '../ui/InscriptionForm/StepAccount.tsx'
import RoleChoice from '../ui/InscriptionForm/RoleChoice.tsx'
import SignUpLayout from '../ui/InscriptionForm/SignUpLayout.tsx'
import CompleteProfile from '../ui/InscriptionForm/CompleteProfile.tsx'
import FinishProfile from '../ui/InscriptionForm/FinishProfile.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/singup',
    element: <SignUpLayout />,
    children: [
      {
        index: true,
        element: <StepAccount/>,
      },
      {
        path: 'role-choice',
        element: <RoleChoice/>,
      },
      {
        path: 'complete-profile',
        element: <CompleteProfile />,
      },
      {
        path: 'finish-profile',
        element: <FinishProfile />,
      }
    ],
  }
])

export default router
