import { Button } from '@/components/ui/button';

const MainPage = () => {
    return (
        <div>
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl font-bold">Cycling Events</h1>
            </header>
            <main className="p-6">
                <section className="mb-8">
                    <h2 className="text-xl font-semibold">Upcoming Events</h2>
                    <div className="mt-4">
                        <a href="/#/event"><Button className="bg-green-500 hover:bg-green-600">View Event</Button></a>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 text-white text-center py-4">
                © 2025 Cycling Events
            </footer>
        </div>
    );
};

export default MainPage;