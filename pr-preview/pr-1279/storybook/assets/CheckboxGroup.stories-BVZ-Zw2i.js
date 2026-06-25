import{j as e}from"./iframe-C2f3UQ4Q.js";import{C as m}from"./CheckboxGroup-G4OoWuc1.js";import{C as p}from"./Checkbox-DFf5tVsP.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BA_pXY2h.js";import"./utils-CLD-we63.js";import"./clsx-B-dksMZM.js";import"./Text-CFY7ThNC.js";import"./useFocusRing-DVjvJ21q.js";import"./index-l0Ekt22g.js";import"./index-CjqMqS35.js";import"./clsx-Ciqy0D92.js";import"./Text-BR3njYC5.js";import"./Label-Ca1BE5-1.js";import"./Button-CzARpBSV.js";import"./Hidden-BHtTPiMo.js";import"./useLabel-DqyzBRvV.js";import"./useLabels-DcONnofe.js";import"./useButton-CJnW-LDE.js";import"./Dialog-DIomJqtq.js";import"./RSPContexts-Bp3NLRK2.js";import"./OverlayArrow-BunP0fua.js";import"./useResizeObserver-CtCc1gMc.js";import"./useControlledState-BkR5yEcJ.js";import"./Collection-D-JS7TLq.js";import"./index-CoMFBIZN.js";import"./Separator-BNQyI1hy.js";import"./SelectionManager-Dawn3y1S.js";import"./useEvent-CN0f60Tw.js";import"./scrollIntoView-Bp6pSfX4.js";import"./SelectionIndicator-D6k5vYNx.js";import"./useDescription-Majc7XiZ.js";import"./ListKeyboardDelegate-B4-w-E8p.js";import"./PressResponder-PicVGm3l.js";import"./useLocalizedStringFormatter-BB6QmVJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2Tp_pi8.js";import"./getScrollParent-Cb8Zmktw.js";import"./VisuallyHidden-Cug_bQSe.js";import"./ModalOverlay-BFjQR49T.js";import"./x-CEzz9POE.js";import"./createLucideIcon-B0GS721z.js";import"./useLocalizedStringFormatter-DxAPCXcs.js";import"./Heading-CZXc5KA3.js";import"./Button-Cubx1h0F.js";import"./Button.module-BB7N-cLd.js";import"./info-9Nz0ofXd.js";import"./Popover-DGCgmkqO.js";import"./Form-CgrJV7ns.js";import"./useField-0g5R6fiS.js";import"./check-Bs6JvRLE.js";import"./useToggleState-Ci18zkgn.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
