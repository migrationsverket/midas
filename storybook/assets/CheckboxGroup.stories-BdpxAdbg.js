import{j as e}from"./iframe-D57HPjUH.js";import{C as m}from"./CheckboxGroup-CnJYVCrv.js";import{C as p}from"./Checkbox-7YglCIwf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D4T6w_uZ.js";import"./utils-B06jzTgT.js";import"./clsx-B-dksMZM.js";import"./Text-BRbYuply.js";import"./useFocusRing-DtsyDwWy.js";import"./index-CgeWXzya.js";import"./index-DybAXT18.js";import"./clsx-Ciqy0D92.js";import"./Text-b7_ug03S.js";import"./Label-CR0jC5kW.js";import"./Button-DVU6uVBH.js";import"./Hidden-Ds1-Bo4r.js";import"./useLabels-CqCkvO1J.js";import"./useButton-CaFZ2X3A.js";import"./Dialog-BVqQjS6c.js";import"./RSPContexts-C7gWpURr.js";import"./OverlayArrow-Cd82wZ4k.js";import"./useResizeObserver-DM9cfRH9.js";import"./useControlledState-C5qdaBdS.js";import"./Collection-CbpD3AKB.js";import"./index-B9rGxsJZ.js";import"./Separator-BqlK3CkN.js";import"./SelectionManager-WTSWdZRU.js";import"./useEvent-DImJ-Ww-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BnzQGY8l.js";import"./useDescription-DKI9BPRO.js";import"./ListKeyboardDelegate-DnPSa863.js";import"./PressResponder-DOoRHakO.js";import"./useLocalizedStringFormatter-Do30dAQM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cz55DP5B.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bPoGyprv.js";import"./Button-DUgrP7y1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CP9tIGKw.js";import"./createLucideIcon-_zPB_PGU.js";import"./x-CCfpzTZt.js";import"./Heading-Bm1KbJoW.js";import"./info-CulBlHjB.js";import"./Popover-BYTpsmPj.js";import"./useFormValidation-BquHFWdr.js";import"./useField-DeXnNznj.js";import"./Form-BlAdMGxA.js";import"./check-DW21n8ik.js";import"./useToggleState-c4wOii77.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,pr as __namedExportsOrder,nr as default};
