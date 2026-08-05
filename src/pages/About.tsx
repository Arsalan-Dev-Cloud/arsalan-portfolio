function About() {
  return (
    <main className="about-page">

      <section className="about" id="about">

        <div className="section-heading">
          <p>Get To Know More</p>
          <h1>About Me</h1>
        </div>

        <div className="about-container reveal">

          <div className="about-card">
            <h3>Education</h3>
            <p>Master of Computer Applications (MCA)</p>
            <span>Currently Pursuing</span>
          </div>

          <div className="about-card">
            <h3>Development</h3>
            <p>Full Stack Web Development</p>
            <span>React • TypeScript • Python</span>
          </div>

          <div className="about-card">
            <h3>Data Engineering</h3>
            <p>Big Data & Cloud Technologies</p>
            <span>Python • SQL • Spark • Azure</span>
          </div>

        </div>

        <div className="about-description">
          <p>
            I'm a developer passionate about building modern web applications
            and working with data. I'm currently developing my skills in
            full-stack web development and data engineering, with a focus on
            creating practical projects and solving real-world problems.
          </p>
        </div>

      </section>

    </main>
  )
}

export default About    