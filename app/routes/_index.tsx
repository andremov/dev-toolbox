import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Toolbox from "~/components/toolbox";

export const meta: MetaFunction = () => {
  return [
    { title: "Dev Toolbox" },
    { name: "description", content: "👤✏️ Andrés Movilla" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center flex-col">
      <Header />
      <Toolbox />
    </div>
  );
}
