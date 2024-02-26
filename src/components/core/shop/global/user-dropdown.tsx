"use client";

import {
  CreditCard,
  Keyboard,
  LogOut,
  Settings,
  User,
  UserCircle,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";

const UserDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserCircle strokeWidth={1} size={30} className="text-teal-600" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="inline-flex items-center gap-1" href="/dashboard/">
              <User className="mr-3 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              className="inline-flex items-center gap-1"
              href="/dashboard/orders"
            >
              <CreditCard className="mr-3 h-4 w-4" />
              <span>My Orders</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              className="inline-flex items-center gap-1"
              href="/dashboard/wishlists"
            >
              <Settings className="mr-3 h-4 w-4" />
              <span>My Wishlists</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              className="inline-flex items-center gap-1"
              href="/dashboard/checkout"
            >
              <Keyboard className="mr-3 h-4 w-4" />
              <span>Checkout</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-3 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
