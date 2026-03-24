import{j as e}from"./iframe-CdQtBTvN.js";import{C as m}from"./CheckboxGroup-DWKPjxq_.js";import{C as p}from"./Checkbox-Wx443H_X.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Ds80xhU5.js";import"./utils-hCPuu9ww.js";import"./clsx-B-dksMZM.js";import"./Text-BlVIijGN.js";import"./useFocusRing-Dx5ENljC.js";import"./index-BqBvBc_L.js";import"./index-CBjbBfBt.js";import"./clsx-Ciqy0D92.js";import"./Text-DG4x08uA.js";import"./Label-D42qgx4n.js";import"./Button-C9FUZnpG.js";import"./Hidden-VZvKjJAN.js";import"./useLabels-DmlxY5xa.js";import"./useButton-BMciKW0o.js";import"./Dialog-Bb1qFCY4.js";import"./RSPContexts-GhAFq0Kb.js";import"./OverlayArrow-DbhGeY2H.js";import"./useResizeObserver-DgjerLpp.js";import"./useControlledState-CDyRnnpP.js";import"./Collection-D73FRwXS.js";import"./index-Bj3FFH3o.js";import"./Separator-CZ-OXpps.js";import"./SelectionManager-BDRFpfbc.js";import"./useEvent-DC4JEHXI.js";import"./scrollIntoView-BM5ZBaG8.js";import"./SelectionIndicator-CK_97_IP.js";import"./useDescription-WCfTXBDc.js";import"./ListKeyboardDelegate-HOWkR3EC.js";import"./PressResponder-CSYeiWSa.js";import"./useLocalizedStringFormatter-CAvIyCZj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dvo86yv9.js";import"./getScrollParent-EH2M_cTQ.js";import"./VisuallyHidden-C2L8poid.js";import"./x-D3W8hHwK.js";import"./createLucideIcon-TCf9LglA.js";import"./useLocalizedStringFormatter-BjshCCmP.js";import"./Heading-R-ZLjnfx.js";import"./Button-NsfQzJOD.js";import"./Button.module-BB7N-cLd.js";import"./info-BNarahPM.js";import"./Popover-D3rKDLZ3.js";import"./Form-BVXAN9pd.js";import"./useField-Cl9d5qMs.js";import"./check-nmQ-0Ys4.js";import"./useToggleState-M1lzLFLy.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
