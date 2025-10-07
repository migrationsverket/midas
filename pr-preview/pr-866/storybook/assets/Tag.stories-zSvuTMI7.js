import{j as a}from"./iframe-DTAK1ZM5.js";import{T as o,a as i,s as D}from"./Tag-Bk2Zjqf8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-MoN09rWD.js";import"./utils-DYYVzD5I.js";import"./clsx-B-dksMZM.js";import"./Hidden-DTc-SH4s.js";import"./useFocusRing-BGnSRR5e.js";import"./index-D9bNvFGl.js";import"./index-DxjoeWOC.js";import"./useLabels-BziC-Rfl.js";import"./useButton-1kh1ku96.js";import"./Collection-CyB34JHS.js";import"./index-QuuSSRWj.js";import"./ListBox-BkBDlb6W.js";import"./DragAndDrop-DGZDmjBk.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DsTsfc97.js";import"./SelectionManager-B6Z4PnfP.js";import"./useEvent-ti_0OlxN.js";import"./FocusScope-DiUhnFn0.js";import"./useDescription-DrXBmLzm.js";import"./useControlledState-CU188s-q.js";import"./context-BQ2D4ULR.js";import"./Text-0y2vA859.js";import"./inertValue-CC9iaNTq.js";import"./useListState-CehdAiQC.js";import"./useHighlightSelectionDescription-CC-69c1w.js";import"./useUpdateEffect-BarCgKJq.js";import"./useLocalizedStringFormatter-wFQr1kzV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C5Ri_Mah.js";import"./useField-C8HMhdv0.js";import"./clsx-Ciqy0D92.js";import"./Button-kfI1TWm8.js";import"./Button.module-DRhvPh0f.js";import"./x-D7dJx8Mh.js";import"./createLucideIcon-C2DkoGLI.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
