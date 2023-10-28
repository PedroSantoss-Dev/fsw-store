import {
    HomeIcon,
    ListOrderedIcon,
    LogInIcon,
    LogOutIcon,
    PercentIcon,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";

interface HeaderContentProps {
    status: "authenticated" | "loading" | "unauthenticated"
    data: Session | null
    handleLoginClick: () => Promise<void>
    handleLogoutClick: () => Promise<void>
}
const HeaderContent = ({ status, data, handleLoginClick, handleLogoutClick }: HeaderContentProps) => {
    return (
        <nav className=" flex flex-col gap-2 lg:flex-row">
            {status === "authenticated" && data?.user && (
                <div className="flex flex-col  h-full gap-12 lg:flex" >
                    <div className="flex items-center gap-2 py-4">
                        <Avatar className=" rounded-full">
                            <AvatarFallback>
                                {data.user.name?.[0].toUpperCase()}
                            </AvatarFallback>

                            {data.user.image && <AvatarImage src={data.user.image} />}
                        </Avatar>

                        <div className="flex flex-col">
                            <p className="font-medium">{data.user.name}</p>
                            <p className="text-sm opacity-75">Boas compras!</p>
                        </div>
                    </div>

                    <Separator  className=" lg:hidden" />
                </div>
            )}

            <div className="mt-4 flex flex-col gap-2 lg:flex-row">
                <Button variant="outline" className="w-full justify-start gap-2 lg:border-0 ">
                    <HomeIcon size={16} />
                    Início
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 lg:border-0 ">
                    <PercentIcon size={16} />
                    Ofertas
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 lg:border-0 ">
                    <ListOrderedIcon size={16} />
                    Catálogo
                </Button>
                {status === "unauthenticated" && (
                    <Button
                        onClick={handleLoginClick}
                        variant="outline"
                        className="w-full justify-start gap-2 "
                    >
                        <LogInIcon size={16} />
                        Fazer Login
                    </Button>
                )}

                {status === "authenticated" && (
                    <Button
                        onClick={handleLogoutClick}
                        variant="outline"
                        className="w-full justify-start gap-2"
                    >
                        <LogOutIcon size={16} />
                        Fazer Logout
                    </Button>
                )}
            </div>
        </nav>
    );
}

export default HeaderContent;