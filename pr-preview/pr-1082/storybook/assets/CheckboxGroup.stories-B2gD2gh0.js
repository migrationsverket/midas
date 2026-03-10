import{j as e}from"./iframe-Bid_S7I4.js";import{C as m}from"./CheckboxGroup-aG_zmNEa.js";import{C as p}from"./Checkbox-HWqzefVz.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B0mVz9cL.js";import"./utils-B2qcFePq.js";import"./clsx-B-dksMZM.js";import"./Text-GfN3CyXi.js";import"./useFocusRing-CGf0hTBa.js";import"./index-CbxEA1vr.js";import"./index-CZS9W8aw.js";import"./clsx-Ciqy0D92.js";import"./Text-52ihcTiX.js";import"./Label-cbRR56ky.js";import"./Button-CxmUZ178.js";import"./Hidden-B_IoczkA.js";import"./useLabels-CtsjeuWn.js";import"./useButton-D9fSscge.js";import"./Dialog-BLaagoXh.js";import"./RSPContexts-Yr0bwy4q.js";import"./OverlayArrow-BB7lw8j4.js";import"./useResizeObserver-DvQBHfGd.js";import"./useControlledState-BWQVgipy.js";import"./Collection-3S2dApvX.js";import"./index-BSnunQ2s.js";import"./Separator-C-p8N0H9.js";import"./SelectionManager-DP8dXlBl.js";import"./useEvent-B_2WmI7N.js";import"./scrollIntoView-B0aCs9nt.js";import"./SelectionIndicator-B1sgBrat.js";import"./useDescription-CiTmE2hO.js";import"./ListKeyboardDelegate-Bje-SQV-.js";import"./PressResponder-2GQuk75H.js";import"./useLocalizedStringFormatter-5FSqA3CS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DbLteYBP.js";import"./getScrollParent-CjkeExGQ.js";import"./VisuallyHidden-B_l7GjPs.js";import"./Button-CRgnzWDb.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-D8yQOpe1.js";import"./createLucideIcon-D8f6cvff.js";import"./x-B7kqcZNl.js";import"./Heading-qFCHwR_3.js";import"./info-B8HfiDOv.js";import"./Popover-CR8FO-At.js";import"./useFormValidation-C2lh5Bmq.js";import"./useField-Ot15oXQU.js";import"./Form-CLhv9E59.js";import"./check-DKZrZTnI.js";import"./useToggleState-DbME05rS.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
