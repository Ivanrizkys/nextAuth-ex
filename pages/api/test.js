import { getToken } from "next-auth/jwt";

const secret = "2a594bf076ea1086e597139cedd302e7";

export default async function handler(req, res) {
  console.log(req);
  const token = await getToken({ req, secret });
  if (token) {
    // Signed in
    return res.status(200).json({
      message: "You Are Authenticated",
      token: token,
    });
  } else {
    // Not Signed in
    return res.status(401).json({
      message: "You Are Not Authenticated",
      token: null,
    });
  }
}
