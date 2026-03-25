import{j as e}from"./iframe-ArSWsRFy.js";import{C as m}from"./CheckboxGroup-DeLKCZDb.js";import{C as p}from"./Checkbox-C3cCG3pc.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BB8VxeZz.js";import"./utils-Bk01FJOF.js";import"./clsx-B-dksMZM.js";import"./Text-BQUF3iRq.js";import"./useFocusRing-CuEBX_ny.js";import"./index-h5O7gEHG.js";import"./index-CBhfX2fa.js";import"./clsx-Ciqy0D92.js";import"./Text-DS3DZlwG.js";import"./Label-BdTDheCy.js";import"./Button-BEQHwt_x.js";import"./Hidden-DhQXB3Em.js";import"./useLabel-CGDLzIxe.js";import"./useLabels-P6wNBidM.js";import"./useButton-2SAmbr6R.js";import"./Dialog-BGE7U275.js";import"./RSPContexts-CKQVnrYn.js";import"./OverlayArrow-BfiwfXhj.js";import"./useResizeObserver-CR40r6I-.js";import"./useControlledState-BLEc30eS.js";import"./Collection-DZCSkdwZ.js";import"./index-DU4gV6qj.js";import"./Separator-C42XK-kH.js";import"./SelectionManager-CNDAMxo0.js";import"./useEvent-CgDJG_HR.js";import"./scrollIntoView-DWLREkUa.js";import"./SelectionIndicator-Cqwo4HnX.js";import"./useDescription-CmtmyFdo.js";import"./ListKeyboardDelegate-8jmwT1OX.js";import"./PressResponder-Bj_Xw0Nh.js";import"./useLocalizedStringFormatter-C8sflf6-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-KcLlQzwX.js";import"./getScrollParent-i8KlRQrJ.js";import"./VisuallyHidden-B7lPtWpQ.js";import"./x-BmJ6_yih.js";import"./createLucideIcon-xPhfpX1g.js";import"./useLocalizedStringFormatter-BNDpmOum.js";import"./Heading-BDFRiPQe.js";import"./Button-B7NXJoV0.js";import"./Button.module-BB7N-cLd.js";import"./info-C-Waxotl.js";import"./Popover-tE_8b65N.js";import"./Form-vy4xYy7s.js";import"./useField-DlDxRxY8.js";import"./check-CuxevX3h.js";import"./useToggleState-Dpzzl7TP.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
