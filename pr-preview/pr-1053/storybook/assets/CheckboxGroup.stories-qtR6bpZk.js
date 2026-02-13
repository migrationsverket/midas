import{j as e}from"./iframe-HTnyBHVP.js";import{C as m}from"./CheckboxGroup-9quTcsyr.js";import{C as p}from"./Checkbox-D-8hUgLw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-W3cPolKE.js";import"./utils-nUZbU1Wv.js";import"./clsx-B-dksMZM.js";import"./Text-C-D185rS.js";import"./useFocusRing-cQQ3mgw6.js";import"./index-0Fr-bx-l.js";import"./index-B1GoJJ0m.js";import"./clsx-Ciqy0D92.js";import"./Text-C2CdsLAg.js";import"./Label-BWhZYE3H.js";import"./Button-D68YtQlI.js";import"./Hidden-CcyJsNu-.js";import"./useLabels-B85yUaIW.js";import"./useButton-kqwXbyL2.js";import"./Dialog-L73-GDke.js";import"./RSPContexts-CSmDHtYi.js";import"./OverlayArrow-CR_XWhPQ.js";import"./useResizeObserver-BMccFxro.js";import"./useControlledState-BvewPd3v.js";import"./Collection-I5rDMrLQ.js";import"./index-Davix61X.js";import"./Separator-cG4CF9Fz.js";import"./SelectionManager-BOKkgdij.js";import"./useEvent-DHkhC7Ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DNlfdaIc.js";import"./useDescription-DU_40zC-.js";import"./ListKeyboardDelegate-DecHNBR0.js";import"./PressResponder-DFLjK9LV.js";import"./useLocalizedStringFormatter-BalekKZg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZId00L7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DL4mh8Hc.js";import"./Button-CNzpSaeX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Pq2987gd.js";import"./createLucideIcon-D9zOPHSY.js";import"./x-BVS5B-gf.js";import"./Heading-DJQooB_9.js";import"./info-BNoFBGrg.js";import"./Popover-Ck3aypzP.js";import"./useFormValidation-FXPeM9Pb.js";import"./useField-D-1_vJxx.js";import"./Form-BXv3COVl.js";import"./check-D8qXGW1Z.js";import"./useToggleState-DuLljOdu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
