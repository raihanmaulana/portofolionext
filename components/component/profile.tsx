"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Squircle } from "corner-smoothing";

const Profile = () => {
  return (
    <div className="flex gap-x-3 items-center">
      <Squircle
        className="bg-background text-foreground inline-block rounded-none"
        cornerRadius={12}
      >
        <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-sm">
          <AvatarImage
            className="rounded-sm"
            src="https://github.com/raihanmaulana.png"
            alt="@raihanmaulana"
          />
          <AvatarFallback className="rounded-sm">CN</AvatarFallback>
        </Avatar>
      </Squircle>
      <div className="flex flex-col gap-y-1">
        <h2 className="text-base md:text-lg font-semibold text-foreground leading-none md:leading-none">
          Raihan Maulana
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground leading-none md:leading-none">
          @raihanmaulana
        </p>
      </div>
    </div>
  );
};

export default Profile;
