const features = [
  { title: "🔥 Viral Jugaads", desc: "Trending jugaads from every corner of India." },
  { title: "🎯 Smart Filters", desc: "Search by region, category, or difficulty instantly." },
  { title: "💡 Unique Tips", desc: "Hacks you've never seen before." },
  { title: "🚀 Fast & Lite", desc: "No clutter. Pure performance." },
];

const Features = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-orange-800 mb-10">App Features</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div key={i} className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2 text-orange-700">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
