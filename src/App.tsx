import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@ovhcloud/ods-theme-blue-jeans';

import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OsdsButton } from '@ovhcloud/ods-components/button/react';
import { OsdsModal } from '@ovhcloud/ods-components/modal/react'
import { OsdsAccordion } from '@ovhcloud/ods-component-accordion/react'
import { OsdsDatagrid } from '@ovhcloud/ods-components/datagrid/react'

import {
  ODS_BUTTON_TYPE,
  ODS_BUTTON_VARIANT,
  ODS_BUTTON_SIZE,
} from '@ovhcloud/ods-components/button';
import {
  OdsDatagridAttribute, OdsDatagridColumn, OdsDatagridRow,

} from '@ovhcloud/ods-components/datagrid'
import {
  ODS_ACCORDION_SIZE,
  ODS_ACCORDION_SIZES
} from '@ovhcloud/ods-components/accordion'
import {
  OdsModalAttribute,
} from '@ovhcloud/ods-components/modal'



function App() {
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
<div style={{width:"50%"}}>
      <div> ODS Button</div>
      <OsdsButton color={ODS_THEME_COLOR_INTENT.primary}
        size={ODS_BUTTON_SIZE.sm}
        type={ODS_BUTTON_TYPE.submit}
        href="#"
      >
        New button
      </OsdsButton>
      <div> ODS Accordion </div>

      <OsdsAccordion color="default">
        <span slot="summary">
          Default
        </span>
        Content
      </OsdsAccordion>
      <OsdsAccordion color="text">
        <span slot="summary">
          Text
        </span>
        Content
      </OsdsAccordion>
      <OsdsAccordion color="accent">
        <span slot="summary">
          Accent
        </span>
        Content
      </OsdsAccordion>
      <OsdsAccordion color="error">
        <span slot="summary">
          Error
        </span>
        Content
      </OsdsAccordion>
      <OsdsAccordion color="warning">
        <span slot="summary">
          Warning
        </span>
        Content
      </OsdsAccordion>
      <OsdsAccordion color="success">
        <span slot="summary">
          Success
        </span>
        Content
      </OsdsAccordion>
      <OsdsAccordion color="info">
        <span slot="summary">
          Info
        </span>
        Content
      </OsdsAccordion>
      <OsdsAccordion color="promotion">
        <span slot="summary">
          Promotion
        </span>
        Content
      </OsdsAccordion>
      <div> MODAL</div>
      <OsdsModal>
        <slot name="content">
          I'm a modal with ODS
          <button onClick={() => alertPlease()}>ALERT</button>
        </slot>
      </OsdsModal>
      <div> Datagrid</div>
      <OsdsDatagrid has-hideable-columns="" height="600" no-result-label="Aucun résultat" row-height="52" ></OsdsDatagrid>
    </div>
    </div>

  );
}

export default App;
