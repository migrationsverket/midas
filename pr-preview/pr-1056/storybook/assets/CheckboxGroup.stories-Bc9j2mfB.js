import{j as e}from"./iframe-BUyds97o.js";import{C as m}from"./CheckboxGroup-BhnxCHaS.js";import{C as p}from"./Checkbox-CBzHAYj4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-nzuM8Mkm.js";import"./utils-BPu6xsrW.js";import"./clsx-B-dksMZM.js";import"./Text-Dm1It-3G.js";import"./useFocusRing-Bm-8HNv9.js";import"./index-511sCdBp.js";import"./index-jhER429G.js";import"./clsx-Ciqy0D92.js";import"./Text-DYJP5A76.js";import"./Label-9z55oe_h.js";import"./Button-HXR-7m9h.js";import"./Hidden-D-uqQF0z.js";import"./useLabels-BK_yTQcU.js";import"./useButton-v3-Q6iUD.js";import"./Dialog-BruVrcEm.js";import"./RSPContexts-B3kcM3sq.js";import"./OverlayArrow-Ba0W7a83.js";import"./useResizeObserver-Dk-yO2oS.js";import"./useControlledState-Dk1B153b.js";import"./Collection-0h-PKilE.js";import"./index-CBtcg-XG.js";import"./Separator-nYCPhiEm.js";import"./SelectionManager-DAuT0Dm6.js";import"./useEvent-CIz6tOnB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BdhRxb3C.js";import"./useDescription-BQAUwCoM.js";import"./ListKeyboardDelegate-DMbdK5-n.js";import"./PressResponder-Cbz_cq3p.js";import"./useLocalizedStringFormatter-DVo_dtBE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BIC-pSZl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bxnSUgOY.js";import"./Button-N-WvUv-N.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_jtq6xa.js";import"./createLucideIcon-iD7jktQ6.js";import"./x-D7YsntyJ.js";import"./Heading-eSq5c7xp.js";import"./info-BtAcpWtw.js";import"./Popover-BoQpzM8u.js";import"./useFormValidation-DsGu4ICd.js";import"./useField-C5IKysth.js";import"./Form-DKSqMjyW.js";import"./check-BkVnLs9U.js";import"./useToggleState-C7hVXO0R.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
