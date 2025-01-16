export default function Contact() {
    const socialMedia = [
      {
        platform: "Facebook",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="Facebook"
          >
            <path d="M22 12a10 10 0 1 0-11 9.95v-7.06h-2.32v-2.9H11v-2.22c0-2.33 1.38-3.62 3.49-3.62a14.86 14.86 0 0 1 2.06.18v2.26h-1.16c-1.14 0-1.5.7-1.5 1.41v1.99h2.56l-.41 2.9h-2.15v7.05A10 10 0 0 0 22 12Z" />
          </svg>
        ),
        link: "https://facebook.com",
      },
      {
        platform: "Twitter",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="Twitter"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.44.36a9.14 9.14 0 0 1-2.88 1.1A4.53 4.53 0 0 0 16.43 0a4.48 4.48 0 0 0-4.34 5.59 12.91 12.91 0 0 1-9.33-4.73 4.49 4.49 0 0 0-.6 2.26A4.48 4.48 0 0 0 3.64 7a4.48 4.48 0 0 1-2-.55v.06a4.49 4.49 0 0 0 3.59 4.41A4.52 4.52 0 0 1 2 11.33a4.48 4.48 0 0 0 4.19 3.13 9 9 0 0 1-5.6 1.94 9.29 9.29 0 0 1-1.08-.06A12.84 12.84 0 0 0 7.29 18a12.76 12.76 0 0 0 12.94-13v-.59A9.33 9.33 0 0 0 23 3Z" />
          </svg>
        ),
        link: "https://twitter.com",
      },
      {
        platform: "Instagram",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-pink-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="Instagram"
          >
            <path d="M12 2.2a9.8 9.8 0 1 0 9.8 9.8A9.81 9.81 0 0 0 12 2.2Zm0 17.92a8.12 8.12 0 1 1 8.12-8.12A8.12 8.12 0 0 1 12 20.12Zm4.24-12.3a1.21 1.21 0 1 1-1.21-1.21 1.21 1.21 0 0 1 1.21 1.21ZM12 7.53a4.47 4.47 0 1 0 4.47 4.47A4.47 4.47 0 0 0 12 7.53Zm0 7.12a2.65 2.65 0 1 1 2.65-2.65A2.65 2.65 0 0 1 12 14.65Z" />
          </svg>
        ),
        link: "https://instagram.com",
      },
    ];
  
    const contacts = [
      {
        name: "Victor",
        position: "Customer Support",
        email: "support@example.com",
        image: "vick.jpeg",
      },
      {
        name: "Jasper Munene",
        position: "Sales Manager",
        email: "sales@example.com",
        image: "jasper.jpeg",
      },
      {
        name: "Stacy Ann",
        position: "Marketing Lead",
        email: "marketing@example.com",
        image: "Stacy.jpeg",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our team is here to help! Reach out to any of our dedicated members
            below or connect with us through social media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="text-center bg-white shadow-md rounded-lg p-6"
              >
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{contact.name}</h3>
                <p className="text-gray-600">{contact.position}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12 space-x-6">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                {media.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  