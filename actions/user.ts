"use server";

import { prismaClient } from "@/lib/db";
import { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import EmailTemplate from "@/app/components/Emails/email-template";

interface RegisterFormDataProps {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: UserRole;
}

export async function createUser(formData: RegisterFormDataProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { fullName, email, role, password, phoneNumber } = formData;

  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        data: null,
        error: `User with this email ( ${email})  already exists in the Database`,
        status: 409,
      };
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await prismaClient.user.create({
      data: {
        name: fullName,
        email,
        phone: phoneNumber,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });
    //Send an Email with the Token on the link as a search param
    const token = newUser.token;
    // const userId = newUser.id;
    const firstName = newUser.name.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: "Medical App <onboarding@resend.dev>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ firstName, token, linkText, message }),
    });
    console.log(token);
    console.log(sendMail);
    console.log(newUser);
    return newUser;
  } catch (error) {
    console.log(error);
    return {
      error: "something went wrong",
    };
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return {
        data: null,
        error: "User not found",
        status: 404,
      };
    }
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return {
      data: null,
      error: "Internal server error",
      status: 500,
    };
  }
}

export async function updateUserById(id: string) {
  try {
    const updatedUser = await prismaClient.user.update({
      where: {
        id,
      },
      data: {
        isVerified: true,
      },
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      data: null,
      error: "Internal server error",
      status: 500,
    };
  }
}
