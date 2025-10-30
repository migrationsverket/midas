import{j as a}from"./iframe-DvLwB3Ds.js";import{T as o,a as i,s as D}from"./Tag-DX9CegkK.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DMApcMb3.js";import"./utils-DJG2Wzkv.js";import"./clsx-B-dksMZM.js";import"./Hidden-K7mYEibi.js";import"./useFocusRing-NGNq_XHe.js";import"./index-BbChoBT3.js";import"./index-Cm_qyH8s.js";import"./useLabels-v0e-sopg.js";import"./useButton-DY8Vwjfs.js";import"./Collection-CeZqNaRi.js";import"./index-Dwjdyl1g.js";import"./ListBox-Dcp_Pjjq.js";import"./DragAndDrop-Bo3ID7nX.js";import"./getScrollParent-BPHU5Llx.js";import"./scrollIntoView-D4KQYel5.js";import"./Separator-B1MFsMvJ.js";import"./SelectionManager-BGMuX2Ei.js";import"./useEvent-DN2BXpeB.js";import"./SelectionIndicator-BcR5wrkx.js";import"./useDescription-CqtRjcnc.js";import"./useControlledState-BSiCsJzr.js";import"./ListKeyboardDelegate-4ceH7J8u.js";import"./RSPContexts-BvBYTyJi.js";import"./Text-D-rIeeQE.js";import"./inertValue-ClVtnZpL.js";import"./useListState-BUBMjDt1.js";import"./useHighlightSelectionDescription-DRD4bosr.js";import"./useUpdateEffect-C6dq2ovp.js";import"./useLocalizedStringFormatter-DjlIKsJm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-pEXPh_Pw.js";import"./useField-BrahGRBW.js";import"./clsx-Ciqy0D92.js";import"./Button-DfQ5uVTz.js";import"./Button.module-CcWMkJAG.js";import"./x-BZuZy3zQ.js";import"./createLucideIcon-NJUB7Vn1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
