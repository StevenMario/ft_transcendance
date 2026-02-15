import type { JSX } from "react";

type ProtectedRouteProps = {
    children: JSX.Element;
    allowedRoles?: string[];
};

function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    //   const { user } = useAuth();



    // Affiche les enfants (composants protégés) si l'utilisateur est authentifié
    return children;
}

export default ProtectedRoute;