import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TawnCode Next Js",
  description: "TawnCode is a popular dashboard template.",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
