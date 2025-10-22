import{j as a}from"./iframe-BtQ_heUV.js";import{T as o,a as i,s as D}from"./Tag-t0RG7qoM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C5OfNOWz.js";import"./utils-qbCzTHeH.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPIUKtSF.js";import"./useFocusRing-B43bonvu.js";import"./index-CsfKgDoe.js";import"./index-CXQFQ7Vi.js";import"./useLabels-B-AF9fUZ.js";import"./useButton-Bo77m7-M.js";import"./Collection-CiPajFPx.js";import"./index-BftsokMI.js";import"./ListBox-mVdgIbK9.js";import"./DragAndDrop-DeZBBs2F.js";import"./getScrollParent-Cn2bPsFX.js";import"./scrollIntoView-BkikxFtq.js";import"./Separator-iQWJv5MN.js";import"./SelectionManager-CnOpBJgg.js";import"./useEvent-znRV_IDb.js";import"./SelectionIndicator-DunC-9SB.js";import"./useDescription-BKKnp8Xg.js";import"./useControlledState-enMtEQDv.js";import"./ListKeyboardDelegate-DvekUqtR.js";import"./RSPContexts-C9H3sUCB.js";import"./Text-CN7rIuBY.js";import"./inertValue-BU_Iw4jA.js";import"./useListState-CsOv8VM7.js";import"./useHighlightSelectionDescription-BBs73mVP.js";import"./useUpdateEffect-DTn9HF_c.js";import"./useLocalizedStringFormatter-Dglt96Sk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DmkIoKZp.js";import"./useField-BA61pi1m.js";import"./clsx-Ciqy0D92.js";import"./Button-Bv9I_9lf.js";import"./Button.module-CcWMkJAG.js";import"./x-29c2b8WH.js";import"./createLucideIcon-lGI1jU2X.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
