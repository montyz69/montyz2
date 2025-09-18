import { FloatingDock } from "@/components/ui/floating-dock";
import {

  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconPick,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-white-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Experience",
      icon: (
        <IconPick className="h-full w-full text-white-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-white-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/manthansonawane/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/montyz69",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/ManthanSonawan5",
    },
    
    
  ];
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        mobileClassName="translate-y-20 bg-transparent"
        items={links}
        desktopClassName="bg-transparent"
      />
    </div>
  );
}
