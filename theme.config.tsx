
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import TawnCodeLogo from '@/components/tawncode-logo';
const config: DocsThemeConfig = {
  logo: (
    <span className=" inline-flex gap-2.5 items-center">
      <TawnCodeLogo className="  text-default-900 h-8 w-8 [&>path:nth-child(3)]:text-background [&>path:nth-child(2)]:text-background" />
      <span className="  text-lg font-bold text-default ">TawnCode</span>
    </span>
  ),
  project: {
    link: "https://github.com/shuding/nextra",
  },
  banner: {
    key: "1.0-release",
    text: (
      <a href="/dashboard" target="_blank">
        🎉 TawnCode
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://codewithsyed.com/" target="_blank">
          codewithSyed
        </a>
        .
      </span>
    ),
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System', // Add this line
      };
    },
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – TawnCode",
    };
  },
};

export default config