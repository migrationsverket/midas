import{j as e}from"./iframe-CWzFX-Au.js";import{C as m}from"./CheckboxGroup-B9NbY9UJ.js";import{C as p}from"./Checkbox-B_gk7gw6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-rAccfbQj.js";import"./utils-CvTFoCuM.js";import"./clsx-B-dksMZM.js";import"./Text-BBMjHQRy.js";import"./useFocusRing-B_tX-SRB.js";import"./index-DEOOosMo.js";import"./index-5Kn37Y6O.js";import"./clsx-Ciqy0D92.js";import"./Text-DsDS5WxU.js";import"./Label-CfUkUpZO.js";import"./Button-CC-tYdMe.js";import"./Hidden-b8PZeIsK.js";import"./useLabels-CVVzofvr.js";import"./useButton-CTuUMItv.js";import"./Dialog-WgxnKPM2.js";import"./RSPContexts-DMSmahKw.js";import"./OverlayArrow-Bt5FLXMI.js";import"./useResizeObserver-CZY4pUpz.js";import"./useControlledState-BEhUYREu.js";import"./Collection-kFS0drfE.js";import"./index-BIoADiaP.js";import"./Separator-Bm3WL0HK.js";import"./SelectionManager-DFa-H-A1.js";import"./useEvent-BGsu8qaD.js";import"./scrollIntoView-CNn1G9wO.js";import"./SelectionIndicator-D3laF-E3.js";import"./useDescription-Cf-6dpdu.js";import"./ListKeyboardDelegate-C_wytSDM.js";import"./PressResponder-D7TiU_yi.js";import"./useLocalizedStringFormatter-mP_Yqfvz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-xmVexIhv.js";import"./VisuallyHidden-B6tTkxvS.js";import"./Button-CN-tdIf6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cs6gtZeE.js";import"./createLucideIcon-ChdQ3NNl.js";import"./x-DS21D3ie.js";import"./Heading-Bbsaqg7w.js";import"./info-EA_RDeAH.js";import"./Popover-DnUv7RvK.js";import"./useFormValidation-BM2I-aVc.js";import"./useField-4qsl13Q_.js";import"./Form-C1LxfMuX.js";import"./check-C5JiYrIk.js";import"./useToggleState-yBvoDCb-.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
