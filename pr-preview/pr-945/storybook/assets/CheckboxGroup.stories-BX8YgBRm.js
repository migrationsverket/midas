import{j as e}from"./iframe-CTbPuyiZ.js";import{C as m}from"./CheckboxGroup-C0kNPLDe.js";import{C as p}from"./Checkbox-BVF5oHAQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-K-Xe6uTG.js";import"./utils-C6hfgLvT.js";import"./clsx-B-dksMZM.js";import"./Text-mSNC73zz.js";import"./useFocusRing-n3eJMlTT.js";import"./index-Bgxm6v1H.js";import"./index-Cu3zMLv9.js";import"./clsx-Ciqy0D92.js";import"./Text-vMxsj9yI.js";import"./Label-C1NU5p3-.js";import"./Button-CNOgGNQG.js";import"./Hidden-DaJx6vxq.js";import"./useLabels-gUEAKYDn.js";import"./useButton-IIBwAU4K.js";import"./Dialog-DPFX4MCs.js";import"./RSPContexts-ClJnUPs5.js";import"./OverlayArrow-DJ0mPePA.js";import"./useResizeObserver-BUobZ2m6.js";import"./useControlledState-Dm0v7F1R.js";import"./Collection-BBEOqT8K.js";import"./index-BMmayFd4.js";import"./Separator-BguzASD7.js";import"./SelectionManager-rdq46V5Z.js";import"./useEvent-5NbWc272.js";import"./scrollIntoView-r8-_icar.js";import"./SelectionIndicator-qNrhRmYv.js";import"./useDescription-Bz8Mdm6f.js";import"./ListKeyboardDelegate-A_4yUQtO.js";import"./PressResponder-BJ8UD5wa.js";import"./useLocalizedStringFormatter-Dq6DvKsR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Boh-5e6O.js";import"./VisuallyHidden-sLTk1Jd1.js";import"./Button-CYxRok4a.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B364Tmw0.js";import"./createLucideIcon-DcaVUwzg.js";import"./x-C-6TIg3t.js";import"./Heading-BRqMFDd5.js";import"./info-DPeGZwiZ.js";import"./Popover-BwbIdq-q.js";import"./useFormValidation-B9-OiVJw.js";import"./useField-B_Z_BFtL.js";import"./Form-BydZV5WJ.js";import"./check-DIx3zoRA.js";import"./useToggleState-D8tRBtRa.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
