import{j as e}from"./iframe-BGuMGxmc.js";import{C as m}from"./CheckboxGroup-DWj2iKmc.js";import{C as p}from"./Checkbox-B4LNcKeU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CrkbqQXw.js";import"./utils-Ca8G7ZGu.js";import"./clsx-B-dksMZM.js";import"./Text-D1Wivcto.js";import"./useFocusRing-DJApir6W.js";import"./index-B9qsJJ_r.js";import"./index-CvgehkYp.js";import"./clsx-Ciqy0D92.js";import"./Text-X11QTVVP.js";import"./Label-DgyJX_Fc.js";import"./Button-C3vJklaf.js";import"./Hidden-Blt3qGK-.js";import"./useLabels-CUg_cq6I.js";import"./useButton-BJrbop6V.js";import"./Dialog-BJQvF6PQ.js";import"./RSPContexts-CnYkPQTV.js";import"./OverlayArrow-ld_Fcod1.js";import"./useResizeObserver-CeeUBLia.js";import"./useControlledState-7HU2cwdp.js";import"./Collection-DE67HbN5.js";import"./index-PiVRGSsF.js";import"./Separator-DRH7_b0z.js";import"./SelectionManager-GAh7yBJ1.js";import"./useEvent-B0xi010u.js";import"./scrollIntoView-DUfrCx46.js";import"./SelectionIndicator-DuhzZcnq.js";import"./useDescription-CkSrBGkd.js";import"./ListKeyboardDelegate-C6e2aQfG.js";import"./PressResponder-k2rJyGDQ.js";import"./useLocalizedStringFormatter-CJMbHzz3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjTqUlHX.js";import"./getScrollParent-B6QXkZoK.js";import"./VisuallyHidden-D0q9pbf-.js";import"./x-DjU_SE9r.js";import"./createLucideIcon-YpCIaABn.js";import"./useLocalizedStringFormatter-Bx3yadO6.js";import"./Heading-Cle64A_X.js";import"./Button-ClNKt42i.js";import"./Button.module-BB7N-cLd.js";import"./info-D2_z502h.js";import"./Popover-CIjuEgaB.js";import"./Form-BbF92qNF.js";import"./useField-DD2NBLXV.js";import"./check-DV08cCGb.js";import"./useToggleState-CmLJwS3Q.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
