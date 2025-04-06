
const logoutRq = async (callback) => {
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
            callback();
        }
    } catch (error) {
        console.log(error);
    };
};

const deletelink = async (shortId, callback) => {

    try {
        const res = await fetch(`http://localhost:3000/api/user/url/`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ shortId })
        });
        const data = await res.json();
        if(data?.status === "ok"){
            callback();
        }
    } catch (error) {
        console.log(error);
    }

}

export { logoutRq, deletelink };