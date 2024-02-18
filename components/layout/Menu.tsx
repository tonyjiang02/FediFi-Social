"use client";

import { Input } from "@/components/ui/input";
import { CircleIcon, GlobeIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthenticatedMenuItem } from "../auth/AuthenticatedMenuItem";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menubar } from "@/components/ui/menubar";

export function Menu() {
  const [appVersion, setAppVersion] = useState<string | undefined>();
  const pathname = usePathname();

  useEffect(() => {
    setAppVersion(process.env.APP_VERSION);
  }, []);

  return (
    <NavigationMenu className="flex justify-between items-center rounded-none border-b border-none px-2 lg:px-4 my-2">
      <NavigationMenuList>
        <NavigationMenuItem className="flex mr-1">
          <Link href="/in" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/in"}
            >
              <HomeIcon className="mr-1" />
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-1">
          <Link href="/in/local" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/in/local"}
            >
              <CircleIcon className="mr-1" />
              Local
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <div className="mx-4 my-2">
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[300px]"
        />
      </div>

      <NavigationMenuList className="flex">
        <Menubar>
          <AuthenticatedMenuItem />
        </Menubar>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
