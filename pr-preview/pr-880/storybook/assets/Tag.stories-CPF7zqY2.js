import{j as a}from"./iframe-BYfyeGE1.js";import{T as o,a as i,s as D}from"./Tag-CXOQ90AS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BxbXnAZl.js";import"./utils-CtQFJj5_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CZIu28e5.js";import"./useFocusRing-BXH_PYzw.js";import"./index-xbV8Rek9.js";import"./index-DHInPk6X.js";import"./useLabels-BAA1Xexx.js";import"./useButton-Bs2dKZmn.js";import"./Collection-Dkjc2_ch.js";import"./index-BvvNWec5.js";import"./ListBox-Do34YhHB.js";import"./DragAndDrop-Dro_E9rA.js";import"./getScrollParent-DZRqYJEK.js";import"./scrollIntoView-ClKi_yPE.js";import"./Separator-D--lQnBy.js";import"./SelectionManager-DVBgqTQu.js";import"./useEvent-CSFmTMcr.js";import"./SelectionIndicator-ClG7EOk9.js";import"./useDescription-DTAlNKgK.js";import"./useControlledState-CWFLHxBt.js";import"./ListKeyboardDelegate-B8EfYOjn.js";import"./RSPContexts-CC4k2wPq.js";import"./Text-CqSy2dCP.js";import"./inertValue-CmMPM0wQ.js";import"./useListState-B_P1fg3D.js";import"./useHighlightSelectionDescription-1wzUlS8v.js";import"./useUpdateEffect-nJghIQ1g.js";import"./useLocalizedStringFormatter-CJ2m2-aT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CePGCLfZ.js";import"./useField-BDShpxyb.js";import"./clsx-Ciqy0D92.js";import"./Button-U-FtrnJ-.js";import"./Button.module-CcWMkJAG.js";import"./x-kBIyAKM0.js";import"./createLucideIcon-Bk5Ixjq_.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
