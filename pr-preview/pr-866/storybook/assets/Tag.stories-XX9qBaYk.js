import{j as a}from"./iframe-J9SlTm7F.js";import{T as o,a as i,s as D}from"./Tag-g18FLFsZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B9TDB2uf.js";import"./utils-B_rys7BR.js";import"./clsx-B-dksMZM.js";import"./Hidden-e9C3A4MN.js";import"./useFocusRing-aawt2e9x.js";import"./index-BOmFhfGz.js";import"./index-CG3JX7nx.js";import"./useLabels-C4qzmhgc.js";import"./useButton-4LPxkHtl.js";import"./Collection-DvHZ3pdR.js";import"./index-BgVPI7iL.js";import"./ListBox-_gnpFuHj.js";import"./DragAndDrop-DSKe7eTC.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DxHJxjz8.js";import"./SelectionManager-CwItegFA.js";import"./useEvent-Q1146L97.js";import"./FocusScope-B3UVkKEm.js";import"./useDescription-BjcAg777.js";import"./useControlledState-DtD34L9L.js";import"./context-CbRkkQyd.js";import"./Text-BFQmfUAA.js";import"./inertValue-BwsnrhLP.js";import"./useListState-BPc0PCGb.js";import"./useHighlightSelectionDescription-fAVu0cyG.js";import"./useUpdateEffect-BbxTJg5P.js";import"./useLocalizedStringFormatter-Bogag2a7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ZJeC11vC.js";import"./useField-CYdzv8Zj.js";import"./clsx-Ciqy0D92.js";import"./Button-Ckt_fkGQ.js";import"./Button.module-CcWMkJAG.js";import"./x-CnOOS9IW.js";import"./createLucideIcon-Dl-3k6ya.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
