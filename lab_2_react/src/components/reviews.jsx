import { useEffect, useState } from "react";

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchComments() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts/6/comments");
                const data = await res.json();

                setComments(data);
            } catch (error) {
                console.error("Помилка:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchComments();
    }, []);

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Відгуки</h2>

            {loading ? (
                <p className="text-gray-500">Завантаження...</p>
            ) : (
                <div className="space-y-4">
                    {comments.map(comment => (
                        <div
                            key={comment.id}
                            className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="font-semibold text-blue-600">
                                {comment.name}
                            </h4>
                            <p className="text-sm mt-2">{comment.body}</p>
                            <p className="text-xs text-gray-500 mt-2">
                                {comment.email}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Reviews;