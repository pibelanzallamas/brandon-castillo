function Contact() {
  const contact = [
    { title: "Discord", link: "http://discord.com/users/995051014883381318" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/brandon-castillo-dev",
    },
  ];

  return (
    <main className="edu">
      <section className="contact-header">
        <h3 className="titles">Contact</h3>
      </section>
      <section className="links">
        <h4>Links:</h4>
        {contact.map((ele) => (
          <p>
            <a href={ele.link} target="_blank">
              <i>{ele.title}</i>
            </a>
          </p>
        ))}
      </section>
      <section>
        <h4>Email:</h4>
        <p>
          <a href="mailto:brandoncastillo.09@gmail.com" target="_blank">
            <i>brandoncastillo.09@gmail.com</i>
          </a>
        </p>
      </section>
    </main>
  );
}

export default Contact;
