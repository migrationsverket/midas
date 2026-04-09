import{j as e}from"./iframe-ClXeNp7Y.js";import{C as m}from"./CheckboxGroup-CA4hb19P.js";import{C as p}from"./Checkbox-B-Q2TNFr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Crhqu9ff.js";import"./utils-Om4eb18p.js";import"./clsx-B-dksMZM.js";import"./Text-Cbz9Nooi.js";import"./useFocusRing-POYc96FQ.js";import"./index-B5A_pknU.js";import"./index-DKpewxE4.js";import"./clsx-Ciqy0D92.js";import"./Text-Cmueb6gv.js";import"./Label-tx-58S4R.js";import"./Button-CgOPhMO-.js";import"./Hidden-CTszc8DE.js";import"./useLabel-LLB3lTIC.js";import"./useLabels-0ROcCaA0.js";import"./useButton-CU4eTwNH.js";import"./Dialog-B9BVloyd.js";import"./RSPContexts-BJtrT3-R.js";import"./OverlayArrow-D4eeuLkC.js";import"./useResizeObserver-DiLs1Yug.js";import"./useControlledState-ByDkBY5z.js";import"./Collection-DiE6phJa.js";import"./index-BGvv924Y.js";import"./Separator-D4H-k3Mv.js";import"./SelectionManager-kbtNASxS.js";import"./useEvent-CNppEzGs.js";import"./scrollIntoView-B4z0Rquo.js";import"./SelectionIndicator-DLieR0zk.js";import"./useDescription-DyutD6T1.js";import"./ListKeyboardDelegate-Bi3VR8XT.js";import"./PressResponder-bnP19chi.js";import"./useLocalizedStringFormatter-CQx72wD7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B4YZBIYY.js";import"./getScrollParent-BN1in3_E.js";import"./VisuallyHidden-Zm76wuSE.js";import"./Dialog-D-2sV88z.js";import"./x-CsrInTiu.js";import"./createLucideIcon-BfIBNwb-.js";import"./useLocalizedStringFormatter-B6IkZiLP.js";import"./Heading-CVjx0GKx.js";import"./Button-Ck36yxFc.js";import"./Button.module-BB7N-cLd.js";import"./info-C11kIJNw.js";import"./Popover-2HEfTtrt.js";import"./Form-qcwhxik-.js";import"./useField-NTYDoh05.js";import"./check-CU5xxFCZ.js";import"./useToggleState-BujLr_0C.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
