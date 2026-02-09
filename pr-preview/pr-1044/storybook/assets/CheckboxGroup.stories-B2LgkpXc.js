import{j as e}from"./iframe-D6IpBoiw.js";import{C as m}from"./CheckboxGroup-Btd5FT99.js";import{C as p}from"./Checkbox-CyMmrs5M.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D84PxaCJ.js";import"./utils-DrRnVz6M.js";import"./clsx-B-dksMZM.js";import"./Text-DAWTtlkt.js";import"./useFocusRing-DDjRvQVt.js";import"./index-Dke63n0T.js";import"./index-Cdvq_tAn.js";import"./clsx-Ciqy0D92.js";import"./Text-qQ3S5Jc_.js";import"./Label-CYZ04qFY.js";import"./Button-ho_h7HBc.js";import"./Hidden-CzdFjV_G.js";import"./useLabels-Ca7mubzD.js";import"./useButton-BZVVg511.js";import"./Dialog-BP6O-jWc.js";import"./RSPContexts-DEazweFL.js";import"./OverlayArrow-yIqFLxSG.js";import"./useResizeObserver-BoHXCLyr.js";import"./useControlledState-CLuCJDnt.js";import"./Collection-BXe7XviT.js";import"./index-D-8A3CKx.js";import"./Separator-Dy-5_Txz.js";import"./SelectionManager-BdDUSQWT.js";import"./useEvent-D0T-5SZD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bm7ArBIF.js";import"./useDescription-Cef-uVL5.js";import"./ListKeyboardDelegate-BafDUYsL.js";import"./PressResponder-BCqBFdus.js";import"./useLocalizedStringFormatter-S2cYCAmY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D50INRZl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CvlpTHpP.js";import"./Button-Cb8vfEHL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D7KJljx3.js";import"./createLucideIcon-C8Gze4Yd.js";import"./x-BQZH2C42.js";import"./Heading-GsAsFs17.js";import"./info-CMki08a3.js";import"./Popover-CFhA0iae.js";import"./useFormValidation-C0YcTuLl.js";import"./useField-C36_1XdQ.js";import"./Form-Csw1KBWi.js";import"./check-ByJ3Yi9G.js";import"./useToggleState-BTFzzIWQ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
