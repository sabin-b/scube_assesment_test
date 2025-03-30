import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Error() {
  return (
    <main className="min-h-svh flex items-center justify-center bg-theme-gray">
      <div className="flex flex-col items-center">
        <h1>SomeThing Went Wrong</h1>
        <Link className={cn("btn-link", "inline-block mt-1")} to={"/"}>
          Back To Home
        </Link>
      </div>
    </main>
  );
}
