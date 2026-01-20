import{j as e}from"./iframe-Co0SsNj6.js";import{C as m}from"./CheckboxGroup-CE8C8oF-.js";import{C as p}from"./Checkbox-Bjy8dj4u.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BD2HEwuR.js";import"./utils-DoIZJ7cj.js";import"./clsx-B-dksMZM.js";import"./Text-4sNYTzks.js";import"./useFocusRing-9k5ozzKg.js";import"./index-D1rsIpeY.js";import"./index-DMENUWva.js";import"./clsx-Ciqy0D92.js";import"./Text-BSTUUX0z.js";import"./Label-C0IITPi0.js";import"./Button-0-4Kgh6r.js";import"./Hidden-CossIpZl.js";import"./useLabels-LGizr97P.js";import"./useButton-Cob-AGV8.js";import"./Dialog-CKF9-Ac4.js";import"./RSPContexts-CrZ3ys4B.js";import"./OverlayArrow-RtLaAtvr.js";import"./useResizeObserver-Btkcsgi2.js";import"./useControlledState-CAAFyILJ.js";import"./Collection-C0IDLnfh.js";import"./index-D0DFVPuZ.js";import"./Separator-CObRPdSZ.js";import"./SelectionManager-BMm7iJXk.js";import"./useEvent-DRV4VT7N.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CF_YgRba.js";import"./useDescription-BDzmu5j_.js";import"./ListKeyboardDelegate-C4U2P3XN.js";import"./PressResponder-CTi1DIIf.js";import"./useLocalizedStringFormatter-BcSWiZ19.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CdvcH_Kd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-m5iKMMV5.js";import"./Button-6Dau2X37.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cc2vZIqX.js";import"./createLucideIcon-groEP49X.js";import"./x-DSoxV8Ho.js";import"./Heading-BX87Ibq6.js";import"./info-DeWotBib.js";import"./Popover-CU9jXD-T.js";import"./useFormValidation-DXVxdhpA.js";import"./useField-C47SklL7.js";import"./Form-BKJfkX3I.js";import"./check-DLefdGke.js";import"./useToggleState-CO3ibt5X.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
