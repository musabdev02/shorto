
const logoutRq = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/user/logout`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data?.status === "ok") {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("name");
        }
    } catch (error) {
        console.log(error);
    };
};

const deletelink = async (shortId) => {

    try {
        const res = await fetch(`http://localhost:3000/api/user/url/`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ shortId })
        });
    } catch (error) {
        console.log(error);
    }

}

export { logoutRq, deletelink };