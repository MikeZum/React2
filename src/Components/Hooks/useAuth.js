import { useEffect, useState } from "react";

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);
    const provider = 'google';
    const login = () => provider
    useEffect(() => {

    }, [authentication]);

    return { authentication, login };
} 