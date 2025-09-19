import{j as a}from"./iframe-DBXYd9H0.js";import{T as o,a as i,s as D}from"./Tag-UmYDsVLS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-nKSMvIzG.js";import"./utils-3tRM1yOS.js";import"./clsx-B-dksMZM.js";import"./Hidden-DGlelntE.js";import"./useFocusRing-BHxof0u5.js";import"./index-C_5MHFkW.js";import"./index-CIWbDznm.js";import"./useLabels-Dg-IQ-jg.js";import"./useButton-AUrqB10i.js";import"./Collection-Cb_OGJxj.js";import"./index-DWD1Eoh2.js";import"./ListBox--x6giiN7.js";import"./DragAndDrop-IjMTHRwd.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DdhxaBtx.js";import"./SelectionManager-WPUpsJYO.js";import"./useEvent-T5iwfZGj.js";import"./FocusScope-m2UmIPCi.js";import"./useDescription-czPGzeT-.js";import"./useControlledState-9ArlpBXg.js";import"./ListKeyboardDelegate-CFaybryr.js";import"./Text-D_NV-iUp.js";import"./inertValue-B0obinUJ.js";import"./useListState-C19r-b8i.js";import"./useHighlightSelectionDescription-DXWrGAUb.js";import"./useUpdateEffect-DMZeCS_D.js";import"./useLocalizedStringFormatter-Qh7hutng.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DW4_h6jI.js";import"./useField-CIw_naMe.js";import"./Button-OQRu_7fk.js";import"./Button.module-DRhvPh0f.js";import"./x-Dom1ZKNK.js";import"./createLucideIcon-C8w2ZEM4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
