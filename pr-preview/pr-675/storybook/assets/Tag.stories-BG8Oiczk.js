import{j as a}from"./jsx-runtime-BYYWji4R.js";import{T as o,a as i,s as x}from"./Tag-BSCey4Mv.js";import{e as D}from"./index-CqmFxPum.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BD6hc4wl.js";import"./utils-oc6myKvD.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./useFocusRing-DUrskli4.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFocusable-tJD4A6lu.js";import"./Collection-BHHe22Am.js";import"./index-NDK0uC61.js";import"./ListBox-O25dkUY9.js";import"./DragAndDrop-lZrB2UzM.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DiWRQEoC.js";import"./SelectionManager-BGs3xiJx.js";import"./useEvent-DVigVKKB.js";import"./FocusScope-Dq_oVuiP.js";import"./useDescription-Bdyn64K0.js";import"./useControlledState-H1tiOFpU.js";import"./ListKeyboardDelegate-EWbBYqg2.js";import"./useCollator-B-UPZ4SJ.js";import"./Text-C8tPE3tt.js";import"./inertValue-C_mH9YkE.js";import"./useListState-CAy-Xhih.js";import"./useField-aNJ8ypzk.js";import"./useHighlightSelectionDescription-EcAuZEkO.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-DqnULi-B.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CdX5JQwf.js";import"./Button-DP_pM_q5.js";import"./Button.module-AG3JZ-l4.js";import"./x-BaIpobvV.js";import"./createLucideIcon-DQK9Z80p.js";const b="test",bs={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":b,children:s.children})})},t={play:async({canvas:s,step:T,args:{className:h}})=>{await T("it should preserve its classNames when being passed new ones",async()=>{D(s.getByTestId(b)).toHaveClass(x.tag,h)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ts=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,Ts as __namedExportsOrder,bs as default};
