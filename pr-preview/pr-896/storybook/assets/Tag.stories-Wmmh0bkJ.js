import{j as a}from"./iframe-Cd4_hk9G.js";import{T as o,a as i,s as D}from"./Tag-Dm__aOhq.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bl7Xq1BF.js";import"./utils-C7DGwVmc.js";import"./clsx-B-dksMZM.js";import"./Hidden-BEFT2uWi.js";import"./useFocusRing-Dl4iNBzn.js";import"./index-quaEJJfq.js";import"./index-CcWRuhy4.js";import"./useLabels-DZkAX5yj.js";import"./useButton-BWByVh91.js";import"./Collection-DnLdjqsm.js";import"./index-BeDWuzYm.js";import"./ListBox-hy_SZRbQ.js";import"./DragAndDrop-9H2ZO42V.js";import"./getScrollParent-Blv4Kfzp.js";import"./scrollIntoView-BbGVdHYb.js";import"./Separator-C0l0Opis.js";import"./SelectionManager-CQ-UXDqh.js";import"./useEvent-ifcmPUoH.js";import"./SelectionIndicator-Do03SfkI.js";import"./useDescription-DbtWxpQv.js";import"./useControlledState-C2RBJ-AA.js";import"./ListKeyboardDelegate-CkECsFl3.js";import"./RSPContexts-C6Iaij7a.js";import"./Text-DyksFLRp.js";import"./inertValue-CwELXRNV.js";import"./useListState-LYDZG-KJ.js";import"./useHighlightSelectionDescription-BkPGUZ47.js";import"./useUpdateEffect-CpsZXpgu.js";import"./useLocalizedStringFormatter-t69ceniC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Drzhiq6_.js";import"./useField-DbRX50QC.js";import"./clsx-Ciqy0D92.js";import"./Button-F-Xc1j6-.js";import"./Button.module-CcWMkJAG.js";import"./x-BxF_PUNX.js";import"./createLucideIcon-CNpe1p1X.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
