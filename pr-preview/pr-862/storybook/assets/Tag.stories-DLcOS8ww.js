import{j as a}from"./iframe-7NBwJDAY.js";import{T as o,a as i,s as D}from"./Tag-H8j6K8ee.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cl3kkGGO.js";import"./utils-O-nSwAxw.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cs3ZineL.js";import"./useFocusRing-DKJaDI6a.js";import"./index-Br2YR4JV.js";import"./index-CmVDo9b2.js";import"./useLabels-By1qXKaa.js";import"./useButton-CKjj_huQ.js";import"./Collection-71b0z8Bn.js";import"./index-CZqw89Bb.js";import"./ListBox-6fwuUqtB.js";import"./DragAndDrop-NGBDmqSq.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D9VbeR3E.js";import"./SelectionManager-VngoYajr.js";import"./useEvent-DSeOHawj.js";import"./FocusScope-NRvM8gL2.js";import"./useDescription-By-cQN4M.js";import"./useControlledState-CNbBQlf2.js";import"./context-BgqKSqmT.js";import"./Text-D5rrMOJ5.js";import"./inertValue-DageI0bT.js";import"./useListState-BIo-Q8fv.js";import"./useHighlightSelectionDescription-ZXt_a03E.js";import"./useUpdateEffect-sxb2T-BM.js";import"./useLocalizedStringFormatter-DINzEfG0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Btjgg1LR.js";import"./useField-C40FUrU8.js";import"./clsx-Ciqy0D92.js";import"./Button-BeTN-MoZ.js";import"./Button.module-CcWMkJAG.js";import"./x-D2xYF0ZV.js";import"./createLucideIcon-DEuC4DFs.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
