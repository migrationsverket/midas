import{j as e}from"./iframe-BRlibj-k.js";import{C as m}from"./CheckboxGroup-CydZDyp6.js";import{C as p}from"./Checkbox-Dfs5DmLJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CFA3HJLW.js";import"./utils-Bx0A40Hz.js";import"./clsx-B-dksMZM.js";import"./Text-Ck72NiTG.js";import"./useFocusRing-CE-jlBYc.js";import"./index-BvCpjtnM.js";import"./index-CUyw_AEg.js";import"./clsx-Ciqy0D92.js";import"./Text-fpqzAeYU.js";import"./Label-CNSCezuu.js";import"./Button-B0keB5Wy.js";import"./Hidden-BrLnFV9D.js";import"./useLabel-PCvcVGmd.js";import"./useLabels-D3i6Mpdm.js";import"./useButton-BMOcI7o7.js";import"./Dialog-i8Of-r3D.js";import"./RSPContexts-CV3yeRAb.js";import"./OverlayArrow-ALUXgoOq.js";import"./useResizeObserver-BsDMDtB2.js";import"./useControlledState-CerSLXPK.js";import"./Collection-m61hGjFH.js";import"./index-Djsdy0km.js";import"./Separator-BxZTZnnw.js";import"./SelectionManager-BL0dIx3d.js";import"./useEvent-CVRknVnX.js";import"./scrollIntoView-DIdzgJq7.js";import"./SelectionIndicator-6jBuleUJ.js";import"./useDescription-By1zY_hH.js";import"./ListKeyboardDelegate-Dpjn_onP.js";import"./PressResponder-Cd--8JpT.js";import"./useLocalizedStringFormatter-zTincOmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DHkAtzL7.js";import"./getScrollParent-BNETjxTj.js";import"./VisuallyHidden-DAewgK18.js";import"./x-KlHF_jbs.js";import"./createLucideIcon-p72J_6hu.js";import"./useLocalizedStringFormatter-nyGG6W03.js";import"./Heading-aBBagRC2.js";import"./Button-BCeszJe0.js";import"./Button.module-BB7N-cLd.js";import"./info-DSvN1o-C.js";import"./Popover-BKrQFK9O.js";import"./Form-CSA3u7JB.js";import"./useField-BVUz0JML.js";import"./check-Cy1zv8AW.js";import"./useToggleState-CIKFmEng.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
