import { useEffect, useState } from "react";

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-[300px] relative shadow-xl">

                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-3 text-xl"
                >
                    ✖
                </button>

                <h2 className="text-lg font-bold mb-4 text-center">
                    Зворотній зв'язок
                </h2>

                <form action="https://formspree.io/f/mykbbggr" method="POST" className="space-y-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ім’я"
                        required
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        className="w-full border p-2 rounded"
                    />

                    <textarea
                        name="message"
                        placeholder="Повідомлення"
                        className="w-full border p-2 rounded"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Відправити
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;