import { getUser } from "../service/auth.js";


const checkAuthUser = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token ) return res.status(401).json({message: "Unauthorized"});
    const user = await getUser(token);
    if(!user) return res.status(401).json({message: "Unauthorized"});
    console.log(user);
    req.user = user;
    next();
};

export { checkAuthUser };