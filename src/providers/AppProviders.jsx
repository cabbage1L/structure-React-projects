import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter } from "react-router-dom";

function AppProviders({ children }) {
    return (
        <BrowserRouter>
            <AuthProvider>
                {children}
            </AuthProvider>
        </BrowserRouter>
    );
}


export default AppProviders