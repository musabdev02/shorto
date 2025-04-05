
const logoutRq = async () => {
    const res = await fetch(`http://localhost:3000/api/user/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    if(data?.status === "ok"){
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("name");
    }
    
};

export { logoutRq };