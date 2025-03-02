import { CoursesCategories } from "@/components/courses-categoies";
import FeaturedCourses from "@/components/featured-courses";
import { Hero } from "@/components/hero";
import UserFeedback from "@/components/user-feedback";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main className="max-w-7xl m-auto px-2 lg:px-0 font-bold">
      <Hero />
      <CoursesCategories />
      <WhyChooseUs />
      <UserFeedback />
      <FeaturedCourses />
    </main>
  );
}
