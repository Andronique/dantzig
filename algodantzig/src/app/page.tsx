import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Importing the arrow icon from Lucide React

export default function Home() {
  return (
    <div
      className="min-h-screen font-[family-name:var(--font-geist-sans)]" // Beige background color (adjust shade as needed)
    >
      <div className="flex items-center flex-col justify-center h-screen text-center">
        <h1
          className="font-[family-name:var(--font-geist-sans)] px-4 py-2 text-4xl font-extrabold" >
          Algorithme de Dantzig :<br /> Maximisation et  Minimisation
        </h1>
        <Link href="/home">
          <Button className="cursor-pointer">
            Commençons maintenant <ArrowRight className="ml-2 inline-block" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
}