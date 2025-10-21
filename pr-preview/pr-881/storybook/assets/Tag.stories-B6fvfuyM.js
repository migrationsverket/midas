import{j as a}from"./iframe-CoKgjHVu.js";import{T as o,a as i,s as D}from"./Tag-DJ0J0YYB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DpOn1lDG.js";import"./utils-CARXuxPb.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-xzeT1l.js";import"./useFocusRing--827qv6N.js";import"./index-CB5-BNI9.js";import"./index-B-ZoNo5y.js";import"./useLabels-5XwfRu4L.js";import"./useButton-BO12zrXW.js";import"./Collection-D6HYQUg0.js";import"./index-DjL8cRto.js";import"./ListBox-F_sODeQl.js";import"./DragAndDrop-7yHM6VFy.js";import"./getScrollParent-UVcWg6mL.js";import"./scrollIntoView-Cmdsv0BS.js";import"./Separator-CCVjy9ce.js";import"./SelectionManager-aRWI-vkp.js";import"./useEvent-DorqmtWW.js";import"./SelectionIndicator-CgygNGgA.js";import"./useDescription-CwkNVf4F.js";import"./useControlledState-B_j3OmNp.js";import"./ListKeyboardDelegate-CGQmMNft.js";import"./RSPContexts-QaAEpTel.js";import"./Text-D7uYfXQs.js";import"./inertValue-Dal_Ik7h.js";import"./useListState-1R03ww7O.js";import"./useHighlightSelectionDescription-CxzJ1h_P.js";import"./useUpdateEffect-DsZZWQ-m.js";import"./useLocalizedStringFormatter-cbIusFiN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B0Wzo9tc.js";import"./useField-dAjOaA2p.js";import"./clsx-Ciqy0D92.js";import"./Button-BxOC6et2.js";import"./Button.module-CcWMkJAG.js";import"./x-DD6jkR9I.js";import"./createLucideIcon-B4Jvvfn1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
