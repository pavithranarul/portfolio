import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import InteractiveBackground from "@/components/InteractiveBackground";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Pavithran Arul — Python Developer at Mittai INC",
  description:
    "Pavithran Arul, Python developer at Mittai INC working on CareScribe. Explore his experience, personal GitHub projects, technical skills and education.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('portfolio-theme');var preferred=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=(saved==='light'||saved==='dark')?saved:preferred;}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <InteractiveBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
