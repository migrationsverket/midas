import{j as a}from"./iframe-B4SDttZa.js";import{T as o,a as i,s as D}from"./Tag-D46j0APE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CMWMHUfy.js";import"./utils-Co4_NxoW.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dpcyv_Al.js";import"./useFocusRing-ZdNdVLy0.js";import"./index-1wT4E2hy.js";import"./index-DzgdvtKt.js";import"./useLabels-BcFWhPs7.js";import"./useButton-BNPSV2SD.js";import"./Collection-BdFyERmT.js";import"./index-wwSxSyQ5.js";import"./ListBox-BdaQfqiv.js";import"./DragAndDrop-CFHlVVE6.js";import"./getScrollParent-BS1zMP2o.js";import"./scrollIntoView-Bu_1kzm1.js";import"./Separator-DXdJzNxz.js";import"./SelectionManager-B_Q4B8tW.js";import"./useEvent-x1kVzaYA.js";import"./SelectionIndicator-BV5g4yxw.js";import"./useDescription-CCN653nz.js";import"./useControlledState-Dtuecy6i.js";import"./ListKeyboardDelegate-DssevhGn.js";import"./RSPContexts-DnFNlqwb.js";import"./Text-DJLerCFF.js";import"./inertValue-DMQH1Qd3.js";import"./useListState-DLyKizfb.js";import"./useHighlightSelectionDescription-DdCQMCV_.js";import"./useUpdateEffect-LuDf439T.js";import"./useLocalizedStringFormatter-BADtup5V.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BiFnSxR8.js";import"./useField-DNOOa30p.js";import"./clsx-Ciqy0D92.js";import"./Button-DMkclJj6.js";import"./Button.module-CcWMkJAG.js";import"./x-D2jLWzcP.js";import"./createLucideIcon-C15_VcCG.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
