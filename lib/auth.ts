import { auth } from "@/next-auth";
import { 
  useSession as useNextAuthSession,
} from "next-auth/react";

export const useSession = () => {
  const session = useNextAuthSession();

  return session;
};

export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;;
};

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};
