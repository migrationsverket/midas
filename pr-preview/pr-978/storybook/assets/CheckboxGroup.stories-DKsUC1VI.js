import{j as e}from"./iframe-BGtyy6fd.js";import{C as m}from"./CheckboxGroup-ClukCLR1.js";import{C as p}from"./Checkbox-BV4cGZaL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CeFSAGIb.js";import"./utils-CccsvD7u.js";import"./clsx-B-dksMZM.js";import"./Text-CdSUS3L4.js";import"./useFocusRing-BnRxtNNt.js";import"./index-Jo84nh3h.js";import"./index-iE9NyH8V.js";import"./clsx-Ciqy0D92.js";import"./Text-BVf8H_wM.js";import"./Label-B-l5rVHP.js";import"./Button-DrTjj1gj.js";import"./Hidden-BxOQW0OL.js";import"./useLabels-C6qEHWqP.js";import"./useButton-BpARo-s5.js";import"./Dialog-BPV-Pf39.js";import"./RSPContexts-CVImfJEg.js";import"./OverlayArrow-CmjTiIwA.js";import"./useResizeObserver-CU-PaB2M.js";import"./useControlledState-NBBb3dwB.js";import"./Collection-CHaufu6-.js";import"./index-Csz31sU_.js";import"./Separator-BU2fOkre.js";import"./SelectionManager-BoytQZuc.js";import"./useEvent-CtQhVAtx.js";import"./scrollIntoView-nLxHXHgJ.js";import"./SelectionIndicator-DPsuFEfF.js";import"./useDescription-C16OAo1l.js";import"./ListKeyboardDelegate-zE1Wl869.js";import"./PressResponder-C00aJ731.js";import"./useLocalizedStringFormatter-BciR1wkJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DmaRQTrd.js";import"./VisuallyHidden-ClSljMM6.js";import"./Button-D11DdKki.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0q1zQmh.js";import"./createLucideIcon-4ZkmUN36.js";import"./x-Dx2ju_wc.js";import"./Heading-B04CcTxN.js";import"./info-De1TvcOO.js";import"./Popover-C6lXhGDs.js";import"./useFormValidation-By4gnXrd.js";import"./useField-BZ1YzjEa.js";import"./Form-BrMgft87.js";import"./check-B1TckU8j.js";import"./useToggleState-CHqVX4NK.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
