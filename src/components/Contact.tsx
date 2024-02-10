import ContactDetails from "./ContactDetails";

export default function Contact() {
    return (
        <section className="dark:bg-black-400 bg-white-400 flex flex-col">
            <h2>Contact</h2>
            <h5 className="mt-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sapien vitae nisl aliquam fringilla. Etiam tempus augue vitae eleifend lacinia. Duis at leo dignissim, iaculis risus vitae, finibus tellus. Cras ullamcorper ut justo at tempor. Nulla convallis est et orci faucibus semper. Nam pulvinar hendrerit est, blandit pretium felis.
            </h5>
            <ContactDetails />

        </section>
    )
}
