import{j as a}from"./iframe-Cl2pk5eA.js";import{T as o,a as i,s as D}from"./Tag-5kZSNbSj.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CYmTG0as.js";import"./utils-DSnK5n9n.js";import"./clsx-B-dksMZM.js";import"./Hidden-hSvQMuw9.js";import"./useFocusRing-Bu7fyF7e.js";import"./index-CMMiBDmM.js";import"./index-CB9Diq5Y.js";import"./useLabels-C-hQY7HM.js";import"./useButton-guBOAJpJ.js";import"./Collection-DGJCBMn0.js";import"./index-Dz4zwwjD.js";import"./ListBox-Bf5LSH6_.js";import"./DragAndDrop-B4E2-n6M.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DMXKbqSM.js";import"./SelectionManager-CQhq6nOl.js";import"./useEvent-D72yuvix.js";import"./FocusScope-BZIPaowT.js";import"./useDescription-BO6h_zzI.js";import"./useControlledState-DkJ7lcuC.js";import"./ListKeyboardDelegate-CSVDRvPU.js";import"./Text-Cv0RVaMq.js";import"./inertValue-Bl8nYzZl.js";import"./useListState-C0IjQKdM.js";import"./useHighlightSelectionDescription-CEpPduC9.js";import"./useUpdateEffect-dstiRZC2.js";import"./useLocalizedStringFormatter-CFNetQdS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DU6uxrNd.js";import"./useField-B9s5reYB.js";import"./Button-Bc9xA1-z.js";import"./Button.module-DRhvPh0f.js";import"./x-CM59Pg1b.js";import"./createLucideIcon-C3Lh5HGK.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
