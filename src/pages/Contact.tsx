import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

type FormStatus = "idle" | "sending" | "success" | "error"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function validateForm() {
    if (!name.trim()) {
      setErrorMessage("Please enter your name.")
      return false
    }

    if (!email.trim()) {
      setErrorMessage("Please enter your email.")
      return false
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address.")
      return false
    }

    if (!subject.trim()) {
      setErrorMessage("Please enter a subject.")
      return false
    }

    if (!message.trim()) {
      setErrorMessage("Please enter your message.")
      return false
    }

    if (message.trim().length < 10) {
      setErrorMessage(
        "Your message should be at least 10 characters long."
      )
      return false
    }

    setErrorMessage("")
    return true
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (!validateForm()) {
      setStatus("error")
      return
    }

    setStatus("sending")
    setErrorMessage("")

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      const data = await response.json()

      console.log(data)

      setStatus("success")

      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error(error)

      setStatus("error")

      setErrorMessage(
        "Unable to send your message. Please try again."
      )
    }
  }

  return (
    <main className="contact-page">
      <section className="contact">

        <div className="section-heading reveal">
          <p>Let's Connect</p>
          <h1>Contact Me</h1>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Let's Work Together</h3>

            <p>
              I'm open to web development opportunities,
              collaborative projects, and interesting software
              development work.
            </p>

            <div className="contact-links">

              <a
                href="mailto:shaikhmohammadarsalan5@gmail.com"
              >
                Email
              </a>

              <a
                href="https://github.com/Arsalan-Dev-Cloud"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shaikh-arsalan-92b00941a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(event) =>
                  setSubject(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                placeholder="Your Message"
                rows={6}
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
              />
            </div>

            {status === "error" && errorMessage && (
              <p
                className="form-message form-error"
                role="alert"
              >
                {errorMessage}
              </p>
            )}

            {status === "success" && (
              <p
                className="form-message form-success"
                role="status"
              >
                Message submitted successfully.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>

        </div>

      </section>
    </main>
  )
}

export default Contact