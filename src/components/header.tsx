"use client";

import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import HeaderContent from "./header-content";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem] lg:p-2">
      <div className="lg:hidden">
        <Sheet >
          <SheetTrigger asChild>
            <Button size="icon" variant="outline"  >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            <HeaderContent status={status} data={data} handleLoginClick={handleLoginClick} handleLogoutClick={handleLogoutClick} />
          </SheetContent>
        </Sheet>
      </div>
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <div className=" hidden  lg:flex">
        <HeaderContent status={status} data={data} handleLoginClick={handleLoginClick} handleLogoutClick={handleLogoutClick} />
      </div >

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
      
    </Card>
  );
};
export default Header;