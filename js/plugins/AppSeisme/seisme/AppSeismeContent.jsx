/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

// import I18N from '@mapstore/components/I18N/I18N';
// import gsLogo from '@mapstore/assets/img/geosolutions-brand.png';
// import msLogo from '@mapstore/assets/img/mapstore-logo-0.20.png';
// import seismeLogo from '@js/plugins/AppSeisme/seisme/img/Seisme_r.png';
import seismeLogo from './img/Seisme_r.png';

class AppSeisme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVald: "",
            inputValm: "",
            inputValla: "",
            inputVallo: ""
            // center: [292539.79, 5840539.79],
            // zoom: 10.5
        };
    };

    onSubmit = (e) => {
        e.preventDefault();
        const z1 = Math.round(Math.pow(10, 0.58 + 0.25 * this.state.inputValm) * 1000 * 10000) / 10000;
        const z2 = Math.round(Math.pow(10, -0.02 + 0.25 * this.state.inputValm) * 1000 * 10000) / 10000;
        const date = this.state.inputVald;
        const magnitude = this.state.inputValm;

        const pos = "{x: " + parseFloat(this.state.inputVallo) + ", y: " + parseFloat(this.state.inputValla) + "}";
        const zoom = 6;
        const crs = "EPSG:4326";
    };   

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div className="AppZonetext">
                <img src={seismeLogo} style={{ display:"block", margin:"auto", maxWidth:"37%", height:"37%", width:"37%" }} alt="Séisme CNR" />
                 <h1>Séisme</h1>
                 <br />
                <label>Date :</label>
                <input id="seismedat" className="form-control" type="text" name="inputVald" value={this.state.inputVald} onChange={e => this.handleChange(e)} />
                <br />
                <label>Magnitude :</label>
                <input id="seismemag" className="form-control" type="text" name="inputValm" value={this.state.inputValm} onChange={e => this.handleChange(e)} />
                <br />
                <label>Latitude :</label>
                <input id="seismelat" className="form-control" type="text" ame="inputValla" value={this.state.inputValla} onChange={e => this.handleChange(e)} />
                <br />
                <label>Longitude :</label>
                <input id="seismelon" className="form-control" type="text" name="inputVallo" value={this.state.inputVallo} onChange={e => this.handleChange(e)} />
                <br />
                <hr />
                <div id="valz1">
                    <b>Rayon Zone 1 : </b>
                    {Math.round(Math.pow(10, 0.58 + 0.25 * this.state.inputValm) * 1000 * 10) / 10000}{" "} kms
                </div>
                <br />
                <div id="valz2">
                    <b>Rayon Zone 2 : </b>
                    {Math.round(Math.pow(10, -0.02 + 0.25 * this.state.inputValm) * 1000 * 10) / 10000}{" "} kms
                </div>
                <br />
                <hr />
                <button className="btn btn-success"  id="calseisme" onClick={e => this.onSubmit(e)} > Calcul ! </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-info" id="listseisme" onClick={e => this.onSubmit2(e)} > Liste Impact ! </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-info" id="listseisme" onClick={e => this.onSubmit2(e)} > Zoom ! </button>
                <br />
            </div>);
        };
}

export default AppSeisme;
