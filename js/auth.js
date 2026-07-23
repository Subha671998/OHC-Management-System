// ======================================
// auth.js
// OHC Management System
// ======================================

import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
        signOut,
            onAuthStateChanged,
                sendPasswordResetEmail
                } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

                // =============================
                // Login
                // =============================

                const loginForm = document.getElementById("loginForm");

                if (loginForm) {

                    loginForm.addEventListener("submit", async (e) => {

                            e.preventDefault();

                                    const email = document.getElementById("email").value.trim();
                                            const password = document.getElementById("password").value;

                                                    try {

                                                                await signInWithEmailAndPassword(auth, email, password);

                                                                            alert("Login Successful");

                                                                                        window.location.href = "dashboard.html";

                                                                                                } catch (error) {

                                                                                                            alert(error.message);

                                                                                                                    }

                                                                                                                        });

                                                                                                                        }

                                                                                                                        // =============================
                                                                                                                        // Logout
                                                                                                                        // =============================

                                                                                                                        window.logout = async function () {

                                                                                                                            try {

                                                                                                                                    await signOut(auth);

                                                                                                                                            window.location.href = "login.html";

                                                                                                                                                } catch (error) {

                                                                                                                                                        alert(error.message);

                                                                                                                                                            }

                                                                                                                                                            };

                                                                                                                                                            // =============================
                                                                                                                                                            // Forgot Password
                                                                                                                                                            // =============================

                                                                                                                                                            window.resetPassword = async function () {

                                                                                                                                                                const email = prompt("Enter your registered email:");

                                                                                                                                                                    if (!email) return;

                                                                                                                                                                        try {

                                                                                                                                                                                await sendPasswordResetEmail(auth, email);

                                                                                                                                                                                        alert("Password reset email sent.");

                                                                                                                                                                                            } catch (error) {

                                                                                                                                                                                                    alert(error.message);

                                                                                                                                                                                                        }

                                                                                                                                                                                                        };

                                                                                                                                                                                                        // =============================
                                                                                                                                                                                                        // Authentication Check
                                                                                                                                                                                                        // =============================

                                                                                                                                                                                                        onAuthStateChanged(auth, (user) => {

                                                                                                                                                                                                            const page = window.location.pathname.split("/").pop();

                                                                                                                                                                                                                // Login page হলে redirect করবে না
                                                                                                                                                                                                                    if (page === "login.html" || page === "") {

                                                                                                                                                                                                                            return;

                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                    // Login না থাকলে login page এ পাঠাবে
                                                                                                                                                                                                                                        if (!user) {

                                                                                                                                                                                                                                                window.location.href = "login.html";

                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                    });