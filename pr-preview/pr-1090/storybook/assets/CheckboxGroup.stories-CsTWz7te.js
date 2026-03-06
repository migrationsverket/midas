import{j as e}from"./iframe-BGjWmNYx.js";import{C as m}from"./CheckboxGroup-C0ubeHU6.js";import{C as p}from"./Checkbox-DaFQCbnt.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Wp4mauGJ.js";import"./utils-D7zTzvCU.js";import"./clsx-B-dksMZM.js";import"./Text-tIbPkLw7.js";import"./useFocusRing-Cv1kbpvb.js";import"./index-CY1Z3dQf.js";import"./index-D-vxhsZL.js";import"./clsx-Ciqy0D92.js";import"./Text-B9EMTagt.js";import"./Label-Dx3FsG3d.js";import"./Button-XSu45boX.js";import"./Hidden-lp8KiHTo.js";import"./useLabels-Cv4iHN_P.js";import"./useButton-CFFtuGbm.js";import"./Dialog-6GVh3Jeb.js";import"./RSPContexts-D1Qe90-y.js";import"./OverlayArrow-C2Zs6ooA.js";import"./useResizeObserver-BNERkhke.js";import"./useControlledState-CvsrIW6T.js";import"./Collection-BuFB94CH.js";import"./index-BdIeoIee.js";import"./Separator-BHxadz7W.js";import"./SelectionManager-B25YHJY8.js";import"./useEvent-uGEaKInB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dbu_ggjF.js";import"./useDescription-Djzcv64r.js";import"./ListKeyboardDelegate-B0EJnu-g.js";import"./PressResponder-DJaNeCdk.js";import"./useLocalizedStringFormatter-ByLY54jA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zIN36Wbs.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ClgLzi2l.js";import"./Button-Dyr0yQHX.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B-DKJptC.js";import"./createLucideIcon-Df5FTM0K.js";import"./x-Cbv80ht6.js";import"./Heading-Bf5zVwtP.js";import"./info-CPtkNmSm.js";import"./Popover-CgoIhE9r.js";import"./useFormValidation-CXGeViRH.js";import"./useField-SHucniBA.js";import"./Form-DxBtc45O.js";import"./check-BWK8eD1i.js";import"./useToggleState-I3Y0jyjE.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
