import CoverImage from "../images/cover-image.png"
import ProfileImage from "../images/profile-image.png"

export const Header = () => {
    return (
        <header className="main-cover" style={{backgroundImage:`url(${CoverImage})`}}>
        {}
        <div className="overlay"></div>
        <div className="container">
            <div className="display-table">
                <div className="display-table-contents">
                    {}
                    <div className="profile-thumb" style={{backgroundImage:`url(${ProfileImage})`}}></div>
                    <h1 className="title-text">Junichi Tomida</h1>
                    <h3 className="title-text">Backend Enginner</h3>
                    <ul className="social-icons">
                        <li className="icon-link">
                        {}
                        </li>
                        <li className="icon-link">
                        {}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </header>
    )
}