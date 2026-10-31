
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-[#090d18] text-white">

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090d18]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold tracking-tight">
            Dossou<span className="text-blue-500">-dev.</span>
          </a>

          <div className="hidden items-center gap-9 text-sm text-gray-400 md:flex">
            <a href="#home" className="transition hover:text-blue-400">Accueil</a>
            <a href="#about" className="transition hover:text-blue-400">À propos</a>
            <a href="#skills" className="transition hover:text-blue-400">Compétences</a>
            <a href="#projects" className="transition hover:text-blue-400">Projets</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
          >
            Me contacter
          </a>
        </nav>
      </header>

      {/* Accueil */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center overflow-hidden px-6 py-24"
      >
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Bienvenue dans mon univers numérique
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Bonjour, je suis
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-8xl">
            Dossou<span className="text-blue-500">-dev.</span>
          </h1>

          <h2 className="mt-6 max-w-3xl text-2xl font-medium leading-snug text-gray-300 md:text-4xl">
            Je transforme des idées en expériences numériques.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Passionné par le développement web et les nouvelles technologies,
            je construis des solutions numériques modernes, utiles et intuitives.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Découvrir mes projets →
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-400"
            >
              En savoir plus
            </a>
          </div>

          <div className="mt-20 flex flex-wrap gap-8 border-t border-white/10 pt-8 text-sm text-gray-500">
            <span>📍 Lomé, Togo</span>
            <span>💻 Développement web</span>
            <span>🚀 Innovation numérique</span>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="border-t border-white/10 bg-[#0d1423] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            01 — À propos
          </p>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Derrière le code, <span className="text-blue-500">une vision.</span>
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            Je m'intéresse à la conception et au développement de solutions
            technologiques. Mon objectif est de transformer des idées en
            projets concrets, accessibles et performants.
          </p>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          02 — Compétences
        </p>
        <h2 className="mt-5 text-3xl font-bold md:text-5xl">
          Technologies & outils
        </h2>
        <p className="mt-5 text-gray-400">
          Les technologies que j'utilise et que je développe progressivement.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {['HTML & CSS', 'JavaScript', 'React', 'TypeScript'].map((skill) => (
            <div key={skill} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/50">
              <p className="font-semibold text-gray-200">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projets */}
      
{/* Projets */}
<section id="projects" className="border-t border-white/10 bg-[#0d1423] px-6 py-24">
  <div className="mx-auto max-w-7xl">

    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
      03 — Réalisations
    </p>

    <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <h2 className="text-3xl font-bold md:text-5xl">
          Mes projets<span className="text-blue-500">.</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Une sélection de mes expériences et réalisations numériques.
        </p>
      </div>

      <span className="text-sm text-gray-500">
        Portfolio personnel
      </span>
    </div>

    <div className="mt-12 grid gap-7 md:grid-cols-2">

      {/* Projet 1 */}
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-blue-500/50">

        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-blue-950 via-[#142b59] to-[#090d18]">
          <div className="text-center">
            <p className="text-5xl font-bold">
              D<span className="text-blue-400">.</span>
            </p>
            <p className="mt-3 text-sm tracking-widest text-blue-200">
              DOSSOU-DEV
            </p>
          </div>
        </div>

        <div className="p-7">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold">Portfolio Dossou-dev</h3>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
              En développement
            </span>
          </div>

          <p className="mt-4 leading-7 text-gray-400">
            Création d'un portfolio personnel moderne et responsive
            pour présenter mon profil, mes compétences et mes projets.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-300">
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/dossoudev/dossou-dev"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Voir le code sur GitHub →
          </a>
        </div>
      </article>

      {/* Emplacement futur */}
      <article className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-8 text-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400">
          +
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Prochain projet
        </h3>

        <p className="mt-3 max-w-sm leading-7 text-gray-400">
          Un nouvel espace sera consacré à une application
          ou une solution numérique développée par mes soins.
        </p>

        <span className="mt-6 text-xs uppercase tracking-widest text-gray-500">
          À venir
        </span>
      </article>

    </div>
  </div>
</section>


      {/* Contact */}
      <footer id="contact" className="px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          04 — Contact
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold md:text-5xl">
          Un projet en tête ? Parlons-en.
        </h2>
        <p className="mt-6 text-gray-400">
          Je suis ouvert aux échanges et aux nouvelles idées.
        </p>

        <a
          href="mailto:contact@dossoudev.com"
          className="mt-9 inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
        >
          Me contacter →
        </a>

        <div className="mt-20 border-t border-white/10 pt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Dossou-dev. Tous droits réservés.
        </div>
      </footer>
    </main>
  )
}

export default App
