import{j as a}from"./iframe-CBtjtHKW.js";import{T as o,a as i,s as D}from"./Tag-CkANzlJ3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Xod_o4VM.js";import"./utils-QvJdaxzg.js";import"./clsx-B-dksMZM.js";import"./Hidden-CTTqRjtB.js";import"./useFocusRing-DinxyWal.js";import"./index-BssfbpjP.js";import"./index-C41oDLSi.js";import"./useLabels-dP_aUCHm.js";import"./useButton-DudYTjji.js";import"./Collection-DNMzggl5.js";import"./index-2ovIgTr4.js";import"./ListBox-Dpw9Ehpg.js";import"./DragAndDrop-CStda5bH.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BdB4vYJE.js";import"./SelectionManager-BZc0lYHi.js";import"./useEvent-BoC4rZnS.js";import"./FocusScope-CzJzx3k-.js";import"./useDescription-B4peZynu.js";import"./useControlledState-BRbyL23i.js";import"./ListKeyboardDelegate-DXwPWcg6.js";import"./Text-Bgw7YlHe.js";import"./inertValue-CrfRE3hU.js";import"./useListState-sECa8Ng1.js";import"./useHighlightSelectionDescription-L1Fb7Leq.js";import"./useUpdateEffect-wXhV5ReN.js";import"./useLocalizedStringFormatter-Dwf33vuh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D_RWg0Gt.js";import"./useField-BuqXhNk7.js";import"./Button-8HXSqZ2q.js";import"./Button.module-BkTnSRp5.js";import"./x-1z1Gc5mq.js";import"./createLucideIcon-Cj98Krtr.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
