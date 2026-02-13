import{j as e}from"./iframe-CmPG4FoB.js";import{C as m}from"./CheckboxGroup-BTfUsltP.js";import{C as p}from"./Checkbox-BmTyE7T9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BBtlti2J.js";import"./utils-BAAQ8UkA.js";import"./clsx-B-dksMZM.js";import"./Text-Cy2IEGkF.js";import"./useFocusRing-Cb7-V4u2.js";import"./index-B72qOhyX.js";import"./index-CWU1EcPI.js";import"./clsx-Ciqy0D92.js";import"./Text-C8u6JSGZ.js";import"./Label-BOgwkVoy.js";import"./Button-BopS93OI.js";import"./Hidden-BRolh-uL.js";import"./useLabels-8sZBmGn_.js";import"./useButton-MazVA7qC.js";import"./Dialog-CLg91Wd0.js";import"./RSPContexts-Cjk68_Rq.js";import"./OverlayArrow-Dp0oCapN.js";import"./useResizeObserver-BswNohqj.js";import"./useControlledState-DykEM3ap.js";import"./Collection-BwbdgeJH.js";import"./index-BYkDUZ2-.js";import"./Separator-BoeSI7NJ.js";import"./SelectionManager-BkzOSiiK.js";import"./useEvent-C4oXjZGM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-E1JMO_0P.js";import"./useDescription-DsFIZovu.js";import"./ListKeyboardDelegate-ByK-z0nv.js";import"./PressResponder-B9Q0vUTr.js";import"./useLocalizedStringFormatter-BgmHW-Xx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1HxKRMlm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Du1fTxZa.js";import"./Button-ryGeYMAs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C9Gk6SCX.js";import"./createLucideIcon-BxIqJcJw.js";import"./x-FrzhBZNc.js";import"./Heading-DS5Rtu4V.js";import"./info-EyaroSL0.js";import"./Popover-_TSpe8cf.js";import"./useFormValidation-D90F9Ft3.js";import"./useField-0rPxrk8p.js";import"./Form-DYt1yWSH.js";import"./check-tdaJa0jL.js";import"./useToggleState-C1LwacOp.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
