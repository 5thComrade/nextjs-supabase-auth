export const publicRoutes = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Login",
    route: "/login",
  },
  {
    id: 3,
    name: "SignUp",
    route: "/signup",
  },
  {
    id: 4,
    name: "Dashboard",
    route: "/protected/dashboard",
  },
];

export const privateRoutes = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
];

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
export const PASSWORD_REGEX =
  /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,}/g;