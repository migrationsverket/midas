import{j as e}from"./iframe-DRLQwCNB.js";import{C as m}from"./CheckboxGroup-BlY0yEJL.js";import{C as p}from"./Checkbox-D41onXQ6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BkNvp2E6.js";import"./utils-DwlK8lYm.js";import"./clsx-B-dksMZM.js";import"./Text-DnHWSscL.js";import"./useFocusRing-lDwfAEVQ.js";import"./index-DH8oBJLm.js";import"./index-BHtNZ3Yk.js";import"./clsx-Ciqy0D92.js";import"./Text-ynU63HEc.js";import"./Label-CtArJP3P.js";import"./Button-B3A8qvAG.js";import"./Hidden-DAi6qXjx.js";import"./useLabel-I8iavOjU.js";import"./useLabels-Bv060iu2.js";import"./useButton-BsM8VkEl.js";import"./Dialog-VTPdiSOi.js";import"./RSPContexts-TCreybeK.js";import"./OverlayArrow-CWi5Ps9v.js";import"./useResizeObserver-CyhVbXlj.js";import"./useControlledState-dveh82K_.js";import"./Collection-BbtlcoHs.js";import"./index-Dt_XgYRE.js";import"./Separator-DcnV_yIP.js";import"./SelectionManager-NM3qzexE.js";import"./useEvent-BycsI7SI.js";import"./scrollIntoView-CwirR4Mk.js";import"./SelectionIndicator-CFTkKB0D.js";import"./useDescription-B6f-6xTN.js";import"./ListKeyboardDelegate-B-shSdMA.js";import"./PressResponder-Bil5uI85.js";import"./useLocalizedStringFormatter-BxPern0h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B4F5zzmy.js";import"./getScrollParent-Dj7PaAHW.js";import"./VisuallyHidden-D-pnepPQ.js";import"./x-DIunwg3h.js";import"./createLucideIcon-BcFDGO1n.js";import"./useLocalizedStringFormatter-DUEXk9yR.js";import"./Heading-BoZ3tvwQ.js";import"./Button-BfaOHdzG.js";import"./Button.module-BB7N-cLd.js";import"./info-CnnHMImr.js";import"./Popover-BiIwg91L.js";import"./Form-ClBOUQaz.js";import"./useField-UQvoHlDM.js";import"./check-DhIlGDfK.js";import"./useToggleState-Ber4sT9e.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
