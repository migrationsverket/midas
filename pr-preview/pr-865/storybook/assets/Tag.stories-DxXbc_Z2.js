import{j as a}from"./iframe-BkBht1oS.js";import{T as o,a as i,s as D}from"./Tag-CphLRy_E.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OH4FT10P.js";import"./utils-C9sF4O3V.js";import"./clsx-B-dksMZM.js";import"./Hidden-CA3nURSO.js";import"./useFocusRing-Cyco5goe.js";import"./index-Dg2bFS8I.js";import"./index-U-1oSXDw.js";import"./useLabels-CXi6ixJH.js";import"./useButton-CfjgAGUV.js";import"./Collection-BRkXtxPb.js";import"./index-BneuVyqH.js";import"./ListBox-Cz5JIRFR.js";import"./DragAndDrop-BdUzP09B.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CNmL0p6H.js";import"./SelectionManager-DNN2g3Gf.js";import"./useEvent-2Tm5IGh4.js";import"./FocusScope-DjjYEx6E.js";import"./useDescription-Cj9kPOfh.js";import"./useControlledState-CBz8Otti.js";import"./context-CsCDT7rU.js";import"./Text-CN_A8kba.js";import"./inertValue-DkZRhZI_.js";import"./useListState-BIHVULCo.js";import"./useHighlightSelectionDescription-Be-9oULP.js";import"./useUpdateEffect-BM-wl27i.js";import"./useLocalizedStringFormatter-DPMlVL5J.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DFJa7t1D.js";import"./useField-BQtIpDnV.js";import"./clsx-Ciqy0D92.js";import"./Button-Dyk4Y6Hx.js";import"./Button.module-DRhvPh0f.js";import"./x-CAYdSlz_.js";import"./createLucideIcon-Dn0acCJu.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
