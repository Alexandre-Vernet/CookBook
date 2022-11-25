import passport from "passport";
import passportGoogle from "passport-google-oauth20";


const GoogleStrategy = passportGoogle.Strategy;
const GOOGLE_CLIENT_SECRET = "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"
// const GOOGLE_CLIENT_SECRET = "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"
const GOOGLE_CLIENT_ID = "51959613828-sb9k2mpfgn24t0g62o5oi6j96gbur2or.apps.googleusercontent.com"
// const GOOGLE_CLIENT_ID = "996463489002-mlualdehdv3vue6hgvgbrbam5ucnbu24.apps.googleusercontent.com"




passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "auth/google/callback",
    },
    (accessToken: any, refreshToken: any, profile: any, done:any) => {
      // get profile details
      // save profile details in db
    }
  )
);


passport.serializeUser(function(user:any,done:any){
  done(null, user)
});

passport.deserializeUser(function(user:any,done:any){
  done(null, user)
});