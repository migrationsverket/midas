import{j as e}from"./iframe-CgeuBGg3.js";import{C as m}from"./CheckboxGroup-DG9yECqi.js";import{C as p}from"./Checkbox-BJMBKVVB.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Ck8WwPsT.js";import"./utils-D5ZiOk7c.js";import"./clsx-B-dksMZM.js";import"./Text-BY_Jfm-B.js";import"./useFocusRing-CtUB-pVk.js";import"./index-C0DQMcLX.js";import"./index-Dr51d6up.js";import"./clsx-Ciqy0D92.js";import"./Text-cOijWBlA.js";import"./Label-BWAkX44E.js";import"./Button-D49K8NN3.js";import"./Hidden-BuqiSPlJ.js";import"./useLabels-CcDa7eqk.js";import"./useButton-BafbxBxx.js";import"./Dialog-CTdZ_zB9.js";import"./RSPContexts-Cmp2aHI0.js";import"./OverlayArrow-BMo0uLg8.js";import"./useResizeObserver-BObk-iBp.js";import"./useControlledState-hrYI1rS_.js";import"./Collection-C0rNIg_w.js";import"./index-xz0YMXZu.js";import"./Separator-ZaBb-Xpb.js";import"./SelectionManager-FueJVEvO.js";import"./useEvent-DfWlG2fS.js";import"./scrollIntoView-BOtoWgvj.js";import"./SelectionIndicator-B5iuuJYR.js";import"./useDescription-FPRM_do-.js";import"./ListKeyboardDelegate-BJowuom4.js";import"./PressResponder-CObnC5EZ.js";import"./useLocalizedStringFormatter-DdY9z82P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-60pw6fU8.js";import"./getScrollParent-BZNtwC6u.js";import"./VisuallyHidden-nAkuDexq.js";import"./Button-B3bHm7yN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BVH642Vw.js";import"./createLucideIcon-j5uHxTIE.js";import"./x-82ZwNPo6.js";import"./Heading-BxH2CNNp.js";import"./info-BukTWBXk.js";import"./Popover-Bu8jD-RO.js";import"./useFormValidation-B3OZSiFR.js";import"./useField-CrURjpqd.js";import"./Form-OezuEZAr.js";import"./check-BrJWqDvS.js";import"./useToggleState-BkXl4epD.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
