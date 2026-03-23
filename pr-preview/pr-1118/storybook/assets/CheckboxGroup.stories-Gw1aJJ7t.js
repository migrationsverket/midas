import{j as e}from"./iframe-8UJkVthP.js";import{C as m}from"./CheckboxGroup-DKUPSFO7.js";import{C as p}from"./Checkbox-Dloxh6ml.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BeuaPtx6.js";import"./utils-BDWBmxXy.js";import"./clsx-B-dksMZM.js";import"./Text-CV-khTPA.js";import"./useFocusRing-0HTfSbqX.js";import"./index-CmnEY_Qy.js";import"./index-Co6zkntU.js";import"./clsx-Ciqy0D92.js";import"./Text-FE_S5mZr.js";import"./Label-CGAcaIkm.js";import"./Button-5Crp6oLI.js";import"./Hidden-D2CAjC8z.js";import"./useLabels-CdJkQqk9.js";import"./useButton-MMd5ycyS.js";import"./Dialog-CrNctySC.js";import"./RSPContexts-qbHEhELM.js";import"./OverlayArrow-D1WaM4Ij.js";import"./useResizeObserver-DR8kIdUi.js";import"./useControlledState-CQGiwWre.js";import"./Collection-BjLu6E75.js";import"./index-CiiwR1vG.js";import"./Separator-C-rwZau5.js";import"./SelectionManager-DN6QIcY4.js";import"./useEvent-CbYAf6vF.js";import"./scrollIntoView-BW2PYDKv.js";import"./SelectionIndicator-BMVKAfis.js";import"./useDescription-BTR78MKM.js";import"./ListKeyboardDelegate-D2hlOZCJ.js";import"./PressResponder-DCf-TYC-.js";import"./useLocalizedStringFormatter-gIHOQjHO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-td24gFyo.js";import"./getScrollParent-6Dr3zswo.js";import"./VisuallyHidden-vq1pC-28.js";import"./x-Bx_hLSbE.js";import"./createLucideIcon-KCEZs7i4.js";import"./useLocalizedStringFormatter-Dos3tI0u.js";import"./Heading-BTDJmRUD.js";import"./Button-ByNh2qq9.js";import"./Button.module-BB7N-cLd.js";import"./info-Cue81AHl.js";import"./Popover-DF28tWtL.js";import"./Form-Dl9b4CYf.js";import"./useField-adX3beuP.js";import"./check-Cu8NwU16.js";import"./useToggleState-pCh08-B9.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    ...args
  }) => {
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
