import{j as a}from"./iframe-DvgA3CrH.js";import{T as o,a as i,s as D}from"./Tag-CqE6ANLx.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DmDa1gDV.js";import"./utils-DKs9zZR0.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGZKN-Q0.js";import"./useFocusRing-CdwS9zOW.js";import"./index-DttkkSeo.js";import"./index-j2G6WFR0.js";import"./useLabels-DoESHCYD.js";import"./useButton-Dz3ghU5q.js";import"./Collection-CgAX9V-K.js";import"./index-D8nE4ScA.js";import"./ListBox-Ba8k-2-m.js";import"./DragAndDrop-BI1BiEpe.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CDCt62jN.js";import"./SelectionManager-7ygVCtDg.js";import"./useEvent-B8ZyDd5B.js";import"./FocusScope-DbePUznA.js";import"./useDescription-Crvy97e7.js";import"./useControlledState-Da79Sr-r.js";import"./context-DllfpS_D.js";import"./Text-CNI0w1w6.js";import"./inertValue-BFR-7SGs.js";import"./useListState-BjkOYy86.js";import"./useHighlightSelectionDescription-BMlaGAGY.js";import"./useUpdateEffect-BTWgh9p4.js";import"./useLocalizedStringFormatter-Bt2WMRR8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DKn7S6hB.js";import"./useField-ms8MvvuP.js";import"./clsx-Ciqy0D92.js";import"./Button-37eB7jVT.js";import"./Button.module-CcWMkJAG.js";import"./x-RpApC3TA.js";import"./createLucideIcon-B-Oz5p6y.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
