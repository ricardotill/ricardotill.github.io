import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay visibility slightly for a better feel
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (status: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", status);
    setIsVisible(false);
    
    // Dispatch custom event for Google Analytics component
    window.dispatchEvent(
      new CustomEvent("cookie-consent-updated", {
        detail: { consent: status },
      })
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-6 left-6 right-6 z-50 md:left-auto md:max-w-md"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background/80 p-6 shadow-2xl backdrop-blur-xl">
            {/* Background Gradient Detail */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
            
            <div className="relative flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Cookie className="h-5 w-5" />
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="rounded-full p-1 text-muted-foreground hover:bg-muted transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  Cookie Settings
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your experience and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <Button
                  onClick={() => handleConsent("accepted")}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
                >
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleConsent("declined")}
                  className="flex-1 border-border hover:bg-muted transition-all active:scale-[0.98]"
                >
                  Reject All
                </Button>
              </div>
              
              <div className="text-[10px] text-center text-muted-foreground/60">
                GDPR Compliant • Privacy First
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
