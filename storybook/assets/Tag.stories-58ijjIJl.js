import{j as a}from"./iframe-BZsA0soF.js";import{T as o,a as i,s as D}from"./Tag-CBoLEjfx.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BcbtCV4P.js";import"./utils-yaH0sIHp.js";import"./clsx-B-dksMZM.js";import"./Hidden-DRuI75Gq.js";import"./useFocusRing-C-3AOOU5.js";import"./index-CJl195z9.js";import"./index-Dn3JmwLd.js";import"./useLabels-DZkIvWLr.js";import"./useButton-BJcmZpKd.js";import"./Collection-Dj5DG811.js";import"./index-BeJ1BGmu.js";import"./ListBox-B3vSvoBg.js";import"./DragAndDrop-Y1Hep-M5.js";import"./getScrollParent-KKguj2Ix.js";import"./scrollIntoView-di-6G41C.js";import"./Separator-Cnn9kiCU.js";import"./SelectionManager-EaJXfD35.js";import"./useEvent-OA17rID4.js";import"./SelectionIndicator-Bk1YR0lk.js";import"./useDescription-UwdMZCpj.js";import"./useControlledState-CnZwQ-Dx.js";import"./ListKeyboardDelegate-CcttGp8e.js";import"./RSPContexts-DEDFOMAP.js";import"./Text-B5OC13PM.js";import"./inertValue-YpVr4w_Q.js";import"./useListState-BTHAs6kx.js";import"./useHighlightSelectionDescription-D6BMdWk9.js";import"./useUpdateEffect-B_Hzk5Kt.js";import"./useLocalizedStringFormatter-DGkX5vHt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-E9EIn44G.js";import"./useField-RoT05E6U.js";import"./clsx-Ciqy0D92.js";import"./Button-BKnE454O.js";import"./Button.module-CcWMkJAG.js";import"./x-BK4KolFc.js";import"./createLucideIcon-D31N7u8q.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
