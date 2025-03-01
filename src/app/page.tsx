import { CoursesCategories } from "@/components/courses-categoies";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <main className="max-w-7xl m-auto px-2 lg:px-0 font-bold">
      <Hero />
      <CoursesCategories />
    </main>
  );
}
