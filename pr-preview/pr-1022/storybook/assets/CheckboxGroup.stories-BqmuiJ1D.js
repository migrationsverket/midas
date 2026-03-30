import{j as e}from"./iframe-BCVsy88N.js";import{C as m}from"./CheckboxGroup-CzbKlCTd.js";import{C as p}from"./Checkbox-B2IZYjZA.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DIexkAgJ.js";import"./utils-C-OmHNLm.js";import"./clsx-B-dksMZM.js";import"./Text-CJD2elUx.js";import"./useFocusRing-eWhXbche.js";import"./index-BwfJQ9F8.js";import"./index-cJVZ5RXC.js";import"./clsx-Ciqy0D92.js";import"./Text-C7Bb6ebF.js";import"./Label-DBJKyZzi.js";import"./Button-Kvyi1RRX.js";import"./Hidden-CN3dXu03.js";import"./useLabel-BbZWMYwa.js";import"./useLabels-COZKzSvp.js";import"./useButton-DfNnGNTV.js";import"./Dialog-BTlZm9xe.js";import"./RSPContexts-BeHTEqOC.js";import"./OverlayArrow-CfsAUW8K.js";import"./useResizeObserver-Cju_kbVb.js";import"./useControlledState-jD-tqQdO.js";import"./Collection-D8dxrVCb.js";import"./index-ByIdwhbP.js";import"./Separator-DcMCi0QZ.js";import"./SelectionManager-DfTkzoNg.js";import"./useEvent-D0oKdA7w.js";import"./scrollIntoView-BpYW2Snh.js";import"./SelectionIndicator-Eo-pa4gg.js";import"./useDescription-BypmPDUq.js";import"./ListKeyboardDelegate-Bw34GQYt.js";import"./PressResponder-BJ_dW21L.js";import"./useLocalizedStringFormatter-atdiyxXD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzNdqX9T.js";import"./getScrollParent-0ANyO0oI.js";import"./VisuallyHidden-D6HKc_n0.js";import"./x-CDS6gFVI.js";import"./createLucideIcon-D1oE0F07.js";import"./useLocalizedStringFormatter-mDxu21Fd.js";import"./Heading-bh_ln7Ke.js";import"./Button-VV8KlKzK.js";import"./Button.module-BFenTVPP.js";import"./info-n556K2_x.js";import"./Popover-CaabIHGa.js";import"./Form-Dy6Ga4aj.js";import"./useField-ClRCUqkF.js";import"./check-DHU0cjFu.js";import"./useToggleState-GiuBKyzX.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
