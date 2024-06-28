import { FaGoogle } from "react-icons/fa";

import { signIn } from "@/next-auth";
import { Button } from "@/components/ui/button";

export const SignIn = () => {
  return (
    <div className="p-4 bg-muted rounded-xl">
      <form action={async () => {
        "use server";

        await signIn("google");
      }}>
        <Button variant="primary">
          <FaGoogle className="h-4 w-4 mr-2" />
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};
