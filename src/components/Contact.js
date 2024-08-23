import React, { useState, useRef } from "react"

const Contact = () => {
  const [showMessageInput, setShowMessageInput] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [confirmationMessage, setConfirmationMessage] = useState("")
  const [formData, setFormData] = useState({ email: "", message: "" })

  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()

      if (isValidEmail(formData.email)) {
        setEmailError("")
        if (!showMessageInput) {
          setShowMessageInput(true)
          setTimeout(() => {
            if (messageRef.current) {
              messageRef.current.focus()
            }
          }, 0)
        }
      } else {
        setEmailError("Please enter a valid email address.")
        emailRef.current.focus()
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      setEmailError("")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setConfirmationMessage("Message sent successfully.")

    setFormData({
      email: "",
      message: "",
    })
    setShowMessageInput(false)
    setEmailError("")

    emailRef.current.focus()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <span className="text-blue-500">user@kali:~$</span>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-transparent border-none outline-none w-full h-full"
            placeholder="Enter your e-mail"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            ref={emailRef}
            required
          />
        </div>
        {emailError && <div className="text-red-500">{emailError}</div>}
      </div>

      {showMessageInput && (
        <div className="flex gap-3">
          <span className="text-blue-500">user@kali:~$</span>
          <textarea
            id="message"
            name="message"
            className="bg-transparent border-none outline-none w-full h-full"
            placeholder="Enter your message.."
            value={formData.message}
            onChange={handleChange}
            ref={messageRef}
            rows={4}
            required
          />
        </div>
      )}

      {showMessageInput && <button type="submit">Submit</button>}

      {confirmationMessage && (
        <div className="text-green-500">{confirmationMessage}</div>
      )}
    </form>
  )
}

export default Contact
