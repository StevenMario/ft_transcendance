import {
  createBrowserRouter,
  Outlet,
} from 'react-router-dom'
import App from '../../App'
import StepAccount from '../ui/InscriptionForm/StepAccount.tsx'
import RoleChoice from '../ui/InscriptionForm/RoleChoice.tsx'
import SignUpLayout from '../ui/InscriptionForm/SignUpLayout.tsx'
import FinishProfile from '../ui/InscriptionForm/FinishProfile.tsx'
import ClientInfo from '../ui/InscriptionForm/Client/ClientInfo.tsx'
import PrestataireInfo from '../ui/InscriptionForm/Prestatire/PrestataireInfo.tsx'
import EntrepriseInfo from '../ui/InscriptionForm/Entreprise/EntrepriseInfo.tsx'
import PrestataireLayout from '../ui/InscriptionForm/Prestatire/PrestatireLayout.tsx'
import PrestataireExtra from '../ui/InscriptionForm/Prestatire/PrestatireExtra.tsx'
import EntrepriseLayout from '../ui/InscriptionForm/Entreprise/EntrepriseLayout.tsx'
import EntrepriseExtra from '../ui/InscriptionForm/Entreprise/EntrepriseExtra.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signup',
    element: <SignUpLayout />,
    children: [
      {
        index: true,
        element: <StepAccount />,
      },
      {
        path: 'role-choice',
        element: <RoleChoice />,
      },
      {
        path: "complete-profile",
        element: <Outlet />, // layout commun
        children: [
          // CLIENT INFO
          { path: "client", element: <ClientInfo /> },
          // PRESTATAIRE INFO
          {
            path: "prestataire",
            element: <PrestataireLayout />,
            children: [
              { index: true, element: <PrestataireInfo /> },
              { path: "extra", element: <PrestataireExtra /> },
            ],
          },
          // ENTREPRISE (multi steps)
          {
            path: "entreprise",
            element: <EntrepriseLayout />,
            children: [
              { index: true, element: <EntrepriseInfo /> },
              { path: "extra", element: <EntrepriseExtra /> },
            ],
          },
        ],
      },
      {
        path: 'finish-profile',
        element: <FinishProfile />,
      }
    ],
  }
])

export default router
