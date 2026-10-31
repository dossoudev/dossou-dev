
import './App.css'

function App() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#" className="text-xl font-bold tracking-tight">
          Dossou-Dev<span className="text-blue-600">.</span>
        </a>

        <nav className="hidden gap-8 text-sm text-gray-600 md:flex">
          <a href="#about" className="hover:text-blue-600">À propos</a>
          <a href="#skills" className="hover:text-blue-600">Compétences</a>
          <a href="#projects" className="hover:text-blue-600">Projets</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white"
        >
          Me contacter
        </a>
      </header>

      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Développeur web
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-7xl">
          Bonjour, je suis
          <span className="block text-blue-600">Dossou-Dev</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          Je conçois des expériences numériques modernes, intuitives et
          performantes. Bienvenue dans mon univers de développement web.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gray-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Découvrir mes projets →
          </a>

          <a
            href="#about"
            className="rounded-full border border-gray-300 px-7 py-4 text-sm font-semibold transition hover:border-blue-600 hover:text-blue-600"
          >
            En savoir plus
          </a>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-6 text-sm text-gray-500">
          Basé à Lomé, Togo · Disponible pour de nouveaux projets
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            À propos
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            La technologie au service des idées.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-gray-600">
            Je m'intéresse à la création de solutions numériques utiles,
            à la conception web et aux nouvelles technologies.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Compétences
        </p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Mes outils de développement
        </h2>
        <p className="mt-6 text-gray-600">
          Cette section sera complétée au fur et à mesure de notre apprentissage.
        </p>
      </section>

      <section id="projects" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Réalisations
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Mes projets
          </h2>
          <p className="mt-6 text-gray-600">
            Mes réalisations seront présentées ici.
          </p>
        </div>
      </section>

      <footer id="contact" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Construisons quelque chose ensemble.
        </h2>
        <p className="mt-4 text-gray-600">
          N'hésitez pas à me contacter pour échanger.
        </p>
        <p className="mt-10 text-sm text-gray-400">
          © {new Date().getFullYear()} Votre Nom. Tous droits réservés.
        </p>
      </footer>
    </main>
  )
}

export default App
