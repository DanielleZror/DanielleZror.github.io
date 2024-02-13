import ContactDetails from "./ContactDetails";

export default function Contact() {
    return (
        <section className="dark:bg-black-400 bg-white-400 flex flex-col">
            <h2>Contact</h2>
            <h5>
                Ready to start a conversation? Whether you have a project brewing in your mind, a question to ask, or just want to share a virtual coffee break, I'd love to hear from you! Feel free to reach out using any of the methods below:
            </h5>
            <ContactDetails />
        </section>
    )
}
