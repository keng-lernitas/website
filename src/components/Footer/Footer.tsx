import { cn } from "../../lib/utils";

export const Twitter = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 271"
      className={className}
    >
      <path
        fill="currentColor"
        d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6zm-16.1 244h25.5L80.4 26H53z"
      />
    </svg>
  );
};

export const Telegram = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      className={className}
    >
      <defs>
        <linearGradient
          id="a"
          x1={120}
          x2={120}
          y1={240}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="currentColor" />
          <stop offset={1} stopColor="currentColor" />
        </linearGradient>
      </defs>
      <circle cx={120} cy={120} r={120} fill="url(#a)" />
      <path
        fill="currentColor"
        d="m81.229 128.772 14.237 39.406s1.78 3.687 3.686 3.687 30.255-29.492 30.255-29.492l31.525-60.89L81.737 118.6Z"
      />
      <path
        fill="black"
        d="m100.106 138.878-2.733 29.046s-1.144 8.9 7.754 0 17.415-15.763 17.415-15.763"
      />
      <path
        fill="black"
        d="M81.486 130.178 52.2 120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229 2.1-2.2 6.489-4.523 120.106-45.36 120.106-45.36s3.208-1.081 5.1-.362a2.766 2.766 0 0 1 1.885 2.055 9.357 9.357 0 0 1 .254 2.585c-.009.752-.1 1.449-.169 2.542-.692 11.165-21.4 94.493-21.4 94.493s-1.239 4.876-5.678 5.043a8.13 8.13 0 0 1-5.925-2.292c-8.711-7.493-38.819-27.727-45.472-32.177a1.27 1.27 0 0 1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6 53.821-51.492c.108-.379-.3-.566-.848-.4-3.482 1.281-63.844 39.4-70.506 43.607a3.21 3.21 0 0 1-1.48.09Z"
      />
    </svg>
  );
};

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={cn("", className)}>
      <div className="grid grid-cols-4">
        <div className="col-span-2 col-start-2 flex flex-col items-center justify-center space-y-[1%]">
          <p className="font-MonaSans font-medium text-neutral-200">
            info@kenglernitas.wtf
          </p>
          <div className="flex items-center justify-center gap-x-[20%]">
            {/* <a
              href="https://twitter.com/KengLernitas"
              target="_blank"
              className="transition hover:brightness-50"
            >
              <Twitter className="size-5 text-neutral-200" />
            </a> */}
            <a
              href="https://t.me/Keng_Lernitas"
              target="_blank"
              className="transition hover:brightness-50"
            >
              <Telegram className="size-5 text-neutral-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
