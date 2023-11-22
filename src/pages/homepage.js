// src/pages/homepage.js
import React from 'react';

import logo from '../logo.svg';
// import { OsdsDatagrid } from '@ovhcloud/ods-components/datagrid/react'
import { OsdsModal } from '@ovhcloud/ods-components/modal/react'

import {
  OdsDatagridAttribute, OdsDatagridColumn, OdsDatagridRow,

} from '@ovhcloud/ods-components/datagrid'

import {
  OdsModalAttribute,
} from '@ovhcloud/ods-components/modal'


function HomePage() {
    const alertPlease = () => {
        alert('It works!');
      }; 
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
    
          <div> MODAL</div>
          <OsdsModal>
            <slot name="content">
              I'm a modal with ODS
              <button onClick={() => alertPlease()}>ALERT</button>
            </slot>
          </OsdsModal>
          <div> Datagrid</div>
          {/* <OsdsDatagrid has-hideable-columns="" height="600" no-result-label="Aucun résultat" row-height="52" ></OsdsDatagrid> */}
        </div>
    
      );
}
export default HomePage;