import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;

        if (email) {
            fetch(`https://hidden-crag-33232.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setAdmin(data?.admin);
                    setAdminLoading(false);
                })
        }

    }, [user]);

    return [admin, adminLoading];

}

export default useAdmin;