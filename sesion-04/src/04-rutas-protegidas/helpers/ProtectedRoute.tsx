import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    isAllowed: boolean;
    children: React.ReactNode;
}

export const ProtectedRoute = ({ 
    isAllowed, 
    children 
}: ProtectedRouteProps) => {
    if (!isAllowed) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
};