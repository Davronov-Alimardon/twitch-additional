import { LogOut } from "lucide-react";
import { signOut } from "@/next-auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getSelf } from "@/lib/auth-service";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";

import { SettingsModal } from "./settings-modal";

export const UserButton = async () => {
  const user = await getSelf();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          username={user?.username!}
          imageUrl={user?.image}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel>{user?.username}</DropdownMenuLabel>
        <SettingsModal
          initialUsername={user.username}
          initialImage={user.image}
        />
        <DropdownMenuSeparator />
        <form action={async () => {
          "use server";

          await signOut();
        }}>
          <Button type="submit" variant="ghost" className="w-full justify-start">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
