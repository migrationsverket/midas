import{j as e}from"./iframe-CgWG_iU2.js";import{C as m}from"./CheckboxGroup-vBeBJWVb.js";import{C as p}from"./Checkbox-Bme3IuLn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D-IJ4T5L.js";import"./utils-_M8wNiGT.js";import"./clsx-B-dksMZM.js";import"./Text-Dj7d9dGS.js";import"./useFocusRing-Dsycni8a.js";import"./index-DxbG3zi7.js";import"./index-BG0K86OR.js";import"./clsx-Ciqy0D92.js";import"./Text-dFUGDIq7.js";import"./Label-Bvp9caED.js";import"./Button-ByOlI6-C.js";import"./Hidden-D3aMc9rP.js";import"./useLabel-DU9qnLW0.js";import"./useLabels-D66rAip6.js";import"./useButton-CtVOG2X0.js";import"./Dialog-NxrkXmQs.js";import"./RSPContexts-Bs45BnO9.js";import"./OverlayArrow-CpNrJJvN.js";import"./useResizeObserver-C6DyJ9gC.js";import"./useControlledState-BM6BESXh.js";import"./Collection-BcC6_I8T.js";import"./index-Dn0BG2yc.js";import"./Separator-BcQ7oZhF.js";import"./SelectionManager-CTT6WwYs.js";import"./useEvent-FPbp72qp.js";import"./scrollIntoView-CqQuMmwT.js";import"./SelectionIndicator-C0agU0dY.js";import"./useDescription-CpHd73jI.js";import"./ListKeyboardDelegate-DqqiQJTe.js";import"./PressResponder-BcFSV-iY.js";import"./useLocalizedStringFormatter-BQ-Yoit3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BG0HieEY.js";import"./getScrollParent-DZ0TSZLG.js";import"./VisuallyHidden-oanLmiAX.js";import"./ModalOverlay-CXx03gPK.js";import"./x-Dv2iooYO.js";import"./createLucideIcon-DjCctUN5.js";import"./useLocalizedStringFormatter-Bvq7R4Wr.js";import"./Heading-Cj6qOAV_.js";import"./Button-nHuGQ5i0.js";import"./Button.module-BB7N-cLd.js";import"./info-2HeSXoER.js";import"./Popover-uHHf-EWQ.js";import"./Form-CrH2ZpvP.js";import"./useField-s0ioTJPg.js";import"./check-ECiiDiS4.js";import"./useToggleState-CEAqyIrS.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
