import { Circle } from "react-circle"
import { useSkills } from '../customHooks/useSkills';
import { requestStates } from "../constants";
export const SkillsMobile = () => {

    const [sortedLanguageList,fetchRequestState,converseCountToPercentage]=useSkills()
    
    return (
        <div id="skills-mobile">
            <div className="container-mobile">
                <div className="heading-mobile">
                    <h2>Skills</h2>
                </div>
                <div className="skills-container-mobile">
                    {fetchRequestState === requestStates.loading && (
                        <p className="description-mobile">取得中 ...</p>
                    )
                    }
                    {fetchRequestState === requestStates.success && (
                        sortedLanguageList().map((item,index) => (
                            <div className="skill-item-mobile" key={index}>
                            <p className="description-mobile"><strong>{item.language}</strong></p>
                        <Circle 
                        animate
                        progress={converseCountToPercentage(item.count)}
                        />
                        </div>
                        ))
                    )
                    }
                    {
                        fetchRequestState === requestStates.error && (
                            <p className="description-mobile">エラーが発生しました</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}