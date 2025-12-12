import { useAuth } from "@/hooks/useAuth";
import useIsAdmin from "@/hooks/useIsAdmin";
import LoadingPage from "@/page/LoadingPage/LoadingPage";
import type { ReactNode } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user,loading } = useAuth();


  if(loading && !user?.email){
    return <LoadingPage></LoadingPage>
  }

  const { isAdmin,isLoading } = useIsAdmin(user?.email as string);

  if(isLoading){
    return <LoadingPage></LoadingPage>
  }

  if (user?.email && isAdmin) {
    return <>{children}</>;
  }

  
  return <Navigate to={"/signin"} />;
};

export default ProtectedRoute;