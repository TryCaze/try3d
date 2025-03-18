import { DarkThemeToggle } from "flowbite-react";
import Header from "./components/ui/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Commisions from "./components/commisions";
import Lectures from "./components/lectures";
import Courses from "./components/courses";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Commisions />
      <Lectures />
      <Courses />
    </main>
  );
}
