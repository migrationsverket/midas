import{j as e}from"./iframe-C7bjyZwM.js";import{C as m}from"./CheckboxGroup-BY3zFBJx.js";import{C as p}from"./Checkbox-CpTlznKz.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BXfQY4zD.js";import"./utils-CIiQPwyX.js";import"./clsx-B-dksMZM.js";import"./Text-BJaGdqWL.js";import"./useFocusRing-5twuRh50.js";import"./index-BcQ7-9aJ.js";import"./index-Dy0iqIGJ.js";import"./clsx-Ciqy0D92.js";import"./Text-C5NeNGM2.js";import"./Label-kCS0HhbY.js";import"./Button-C2JLJi6L.js";import"./Hidden-aFyf7gu8.js";import"./useLabels-B0ZdbmeW.js";import"./useButton-JOi2-Sum.js";import"./Dialog-Cz3ZB9H5.js";import"./RSPContexts-CnvL7WZL.js";import"./OverlayArrow-B3YLf9Fa.js";import"./useResizeObserver-ezTdfubf.js";import"./useControlledState-D62BjFgf.js";import"./Collection-6KqJKeYy.js";import"./index-BSvAKKIw.js";import"./Separator-xCvxJZHm.js";import"./SelectionManager-CvqFuJtb.js";import"./useEvent-B8VlZ3mC.js";import"./scrollIntoView-BhIbPiYG.js";import"./SelectionIndicator-Stz9YuR-.js";import"./useDescription-CweaZgNC.js";import"./ListKeyboardDelegate-C5T3FD_h.js";import"./PressResponder-jUlRYh37.js";import"./useLocalizedStringFormatter-BA72XhLM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpAp9bcE.js";import"./getScrollParent-BeyReYlz.js";import"./VisuallyHidden-B7bbQpVf.js";import"./Button-B0ce8tXc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRvjyLqR.js";import"./createLucideIcon-C5pih5R6.js";import"./x-nSKEkmzv.js";import"./Heading-CT2NG_Xd.js";import"./info-BV12xQAQ.js";import"./Popover-P9PcVLxb.js";import"./useFormValidation-BWm46lJU.js";import"./useField-CpAfE4lc.js";import"./Form-v5sUP_bv.js";import"./check-mAf0TnwR.js";import"./useToggleState-BkLJVd_d.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
