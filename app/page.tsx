import Profile from "@/components/component/profile";
import Separator from "@/components/component/separator";
import ThemeToggle from "@/components/component/theme-toggle";

import Macintosh from "@/public/macintosh.webp";
import Nextbase from "@/public/nextbase.webp";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-6 px-6">
      <div className="flex flex-col max-w-xl w-full h-auto grow gap-y-8 md:gap-y-12">
        <Separator
          leftItem="based in 🇮🇩"
          rightItem="msaf.tech"
          animated
          link="msaf.tech"
          textName="group-hover:text-primary"
          borderName="bg-primary"
        />
        <div className="flex flex-col gap-y-4">
          <Profile />
          <p className="text-muted-foreground text-xs md:text-sm">
            I'm a software engineer based in{" "}
            <span className="text-foreground font-medium">Indonesia</span>. I'm
            passionate about creating software that is delightful to use and
            easy to maintain. Currently{" "}
            <span className="text-foreground font-medium italic">
              tinkering
            </span>{" "}
            with my final assignment and side-projects.
          </p>
        </div>
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator
            leftItem="01"
            rightItem="important things"
            className="mb-2"
          />
          <Separator
            leftItem="compactfolio"
            rightItem="get this template"
            variant="primary"
            animated
            textName="group-hover:text-indigo-400"
            borderName="bg-indigo-500"
          />
          <Separator
            leftItem="macintosh"
            rightItem="get this template"
            variant="primary"
            animated
            textName="group-hover:text-primary"
            borderName="bg-primary"
          />
          <Separator
            leftItem="@msafdev"
            rightItem="github.com"
            variant="primary"
            animated
            textName="group-hover:text-fuchsia-400"
            borderName="bg-fuchsia-400"
          />
          <Separator
            leftItem="resume.pdf"
            rightItem="gdrive"
            variant="primary"
            animated
            textName="group-hover:text-green-400"
            borderName="bg-green-400"
          />
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <Separator leftItem="02" rightItem="work stuff" className="mb-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-4">
            <div className="flex flex-col gap-y-1.5">
              <Image
                src={Macintosh}
                alt="macintosh"
                className="border-2 rounded-2xl bg-accent p-4 object-scale-down aspect-[4/3]"
              />
              <Link
                href={"/"}
                className="text-foreground font-medium text-center text-xs md:text-sm"
              >
                Macintosh <ArrowUp size={14} className="inline rotate-45" />
              </Link>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <Image
                src={Nextbase}
                alt="nextbase"
                className="border-2 rounded-2xl bg-accent p-4 object-scale-down aspect-[4/3]"
              />
              <Link
                href={"/"}
                className="text-foreground font-medium text-center text-xs md:text-sm"
              >
                Nextbase <ArrowUp size={14} className="inline rotate-45" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator leftItem="03" rightItem="stack" className="mb-2" />
          <Separator leftItem="figma" rightItem="design" variant="primary" />
          <Separator
            leftItem="next.js"
            rightItem="frontend"
            variant="primary"
          />
          <Separator leftItem="nest" rightItem="backend" variant="primary" />
          <Separator leftItem="gql" rightItem="cms" variant="primary" />
          <Separator
            leftItem="supabase"
            rightItem="database"
            variant="primary"
          />
        </div>
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator leftItem="to do" rightItem="2024" className="mb-2" />
          <Separator
            leftItem="finish my studio"
            rightItem="in progress"
            variant="primary"
          />
          <Separator
            leftItem="learn go"
            rightItem="in progress"
            variant="primary"
          />
          <Separator
            leftItem="ship more stuff"
            rightItem="in progress"
            variant="primary"
          />
          <Separator leftItem="launch compactfolio" rightItem="done" />
          <Separator leftItem="launch macintosh" rightItem="done" />
        </div>
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator leftItem="04" rightItem="footer" className="mb-2" />
          <ThemeToggle>
            <Separator leftItem="switch theme" rightItem="click me!" variant="primary"/>
          </ThemeToggle>
          <Separator leftItem="28 may, 2024" rightItem="latest update" variant="primary"/>
          <Separator leftItem="v1.01" rightItem="version" variant="primary"/>
          <Separator leftItem="© 2024 msafdev" rightItem="with love"/>
        </div>
      </div>
    </main>
  );
}
