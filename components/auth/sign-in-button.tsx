import Link from "next/link";

import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return (
    <Button variant="primary" size="sm" asChild>
      <Link href="/sign-in">
        Log in
      </Link>
    </Button>
  );
};
