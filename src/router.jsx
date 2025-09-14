// src/router.js
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import NotFound from "./routes/NotFound";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";
import Home from "./routes/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Protected Home component
const ProtectedHome = () => (
  <ProtectedRoute>
    <Home />
  </ProtectedRoute>
);
// All routes

const rootRoute = createRootRoute(); // Removed the Layout component

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Signin,
});
const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
});
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: ProtectedHome,
});
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  signupRoute,
  homeRoute,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
