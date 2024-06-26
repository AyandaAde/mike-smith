"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function DarkModeButton() {
    const { setTheme } = useTheme();

    return (
        <div>
            <Button
                onClick={() => setTheme("dark")}
                variant="ghost"
                size="icon"
                className="block dark:hidden"
            >
                <SunIcon
                    className="h-[1.2rem] w-[1.2rem] m-auto"
                />
            </Button>
            <Button
                onClick={() => setTheme("light")}
                variant="ghost"
                size="icon"
                className="relative top-0 hidden dark:block"
            >
                <MoonIcon
                    className="h-[1.2rem] w-[1.2rem] m-auto"
                />
            </Button>
        </div>
    )
}
