import './Content.css';

import ContentTop from '../../components/contentTop/ContentTop';
import ContentMain from '../../components/contentMain/ContentMain';

export default function Content(){
    return(
        <div className="main-content">
            <ContentTop/>
            <ContentMain/>
        </div>
    )
}