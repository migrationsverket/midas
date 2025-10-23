import{j as a}from"./iframe-DSnn27g_.js";import{T as o,a as i,s as D}from"./Tag-BfqTHRHa.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-o7f1f1B_.js";import"./utils-DMRVVt0W.js";import"./clsx-B-dksMZM.js";import"./Hidden-D3uRTTac.js";import"./useFocusRing-B0kGOk6b.js";import"./index-DZBSjlS6.js";import"./index-BjdDVgTd.js";import"./useLabels-Ce0RUtwe.js";import"./useButton-C4obrwMi.js";import"./Collection-BSGo8TNc.js";import"./index-BG3CRSBQ.js";import"./ListBox-B231O3n4.js";import"./DragAndDrop-CQUb8Dyw.js";import"./getScrollParent-5ZVZ4IwV.js";import"./scrollIntoView-Dw_LmK8o.js";import"./Separator-yV2blzUM.js";import"./SelectionManager-BHoXafN8.js";import"./useEvent-C0v-h-xd.js";import"./SelectionIndicator-BTX2l7Ny.js";import"./useDescription-Bth95dVM.js";import"./useControlledState-uxvYb-ts.js";import"./ListKeyboardDelegate-C3zexFoS.js";import"./RSPContexts-C9onCh2x.js";import"./Text-GLsatxCV.js";import"./inertValue-BBeACGoY.js";import"./useListState-5eXsu3PJ.js";import"./useHighlightSelectionDescription-IrGTvuUV.js";import"./useUpdateEffect-Bk0tXX1U.js";import"./useLocalizedStringFormatter-mbK1evP8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cn9FNR6Q.js";import"./useField-CPqt_KXj.js";import"./clsx-Ciqy0D92.js";import"./Button-DM8Q6ENn.js";import"./Button.module-CcWMkJAG.js";import"./x-Cs4_OoCJ.js";import"./createLucideIcon-Ctc5foUX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
