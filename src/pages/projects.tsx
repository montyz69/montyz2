import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className=" flex flex-wrap justify-center items-center gap-10">
        <Card className="bg-transparent w-72 h-64">
          <CardHeader>
            <CardTitle className="text-white text-xl">URL SHORTNER</CardTitle>
            <CardDescription className="text-sm text-white mt-2">
              Get rid of long URLs for free
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-transparent">
              <a
                href="https://shortit-gules.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white underline"
              >
                Live Demo
              </a>
            </Button>
          </CardContent>
          <CardFooter>
            <a
              href="https://github.com/montyz69/shortit-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white underline"
            >
              <IconBrandGithub className="text-white-500 dark:text-neutral-400" />
            </a>
          </CardFooter>
        </Card>

        <Card className="bg-transparent w-72 h-64">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              Online Clipboard
            </CardTitle>
            <CardDescription className="text-sm text-white mt-2">
              Copy thru Browsers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-transparent">
              <a
                href="https://online-clipboard-fe.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white underline"
              >
                Live Demo
              </a>
            </Button>
          </CardContent>
          <CardFooter>
            <a
              href="https://github.com/montyz69/montyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white underline"
            >
              <IconBrandGithub className="text-white-500 dark:text-neutral-400" />
            </a>
          </CardFooter>
        </Card>

        <Card className="bg-transparent w-72 h-64">
          <CardHeader>
            <CardTitle className="text-white text-xl">Portfolio</CardTitle>
            <CardDescription className="text-sm text-white mt-4 align-items items-center">
              <img
                className="items-center"
                src="public/another-one.png"
                width={40}
                height={40}
                alt="Aceternity Logo"
              />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-transparent">
              <a
                href="https://montyz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white underline"
              >
                Live Demo
              </a>
            </Button>
          </CardContent>
          <CardFooter>
            <a
              href="https://github.com/montyz69/montyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white underline"
            >
              <IconBrandGithub className="text-white-500 dark:text-neutral-400" />
            </a>
          </CardFooter>
        </Card>
        <Card className="bg-transparent w-72 h-64">
          <CardHeader>
            <CardTitle className="text-white text-xl">Solana Wallet</CardTitle>
            <CardDescription className="text-sm text-white mt-6">
              Crypto Wallet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-transparent">
              <a
                href="https://solana-wallet-phi-virid.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white underline"
              >
                Live Demo
              </a>
            </Button>
          </CardContent>
          <CardFooter>
            <a
              href="https://github.com/montyz69/solana-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white underline"
            >
              <IconBrandGithub className="text-white-500 dark:text-neutral-400" />
            </a>
          </CardFooter>
        </Card>
      </div>
      <div className="m-5 flex flex-wrap justify-center items-center gap-10">
         <Card className="bg-transparent w-72 h-64">
          <CardHeader>
            <CardTitle className="text-white text-xl">Portfolio 2</CardTitle>
            <CardDescription className="text-sm text-white mt-4">
              this one
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white underline"
              >
                Live Demo
              </a>
            </Button>
          </CardContent>
          <CardFooter>
            <a
              href="https://github.com/montyz69/montyz2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white underline"
            >
              <IconBrandGithub className="text-white-500 dark:text-neutral-400" />

            </a>
          </CardFooter>
        </Card>
        <Card className="bg-transparent w-72 h-64">
          <CardHeader>
            <CardTitle className="text-white text-xl">Doc Finder</CardTitle>
            <CardDescription className="text-sm text-white mt-2">
              Find the content
            </CardDescription>
          </CardHeader>
          <CardContent>Live coming soon...</CardContent>
          <CardFooter>
            <div className="flex flex-wrap justify-center items-center gap-2">
              <a
                href="https://github.com/montyz69/cathago-project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white underline"
              >
                <IconBrandGithub className="text-white-500 dark:text-neutral-400" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=BprCBUsasSY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white underline"
              >
                <IconBrandYoutube className="text-white-500 dark:text-neutral-400" />
              </a>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-transparent w-72 h-64">
          <CardHeader>
            <CardTitle className="text-white text-x">
              Photo Matching
            </CardTitle>
            <CardDescription className="text-sm text-white mt-1">
              checks for similarity
            </CardDescription>
          </CardHeader>
          <CardContent>
            Live Coming Soon...
          </CardContent>
          <CardFooter>
            <a
              href="https://github.com/montyz69/capstone"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white underline"
            >
              <IconBrandGithub className="text-white-500 dark:text-neutral-400" />

            </a>
          </CardFooter>
        </Card>

        <Card className="bg-transparent w-72 h-64">
          <CardHeader>
            <CardTitle className="text-white text-xl"></CardTitle>
            <CardDescription className="text-sm text-white mt-4">
             building...
            </CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter>
           
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
