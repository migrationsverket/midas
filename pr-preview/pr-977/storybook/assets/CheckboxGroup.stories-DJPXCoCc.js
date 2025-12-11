import{j as e}from"./iframe-MGON9gUz.js";import{C as m}from"./CheckboxGroup-kCRk09Oe.js";import{C as p}from"./Checkbox-CD19efRh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CsJWXBCg.js";import"./utils-Cnlzp-5B.js";import"./clsx-B-dksMZM.js";import"./Text-BnvHdZmH.js";import"./useFocusRing-ThBX_ucU.js";import"./index-BPAmBu_k.js";import"./index-FW1sGAw2.js";import"./clsx-Ciqy0D92.js";import"./Text-DHFOFPOF.js";import"./Label-gm1JNqP4.js";import"./Button-C2E3oR8W.js";import"./Hidden-jd2R-Bfn.js";import"./useLabels-DAFPofHN.js";import"./useButton-CZwmHtQP.js";import"./Dialog-BrzWZnQe.js";import"./RSPContexts-DiOGMsFy.js";import"./OverlayArrow-Dmhyf4LC.js";import"./useResizeObserver-F9CbnyyZ.js";import"./useControlledState-C7UrvEAm.js";import"./Collection-CgIZiDbJ.js";import"./index-Dg1lkKLe.js";import"./Separator-CP41aAQz.js";import"./SelectionManager-CHMOCq5V.js";import"./useEvent-evFt6shW.js";import"./scrollIntoView-_LxBK19Y.js";import"./SelectionIndicator-BmZs-tIK.js";import"./useDescription-BsxXVwWM.js";import"./ListKeyboardDelegate-9cFfA3kh.js";import"./PressResponder-qcUnRIyW.js";import"./useLocalizedStringFormatter-Dk_lEJbs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D8-cmg2g.js";import"./VisuallyHidden-Dsp0-A_8.js";import"./Button-DNm7fuyT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcmqV3-4.js";import"./createLucideIcon-CxLXd6bS.js";import"./x-rFaeoGAX.js";import"./Heading-Dq2fb95l.js";import"./info-DPgceM7J.js";import"./Popover-Bc13iog4.js";import"./useFormValidation-CZH_3WXB.js";import"./useField-C76vj-yl.js";import"./Form-Ci2nHO7K.js";import"./check-CIdXJKZW.js";import"./useToggleState-BuYZwrJV.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
