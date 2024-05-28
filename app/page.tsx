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
        {/* Bio */}
        <div className="flex flex-col gap-y-4">
          <Profile />
          <p className="text-muted-foreground text-xs md:text-sm">
            I'm a software engineer based in{" "}
            <span className="text-foreground font-medium">Indonesia</span>. I'm
            passionate about creating software that is simple, delightful to
            use, and easy to maintain. Currently{" "}
            <span className="text-foreground font-medium italic">
              tinkering
            </span>{" "}
            with my final assignment and side-projects.
          </p>
        </div>
        {/* Links */}
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
            link="https://msaf-compactfolio.vercel.app"
          />
          <Separator
            leftItem="macintosh"
            rightItem="get this template"
            variant="primary"
            animated
            textName="group-hover:text-primary"
            borderName="bg-primary"
            link="https://msaf-macintosh.vercel.app"
          />
          <Separator
            leftItem="@msafdev"
            rightItem="github.com"
            variant="primary"
            animated
            textName="group-hover:text-fuchsia-400"
            borderName="bg-fuchsia-400"
            link="https://github.com/msafdev"
          />
          <Separator
            leftItem="resume.pdf"
            rightItem="gdrive"
            variant="primary"
            animated
            textName="group-hover:text-green-400"
            borderName="bg-green-400"
            link="https://drive.google.com/file/d/1mCvY4uWDmKjsaQEBkDzQZC4bc-AkZHPK/view?usp=sharing"
          />
        </div>
        {/* Projects */}
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
                href={"https://msaf-macintosh.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
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
                href={"https://nextbase-demo.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium text-center text-xs md:text-sm"
              >
                Nextbase <ArrowUp size={14} className="inline rotate-45" />
              </Link>
            </div>
          </div>
        </div>
        {/* Stack */}
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator leftItem="03" rightItem="stack" className="mb-2" />
          <Separator leftItem="figma" rightItem="design" variant="primary" />
          <Separator
            leftItem="next.js"
            rightItem="frontend"
            variant="primary"
          />
          <Separator leftItem="nest" rightItem="backend" variant="primary" />
          <Separator leftItem="typescript" rightItem="lang" variant="primary" />
          <Separator leftItem="hygraph" rightItem="cms" variant="primary" />
          <Separator
            leftItem="supabase"
            rightItem="database"
            variant="primary"
          />
        </div>
        {/* Todos */}
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator leftItem="to do" rightItem="2024" className="mb-2" />
          <Separator
            leftItem="finish tomodoro"
            rightItem="in progress"
            variant="primary"
          />
          <Separator
            leftItem="reach 100 stars"
            rightItem="in progress"
            variant="primary"
          />
          <Separator
            leftItem="ship 10 stuff"
            rightItem="in progress"
            variant="primary"
          />
          <Separator leftItem="launch compactfolio" rightItem="done" />
          <Separator leftItem="launch macintosh" rightItem="done" />
        </div>
        {/* Footer */}
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator leftItem="footer" className="mb-2" />
          <ThemeToggle>
            <Separator
              leftItem="switch theme"
              rightItem="click me!"
              variant="primary"
              animated
              textName="group-hover:text-primary"
              borderName="bg-primary"
            />
          </ThemeToggle>
          <Separator
            leftItem="29 may, 2024"
            rightItem="latest update"
            variant="primary"
          />
          <Separator leftItem="v1.02" rightItem="version" variant="primary" />
          <Separator leftItem="© 2024 msafdev" rightItem="with love" />
        </div>
      </div>
    </main>
  );
}
