import{j as e}from"./iframe-CPuYvm8s.js";import{C as m}from"./CheckboxGroup-Bmus-C6g.js";import{C as p}from"./Checkbox-B2q5vS6v.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-G-kOnKNy.js";import"./utils-CE1Vntqw.js";import"./clsx-B-dksMZM.js";import"./Text-fDukTeyt.js";import"./useFocusRing-QQHGmBCu.js";import"./index-DBbEfBNG.js";import"./index-D0qZXW9E.js";import"./clsx-Ciqy0D92.js";import"./Text-DVquWBhJ.js";import"./Label-DNnKgy8d.js";import"./Button-CPLgo8WB.js";import"./Hidden-BWUoGLqJ.js";import"./useLabels-DXd6EmCJ.js";import"./useButton-CRB1vlh0.js";import"./Dialog-DsT2J9Wt.js";import"./RSPContexts-B80FC-gZ.js";import"./OverlayArrow-DiI0m-Ge.js";import"./useResizeObserver-Cz5Xt0AE.js";import"./useControlledState-BltVdFKI.js";import"./Collection-BDFUB0zS.js";import"./index-BfJi_mRf.js";import"./Separator-Dc-oFM6B.js";import"./SelectionManager-BsJSLxME.js";import"./useEvent-Dhfs_hD8.js";import"./scrollIntoView-BxCcwxL9.js";import"./SelectionIndicator-CWCP1nsE.js";import"./useDescription-CiB6T9-T.js";import"./ListKeyboardDelegate-BHBk4Gfh.js";import"./PressResponder-ChG3RNYp.js";import"./useLocalizedStringFormatter-B0oCO7RT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ZSgkUXDz.js";import"./getScrollParent-BCbGbaUX.js";import"./VisuallyHidden-Di6zhsCH.js";import"./x-Mxy9Nn72.js";import"./createLucideIcon-DGj_OZpv.js";import"./useLocalizedStringFormatter-CLkxGaNH.js";import"./Heading-BO5x4INr.js";import"./Button-B6VpCJV_.js";import"./Button.module-BB7N-cLd.js";import"./info-D9cD3jmN.js";import"./Popover-uhYcdg0c.js";import"./Form-73T4bL8w.js";import"./useField-BBgvhRQz.js";import"./check-DPC-Spb_.js";import"./useToggleState-DHontYK5.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
