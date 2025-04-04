import USER from "../models/user.js";
import bcrypt from "bcrypt";

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
        res.status(400).end(`${err}`)
    }
};

export { handleCreateUser };