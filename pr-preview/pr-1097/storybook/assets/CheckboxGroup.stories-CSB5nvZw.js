import{j as e}from"./iframe-BxhzVfg2.js";import{C as m}from"./CheckboxGroup-DPeGnXcN.js";import{C as p}from"./Checkbox-CMEoWMWf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-0WAd1Y6E.js";import"./utils-DZ6ahdJp.js";import"./clsx-B-dksMZM.js";import"./Text-DJy4h6GN.js";import"./useFocusRing-bIPgWBhX.js";import"./index-BdD9_fMh.js";import"./index-BQnXjsO_.js";import"./clsx-Ciqy0D92.js";import"./Text-0UCV12dD.js";import"./Label-TwuIGGje.js";import"./Button-BWZAZeiF.js";import"./Hidden-DbfZ_4s1.js";import"./useLabels-D-t3MvLa.js";import"./useButton-BdPz5CFW.js";import"./Dialog-Cu1wCO9M.js";import"./RSPContexts-6uyhJgkS.js";import"./OverlayArrow-B7oQ_cUB.js";import"./useResizeObserver-DgHu5p4N.js";import"./useControlledState-CD2bBDu6.js";import"./Collection-CEh8H5R4.js";import"./index-Bka3Lxbj.js";import"./Separator-C4F_4thm.js";import"./SelectionManager-Bw1pNtXG.js";import"./useEvent-Db77X8Ds.js";import"./scrollIntoView-BP0QIdto.js";import"./SelectionIndicator-eisYCPgp.js";import"./useDescription-BuazjX7t.js";import"./ListKeyboardDelegate-B7qWljEu.js";import"./PressResponder-CF9BR_nn.js";import"./useLocalizedStringFormatter-DBjxKF2m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaiYKkGE.js";import"./getScrollParent-RVUz05Tj.js";import"./VisuallyHidden-CI9pT65P.js";import"./Button-DVCkWjV4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C--O9Jox.js";import"./createLucideIcon-B9VWei3c.js";import"./x-DcnHgmtQ.js";import"./Heading-DicC2kkf.js";import"./info-DEPlyVkX.js";import"./Popover-DarRTTTw.js";import"./useFormValidation-CovvDpdr.js";import"./useField-D0R3_hHU.js";import"./Form-CSuUxMvQ.js";import"./check-BhSWQBFZ.js";import"./useToggleState-9JidhOI6.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
