import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-tranparent border-none max-w-[343.2px] align-middle ">
        <VisuallyHidden>
          <DialogTitle>Organization Profile</DialogTitle>
        </VisuallyHidden>
        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
};
