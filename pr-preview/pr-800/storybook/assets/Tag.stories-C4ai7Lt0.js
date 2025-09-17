import{j as a}from"./iframe-Ch-sRwjJ.js";import{T as o,a as i,s as D}from"./Tag-D6fDqCpZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cdq3ue4T.js";import"./utils-Cue5N01E.js";import"./clsx-B-dksMZM.js";import"./Hidden-B9VUSePm.js";import"./useFocusRing-DFGyiIQn.js";import"./index-2vSlGJb1.js";import"./index-DR4aAVsH.js";import"./useLabels-BD29CM8k.js";import"./useButton-ttIgdrtZ.js";import"./Collection-Bj-kcX3R.js";import"./index-BVwK6KeI.js";import"./ListBox-DGq5Lmbx.js";import"./DragAndDrop-CBBEbstA.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DVgJl9wM.js";import"./SelectionManager-BRXPO_Ht.js";import"./useEvent-DtEeAmSr.js";import"./FocusScope-BeYRPbkx.js";import"./useDescription-CCjgsKne.js";import"./useControlledState-CAJQa5dg.js";import"./ListKeyboardDelegate-DRDq3MD0.js";import"./Text-CyM5ga_S.js";import"./inertValue-BiICK0uN.js";import"./useListState-CYUlNFC4.js";import"./useHighlightSelectionDescription-fJLzt0PE.js";import"./useUpdateEffect-y9C6iFpc.js";import"./useLocalizedStringFormatter-C0Qz3V75.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CHVFQbtQ.js";import"./useField-CEomYcDv.js";import"./Button-BXuXMeGQ.js";import"./Button.module-DRhvPh0f.js";import"./x-BNCpFHBE.js";import"./createLucideIcon-B1HvY0FZ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
