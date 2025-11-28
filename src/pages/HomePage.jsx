import { Link } from "react-router";
import Header from "../components/Header";
import hunter from "../assets/hunter.webp";
import students from "../assets/students.webp";

const cards = [
  { name: "All Campuses", image: hunter, path: "/campuses" },
  { name: "All Students", image: students, path: "/students" },
];

const HomePage = () => {
  return (
    <main className="h-screen mx-auto flex flex-col items-center bg-background">
      <Header />

      <div className="h-full w-full max-w-[1400px] px-4 py-6 text-text flex gap-12 justify-center items-center">
        {cards.map((card) => (
          <Link
            key={card.name}
            to={card.path}
            className="relative w-1/2 h-[350px] rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            />

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-background/40 group-hover:bg-primary/50 transition-colors duration-300" />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-text text-4xl font-bold drop-shadow-lg group-hover:text-background">
                {card.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
