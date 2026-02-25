import{j as e}from"./iframe-BI14_MVF.js";import{C as m}from"./CheckboxGroup-ibJFckAN.js";import{C as p}from"./Checkbox-C5FLFpMH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-0gwuUdiP.js";import"./utils-CUoFg1P-.js";import"./clsx-B-dksMZM.js";import"./Text-CI44Yo6S.js";import"./useFocusRing-C_drv0-d.js";import"./index-EBvLle30.js";import"./index-DjRcaABs.js";import"./clsx-Ciqy0D92.js";import"./Text-RJrnIXBc.js";import"./Label-DNvudnHe.js";import"./Button-C1lGy2rc.js";import"./Hidden-fX2mzFJg.js";import"./useLabels-RkUsd7_h.js";import"./useButton-UXl7frIQ.js";import"./Dialog-BN4p9wge.js";import"./RSPContexts-BdlFwrnM.js";import"./OverlayArrow-Dkdcjg4e.js";import"./useResizeObserver-BHsIR3DY.js";import"./useControlledState-C7wUKhFW.js";import"./Collection-CZ9Jc2KR.js";import"./index-D2lykJvQ.js";import"./Separator-oY1bR7gh.js";import"./SelectionManager-BsrCfNRx.js";import"./useEvent-Cl7U-xPX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CJ9gdQ2K.js";import"./useDescription-DRcfnO6m.js";import"./ListKeyboardDelegate-B-MPQD6f.js";import"./PressResponder-Cud_auOR.js";import"./useLocalizedStringFormatter-BsyiUrEv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZXS549E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CyW44Voa.js";import"./Button-CeI3qDWP.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-SRb7twPp.js";import"./createLucideIcon-DENDzJzs.js";import"./x-BV47LBd3.js";import"./Heading-CbFl5iEv.js";import"./info-CBM0LSSb.js";import"./Popover-Awsv4SWr.js";import"./useFormValidation-CI5p8J41.js";import"./useField-10jeCMxt.js";import"./Form-CvFoCgv-.js";import"./check-BYRaeB6O.js";import"./useToggleState-TqaX5QDS.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
