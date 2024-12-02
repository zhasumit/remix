import type { MetaFunction } from "@remix-run/node";
import Banner from "~/components/banner";

export const meta: MetaFunction = () => {
  return [
    { title: "Sumit Kr. Jha" },
    { name: "description", content: "I am sumit, an aspiring full-stack dev with knack of building stuff, learn new stuff." },
  ];
};

export default function Index() {
  return (
    <>
      <Banner />
    </>
  );
}

