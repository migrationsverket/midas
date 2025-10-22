import{j as a}from"./iframe-Cb7jHaNb.js";import{T as o,a as i,s as D}from"./Tag-hYrZ5B75.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DOjKQ_99.js";import"./utils-CyP0GObj.js";import"./clsx-B-dksMZM.js";import"./Hidden-CPlxy2Ck.js";import"./useFocusRing-CsCx11ey.js";import"./index-ud79XgVG.js";import"./index-D4gBkGgM.js";import"./useLabels-Ctf3iyx2.js";import"./useButton-DWoaIyjw.js";import"./Collection-Chh11VA4.js";import"./index-C9l8UnrH.js";import"./ListBox-D8DtgN4K.js";import"./DragAndDrop-CRzenLcX.js";import"./getScrollParent-D_dBMiAW.js";import"./scrollIntoView-BpF8cKXp.js";import"./Separator-DOj_j4wH.js";import"./SelectionManager-DsqGRzew.js";import"./useEvent-BbMs5Q4E.js";import"./SelectionIndicator-CXJwc9qp.js";import"./useDescription-BFnWDMla.js";import"./useControlledState-DwgaQMrP.js";import"./ListKeyboardDelegate-B69Su7xj.js";import"./RSPContexts-Di6nQCiQ.js";import"./Text-Dsi3tbQd.js";import"./inertValue-BkPgxgbw.js";import"./useListState-B8L3LTqd.js";import"./useHighlightSelectionDescription-C4SZTk5Y.js";import"./useUpdateEffect-D-OPisZM.js";import"./useLocalizedStringFormatter-BKBaXouU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ClmzKyGi.js";import"./useField-C04C9A9R.js";import"./clsx-Ciqy0D92.js";import"./Button-DFPm28Q1.js";import"./Button.module-CcWMkJAG.js";import"./x-i0_K_r7b.js";import"./createLucideIcon-DstSOE-E.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
