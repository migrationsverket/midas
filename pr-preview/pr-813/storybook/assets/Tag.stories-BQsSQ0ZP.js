import{j as a}from"./iframe-DV1lFbk-.js";import{T as o,a as i,s as D}from"./Tag-KEmB7UYB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-9wFXHLyv.js";import"./utils-DPmek7je.js";import"./clsx-B-dksMZM.js";import"./Hidden-xHzPWZXF.js";import"./useFocusRing-CsLNhNib.js";import"./index-Di62rkRw.js";import"./index-DlFKdktB.js";import"./useLabels-DzLQ80zN.js";import"./useButton-DBnso061.js";import"./Collection-BAuLLdl3.js";import"./index-pUcrkXJD.js";import"./ListBox-2EXmby6M.js";import"./DragAndDrop-BJK6HjW-.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Ci__M8Jz.js";import"./SelectionManager-qtxpI1RV.js";import"./useEvent-DxmA3sco.js";import"./FocusScope-PfbXcW-j.js";import"./useDescription-BliB3ziN.js";import"./useControlledState-DqXyAVVz.js";import"./ListKeyboardDelegate-gM3tRXRF.js";import"./Text-C3kGBtpF.js";import"./inertValue-5aHTmjEq.js";import"./useListState-B0EpRk15.js";import"./useHighlightSelectionDescription-BDqy_0ov.js";import"./useUpdateEffect-BJb9uZU7.js";import"./useLocalizedStringFormatter-D-EKj6KL.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-m4thNb7-.js";import"./useField-C4CrTCGA.js";import"./Button-CqFJNNhh.js";import"./Button.module-DRhvPh0f.js";import"./x-DKLM5s8R.js";import"./createLucideIcon-lt6rNZNA.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
