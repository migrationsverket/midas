import{j as e}from"./iframe-Dr8Tkvah.js";import{C as m}from"./CheckboxGroup-C6SFyqkV.js";import{C as p}from"./Checkbox-DHQ3Wx-F.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-K3l2DsmW.js";import"./utils-DOuA3kXF.js";import"./clsx-B-dksMZM.js";import"./Text-Dbwxk-C7.js";import"./useFocusRing-poi8r4OJ.js";import"./index-DM6sY-46.js";import"./index-CtVp1upA.js";import"./clsx-Ciqy0D92.js";import"./Text-CQjzvGyg.js";import"./Label-DHlSewJ2.js";import"./Button-C610-Rnq.js";import"./Hidden-BjSG53-T.js";import"./useLabel-C7_L8_CN.js";import"./useLabels-DxkPONzl.js";import"./useButton-BViocPn_.js";import"./Dialog-TK3dUPvW.js";import"./RSPContexts-DIaWsy7a.js";import"./OverlayArrow-DPqh4Qvi.js";import"./useResizeObserver-DnEQS4Nj.js";import"./useControlledState-DzvWO88h.js";import"./Collection-ZUTSynsr.js";import"./index-DmP7bTRl.js";import"./Separator-CaSBOVjm.js";import"./SelectionManager-7-ML4KyD.js";import"./useEvent-DThJtK0k.js";import"./scrollIntoView-B1LP76du.js";import"./SelectionIndicator-DrvF5BTC.js";import"./useDescription-BhmkpAHf.js";import"./ListKeyboardDelegate-Zit5pbv0.js";import"./PressResponder-CeOIogdg.js";import"./useLocalizedStringFormatter-CR5zAqVa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D61uNW08.js";import"./getScrollParent-CUIafVHW.js";import"./VisuallyHidden-CqOJHiwP.js";import"./x-UdkypbZC.js";import"./createLucideIcon-Boz8MrIZ.js";import"./useLocalizedStringFormatter-Cn25UGjx.js";import"./Heading-Daw6YIIy.js";import"./Button-B4jxTFim.js";import"./Button.module-BB7N-cLd.js";import"./info-_-o3A1jD.js";import"./Popover-vGdAZj5t.js";import"./Form-CVwLgz52.js";import"./useField-JpMYATHc.js";import"./check-BS7aZ1Ma.js";import"./useToggleState-C5DgbqYj.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
