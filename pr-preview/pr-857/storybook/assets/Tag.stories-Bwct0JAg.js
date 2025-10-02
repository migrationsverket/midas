import{j as a}from"./iframe-CZ19r5iH.js";import{T as o,a as i,s as D}from"./Tag-CQUelTia.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CIZzzspH.js";import"./utils-DGatuYzO.js";import"./clsx-B-dksMZM.js";import"./Hidden-kkYBKpHS.js";import"./useFocusRing-TT6bQof_.js";import"./index-DHy6Wdwk.js";import"./index-DI5jZc3Z.js";import"./useLabels-v2ly57yP.js";import"./useButton--U5hDOfR.js";import"./Collection-A76Uz9RD.js";import"./index-CCjYEIqy.js";import"./ListBox-DdvWD7D0.js";import"./DragAndDrop-6OcmxQrt.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-KXz2a6vV.js";import"./SelectionManager-D1UZRIuU.js";import"./useEvent-C4qItKqr.js";import"./FocusScope-D6ebSr32.js";import"./useDescription-Dzw8Fywb.js";import"./useControlledState-BPDGmkzK.js";import"./context-CgdWxdxW.js";import"./Text-DTrC9S5m.js";import"./inertValue-CB6ypK8T.js";import"./useListState-5_c6FrFY.js";import"./useHighlightSelectionDescription-C4CcJcrq.js";import"./useUpdateEffect-DKrJ1LDA.js";import"./useLocalizedStringFormatter-C90uWkan.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-XRvvF8IS.js";import"./useField-5PXKAXPu.js";import"./clsx-Ciqy0D92.js";import"./Button-CLY1fEdM.js";import"./Button.module-DRhvPh0f.js";import"./x-LSCPzhYS.js";import"./createLucideIcon-BhsC9jEw.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
