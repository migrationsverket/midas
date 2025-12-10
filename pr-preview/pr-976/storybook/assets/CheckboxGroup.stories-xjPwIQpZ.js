import{j as e}from"./iframe-BHqTUq8s.js";import{C as m}from"./CheckboxGroup-BDAO23Ks.js";import{C as p}from"./Checkbox-BuCB18wy.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DRRjbRt6.js";import"./utils-Bj3EyYaW.js";import"./clsx-B-dksMZM.js";import"./Text-l0B9lw7d.js";import"./useFocusRing-BmhCrYVv.js";import"./index-Sstif_cL.js";import"./index-cPauk73w.js";import"./clsx-Ciqy0D92.js";import"./Text-BNa5DR9o.js";import"./Label-BNjGv8mt.js";import"./Button-CE94D4y2.js";import"./Hidden-N1ucyMbU.js";import"./useLabels-D7M8cQNq.js";import"./useButton-DYUODf-M.js";import"./Dialog-Br4zbXxI.js";import"./RSPContexts-Ttp8fkt6.js";import"./OverlayArrow-C_OamBiX.js";import"./useResizeObserver-cm4qtY3A.js";import"./useControlledState-VO85oOjD.js";import"./Collection-r37viCRb.js";import"./index-DL_Rgot6.js";import"./Separator-Bk2MUFJ7.js";import"./SelectionManager-Btz1onrS.js";import"./useEvent-C1jiU2Qc.js";import"./scrollIntoView-D02Gxwgm.js";import"./SelectionIndicator-BmKRoRFc.js";import"./useDescription-SMoFRkYN.js";import"./ListKeyboardDelegate-BPp9wv8J.js";import"./PressResponder-CLCZD3PG.js";import"./useLocalizedStringFormatter-Bp2mibmh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-uOpIaMSZ.js";import"./VisuallyHidden-BluHmF1Q.js";import"./Button-B5hBY_tv.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-Djq8wsFX.js";import"./createLucideIcon-ClnAiwMi.js";import"./x-D1nhCFMc.js";import"./Heading-Bk9UwyhT.js";import"./info-AlYopkhl.js";import"./Popover-B_aiaKcW.js";import"./useFormValidation-bHmqxDjI.js";import"./useField-DcudRm_h.js";import"./Form-CD3uZi_W.js";import"./check-2WOXg9Sl.js";import"./useToggleState-Cc0kOyEk.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
