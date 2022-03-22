import {Link} from "react-router-dom";
import MainTab from "../../../common/Tab/MainTab";
import React from "react";
// src/pages/index.js를 통해서 한번에 import 할 수 있도록 함

const SupportView = (props) => {
    return (
        <div>
            {<MainTab history={props} tabValue = "3"/>}
            <div>
                <Link to="/Register">

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Support View
                    </a>

                </Link>
            </div>

        </div>
    );
}

export default SupportView;
