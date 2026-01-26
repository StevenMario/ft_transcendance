import {
  createBrowserRouter,
} from 'react-router-dom'
import App from '../../App'
import StepAccount from '../ui/InscriptionForm/StepAccount.tsx'
import ConfirmEmailForm from '../ui/InscriptionForm/ConfirmEmail.tsx'
import SignUpLayout from '../ui/InscriptionForm/SignUpLayout.tsx'

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
        path: 'confirm-email',
        element: <ConfirmEmailForm/>,
      }
    ],
  }
])

export default router
