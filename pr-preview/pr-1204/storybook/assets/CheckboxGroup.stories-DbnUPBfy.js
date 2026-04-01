import{j as e}from"./iframe-Bp0IlJF2.js";import{C as m}from"./CheckboxGroup-D7HmnUcE.js";import{C as p}from"./Checkbox-CcdO9vaw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-wBwSD7iB.js";import"./utils-CjNbFGiN.js";import"./clsx-B-dksMZM.js";import"./Text-BZtrmicZ.js";import"./useFocusRing-DY1AMT3v.js";import"./index-XmjshE1X.js";import"./index-DtgVGp9d.js";import"./clsx-Ciqy0D92.js";import"./Text-DQDnVDGB.js";import"./Label-D3-CQKdx.js";import"./Button-JPYQALf4.js";import"./Hidden-D7-h4wXt.js";import"./useLabel-DUfJ5yQb.js";import"./useLabels-BVCe-bH1.js";import"./useButton-BNdBcGOL.js";import"./Dialog-DZwT3NdJ.js";import"./RSPContexts-CYpW2htd.js";import"./OverlayArrow-7LmansMg.js";import"./useResizeObserver-CM8gp6cO.js";import"./useControlledState-ClzZCqkV.js";import"./Collection-B-doHFhu.js";import"./index-CUA_AUUL.js";import"./Separator-CE3_JLpD.js";import"./SelectionManager-C2XmfmHN.js";import"./useEvent-CSrgknyI.js";import"./scrollIntoView-BIHn6aZC.js";import"./SelectionIndicator-COAzCbhB.js";import"./useDescription-Dhw9gkBv.js";import"./ListKeyboardDelegate-DOXl-tDp.js";import"./PressResponder-miulPv98.js";import"./useLocalizedStringFormatter-BXFHs5VP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dkj0nb8S.js";import"./getScrollParent-BXxENsSc.js";import"./VisuallyHidden-BVXE9jAl.js";import"./x-C5nPMzLL.js";import"./createLucideIcon-DC4UrGzm.js";import"./useLocalizedStringFormatter-DkhY-lw-.js";import"./Heading-B6DJelp8.js";import"./Button-CuWSXiv5.js";import"./Button.module-BB7N-cLd.js";import"./info-D6wXztrE.js";import"./Popover-BaSI-_2S.js";import"./Form-wrPeumQm.js";import"./useField-DvLvioZE.js";import"./check-C70qoNFu.js";import"./useToggleState-BUoJnzVC.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
