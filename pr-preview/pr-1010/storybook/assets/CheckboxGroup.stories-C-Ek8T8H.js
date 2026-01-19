import{j as e}from"./iframe-B63rKYqU.js";import{C as m}from"./CheckboxGroup-DgE4CMYB.js";import{C as p}from"./Checkbox-DtwcM_Wn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D2ragNVA.js";import"./utils-B8PawZ4p.js";import"./clsx-B-dksMZM.js";import"./Text-Bq093QF5.js";import"./useFocusRing-DmPhrr6X.js";import"./index-BYawnw9P.js";import"./index-uItY6MEj.js";import"./clsx-Ciqy0D92.js";import"./Text-BAZ032Hu.js";import"./Label-CNTpYo0b.js";import"./Button-C9TkbvA1.js";import"./Hidden-BYyNs38Y.js";import"./useLabels-Vvrocbqw.js";import"./useButton-BJDVqpSD.js";import"./Dialog-D83Cds8z.js";import"./RSPContexts--nuT990L.js";import"./OverlayArrow-L791iWYJ.js";import"./useResizeObserver-mVBAO9cG.js";import"./useControlledState-D2SrYs4q.js";import"./Collection-CY2MdGwK.js";import"./index-B8cjTzbQ.js";import"./Separator-DvfsOdRN.js";import"./SelectionManager-DzCv25Xr.js";import"./useEvent-BtzPI4lT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B9usOHSg.js";import"./useDescription-kCZJFcL9.js";import"./ListKeyboardDelegate-CM7zLjwQ.js";import"./PressResponder-CehoTQ2a.js";import"./useLocalizedStringFormatter-KGBF3wy6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5ezL5Ud.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D1fJoZKk.js";import"./Button-CpkwJ8HO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bjx4e2b1.js";import"./createLucideIcon-Cv9mqkPS.js";import"./x-CqJOIyZm.js";import"./Heading-CZ9K5txu.js";import"./info-CcxI7oxh.js";import"./Popover-DTwx4U23.js";import"./useFormValidation-Bsz9sBLD.js";import"./useField-qBosTa6s.js";import"./Form-G2zsCk4o.js";import"./check-Dl-n2SkS.js";import"./useToggleState-DddEmw4p.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
