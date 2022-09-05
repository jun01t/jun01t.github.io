import CoverImage from "../images/cover-image.png"
import ProfileImage from "../images/profile-image.png"
import {FaTwitter, FaGithub} from "react-icons/fa"

export const HeaderMobile = () => {
    return (
        <header className="main-cover-mobile" style={{backgroundImage:`url(${CoverImage})`}}>
        {}
        <div className="overlay-mobile"></div>
        <div className="container-mobile">
            <div className="display-table-mobile">
                <div className="display-table-contents-mobile">
                    {}
                    <div className="profile-thumb-mobile" style={{backgroundImage:`url(${ProfileImage})`}}></div>
                    <h1 className="title-text-mobile">つぶやきねこ</h1>
                    <h3 className="title-text-mobile">バックエンドエンジニャー</h3>
                    <ul className="social-icons-mobile">
                        <li className="icon-link-mobile">
                        {}
                        <a href="https://twitter.com/goldenCat1990">
                            <FaTwitter color="white" size="2rem"/>
                        </a>
                        </li>
                        <li className="icon-link-mobile">
                            <a href="https://github.com/jun01t">
                                <FaGithub color="white" size="2rem"/>
                            </a>
                        {}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </header>
    )
}