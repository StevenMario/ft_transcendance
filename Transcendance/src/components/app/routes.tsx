import {
  createBrowserRouter,
} from 'react-router-dom'
import App from '../../App'
import InscriptionForm from '../ui/InscriptionForm/Inscriptionform'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/singup',
    element: <InscriptionForm />,
  }
])

export default router
