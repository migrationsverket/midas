import{j as e}from"./iframe-BGGCyDgM.js";import{C as m}from"./CheckboxGroup-ufAO6et3.js";import{C as p}from"./Checkbox-Bgf_RW4q.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dl2BDJut.js";import"./utils-DO-F69_Y.js";import"./clsx-B-dksMZM.js";import"./Text-eYsAB99o.js";import"./useFocusRing-CgXHCqVS.js";import"./index-D897gEwO.js";import"./index-B5Wjey1h.js";import"./clsx-Ciqy0D92.js";import"./Text-f8Fpe_5q.js";import"./Label-O0l3StCg.js";import"./Button-Cx7yfezp.js";import"./Hidden-C8IUZiWg.js";import"./useLabels-BYquqqxS.js";import"./useButton-BLQQLHjW.js";import"./Dialog-DXx9JGxU.js";import"./RSPContexts-DD_BGhEj.js";import"./OverlayArrow-BEwPagYl.js";import"./useResizeObserver-CMmR615Z.js";import"./useControlledState-B0GTzqoE.js";import"./Collection-CQwjMubf.js";import"./index-JLP76Q_E.js";import"./Separator-OnEnhmwE.js";import"./SelectionManager-Bp0yhV_i.js";import"./useEvent-DqUhpkp2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DurNKVRD.js";import"./useDescription-DxzFv_6R.js";import"./ListKeyboardDelegate-jAlOM_cw.js";import"./PressResponder-BLVphphK.js";import"./useLocalizedStringFormatter-DTenb4Ru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3jFfyUz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-i3QblTNI.js";import"./Button-CbQXvBqq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BEbUSZ1g.js";import"./createLucideIcon-DYtt1YAX.js";import"./x-DG2uGBCX.js";import"./Heading-C52-gJ0N.js";import"./info-BTZWfK7c.js";import"./Popover-BoKhiQsj.js";import"./useFormValidation-FPzZWdfk.js";import"./useField-7woY0xAJ.js";import"./Form-C0kbRUma.js";import"./check-BiWd66dR.js";import"./useToggleState-cWK0B-8R.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
