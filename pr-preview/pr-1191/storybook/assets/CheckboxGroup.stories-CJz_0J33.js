import{j as e}from"./iframe-pPxe0wf0.js";import{C as m}from"./CheckboxGroup-BbISJ8bp.js";import{C as p}from"./Checkbox-CkhZFfwB.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CL01H_85.js";import"./utils-B9dfa99f.js";import"./clsx-B-dksMZM.js";import"./Text-CfRTLfl7.js";import"./useFocusRing-Brybz-Mb.js";import"./index-DfEuJvHS.js";import"./index-pyYMLEYk.js";import"./clsx-Ciqy0D92.js";import"./Text-DnWwzkAf.js";import"./Label-DU9snSYc.js";import"./Button-C0xfSFPn.js";import"./Hidden-BcuSkgl5.js";import"./useLabel-CL1tYCOJ.js";import"./useLabels-CMOJ4jYS.js";import"./useButton-BKxgzcHi.js";import"./Dialog-35Xbgg__.js";import"./RSPContexts-B0SlvVRf.js";import"./OverlayArrow-obiWU4t_.js";import"./useResizeObserver-BDUEt38X.js";import"./useControlledState-DALrvKda.js";import"./Collection-cPoObmDE.js";import"./index-DrsTtITg.js";import"./Separator-gRLDdmXz.js";import"./SelectionManager-DlxymtZc.js";import"./useEvent-CKwa_4Ly.js";import"./scrollIntoView-Cgwn1ATY.js";import"./SelectionIndicator-BAq8fmHB.js";import"./useDescription-Ci3Nojex.js";import"./ListKeyboardDelegate-CU8jHYVL.js";import"./PressResponder-pdEfm1mj.js";import"./useLocalizedStringFormatter-BNao4Mdf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dh-JrWpK.js";import"./getScrollParent-Cau9qeJE.js";import"./VisuallyHidden-ByZgoMRK.js";import"./x-Ck7RLK17.js";import"./createLucideIcon-DWvekaMf.js";import"./useLocalizedStringFormatter-BLFE94iF.js";import"./Heading-BoHH1Xau.js";import"./Button-KC2D_O3S.js";import"./Button.module-BB7N-cLd.js";import"./info-CNv7SUCq.js";import"./Popover-DjvwO6bw.js";import"./Form-C0IhYbR-.js";import"./useField-D4Zx8Ibn.js";import"./check-OPaSFiPT.js";import"./useToggleState-BTN-c2BF.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
