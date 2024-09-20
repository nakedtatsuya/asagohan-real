"use client";
import { useState, useEffect } from "react";
import supabase from "../supabase";

const useUserAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userID, setUserID] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkUserAuth = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error);
        setIsAuthenticated(false);
        setUserID(null);
      } else if (data.session) {
        const userData = data.session.user;
        // Ensure userData.email is defined
        if (userData && userData.id) {
          setIsAuthenticated(true);
          setUserID(userData.id);
        } else {
          setIsAuthenticated(false);
          setUserID(null);
        }
      } else {
        setIsAuthenticated(false);
        setUserID(null);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setIsAuthenticated(false);
      setUserID(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  useEffect(() => {
    // if (isAuthenticated) {
    //   console.log("Authenticated");
    // } else {
    //   window.location.href = "/login";
    // }
  }, [isAuthenticated]);

  return { userID, authLoading: loading };
};

export default useUserAuth;
