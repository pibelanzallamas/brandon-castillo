function Contact() {
  const contact = [
    { title: "Discord", link: "http://discord.com/users/1363126156378771456" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/bran-castillo-dev",
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
            <i>
              <a href={ele.link} target="_blank">
                {ele.title}
              </a>
            </i>
          </p>
        ))}
      </section>
      <section>
        <h4>Email:</h4>
        <p>
          <i>
            <a href="mailto:brancastillo.developer@gmail.com" target="_blank">
              brancastillo.developer@gmail.com
            </a>
          </i>
        </p>
      </section>
    </main>
  );
}

export default Contact;
