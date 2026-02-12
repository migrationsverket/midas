import{j as e}from"./iframe-B9EGKC1A.js";import{C as m}from"./CheckboxGroup-CNTU0Ued.js";import{C as p}from"./Checkbox-D-GD3vv4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cbj94XFe.js";import"./utils-DzN8UgTA.js";import"./clsx-B-dksMZM.js";import"./Text-BE5AMrY4.js";import"./useFocusRing-CQ5RM59H.js";import"./index--DS5PC0t.js";import"./index-DJ0aAN4x.js";import"./clsx-Ciqy0D92.js";import"./Text-BfUKDAVE.js";import"./Label-9kjuXUMm.js";import"./Button-DlLSg3Nk.js";import"./Hidden-wAD8NsRv.js";import"./useLabels-Bl3P75C2.js";import"./useButton-emt7P429.js";import"./Dialog-C1zjFiIB.js";import"./RSPContexts-CVSZKZ30.js";import"./OverlayArrow-CN8mZuYA.js";import"./useResizeObserver-DvzgCJ0k.js";import"./useControlledState-DY41YncH.js";import"./Collection-CdGAXvsM.js";import"./index-DQX0hg3j.js";import"./Separator-CQk7Ip0B.js";import"./SelectionManager-_FsQAwD6.js";import"./useEvent-a78rAipB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cjj8eMzJ.js";import"./useDescription-CEdPnwlS.js";import"./ListKeyboardDelegate-HX38iJDY.js";import"./PressResponder-M3Yf516e.js";import"./useLocalizedStringFormatter-CMmHX6mL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dkk1-PFS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CFcEMtwF.js";import"./Button-DTp360Zp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CvJyQgQK.js";import"./createLucideIcon-DF7Nxj94.js";import"./x-DnPGMz9F.js";import"./Heading-CGMzCXH3.js";import"./info-QKdZhh90.js";import"./Popover-Bf1DXh4C.js";import"./useFormValidation-DfmYSHhC.js";import"./useField-DD9fVkS4.js";import"./Form-C4Dl3S4i.js";import"./check-BaWTzUqT.js";import"./useToggleState-90ObTsoB.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
