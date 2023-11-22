import pkg from 'jsonwebtoken';
const {verify} = pkg;
import { UNAUTHORIZED } from '../constants/httpStatus.js';

export default (req, res, next) => {
  console.log("middle ware acitve");
  const token = req.headers.access_token;
  if (!token) return res.status(UNAUTHORIZED).send();

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    res.status(UNAUTHORIZED).send();
  }

  return next();
};