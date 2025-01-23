import Footer from "./Footer";
import MainPageNav from "./MainPageNav";

const About = () => {
  return (
    <>
    <MainPageNav />
    <main className="bg-gray-100 min-h-screen py-12 px-6 mt-20">
      <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center py-10">
          <h1 className="text-4xl font-bold mb-4">About Active Forever</h1>
          <p className="text-lg">Inspiring Fitness, Empowering Lives</p>
        </div>
        <div className="p-8 md:p-12">
          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            Active Forever is a lifestyle-oriented organization dedicated to enhancing lives through a diverse range of fitness, cultural, artistic, creative, and wellness programs. Founded by <span className="font-semibold">Sushanto</span> and <span className="font-semibold">Aparajita</span>, we are committed to fostering a community that embraces holistic well-being and personal growth.
          </p>
          <h2 className="text-2xl font-bold text-green-600 mb-4">Our Mission</h2>
          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            At Active Forever, our mission is to inspire and empower individuals to lead healthier, more fulfilling lives. We believe in the transformative power of engaging in activities that nurture the body, mind, and spirit.
          </p>
          <h2 className="text-2xl font-bold text-green-600 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><span className="font-semibold">Fitness Programs:</span> From yoga sessions to high-intensity interval training, our fitness programs cater to all levels, promoting physical health and vitality.</li>
            <li><span className="font-semibold">Cultural Events:</span> We celebrate diversity through cultural events that bring communities together, fostering understanding and appreciation.</li>
            <li><span className="font-semibold">Artistic & Creative Workshops:</span> Our workshops encourage creative expression, providing a platform for individuals to explore and develop their artistic talents.</li>
            <li><span className="font-semibold">Wellness Initiatives:</span> Focusing on mental and emotional well-being, our wellness programs include meditation, mindfulness, and holistic health practices.</li>
          </ul>
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Join Us</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Embark on a journey of self-discovery and wellness with Active Forever. Whether you're looking to get fit, connect with like-minded individuals, or explore new creative outlets, we have something for everyone.
            </p>
            <p className="text-gray-800 text-lg font-semibold">Together, let's build a vibrant community committed to living life to the fullest.</p>
          </div>
        </div>
      </section>
    </main>
      <Footer />
      </>
  );
};

export default About;
