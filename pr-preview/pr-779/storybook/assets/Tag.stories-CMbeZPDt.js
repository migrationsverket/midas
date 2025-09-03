import{j as a}from"./iframe-BTouQNiC.js";import{T as o,a as i,s as D}from"./Tag-oMvB4GnF.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-ciNoVYAu.js";import"./utils-C6aKGSFu.js";import"./clsx-B-dksMZM.js";import"./Hidden-CakREgqV.js";import"./useFocusRing-CKJ2kDYu.js";import"./index-B5XUfmSY.js";import"./index-sSmMzAAT.js";import"./useLabels-Cux1BvnX.js";import"./useButton-ClSP0aiG.js";import"./Collection-OBG5XI30.js";import"./index-C32EEGft.js";import"./ListBox-DSjQT-lc.js";import"./DragAndDrop-Bt8Yd3UI.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cl3uG4Je.js";import"./SelectionManager-BT1adu_B.js";import"./useEvent-BWXzpJkn.js";import"./FocusScope-Cr9eBLMs.js";import"./useDescription-Yd_E21GD.js";import"./useControlledState-97JBuhmp.js";import"./ListKeyboardDelegate-DwgfTlqQ.js";import"./Text-BrpptdWH.js";import"./inertValue-BMCEL2CJ.js";import"./useListState-CbWPjCm8.js";import"./useHighlightSelectionDescription-Cez82AIn.js";import"./useUpdateEffect-DJLbAtqt.js";import"./useLocalizedStringFormatter-DtBORiU8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BeGWMKob.js";import"./useField-CDKxBL5O.js";import"./Button-DMivhfe2.js";import"./Button.module-CF2bVDCq.js";import"./x-CX9N_yrz.js";import"./createLucideIcon-Ca3d5m-n.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
