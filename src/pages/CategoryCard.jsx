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

export const CategoryCard = () => {
    return (
        <div className="mt-12 bg-blue-100 text-blue-900 py-12" id="register">
            <div className="header flex justify-center items-center flex-col px-6">
                <h1 className="text-3xl font-semibold">Categories</h1>
                <h2 className="text-blue-700">
                    Choose the category that matches your cycling expertise and endurance level
                </h2>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 py-4 px-8 md:px-12">
                {/* Card 1 */}
                <Card className="bg-white text-blue-900 hover:scale-105 transform transition-transform duration-300 px-4 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-blue-600 text-2xl">Elite - 100KM</CardTitle>
                        <CardTitle className="text-blue-900 text-3xl">₹1999</CardTitle>
                        <CardDescription>Early bird price</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {["Professional timing chip", "Premium cycling jersey", "Elite finisher medal", "Prize money eligibility"].map((item, idx) => (
                            <div key={idx} className="c1 flex gap-2 items-center">
                                <IoIosStar className="text-blue-600 text-xl" />
                                <h2 className="text-lg">{item}</h2>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-800">
                            Register
                        </Button>
                    </CardFooter>
                </Card>

                {/* Card 2 */}
                <Card className="bg-white text-blue-900 hover:scale-105 transform transition-transform duration-300 px-4 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-blue-600 text-2xl">Amateur - 50KM</CardTitle>
                        <CardTitle className="text-blue-900 text-3xl">₹1499</CardTitle>
                        <CardDescription>Early bird price</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {["Professional timing chip", "Premium cycling jersey", "Elite finisher medal", "Prize money eligibility"].map((item, idx) => (
                            <div key={idx} className="c1 flex gap-2 items-center">
                                <IoIosStar className="text-blue-600 text-xl" />
                                <h2 className="text-lg">{item}</h2>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-800">
                            Register
                        </Button>
                    </CardFooter>
                </Card>

                {/* Card 3 */}
                <Card className="bg-white text-blue-900 hover:scale-105 transform transition-transform duration-300 px-4 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-blue-600 text-2xl">Fun Ride - 25KM</CardTitle>
                        <CardTitle className="text-blue-900 text-3xl">₹999</CardTitle>
                        <CardDescription>Early bird price</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {["Professional timing chip", "Premium cycling jersey", "Elite finisher medal", "Prize money eligibility"].map((item, idx) => (
                            <div key={idx} className="c1 flex gap-2 items-center">
                                <IoIosStar className="text-blue-600 text-xl" />
                                <h2 className="text-lg">{item}</h2>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-800">
                            Register
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
