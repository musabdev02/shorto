import USER from "../models/user.js";
import bcrypt from "bcrypt";
import { setUser, getUser } from "../service/auth.js";

const handleCreateUser = async (req, res) => {  
    const { name, email, password } = req.body;

    const user = await USER.findOne({ email });
    if (user) {
        return res.status(500).end("Something went wrong...");
    }

    try {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (!err) {
                    await USER.create({
                        name,
                        email,
                        password: hash
                    });
                    return res.status(201).json({ status: "ok" });

                } else {
                    return res.status(500).end("Something went wrong..");
                }
            });
        });

    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

const handleVerifyUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email & Password are required!" });
    }

    try {
       
        const user = await USER.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isPassCorrect = await bcrypt.compare(password, user.password);
        if (!isPassCorrect) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = setUser(user);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,       
            sameSite: "lax",        
            maxAge: 7 * 24 * 60 * 60 * 1000
          });

        return res.status(200).json({
            status: "ok",
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

const handleGetProfile = async (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const userEmail = getUser(token);
    if(!userEmail) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const user = await USER.findOne({
            email: userEmail.email
        });
        return res.status(200).json({
            status: "ok",
            user
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}
export { handleCreateUser, handleVerifyUser, handleGetProfile };