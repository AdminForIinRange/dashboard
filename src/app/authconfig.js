import { response } from "express";
import { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashBoard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashBoard) {
        if (isLoggedIn) true;
        return false;
      } else if (isLoggedIn) {
        return response.redirect(new URL("/dashboard", request.nextUrl));
      }

      return true;
    },
  },
};
