import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosStar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CategoryCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mt-12 bg-fitverse-dark text-white py-12"
      id="register"
    >
      {/* Header */}
      <div className="header flex justify-center items-center flex-col px-6 text-center">
        <h1 className="text-3xl font-bold text-orange-500">Categories</h1>
        <h2 className="text-orange-300 mt-2 max-w-2xl">
          Choose the category that matches your cycling expertise and endurance
          level
        </h2>
      </div>

      {/* Cards */}
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 py-4 px-8 md:px-12">
        {/* Card Template */}
        {[
          { title: "21 KM", price: "₹500" },
          { title: "10 KM", price: "₹500" },
          { title: "5 KM", price: "₹500" },
        ].map((cat, idx) => (
          <Card
            key={idx}
            className="bg-black/60 text-white hover:scale-105 transform transition-transform duration-300 px-4 shadow-lg border border-orange-500/30"
          >
            <CardHeader>
              <CardTitle className="text-orange-400 text-2xl">
                {cat.title}
              </CardTitle>
              <CardTitle className="text-orange-500 text-3xl">
                {cat.price}
              </CardTitle>
              <CardDescription className="text-gray-300">
                Early bird price
              </CardDescription>
            </CardHeader>

            <CardContent>
              {[
                "Premium cycling jersey",
                "Elite finisher medal",
                "Certificate",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <IoIosStar className="text-orange-400 text-xl" />
                  <h2 className="text-lg text-gray-200">{item}</h2>
                </div>
              ))}
            </CardContent>

            <CardFooter>
              <Button
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
                onClick={() =>
                  navigate("/register", {
                    state: { category: `${cat.title} ${cat.price}` },
                  })
                }
              >
                Register
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
