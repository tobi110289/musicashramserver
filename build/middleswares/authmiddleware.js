"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SECRET_KEY = process.env.SECRET_KEY || "this is satisfying typescript";
const authMiddleware = async (req, res, next) => {
    // extract token from auth headers
    const authHeaders = req.headers["authorization"];
    if (!authHeaders)
        return res.sendStatus(403);
    const token = authHeaders.split(" ")[1];
    try {
        // // verify & decode token payload,
        // const { id } = jwt.verify(token, SECRET_KEY);
        // // attempt to find user object and set to req
        // const admin = await prisma.admin.findUnique({ where: { id } });
        // if (!admin) return res.sendStatus(401);
        // req.admin = admin;
        next();
    }
    catch (error) {
        res.sendStatus(401);
    }
};
exports.default = authMiddleware;
