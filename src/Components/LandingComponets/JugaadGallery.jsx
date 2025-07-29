const samples = [
  {
    title: "📱 Spoon Stand Hack",
    desc: "Use a spoon to prop your phone while watching reels.",
  },
  {
    title: "🚿 Shower Bottle Jugaad",
    desc: "Create a mini shower using a pierced water bottle cap.",
  },
  {
    title: "🧦 AC Airflow Hack",
    desc: "Hang a sock filled with ice in front of a fan. Desi AC ready!",
  },
];

const JugaadGallery = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-yellow-100 py-16 px-6">
      <h2 className="text-3xl text-center font-bold text-orange-900 mb-10">Popular Jugaads</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {samples.map((jugaad, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:bg-orange-50 transition">
            <h3 className="text-xl font-semibold text-orange-700">{jugaad.title}</h3>
            <p className="mt-2 text-gray-700">{jugaad.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JugaadGallery;

