import{j as a}from"./iframe-typ1V0IQ.js";import{T as o,a as i,s as D}from"./Tag-BI4reJca.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DlOEJL2A.js";import"./utils-BT_rnNQI.js";import"./clsx-B-dksMZM.js";import"./Hidden-BMRt_srx.js";import"./useFocusRing-CeFnKk5l.js";import"./index-DGdf5RSs.js";import"./index-DKZzq6Wh.js";import"./useLabels-DX-GE65t.js";import"./useButton-Dq0CoZq_.js";import"./Collection-BPAtr1ms.js";import"./index-DsX2XX74.js";import"./ListBox-CUaESaiX.js";import"./DragAndDrop-CZ8CjzaK.js";import"./getScrollParent-3F_UOTO8.js";import"./scrollIntoView-EQQ99LMb.js";import"./Separator-LVjmWgQg.js";import"./SelectionManager-CZHCuALk.js";import"./useEvent-BeGDLmoD.js";import"./SelectionIndicator-CS-O2nM9.js";import"./useDescription-CyXXGEUY.js";import"./useControlledState-CS6DPp37.js";import"./ListKeyboardDelegate-DmQnfFAA.js";import"./RSPContexts-kOKvhF6V.js";import"./Text-k1GXm9bm.js";import"./inertValue-BApaz8bo.js";import"./useListState-ChlyboZm.js";import"./useHighlightSelectionDescription-DUdEAg-1.js";import"./useUpdateEffect-C18fti5Z.js";import"./useLocalizedStringFormatter-CwZqSzqd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CLujCcjK.js";import"./useField-D7X-t6Kh.js";import"./clsx-Ciqy0D92.js";import"./Button-wlqf824N.js";import"./Button.module-CcWMkJAG.js";import"./x-D3bREpit.js";import"./createLucideIcon-DmGEKPD0.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
