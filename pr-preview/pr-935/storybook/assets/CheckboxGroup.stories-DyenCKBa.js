import{j as e}from"./iframe-CRoNsbQO.js";import{C as m}from"./CheckboxGroup-BuEnPWKC.js";import{C as p}from"./Checkbox-wWR64z7N.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dj5cdKz5.js";import"./utils-D0ifQBPW.js";import"./clsx-B-dksMZM.js";import"./Text-CAsCU6A1.js";import"./useFocusRing-DQkUJ1am.js";import"./index-DMJTdnmZ.js";import"./index-D3s2XdJN.js";import"./clsx-Ciqy0D92.js";import"./Text-CrBpTqh-.js";import"./Label-NtYVQWgr.js";import"./Button-km7jXYEC.js";import"./Hidden-B-LzNKej.js";import"./useLabels-BhNZU1Aw.js";import"./useButton-QNz5bkbl.js";import"./Dialog-BEM8XTz6.js";import"./RSPContexts-kFSkNoSC.js";import"./OverlayArrow-ltrji9kN.js";import"./useResizeObserver-kQhUJ21Y.js";import"./useControlledState-Dj6nb6WC.js";import"./Collection-D3dByBD3.js";import"./index-N3otLqmC.js";import"./Separator-DCbqwq0a.js";import"./SelectionManager-woNpDBbA.js";import"./useEvent-aJGP5zxw.js";import"./scrollIntoView-BrB1dIDm.js";import"./SelectionIndicator-DW40YJH5.js";import"./useDescription-D4n7GTlG.js";import"./ListKeyboardDelegate-C8YuRENt.js";import"./PressResponder-Blc0Fj-n.js";import"./useLocalizedStringFormatter-DvLKTy1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CsA_2YDI.js";import"./VisuallyHidden-BDiINJ_f.js";import"./useLocalizedStringFormatter-CXNQgKhO.js";import"./Button-DGaMX184.js";import"./Button.module-CtQ1deO8.js";import"./x-BOdTfTaA.js";import"./createLucideIcon-DIDS4uVQ.js";import"./Heading-BXuhk9-h.js";import"./info-CEk2Scvq.js";import"./Popover-CZGpUzdU.js";import"./useFormValidation-Bf5gX9Wk.js";import"./useField-kdvN3WE1.js";import"./Form-BEmGWFSp.js";import"./check-puNzWH8E.js";import"./useToggleState-CGD_lb13.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
