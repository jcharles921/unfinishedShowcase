import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import axios from "axios";
import dbConnect from "lib/mongodb";
import User from "../../../model/User";

const JWT_SECRET = process.env.SECRET;
const URL = process.env.EXTERNAL_API;
export async function POST(req: Request) {
  await dbConnect();

  const { email, password } = await req.json();

  if (!email || !password) {
    return new NextResponse(
      JSON.stringify({ error: "Email and password are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const user = await User.findOne({ email });

  if (!user) {
    return new NextResponse(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return new NextResponse(
      JSON.stringify({ error: "Invalid email or password" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET!, {
    expiresIn: "1h",
  });

  try {
    // Make the POST request to the external API using axios
    const response = await axios.post(`${URL}/api/v1/token/`, {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    });

    const responseData = response.data;
    return new NextResponse(
      JSON.stringify({
        status: "Login successful!",
        token,
        externalApiToken: responseData.access,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "x-user-authenticated": token,
        },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to authenticate with external API" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
