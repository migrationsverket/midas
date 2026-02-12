import{j as e}from"./iframe-CYE28S4B.js";import{C as m}from"./CheckboxGroup-0NrOQJiL.js";import{C as p}from"./Checkbox-CFD8WvyV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C_HeO-Fn.js";import"./utils-DXU04MTS.js";import"./clsx-B-dksMZM.js";import"./Text-CRNMg4rg.js";import"./useFocusRing-DDD8-X_C.js";import"./index-SDL6z_K4.js";import"./index-CewZdSQ7.js";import"./clsx-Ciqy0D92.js";import"./Text-BJwWTomA.js";import"./Label-CaF8pDwl.js";import"./Button-C-ijGV-E.js";import"./Hidden-u2Ek9cYJ.js";import"./useLabels-WDeNF-KU.js";import"./useButton-DlXq6u0P.js";import"./Dialog-C0ifQktr.js";import"./RSPContexts-BQSzUrSr.js";import"./OverlayArrow-Rqj7tz6D.js";import"./useResizeObserver-DlrWRcFI.js";import"./useControlledState-AzqIiJWa.js";import"./Collection-Dh2InLFD.js";import"./index-DMVPUX41.js";import"./Separator--qyox644.js";import"./SelectionManager-h7749Rdb.js";import"./useEvent-DK-t1HBg.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bc9pd1pr.js";import"./useDescription-Bq9lFz9Y.js";import"./ListKeyboardDelegate-AZmLkpC7.js";import"./PressResponder-CF4f691_.js";import"./useLocalizedStringFormatter-xFOfyFr2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-5jjtUXBI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DKT9_oz-.js";import"./Button-bGch504k.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C8xa7oGT.js";import"./createLucideIcon-DTiky_Fg.js";import"./x-DUTBlblH.js";import"./Heading-DISB2bO5.js";import"./info-Dx8n41An.js";import"./Popover-CC27QVFd.js";import"./useFormValidation-CBM5gBIr.js";import"./useField-fOhcEUsN.js";import"./Form-BGF0gvBf.js";import"./check-ofKa9bQr.js";import"./useToggleState-BuMYM_xi.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
