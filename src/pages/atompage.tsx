// src/pages/atompage.js
import React from 'react';

import logo from '../logo.svg';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OsdsButton } from '@ovhcloud/ods-components/button/react';

import { OsdsAccordion } from '@ovhcloud/ods-component-accordion/react'
import {
  ODS_BUTTON_TYPE,
  ODS_BUTTON_VARIANT,
  ODS_BUTTON_SIZE,
} from '@ovhcloud/ods-components/button';

import {
  ODS_ACCORDION_SIZE,
  ODS_ACCORDION_SIZES
} from '@ovhcloud/ods-components/accordion'

function AtomPage() {
  return (
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
      </div>
    
    )
  };

export default AtomPage;