
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md p-6">
        <div className="h-20 w-20 echo-gradient rounded-full flex items-center justify-center mx-auto mb-6">
          <Music size={40} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-foreground/70 mb-6">
          We couldn't find the beat you were looking for.
        </p>
        <Button asChild className="bg-echo-purple hover:bg-echo-dark-purple">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
