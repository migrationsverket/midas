import{j as e}from"./iframe-zC7rO4bQ.js";import{C as m}from"./CheckboxGroup-D64GdmW4.js";import{C as p}from"./Checkbox-Bw1QORQ5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-uFgMezhi.js";import"./utils-DJDHHgRa.js";import"./clsx-B-dksMZM.js";import"./Text-B2ypy93g.js";import"./useFocusRing-BstF4Rhc.js";import"./index-Dv34dGV6.js";import"./index-2cydjPlj.js";import"./clsx-Ciqy0D92.js";import"./Text-Dq6fJTxq.js";import"./Label-Bx7neppF.js";import"./Button-C21x7wzp.js";import"./Hidden-iMadBBvo.js";import"./useLabel-1c7fDk1R.js";import"./useLabels-DXFco5wv.js";import"./useButton-DgxqVrin.js";import"./Dialog-BB0avTm9.js";import"./RSPContexts-CFrdutnD.js";import"./OverlayArrow-Dt9y-36y.js";import"./useResizeObserver-B2H2_9P0.js";import"./useControlledState-B6sghpTG.js";import"./Collection-DxVOSgQD.js";import"./index-BdtYwMvH.js";import"./Separator-YPafsAlb.js";import"./SelectionManager-SEkPfouS.js";import"./useEvent-DGX0zBSm.js";import"./scrollIntoView-Dr4WxEdF.js";import"./SelectionIndicator-ck_cgyj4.js";import"./useDescription-BPY04rZg.js";import"./ListKeyboardDelegate-eCR6Pu8q.js";import"./PressResponder-BGebUPsK.js";import"./useLocalizedStringFormatter-EHiso99i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BUEZL38U.js";import"./getScrollParent-DIXAYsd-.js";import"./VisuallyHidden-satwz06w.js";import"./x-Bhv1l1lN.js";import"./createLucideIcon-BRqO66r7.js";import"./useLocalizedStringFormatter-CWhgLXAn.js";import"./Heading-JaygidPh.js";import"./Button-w7ryzoNy.js";import"./Button.module-BB7N-cLd.js";import"./info-ukWc_v4A.js";import"./Popover-DEaEL_2E.js";import"./Form-q4yO7ogf.js";import"./useField-BJzHfYu3.js";import"./check-DTl0Y2Sy.js";import"./useToggleState-D-lEC4-R.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
