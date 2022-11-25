import { Callback } from "mongoose";

const express = require("express");

import { Request, Response } from "express";

const passport = require("passport");
const LocalStrategy = require("passport-local");
import crypto from "crypto";
import Users from "../schemas/Users";

const router = express.Router();

passport.use(
  new LocalStrategy(function (
    username: string,
    password: string,
    done: Function
  ) {
    Users.findOne({ username: username }, function (err: Error, user: any) {
      return done(null, { email: "jean@test.com", password: "13456" });
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

router.get("/login", function (req: Request, res: Response, next: Callback) {
  res.render("login");
});

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/login/failure",
  }),
  (req: unknown, res: any, next: unknown) => {
    res.render("salut");
  }
);

module.exports = router;
