import{j as e}from"./iframe-CMUJ4oTW.js";import{C as m}from"./CheckboxGroup-k7YBkyhf.js";import{C as p}from"./Checkbox-C5J4e6pE.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DUZ2Lyg_.js";import"./utils-Bw5kKF0Y.js";import"./clsx-B-dksMZM.js";import"./Text-CmjU0gZm.js";import"./useFocusRing-CCdJUNbr.js";import"./index-BXUeCXEl.js";import"./index-BRxHMroZ.js";import"./clsx-Ciqy0D92.js";import"./Text-C-O23Bwp.js";import"./Label-D-lRvOG_.js";import"./Button-Bqzmv4VE.js";import"./Hidden-D0lp5d68.js";import"./useLabels-CskVNZCZ.js";import"./useButton-B2z_QK8p.js";import"./Dialog-B0_TAXmw.js";import"./RSPContexts-Dtm3ZRmN.js";import"./OverlayArrow-DWgBWshG.js";import"./useResizeObserver-Y9QGu1gT.js";import"./useControlledState-7-Wnf2ZS.js";import"./Collection-C6ZXRVc5.js";import"./index-CbWpJrB5.js";import"./Separator-DpWZxbBX.js";import"./SelectionManager-CXOD0jbX.js";import"./useEvent-DIWN8gNy.js";import"./scrollIntoView-Bpk-j4gT.js";import"./SelectionIndicator-CzWSNeVF.js";import"./useDescription-CjJLap45.js";import"./ListKeyboardDelegate-D0ZmEh2C.js";import"./PressResponder-B5Ba_dPV.js";import"./useLocalizedStringFormatter-CO8ox3aE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CNXWRTC7.js";import"./VisuallyHidden-B5co-kC4.js";import"./Button-D8hA4J4_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cyjs_x30.js";import"./createLucideIcon-TEce3gz9.js";import"./x-CKLycj6S.js";import"./Heading-CxhuX0Al.js";import"./info-czgCSxtX.js";import"./Popover-Bh__myN3.js";import"./useFormValidation-xJ9GZNEB.js";import"./useField-DVSpKNSf.js";import"./Form--t2c7OLT.js";import"./check-BiOJRLvg.js";import"./useToggleState-C8J-o-Cm.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
