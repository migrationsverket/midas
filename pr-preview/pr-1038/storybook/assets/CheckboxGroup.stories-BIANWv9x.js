import{j as e}from"./iframe-CgfDwMsT.js";import{C as m}from"./CheckboxGroup-SKFyqlx4.js";import{C as p}from"./Checkbox-BSRBHSoY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B7h73jse.js";import"./utils-CLuUze_r.js";import"./clsx-B-dksMZM.js";import"./Text-E6YbvuHS.js";import"./useFocusRing-aa-V_nwI.js";import"./index-BNYk_4JU.js";import"./index-Dv-85DYp.js";import"./clsx-Ciqy0D92.js";import"./Text-CaslyU5o.js";import"./Label-BzumT7fp.js";import"./Button-C7WplXtK.js";import"./Hidden-CJELcxwQ.js";import"./useLabels-DNGz1z-B.js";import"./useButton-BH5dt01l.js";import"./Dialog-CwSajge6.js";import"./RSPContexts-DvQiZ2rE.js";import"./OverlayArrow-CAjKRREM.js";import"./useResizeObserver-UqoURxQ-.js";import"./useControlledState-iA0OTCu9.js";import"./Collection-C4M8l1yV.js";import"./index-UGE9mCaU.js";import"./Separator-g-pZPYls.js";import"./SelectionManager-Cl8CuRve.js";import"./useEvent-e-NwapiS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-t9jVfqOa.js";import"./useDescription-CrupViey.js";import"./ListKeyboardDelegate-BJ31K7BN.js";import"./PressResponder-C_J1gD1a.js";import"./useLocalizedStringFormatter-Bgfo292P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0eTp-du.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DyZ9BPVk.js";import"./Button-C6uLPlVc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzThpmxU.js";import"./createLucideIcon-CwSVauo5.js";import"./x-Bz2PUtNw.js";import"./Heading-DvDu4lhU.js";import"./info-CBhSIH8T.js";import"./Popover-5ceXyevA.js";import"./useFormValidation-COEBX163.js";import"./useField-CvXFpz9I.js";import"./Form-BWcEeBnI.js";import"./check-DR1tMG6C.js";import"./useToggleState-CgcYul7U.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
