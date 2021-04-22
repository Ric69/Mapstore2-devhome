import assign from 'object-assign';
import React from 'react';
import { Glyphicon } from "react-bootstrap";

import { FaJedi } from 'react-icons/fa';
import { setControlProperty, toggleControl } from '@mapstore/actions/controls';
import { ZOOM_TO_POINT } from '@js/actions/appseisme';
import appSeismeReducer from "@js/reducers/appseisme";
require('./appseisme.css');

let x = 4.813035;
let y = 45.775287;
class AppSeismeComponent extends React.Component {
    render() {
        // const style = {position: "absolute", top: "10px", left: "100px", background: "#55006A", color: "#ffffff", zIndex: 1000000};
      
        return (
            <div style={style}>
                <button className="btn btn-info" data-toggle="tooltip" data-placement="top" id="zoomseisme" title="zoom emprise carte" onClick={() => console.log('je suis passé dans la fonction! - x: '+x+' - y: '+y)} >
                    &nbsp;Mon Bouton plugin perso&nbsp;
                </button>
            </div>
        );
    }
}

const toggleAppSeismeTool = toggleControl.bind(null, 'appseisme', null);
// export const AppSeismePlugin = AppSeismeComponent;

export default {
    AppSeismePlugin: assign(AppSeismeComponent, {
        BurgerMenu: {
            name: 'seisme',
            position: 1,
            text: "Application Seisme",
            icon: <FaJedi />,
            action: () => toggleAppSeismeTool,
            priority: 1,
            alwaysVisible: true,
            doNotHide: true
        },
        OmniBar: {
            name: 'seisme',
            position: 5,
            tool: true,
            icon: <FaJedi />,
            action: () => toggleAppSeismeTool,
            priority: 2,
            alwaysVisible: true,
            doNotHide: true
        }
    }),
    reducers: {appSeismeReducer}
};