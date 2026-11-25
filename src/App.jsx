
import { lazy, Suspense } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ScrollToTop from "./components/ScrollToTop";
import PageSEO from "./components/PageSEO";
import PageLoader from "./components/PageLoader";

import AuthProvider from "./context/AuthProvider";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import GuestRoute from "./components/auth/GuestRoute";

// Static page imports

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Lazy-loaded pages

const Destinations = lazy(() =>
  import("./pages/Destinations")
);

const DestinationDetails = lazy(() =>
  import("./pages/DestinationDetails")
);

const Experiences = lazy(() =>
  import("./pages/Experiences")
);

const TourPackages = lazy(() =>
  import("./pages/TourPackages")
);

const TourPackageDetails = lazy(() =>
  import("./pages/TourPackageDetails")
);

const TripPlanner = lazy(() =>
  import("./pages/TripPlanner")
);

const TravelGuide = lazy(() =>
  import("./pages/TravelGuide")
);

const About = lazy(() =>
  import("./pages/About")
);

const Contact = lazy(() =>
  import("./pages/Contact")
);

const Login = lazy(() =>
  import("./pages/Login")
);

const Register = lazy(() =>
  import("./pages/Register")
);

const Dashboard = lazy(() =>
  import("./pages/Dashboard")
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <ScrollToTop />

        <PageSEO />

        <Suspense fallback={<PageLoader />}>

          <Routes>

            {/* Main Website Layout */}

            <Route element={<MainLayout />}>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/destinations"
                element={<Destinations />}
              />

              <Route
                path="/destinations/:id"
                element={<DestinationDetails />}
              />

              <Route
                path="/experiences"
                element={<Experiences />}
              />

              <Route
                path="/tour-packages"
                element={<TourPackages />}
              />

              <Route
                path="/tour-packages/:id"
                element={<TourPackageDetails />}
              />

              <Route
                path="/trip-planner"
                element={<TripPlanner />}
              />

              <Route
                path="/travel-guide"
                element={<TravelGuide />}
              />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

              {/* Protected Dashboard */}

              <Route element={<ProtectedRoute />}>

                <Route
                  path="/dashboard"
                  element={<Dashboard />}
                />

              </Route>

            </Route>

            {/* Guest Authentication Pages */}

            <Route element={<GuestRoute />}>

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/register"
                element={<Register />}
              />

            </Route>

            {/* 404 Error Page */}

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </Suspense>

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
