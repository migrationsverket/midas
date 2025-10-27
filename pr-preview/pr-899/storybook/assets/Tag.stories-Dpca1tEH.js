import{j as a}from"./iframe-9qi1sjQE.js";import{T as o,a as i,s as D}from"./Tag-CbR-WLEm.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cs_mzyse.js";import"./utils-BOPrNRZo.js";import"./clsx-B-dksMZM.js";import"./Hidden-wsQcZT4I.js";import"./useFocusRing-C_nCqLWs.js";import"./index-Dq0x7MIR.js";import"./index-62vT24e6.js";import"./useLabels-CJFub3k0.js";import"./useButton-BlYTTHbo.js";import"./Collection-C2CqXUMj.js";import"./index-Dtj2ilZJ.js";import"./ListBox-C0y7cI_U.js";import"./DragAndDrop-C051XU85.js";import"./getScrollParent-rFbJ3Qbh.js";import"./scrollIntoView-CS884zjt.js";import"./Separator-eTN96GIc.js";import"./SelectionManager-CLapP_kU.js";import"./useEvent-_e55lSPp.js";import"./SelectionIndicator-DanFfCml.js";import"./useDescription-B7eWpMY6.js";import"./useControlledState-DErVzbZj.js";import"./ListKeyboardDelegate-Cg2GQ_1G.js";import"./RSPContexts-B0uea_tV.js";import"./Text-Bt2yJt-q.js";import"./inertValue-CwwvrQaw.js";import"./useListState-BrDDATq7.js";import"./useHighlightSelectionDescription-BiWIXPIp.js";import"./useUpdateEffect-BBs6aqyj.js";import"./useLocalizedStringFormatter-CJh3ulRo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CWwuJ346.js";import"./useField-BXk3wc9M.js";import"./clsx-Ciqy0D92.js";import"./Button-BDPnZEZi.js";import"./Button.module-CcWMkJAG.js";import"./x-HyusWlrI.js";import"./createLucideIcon-CnACDTpY.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
