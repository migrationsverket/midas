import{j as e}from"./iframe-2N4-NX-9.js";import{C as m}from"./CheckboxGroup-CrCJbMV7.js";import{C as p}from"./Checkbox-B5AS17d0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DbzXWBkQ.js";import"./utils-BDyzcRVF.js";import"./clsx-B-dksMZM.js";import"./Text-CG1bHrxb.js";import"./useFocusRing-CqNKm5um.js";import"./index-eEiNBmo6.js";import"./index-Boj7wyxf.js";import"./clsx-Ciqy0D92.js";import"./Text-C8oRKnIX.js";import"./Label-DI_SKPKu.js";import"./Button-BdOK34vS.js";import"./Hidden-ByQp7cFw.js";import"./useLabel-Dt5gD5WC.js";import"./useLabels-BXMOGpY3.js";import"./useButton-DXuSSmPY.js";import"./Dialog-zxsFuGS2.js";import"./RSPContexts-euEKx97A.js";import"./OverlayArrow-C8HxHgiy.js";import"./useResizeObserver-CUp6itZx.js";import"./useControlledState-CJB9gvxC.js";import"./Collection-jtJmnuzI.js";import"./index-C5BRSQvZ.js";import"./Separator-CrpuFQJS.js";import"./SelectionManager-n4T0I50n.js";import"./useEvent-Br-HnPPz.js";import"./scrollIntoView-7_tk7XK0.js";import"./SelectionIndicator-Cx6zjUGL.js";import"./useDescription-QUyLBt1z.js";import"./ListKeyboardDelegate-DzmftUWc.js";import"./PressResponder-B9LAUkeH.js";import"./useLocalizedStringFormatter-B22JGswt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Fa_xDcNS.js";import"./getScrollParent-zIWWR_Mu.js";import"./VisuallyHidden-BgOvzTZH.js";import"./x-Ceu0gGLD.js";import"./createLucideIcon-BP_ZdL8b.js";import"./useLocalizedStringFormatter-DUswzrwG.js";import"./Heading-faSUuyYq.js";import"./Button-BhHUqRPQ.js";import"./Button.module-BB7N-cLd.js";import"./info-Dtcd-21w.js";import"./Popover-DA1b5ic1.js";import"./Form-CJZMhU9i.js";import"./useField-BL1xHxSq.js";import"./check-BThGx1wr.js";import"./useToggleState-BNXxIaXx.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
