import{j as e}from"./iframe-DgqscTRS.js";import{C as m}from"./CheckboxGroup-D1Z50e30.js";import{C as p}from"./Checkbox-DQxJPQsg.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BVwBPTGy.js";import"./utils-ihbz_05J.js";import"./clsx-B-dksMZM.js";import"./Text-DJuD0Zjj.js";import"./useFocusRing-Dhh24Qf7.js";import"./index-BDRZoG0T.js";import"./index-BTEBzuGD.js";import"./clsx-Ciqy0D92.js";import"./Text-BkGEZWiq.js";import"./Label-DRxYKUx7.js";import"./Button-BI2DB5nm.js";import"./Hidden-CnPSLy5g.js";import"./useLabels-BVW64SDg.js";import"./useButton-CYDL-Eqv.js";import"./Dialog-LumjKnsf.js";import"./RSPContexts-CP-g27nm.js";import"./OverlayArrow-Bs0Iv0dX.js";import"./useResizeObserver-D-wRyK6D.js";import"./useControlledState-BxU5vAOZ.js";import"./Collection-cGityvOE.js";import"./index-Cl8Gq0kx.js";import"./Separator-DukQr30q.js";import"./SelectionManager-ZcALuitN.js";import"./useEvent-BBYgrCp6.js";import"./scrollIntoView-Ch6Ee1HN.js";import"./SelectionIndicator-CaTBieRu.js";import"./useDescription-BEpuG-o8.js";import"./ListKeyboardDelegate-DFfkSN-z.js";import"./PressResponder-CCeCLGVE.js";import"./useLocalizedStringFormatter-Cwzoxtmk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0j3Y2oO.js";import"./getScrollParent-CyRuL-ax.js";import"./VisuallyHidden-anAyNDA7.js";import"./x-DgcRhLbY.js";import"./createLucideIcon-vPVORsKq.js";import"./useLocalizedStringFormatter-CetFiEjn.js";import"./Heading-DV4kOouI.js";import"./Button-CpE1Qe3l.js";import"./Button.module-D_C6WeTN.js";import"./info-L784nqvz.js";import"./Popover-BmXLViZy.js";import"./useFormValidation-MoGwb86J.js";import"./useField-C3Xp4KM5.js";import"./Form-gm0DNf8-.js";import"./check-C7cLen_e.js";import"./useToggleState-CxXSRbOY.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
