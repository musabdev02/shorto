import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_TOKEN;

if (!secret) {
    throw new Error("JWT secret key is missing! Set JWT_TOKEN in your .env file.");
}

const setUser = (user) => {
    return jwt.sign(
        {id: user._id, email: user.email},
        secret,
        {expiresIn: "7d"}
    )
};

const getUser = (token) => {
    try{
        return jwt.verify(token, secret);
    }catch(err) {
        return null;
    }
}

export { setUser, getUser }