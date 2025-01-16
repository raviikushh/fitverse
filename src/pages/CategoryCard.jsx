import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IoIosStar } from "react-icons/io";
import { Button } from "@/components/ui/button"


export const CategoryCard = () => {
    return (
        <div className="mt-12 bg-black/90 text-white py-12" id="register">
            <div className="header flex justify-center items-center flex-col px-6 ">
                <h1 className="text-3xl font-semibold">Categories</h1>
                <h2 className="text-slate-500">Choose the category that matches your cycling expertise and endurance level</h2>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 py-4 px-8 md:px-12 ">

                                    {/* Card 1 */}
            <Card className='bg-gray-800/50 text-white hover:scale-105 transform transition-transform duration-300 px-4'>
                <CardHeader>
                    <CardTitle className='text-orange-600 text-2xl'>Elite - 100KM</CardTitle>
                    <CardTitle className='text-white text-3xl'>₹1999</CardTitle>
                    <CardDescription>Early bird price</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Professional timing chip</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Premium cycling jersey</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Elite finisher medal</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Prize money eligibility</h2>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className='w-full bg-orange-600'>Register</Button>
                </CardFooter>
            </Card>
                            {/* Card 2 */}

            <Card className='bg-gray-800/50 text-white hover:scale-105 transform transition-transform duration-300 px-4'>
                <CardHeader>
                    <CardTitle className='text-orange-600 text-2xl'>Amateur - 50KM</CardTitle>
                    <CardTitle className='text-white text-3xl'>₹1499</CardTitle>
                    <CardDescription>Early bird price</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Professional timing chip</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Premium cycling jersey</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Elite finisher medal</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Prize money eligibility</h2>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className='w-full bg-orange-600'>Register</Button>
                </CardFooter>
            </Card>
                            {/* card 3 */}

            <Card className='bg-gray-800/50 text-white hover:scale-105 transform transition-transform duration-300 px-4'>
                <CardHeader>
                    <CardTitle className='text-orange-600 text-2xl'>Fun Ride - 25KM</CardTitle>
                    <CardTitle className='text-white text-3xl'>₹999</CardTitle>
                    <CardDescription>Early bird price</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Professional timing chip</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Premium cycling jersey</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Elite finisher medal</h2>
                    </div>
                    <div className="c1 flex gap-2 items-center">
                    <IoIosStar className='text-orange-600 text-xl ' />
                    <h2 className="text-lg">Prize money eligibility</h2>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className='w-full bg-orange-600'>Register</Button>
                </CardFooter>
            </Card>
            </div>

        </div>
    )
}
