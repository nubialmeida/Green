import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
    Onboard,
    Checkout,
    NotFound,
    TermsOfUse,
    Transfer,
    Help,
    LandingPage,
    Cards,
    Profile,
    ProblemsLogin,
} from "../pages";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/landing-page" />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/help" element={<Help />} />
            <Route path="/problems-login" element={<ProblemsLogin />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
