function Profile() {
    return (
        <div className="text-center">
            <img
                src="артем.png"
                alt="Реальне фото Артема"
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-700 mb-4"
            />

            <h1 className="text-lg font-bold">Артем Донець</h1>
            <p className="text-gray-400 text-sm">Студент / SOC Analyst</p>
        </div>
    );
}

export default Profile;