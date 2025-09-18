import{j as a}from"./iframe-DmfPKhwF.js";import{T as o,a as i,s as D}from"./Tag-BNkrB7Vk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cw80Qun2.js";import"./utils-BIKhJLWD.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxcNGReQ.js";import"./useFocusRing-DvQyJ6Jk.js";import"./index-qLZJk4Ms.js";import"./index-Cedulafr.js";import"./useLabels-sTgIwh1X.js";import"./useButton-BWaG0LE1.js";import"./Collection-o80M3y9G.js";import"./index-CwTsw1rx.js";import"./ListBox-DMwkkgyh.js";import"./DragAndDrop-xKnbfzcO.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-haQh58AT.js";import"./SelectionManager-Bfp5dqck.js";import"./useEvent-pNcA_6-w.js";import"./FocusScope-BIaRto6t.js";import"./useDescription-CRA-sxb3.js";import"./useControlledState-DNeuK5WK.js";import"./ListKeyboardDelegate-CWdA0Csk.js";import"./Text-sH-CJTFr.js";import"./inertValue-B2jPquxV.js";import"./useListState-DUyRsXAK.js";import"./useHighlightSelectionDescription-BGclL_pt.js";import"./useUpdateEffect-DVEpk1FN.js";import"./useLocalizedStringFormatter-5dNZtAeu.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DCd8wUDj.js";import"./useField-B_9iLcs2.js";import"./Button-BGcnJkk-.js";import"./Button.module-DRhvPh0f.js";import"./x-DH2GqlFA.js";import"./createLucideIcon-B0IOwS9k.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
