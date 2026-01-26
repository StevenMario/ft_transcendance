import {
  createBrowserRouter,
} from 'react-router-dom'
import App from '../../App'
import InscriptionForm from '../ui/InscriptionForm/Inscriptionform.tsx'
import ConfirmEmailForm from '../ui/InscriptionForm/ConfirmEmail.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/singup',
    element: <InscriptionForm />,
    children: [
      {
        path: 'confirm-email',
        element: <ConfirmEmailForm/>,
      }
    ],
  }
])

export default router
