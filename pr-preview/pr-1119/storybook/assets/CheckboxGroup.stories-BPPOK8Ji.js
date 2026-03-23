import{j as e}from"./iframe-BEfu4cuV.js";import{C as m}from"./CheckboxGroup-DEn4CZWO.js";import{C as p}from"./Checkbox-DUyvIVLI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-RSI06Lef.js";import"./utils-BeR4bg4o.js";import"./clsx-B-dksMZM.js";import"./Text-BC7EJkoa.js";import"./useFocusRing-C6rqVt89.js";import"./index-BZsmp3Wz.js";import"./index-XFYlP6zW.js";import"./clsx-Ciqy0D92.js";import"./Text-Cvg6C9XG.js";import"./Label-DXwM8wXB.js";import"./Button-DwT05Yas.js";import"./Hidden-DbtYdw9n.js";import"./useLabels-Cc8XnrID.js";import"./useButton-DfYe28nP.js";import"./Dialog-06TGaPLA.js";import"./RSPContexts-BAhkEONY.js";import"./OverlayArrow-CMjmhszM.js";import"./useResizeObserver-Bn_SDZGm.js";import"./useControlledState-DrRQ3ZH3.js";import"./Collection-BbeK18M5.js";import"./index-BumNEWW1.js";import"./Separator-IJyLqDMM.js";import"./SelectionManager-D2Bv4BF3.js";import"./useEvent--stzEwau.js";import"./scrollIntoView-B2G8ZQve.js";import"./SelectionIndicator-0ZDh-mJx.js";import"./useDescription-Bd5nXxJ0.js";import"./ListKeyboardDelegate-BwiHoAty.js";import"./PressResponder-DQXva7NF.js";import"./useLocalizedStringFormatter-Bskkm3TD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-METBmI9k.js";import"./getScrollParent-EJnTNbj6.js";import"./VisuallyHidden-CLBjEdEZ.js";import"./x-Dz0TYTCE.js";import"./createLucideIcon-BxYC1ZwZ.js";import"./useLocalizedStringFormatter-DJkiKMK1.js";import"./Heading-DSlhrNwf.js";import"./Button-CNvrI9qG.js";import"./Button.module-BB7N-cLd.js";import"./info-YAW-rBsC.js";import"./Popover-Cq7h5R0J.js";import"./Form-CziSx__h.js";import"./useField-PSDLB5ry.js";import"./check-CvuCZxUT.js";import"./useToggleState-yRGc-m5i.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
