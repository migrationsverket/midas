import{j as e}from"./iframe-Nwmt74ZK.js";import{C as m}from"./CheckboxGroup-C1ttPcSt.js";import{C as p}from"./Checkbox-DCZA9e8E.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Br06WdKh.js";import"./utils-C6s6aSRX.js";import"./clsx-B-dksMZM.js";import"./Text-C173mZfn.js";import"./useFocusRing-CWypq6Zx.js";import"./index-ch-f0Bx3.js";import"./index-BhWzPHH5.js";import"./clsx-Ciqy0D92.js";import"./Text-BsCHJ-9I.js";import"./Label-OJ9nlz6U.js";import"./Button-BFe_Cqcu.js";import"./Hidden-BPf52IcM.js";import"./useLabel-NM3EoEuU.js";import"./useLabels-BWJGA9gI.js";import"./useButton-DPlFKcS8.js";import"./Dialog-BLTL2zVN.js";import"./RSPContexts-DNNsF2wO.js";import"./OverlayArrow-N2Kt-7vw.js";import"./useResizeObserver-CVivOOg4.js";import"./useControlledState-BkVOv_aE.js";import"./Collection-04O837hB.js";import"./index-Di_k3Lqc.js";import"./Separator-CUvOzt4x.js";import"./SelectionManager-Bq1KI3CN.js";import"./useEvent-BjT0dJCf.js";import"./scrollIntoView-BcBxafTP.js";import"./SelectionIndicator-BR6m66Ye.js";import"./useDescription-NCT_P-H8.js";import"./ListKeyboardDelegate-Dyhz4T5l.js";import"./PressResponder-BlO6qK2G.js";import"./useLocalizedStringFormatter-BJ5VKpXB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DRZdtGyM.js";import"./getScrollParent-C5s_m2ho.js";import"./VisuallyHidden-CtXXaRnR.js";import"./x-CcBqmnVo.js";import"./createLucideIcon-BM-CznMN.js";import"./useLocalizedStringFormatter-C2TFJ0GM.js";import"./Heading-BhJocmar.js";import"./Button-BFrhdIAu.js";import"./Button.module-BB7N-cLd.js";import"./info-qgrcXFdE.js";import"./Popover-DWE94kjv.js";import"./Form-BUdIhl_c.js";import"./useField-B5-kLS0F.js";import"./check-B0NnPj1_.js";import"./useToggleState-DZx3ObKq.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
