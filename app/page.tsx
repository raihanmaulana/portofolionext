import Profile from "@/components/component/profile";
import Separator from "@/components/component/separator";
import ThemeToggle from "@/components/component/theme-toggle";

import SIKPB from "@/public/SIKPB.png";
import Blank from "@/public/blank.jpg";
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
          rightItem="raihanmaulana"
          animated
          link=""
          textName="group-hover:text-primary"
          borderName="bg-primary"
        />
        {/* Bio */}
        <div className="flex flex-col gap-y-4">
          <Profile />
          <p
            className="text-muted-foreground text-xs md:text-sm"
            style={{ textAlign: "justify" }}
          >
            As a dedicated software engineer based in{" "}
            <span className="text-foreground font-medium">Indonesia</span>, I am
            passionate about crafting software solutions that are not only
            functional but also intuitive and enjoyable to use. My focus is on
            creating applications that are simple, maintainable, and delight
            users with their seamless experiences. Currently, I am channeling my
            energy into various side-projects, continually exploring new
            technologies and methodologies to refine my skills and deliver
            exceptional results.
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
            leftItem="profile"
            rightItem="linkedin"
            variant="primary"
            animated
            textName="group-hover:text-primary"
            borderName="bg-primary"
            link="https://www.linkedin.com/in/raihanmaulana/"
          />
          <Separator
            leftItem="@raihanmaulana"
            rightItem="github.com"
            variant="primary"
            animated
            textName="group-hover:text-fuchsia-400"
            borderName="bg-fuchsia-400"
            link="https://github.com/raihanmaulana"
          />
          <Separator
            leftItem="resume.pdf"
            rightItem="gdrive"
            variant="primary"
            animated
            textName="group-hover:text-green-400"
            borderName="bg-green-400"
            link="https://drive.google.com/file/d/1jkVaFygszqF77HEC6jEJ2pfnr4ojvhdV/view?usp=sharing"
          />
        </div>
        {/* Projects */}
        <div className="flex flex-col gap-y-2 w-full">
          <Separator leftItem="02" rightItem="work stuff" className="mb-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-4">
            <div className="flex flex-col gap-y-1.5">
              <Image
                src={SIKPB}
                alt="macfolio"
                className="border-2 rounded-2xl bg-accent p-4 object-scale-down aspect-[4/3]"
              />
              <Link
                href={"https://yasawaskitha.site"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium text-center text-xs md:text-sm"
              >
                SIPKB <ArrowUp size={14} className="inline rotate-45" />
              </Link>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <Image
                src={Blank}
                alt="macfolio"
                className="border-2 rounded-2xl bg-accent p-4 object-scale-down aspect-[4/3]"
              />
              <Link
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium text-center text-xs md:text-sm"
              >
                Coming Soon Projects{" "}
                <ArrowUp size={14} className="inline rotate-45" />
              </Link>
            </div>
            {/* <div className="flex flex-col gap-y-1.5">
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
            </div> */}
          </div>
        </div>
        {/* Stack */}
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator leftItem="03" rightItem="stack" className="mb-2" />
          <Separator
            leftItem="adobe photoshop"
            rightItem="design"
            variant="primary"
          />
          <Separator
            leftItem="next.js,react.js"
            rightItem="frontend"
            variant="primary"
          />
          <Separator leftItem="laravel" rightItem="backend" variant="primary" />
          <Separator leftItem="typescript" rightItem="lang" variant="primary" />
          {/* <Separator leftItem="hygraph" rightItem="cms" variant="primary" /> */}
          <Separator leftItem="mysql" rightItem="database" variant="primary" />
        </div>
        {/* Todos */}
        <div className="flex flex-col gap-y-1.5 w-full">
          <Separator leftItem="to do" rightItem="2024" className="mb-2" />
          <Separator
            leftItem="more projects"
            rightItem="in progress"
            variant="primary"
          />
          <Separator
            leftItem="focus learning more about fullstack"
            rightItem="in progress"
            variant="primary"
          />
          {/* <Separator
            leftItem="ship 10 stuff"
            rightItem="in progress"
            variant="primary"
          /> */}
          <Separator leftItem="finish my college" rightItem="done" />
          <Separator leftItem="get my first salary" rightItem="done" />
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
          <Separator leftItem="© 2024 raihanmaulana" rightItem="with love" />
        </div>
      </div>
    </main>
  );
}
