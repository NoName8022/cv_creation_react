import artemImg from '../assets/артем.png';

function Header() {
    return (
        <header>
            <h1>Резюме: Артем Д.</h1>
            <img src={artemImg} alt="Реальна фотографія Артема"/>
            <p>Студент НУ ЛП</p>
        </header>
    );
}
export default Header;