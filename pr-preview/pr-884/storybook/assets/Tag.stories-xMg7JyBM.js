import{j as a}from"./iframe-DDiBTlsq.js";import{T as o,a as i,s as D}from"./Tag-DxA3Qdc3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bb-Kl3FE.js";import"./utils-CMv58ZKg.js";import"./clsx-B-dksMZM.js";import"./Hidden-k5FZwq-2.js";import"./useFocusRing-m8OxAi5_.js";import"./index-Cw0r9Zal.js";import"./index-VHcWqemG.js";import"./useLabels-G1ffuvaM.js";import"./useButton-BLYOXh-Z.js";import"./Collection-Ck78FlC8.js";import"./index-Bz1N8JZa.js";import"./ListBox-CQG26HXM.js";import"./DragAndDrop-BZuaRVv_.js";import"./getScrollParent-BQi4zXq5.js";import"./scrollIntoView-CGy3Jtrm.js";import"./Separator-PFu9K5OB.js";import"./SelectionManager-CZX_NjmY.js";import"./useEvent-D-xf4sL4.js";import"./SelectionIndicator-Bc7ymGou.js";import"./useDescription-lj_SxOyL.js";import"./useControlledState-H3Vxc_L-.js";import"./ListKeyboardDelegate-CTQ3GV1e.js";import"./RSPContexts-BUBm0rIo.js";import"./Text-Ct3ZLi4V.js";import"./inertValue-BX4AMteR.js";import"./useListState-K5A9tQjh.js";import"./useHighlightSelectionDescription-WsPXNbDU.js";import"./useUpdateEffect-CsGf_bdh.js";import"./useLocalizedStringFormatter-C2G7mUuh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ChFbb-Bl.js";import"./useField-CpWMixn2.js";import"./clsx-Ciqy0D92.js";import"./Button-gOF2WoBy.js";import"./Button.module-CcWMkJAG.js";import"./x-BsfDmLIs.js";import"./createLucideIcon-CLiXGs0C.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
