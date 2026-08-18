import "./index.css";

const profile = {
  name: "RABII NOUHAILA",
  title: "IT Engineering Student",
  email: "RABIINOUHAILA10@example.com",

  linkedin: "https://www.linkedin.com/in/nouhaila-rabii-a55687316",
  github: "https://github.com/nouhaila-103",
  cv: "../cvaien.pdf",
};

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#171717]">

      {/* NAVIGATION */}
      <header className="border-b border-[#E5E5E0] bg-[#F8F8F5]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight"
          >
            {profile.name}
          </a>

          <div className="hidden gap-6 text-sm text-[#555] sm:flex">
            <a href="#about" className="hover:text-black">
              About
            </a>

            <a href="#skills" className="hover:text-black">
              Skills
            </a>

            <a href="#projects" className="hover:text-black">
              Projects
            </a>

            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </div>
        </nav>
      </header>


      {/* HERO */}
      <main>

        <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#666]">
              {profile.title}
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#555]">
              I am an IT Engineering student interested in software
              development, web technologies, and building practical
              technical solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#171717] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#333]"
              >
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#D5D5D0] bg-white px-5 py-3 text-sm font-medium transition hover:border-[#999]"
              >
                GitHub
              </a>

              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#D5D5D0] bg-white px-5 py-3 text-sm font-medium transition hover:border-[#999]"
              >
                CV
              </a>

            </div>

          </div>
        </section>


        {/* ABOUT */}
        <section
          id="about"
          className="border-y border-[#E5E5E0] bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">

            <div className="grid gap-10 md:grid-cols-[180px_1fr]">

              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#666]">
                About
              </h2>

              <div className="max-w-3xl">

                <p className="text-xl leading-8">
                  I am an IT Engineering student developing my skills in
                  programming, web development, and software engineering.
                  I enjoy learning how technologies work and applying them
                  to practical problems.
                </p>

                <p className="mt-5 leading-7 text-[#666]">
                  This website is my personal space for documenting my
                  technical growth, future software projects, and work that
                  I can share with recruiters and other developers.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-10 md:grid-cols-[180px_1fr]">

            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#666]">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Git",
                "GitHub",
                "Web Development",
                "Software Development",
              ].map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-[#D8D8D2] bg-white px-4 py-2 text-sm"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </section>


        {/* PROJECTS */}
        <section
          id="projects"
          className="border-y border-[#E5E5E0] bg-white"
        >

          <div className="mx-auto max-w-6xl px-6 py-20">

            <div className="grid gap-10 md:grid-cols-[180px_1fr]">

              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#666]">
                Projects
              </h2>

              <div>

                <div className="rounded-2xl border border-[#E2E2DC] bg-[#F8F8F5] p-8">

                  <p className="text-lg font-medium">
                    Projects coming soon.
                  </p>

                  <p className="mt-3 max-w-2xl leading-7 text-[#666]">
                    I am currently developing my software projects and will
                    add case studies here as they are completed. Each case
                    study will explain the problem, technical decisions,
                    implementation, and outcome.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* WRITING / FUTURE POSTS */}
        <section className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-10 md:grid-cols-[180px_1fr]">

            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#666]">
              Writing
            </h2>

            <div className="rounded-2xl border border-[#E2E2DC] bg-white p-8">

              <p className="text-lg font-medium">
                Posts coming soon.
              </p>

              <p className="mt-3 max-w-2xl leading-7 text-[#666]">
                A space for future technical notes, project lessons, and
                things I learn while developing my skills.
              </p>

            </div>

          </div>

        </section>


        {/* CAPSTONE SPACE */}
        <section className="border-y border-[#E5E5E0] bg-[#F8F8F5]">

          <div className="mx-auto max-w-6xl px-6 py-20">

            <div className="grid gap-10 md:grid-cols-[180px_1fr]">

              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#666]">
                Capstone
              </h2>

              <div>

                <p className="text-lg font-medium">
                  Capstone work will appear here.
                </p>

                <p className="mt-3 max-w-2xl leading-7 text-[#666]">
                  This section will document my final project and the work
                  completed during my internship.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section
          id="contact"
          className="bg-[#171717] text-white"
        >

          <div className="mx-auto max-w-6xl px-6 py-20">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#AAA]">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let's connect.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#BBB]">
              I am open to internship opportunities, technical
              conversations, and opportunities to learn and contribute.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#171717] transition hover:bg-[#E8E8E8]"
              >
                Email Me
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#555] px-5 py-3 text-sm font-medium transition hover:bg-[#292929]"
              >
                LinkedIn
              </a>

              <a
                href={profile.booking}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#555] px-5 py-3 text-sm font-medium transition hover:bg-[#292929]"
              >
                Book a Call
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="bg-[#171717] px-6 pb-8 text-sm text-[#888]">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 border-t border-[#333] pt-6 sm:flex-row">

          <p>
            © 2026 {profile.name}
          </p>

          <p>
            {profile.title}
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;