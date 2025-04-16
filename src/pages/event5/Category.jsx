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

export const Category = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-12 bg-green-100 text-green-900 py-12" id="register">
            <div className="header flex justify-center items-center flex-col px-6">
                <h1 className="text-3xl font-semibold">Categories</h1>
                <h2 className="text-green-700">
                    Choose the category that matches your running expertise and endurance level
                </h2>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 py-4 px-8 md:px-12">
           

                {/* Card 2 */}
                <Card className="bg-white text-green-900 hover:scale-105 transform transition-transform duration-300 px-4 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-green-600 text-2xl">10 KM</CardTitle>
                        <CardTitle className="text-green-900 text-3xl">₹399 <span className="text-sm text-red-600">+2% charges</span></CardTitle>
                        <CardDescription>Early bird price</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {["T-Shirt", "Medal for all participants", "Certificates","Refreshments"].map((item, idx) => (
                            <div key={idx} className="c1 flex gap-2 items-center">
                                <IoIosStar className="text-green-600 text-xl" />
                                <h2 className="text-lg">{item}</h2>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-green-600 text-white hover:bg-green-800" onClick={() => navigate("/register5", { state: { category: "10KM ₹399" } })}>
                            Register
                        </Button>
                    </CardFooter>
                </Card>

                {/* Card 3 */}
                <Card className="bg-white text-green-900 hover:scale-105 transform transition-transform duration-300 px-4 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-green-600 text-2xl">5 KM</CardTitle>
                        <CardTitle className="text-green-900 text-3xl">₹299 <span className="text-sm text-red-600">+2% charges</span></CardTitle>
                        <CardDescription>Early bird price</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {["T-Shirt", "Medal for all participants", "Certificates","Refreshments"].map((item, idx) => (
                            <div key={idx} className="c1 flex gap-2 items-center">
                                <IoIosStar className="text-green-600 text-xl" />
                                <h2 className="text-lg">{item}</h2>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-green-600 text-white hover:bg-green-800" onClick={() => navigate("/register5", { state: { category: "5KM ₹299" } })}>
                            Register
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
