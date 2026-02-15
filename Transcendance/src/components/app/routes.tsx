import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../../App";
import StepAccount from "../ui/InscriptionForm/StepAccount.tsx";
import RoleChoice from "../ui/InscriptionForm/RoleChoice.tsx";
import SignUpLayout from "../ui/InscriptionForm/SignUpLayout.tsx";
import FinishProfile from "../ui/InscriptionForm/FinishProfile.tsx";
import ClientInfo from "../ui/InscriptionForm/Client/ClientInfo.tsx";
import PrestataireInfo from "../ui/InscriptionForm/Prestatire/PrestataireInfo.tsx";
import EntrepriseInfo from "../ui/InscriptionForm/Entreprise/EntrepriseInfo.tsx";
import PrestataireLayout from "../ui/InscriptionForm/Prestatire/PrestatireLayout.tsx";
import PrestataireExtra from "../ui/InscriptionForm/Prestatire/PrestatireExtra.tsx";
import EntrepriseLayout from "../ui/InscriptionForm/Entreprise/EntrepriseLayout.tsx";
import EntrepriseExtra from "../ui/InscriptionForm/Entreprise/EntrepriseExtra.tsx";
import CguPage from "../ui/pages/CguPage.tsx";
import PolicyPage from "../ui/pages/PolicyPage.tsx";
import ProtectedRoute from "../ui/ProtectedRoute.tsx";
import ClientDashboardLayout from "../ui/Client/ClientDashboardLayout.tsx";
import ClientHome from "../ui/Client/ClientHome.tsx";
import ClientServices from "../ui/Client/ClientServices.tsx";
import ClientProfil from "../ui/Client/ClientProfile.tsx";
import ClientMessages from "../ui/Client/ClientMessages.tsx";
import Login from "../ui/LoginForm/Login.tsx";

const router = createBrowserRouter([
  /* INDEX - HOME */
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  /* SIGNUP */
  {
    path: "/signup",
    element: <SignUpLayout />,
    children: [
      {
        index: true,
        element: <StepAccount />,
      },
      {
        path: "role-choice",
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
        path: "finish-profile",
        element: <FinishProfile />,
      },
    ],
  },
  /* CONDITION D'UTILISATION */
  {
    path: "/cgu",
    element: <CguPage />,
  },
  /* POLITIQUE DE CONFIDENTIALITE */
  {
    path: "/policy",
    element: <PolicyPage />,
  },
   /* DASHBOARD CLIENT */
  {
    path: "/dashboard/client",
    element: (
      <ProtectedRoute allowedRoles={["client"]}>
        <ClientDashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <ClientHome /> },
      { path: "services", element: <ClientServices /> },
      { path: "profil", element: <ClientProfil /> },
      { path: "messages", element: <ClientMessages /> },
    ],
  },

]);



export default router;
