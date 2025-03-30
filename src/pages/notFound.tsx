import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function NotFound() {
  return (
    <main className="min-h-svh flex items-center justify-center bg-theme-gray">
      <div className="flex flex-col items-center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link className={cn("btn-link", "inline-block mt-6")} to={"/"}>
          Back To Home
        </Link>
      </div>
    </main>
  );
}
