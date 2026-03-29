function ContactInfo() {
    return (
        <section>
            <h2 className="text-sm uppercase tracking-wider border-b border-gray-600 pb-1 mb-3">
                Контакти
            </h2>

            <div className="text-sm text-gray-300 space-y-2">
                <p>Email: example@gmail.com</p>
                <p>Львів</p>
                <p>+380 00 000 0000</p>
                <a
                    href="https://github.com/NoName8022"
                    target="_blank"
                    className="text-blue-400 hover:underline block"
                >
                    GitHub профіль
                </a>
            </div>
        </section>
    );
}
export default ContactInfo;