import{j as e}from"./iframe-CL23rVh3.js";import{C as m}from"./CheckboxGroup-DdfWnNqH.js";import{C as p}from"./Checkbox-CgtkTnOm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B8XPk18T.js";import"./utils-CJ-Ij_R0.js";import"./clsx-B-dksMZM.js";import"./Text-D1eXcxCX.js";import"./useFocusRing-DkzWPJgi.js";import"./index-D2io7692.js";import"./index-Dps1x4rp.js";import"./clsx-Ciqy0D92.js";import"./Text-CytNYYuf.js";import"./Label-ndTmjWwr.js";import"./Button-UvNdmwwk.js";import"./Hidden-DgDLAcvn.js";import"./useLabels-X6VpgWTq.js";import"./useButton-CPhZ5th1.js";import"./Dialog-BUG9FcSE.js";import"./RSPContexts-BwT2hLmq.js";import"./OverlayArrow-DlR4o7ln.js";import"./useResizeObserver-CgV-xQ3S.js";import"./useControlledState-BZgWFFOj.js";import"./Collection-DmYijMBg.js";import"./index-CL2OrqBk.js";import"./Separator-B_3JL9pu.js";import"./SelectionManager-DWc2VhCs.js";import"./useEvent-DN98bbL5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CvZWjb_I.js";import"./useDescription-CGYkSA8m.js";import"./ListKeyboardDelegate-B_yZFk2R.js";import"./PressResponder-C7pkJOw0.js";import"./useLocalizedStringFormatter-C59J0DnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CEx-mtZ4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D3iEUUnG.js";import"./Button-BRfjEKmY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_0t_udJ.js";import"./createLucideIcon-CscazfU0.js";import"./x-C4ZhBYeY.js";import"./Heading-BhQ0A1J0.js";import"./info-Dz74NSTI.js";import"./Popover-C0UOUX9v.js";import"./useFormValidation-D_Pj3Rz9.js";import"./useField-r5PwNz1w.js";import"./Form-CyoqJmJ7.js";import"./check-LWF9xlTY.js";import"./useToggleState-CCwZpAqT.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
