import{j as a}from"./iframe-DCHLk76i.js";import{T as o,a as i,s as D}from"./Tag-CZ0ho_LR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CpcD_bYc.js";import"./utils-B7fWHqSp.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dqk_XWPN.js";import"./useFocusRing-B4yRaEZM.js";import"./index-7WP7Zq-V.js";import"./index-BHYgnyCM.js";import"./useLabels-mLYnY-KQ.js";import"./useButton-ChBV8HS4.js";import"./Collection-DtCaDvRw.js";import"./index-DE1CeYQh.js";import"./ListBox-jQgXynYC.js";import"./DragAndDrop-CofBRo2F.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DkAMnY-M.js";import"./SelectionManager-BDEdqyvg.js";import"./useEvent-By2paG-2.js";import"./FocusScope-D6hTxi2S.js";import"./useDescription-mOpNHfYr.js";import"./useControlledState-2o3-6euQ.js";import"./context-D6pmL0pZ.js";import"./Text-D06nrBYK.js";import"./inertValue-DKYhZaJo.js";import"./useListState-CA_D_d-8.js";import"./useHighlightSelectionDescription-7BbY_NVr.js";import"./useUpdateEffect-DRdjpCrh.js";import"./useLocalizedStringFormatter-DBxnZTQd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CLb5uzso.js";import"./useField-9-Zdzcfm.js";import"./clsx-Ciqy0D92.js";import"./Button-fj__ZDhA.js";import"./Button.module-CcWMkJAG.js";import"./x-CrlW5lWZ.js";import"./createLucideIcon-CmPsbZj4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
