import{j as a}from"./iframe-BZ6qbz_E.js";import{T as o,a as i,s as D}from"./Tag-Dc4Tg10t.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-tfkZiu5V.js";import"./utils-CZ34izdq.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ben5OQrV.js";import"./useFocusRing-CIYQIuUj.js";import"./index-CBj9P_fC.js";import"./index-CEafSKuC.js";import"./useLabels-D2S3z6Gr.js";import"./useButton-TaP372Oa.js";import"./Collection-C7S6PiP6.js";import"./index-D6M2q9BN.js";import"./ListBox-DvCmAgPj.js";import"./DragAndDrop-cTMGqpcF.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BaRbkfyp.js";import"./SelectionManager-BelQHW-R.js";import"./useEvent-DVXvNFhY.js";import"./FocusScope-P7AdFpPp.js";import"./useDescription-ynkYQTIV.js";import"./useControlledState-D_PrA2So.js";import"./context-DJxKivbf.js";import"./Text-B0R1WKLC.js";import"./inertValue-D39IFfPN.js";import"./useListState-nyR3hcH0.js";import"./useHighlightSelectionDescription-C-im9U6J.js";import"./useUpdateEffect-Bidnqlkd.js";import"./useLocalizedStringFormatter-CKkX6Oer.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Y99dFZva.js";import"./useField-y5FdhVRk.js";import"./clsx-Ciqy0D92.js";import"./Button-B4-XcOkT.js";import"./Button.module-CcWMkJAG.js";import"./x-Ct_DalbM.js";import"./createLucideIcon-CSt5RECk.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
