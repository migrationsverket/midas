import{j as a}from"./iframe-BjA4-LgN.js";import{T as o,a as i,s as D}from"./Tag-D2JhJyiE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CHHWD6un.js";import"./utils-DVwvt1xR.js";import"./clsx-B-dksMZM.js";import"./Hidden-mf28hIhb.js";import"./useFocusRing-Xx82C-3Y.js";import"./index-DGF1XjJu.js";import"./index-CzvUBdfP.js";import"./useLabels-DQZLZeGh.js";import"./useButton-C-eNn8wq.js";import"./Collection-By4_0nXI.js";import"./index-0ganwatI.js";import"./ListBox-fCB7dvvz.js";import"./DragAndDrop-RrCXogsD.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B91a9U1s.js";import"./SelectionManager-CnDyUM36.js";import"./useEvent-C4dXLemT.js";import"./FocusScope-DySbErsF.js";import"./useDescription-BeTimnm-.js";import"./useControlledState-Dj28PZJt.js";import"./ListKeyboardDelegate-Cik6ge9i.js";import"./Text-lqH5z4wC.js";import"./inertValue-CXe5ffIq.js";import"./useListState-CwncNwK1.js";import"./useHighlightSelectionDescription-DqknG4Ul.js";import"./useUpdateEffect-DKr0BYue.js";import"./useLocalizedStringFormatter-qAcjNalD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CXmMHHv_.js";import"./useField-CUUjk53v.js";import"./Button-DIVwwB38.js";import"./Button.module-DRhvPh0f.js";import"./x-D1MpORG3.js";import"./createLucideIcon-DYC8HzWN.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
