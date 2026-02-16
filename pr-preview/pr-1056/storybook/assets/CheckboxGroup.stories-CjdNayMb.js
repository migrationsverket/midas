import{j as e}from"./iframe-DJUtdHwV.js";import{C as m}from"./CheckboxGroup-Bk2dIJ3e.js";import{C as p}from"./Checkbox-DpWjo_MN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C9oMwrfJ.js";import"./utils-D4RE6qhK.js";import"./clsx-B-dksMZM.js";import"./Text-B58uuGYq.js";import"./useFocusRing-C5U0CiHo.js";import"./index-CVKq7ZZT.js";import"./index-Ha_8AofU.js";import"./clsx-Ciqy0D92.js";import"./Text-Dl70Vupn.js";import"./Label-BcprkH4d.js";import"./Button-bQvo04EJ.js";import"./Hidden-DPRRZP9g.js";import"./useLabels-Duan9ykz.js";import"./useButton-D3H5VeWz.js";import"./Dialog-DQe-Gfpg.js";import"./RSPContexts-CeL7Ybna.js";import"./OverlayArrow-CDCCcTTD.js";import"./useResizeObserver-DPB_SUWz.js";import"./useControlledState-C1jOx-dc.js";import"./Collection-DaGi1ZdJ.js";import"./index-BSsOzAdI.js";import"./Separator-CRJE82p_.js";import"./SelectionManager-gpdXDHRv.js";import"./useEvent-T3MosaLJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D3PmNYx2.js";import"./useDescription-nXINSnLi.js";import"./ListKeyboardDelegate-65Ez9XKB.js";import"./PressResponder-BiRPbGEB.js";import"./useLocalizedStringFormatter-W5YzKkQs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Do24X5lR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-m39w7boQ.js";import"./Button-CThTpwQ6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5gvZJBEc.js";import"./createLucideIcon-SxhoPmH3.js";import"./x-BHtKcay4.js";import"./Heading-DL6t5x4O.js";import"./info-DBLxQG3L.js";import"./Popover-CNhN5vuc.js";import"./useFormValidation-DRqFyOxo.js";import"./useField-0I64IgUK.js";import"./Form-Bx3qbLf4.js";import"./check-D-TOVba6.js";import"./useToggleState-CwtW0qhg.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
