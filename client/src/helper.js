const apiUrl = import.meta.env.VITE_API_URL;
const logoutRq = async (callback) => {
    try {
        const res = await fetch(`${apiUrl}/api/user/logout`, {
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
            return data;
        }
    } catch (error) {
        console.log(error);
    };
};

const deletelink = async (shortId, callback) => {

    try {
        const res = await fetch(`${apiUrl}/api/user/url/`, {
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

};

const truncate = (str, len) => {
    return str.length > len ? str.slice(0, len) + "..." : str;
};

const addPrefix = (str) => {
    if(str.length <= 0){
        return "0"
    }else{
        return str.length.toString().padStart(2, "0")
    }
}

export { logoutRq, deletelink, truncate, addPrefix };