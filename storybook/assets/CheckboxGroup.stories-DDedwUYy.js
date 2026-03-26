import{j as e}from"./iframe-SDpi4twy.js";import{C as m}from"./CheckboxGroup-ptSqM7Tv.js";import{C as p}from"./Checkbox-DAiNvjnT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BAYSeF7s.js";import"./utils-xrvn9yoP.js";import"./clsx-B-dksMZM.js";import"./Text-DfMMI2V7.js";import"./useFocusRing-HN10idpk.js";import"./index-DtGjaFFO.js";import"./index-BiFAAEUl.js";import"./clsx-Ciqy0D92.js";import"./Text-fYO5A3M_.js";import"./Label-Bp2g2c4l.js";import"./Button-CP9rYMdO.js";import"./Hidden-DCBLchC2.js";import"./useLabel-CsVesTp2.js";import"./useLabels-BdN3-T9J.js";import"./useButton-da7p-KW-.js";import"./Dialog-DO0SJ5xp.js";import"./RSPContexts-6ABDZ8a3.js";import"./OverlayArrow-Bs4jMDnA.js";import"./useResizeObserver-BrOKbNAL.js";import"./useControlledState-DnKNiq_e.js";import"./Collection-DM9qDYt9.js";import"./index-utwbMdGP.js";import"./Separator-BupWW8-c.js";import"./SelectionManager-DRPxsEbu.js";import"./useEvent-Du0U3mMG.js";import"./scrollIntoView-BoxRYZNv.js";import"./SelectionIndicator-D6_dtQfE.js";import"./useDescription-CU7-IrDB.js";import"./ListKeyboardDelegate-33IGFvKv.js";import"./PressResponder-DLRIhAkm.js";import"./useLocalizedStringFormatter-BT0fez2i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-EkTcRESu.js";import"./getScrollParent-CwCM-QuG.js";import"./VisuallyHidden-DDECxo00.js";import"./x-BpKlbFNN.js";import"./createLucideIcon-CoSUjgph.js";import"./useLocalizedStringFormatter-DAhT7gg2.js";import"./Heading-D22PM7wL.js";import"./Button-BFfXUBEp.js";import"./Button.module-BB7N-cLd.js";import"./info-CrxgP15n.js";import"./Popover-FU8L48B3.js";import"./Form-BPlMq8bY.js";import"./useField-D_PusGes.js";import"./check-DBHwUjZj.js";import"./useToggleState-BE7HndZe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
