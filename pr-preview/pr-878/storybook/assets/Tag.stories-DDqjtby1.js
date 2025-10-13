import{j as a}from"./iframe-B-nKi5pw.js";import{T as o,a as i,s as D}from"./Tag-DhW0a1Ov.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B1FIE1su.js";import"./utils-BRb64P5O.js";import"./clsx-B-dksMZM.js";import"./Hidden-wjgX7ACZ.js";import"./useFocusRing-DXBcs2LB.js";import"./index-DpnZh00_.js";import"./index-DqoQ1IaP.js";import"./useLabels-BTKyRb6z.js";import"./useButton-TPVsDoHu.js";import"./Collection-ByckbvJY.js";import"./index-Crl5749T.js";import"./ListBox--vFVrhbV.js";import"./DragAndDrop-D0iYIfYl.js";import"./getScrollParent-DHtRECvY.js";import"./scrollIntoView-brJ74zqi.js";import"./Separator-Dj7WD5Kv.js";import"./SelectionManager-GU9-Q07C.js";import"./useEvent-Q7s6Ucea.js";import"./SelectionIndicator-0ekPKC71.js";import"./useDescription-Bda47gfo.js";import"./useControlledState-D2ILbmQo.js";import"./ListKeyboardDelegate-DFTS-uxq.js";import"./RSPContexts-2fyl2l30.js";import"./Text-CYZEQiZU.js";import"./inertValue-CajPrFE2.js";import"./useListState-DSIqnr9j.js";import"./useHighlightSelectionDescription-C6U4PwMe.js";import"./useUpdateEffect-RyTTfJDk.js";import"./useLocalizedStringFormatter-CABdvdPm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CRM4aV6d.js";import"./useField-CTJP4Vwo.js";import"./clsx-Ciqy0D92.js";import"./Button-B_F-AreY.js";import"./Button.module-CcWMkJAG.js";import"./x-B3zF9cgI.js";import"./createLucideIcon-CZ9vU8M_.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
