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

  const { email, password, firstName, lastName } = await req.json();

  if (!email || !password || !firstName || !lastName) {
    return new NextResponse(
      JSON.stringify({ error: "All fields are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse(JSON.stringify({ error: "User already exists" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const userCount = await User.countDocuments();
  const role = userCount === 0 ? "admin" : "client";
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    role,
  });

  await newUser.save();

  const token = jwt.sign({ email, role }, JWT_SECRET!, { expiresIn: "1h" });

  try {
    // Make the POST request to the external API using axios
    const response = await axios.post(`${URL}/api/v1/token/`, {
      username: "bouboune",
      password: "bouboune#123",
    });
    const externalApiToken = response.data;

    return new NextResponse(
      JSON.stringify({
        status: "User created successfully!",
        token,
        externalApiToken: externalApiToken.access,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "x-user-authenticated": token,
        },
      }
    );
  } catch (error) {
    console.error("Error creating user in external API:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to authenticate with external API" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
