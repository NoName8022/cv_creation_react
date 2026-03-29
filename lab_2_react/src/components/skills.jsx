function Skills() {
    return (
        <section>
            <h2 className="text-sm uppercase tracking-wider border-b border-gray-600 pb-1 mb-3">
                Навички
            </h2>

            <ul className="space-y-2 text-sm text-gray-300">
                {["HTML", "Python", "SQL", "C", "C#", "Схемотехніка ПЗІ"].map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}
export default Skills;