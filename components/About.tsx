function About() {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-brand pl-4">
        About Me
      </h2>

      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
        <p>
          My name is Diana Chukhrai. I am a student at HackYourFuture, cohort
          c55, where I am learning front-end web development. I moved to the
          Netherlands to start a new chapter in my career and life.
        </p>
        <p>
          Alongside my studies, I work as a Paid Social Specialist — I create
          and manage advertising campaigns for brands on platforms like Facebook
          and Instagram.
        </p>
        <p>
          I enjoy an active lifestyle — walking, travelling, and staying fit.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-l-4 border-brand pl-4">
        My Interests
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          "🎾 Tennis — staying active & focused",
          "✈️ Travelling — exploring new places",
          "🚗 Cars & Automotive — interest in cars & design",
          "🏋️‍♀️ Sport — keeping a healthy lifestyle",
          "📊 Digital Marketing — learning & growing",
        ].map((item) => (
          <li
            key={item}
            className="text-gray-600 dark:text-gray-300 bg-blue-100 dark:bg-gray-800 px-4 py-2 rounded-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
