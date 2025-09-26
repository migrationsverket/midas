import{j as a}from"./iframe-B5nFrBgy.js";import{T as o,a as i,s as D}from"./Tag-CIXgoX6h.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BNDIlaSX.js";import"./utils-7U2IrIrW.js";import"./clsx-B-dksMZM.js";import"./Hidden-CSmHOZFM.js";import"./useFocusRing-RYmoht4L.js";import"./index-DqH0GWUd.js";import"./index-CvYJluao.js";import"./useLabels-DVEdlixB.js";import"./useButton-BGOlPxAo.js";import"./Collection-DFo8Q2kt.js";import"./index-D7v-SyQY.js";import"./ListBox-DOuAZJSQ.js";import"./DragAndDrop-DZdSnpae.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C9DbVEvI.js";import"./SelectionManager-B2WuJlBA.js";import"./useEvent-CbBSgCSj.js";import"./FocusScope-CFYTYdag.js";import"./useDescription-BsOeuLRW.js";import"./useControlledState-ZxzjMgIe.js";import"./ListKeyboardDelegate-AgZIR9ew.js";import"./Text-BoVQ-01I.js";import"./inertValue-k3uiSJKf.js";import"./useListState-CohOPGro.js";import"./useHighlightSelectionDescription-PLXmPD7Z.js";import"./useUpdateEffect-QjAfAlsC.js";import"./useLocalizedStringFormatter-BAz90HiB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-IYNG3qUu.js";import"./useField-CMepzr1s.js";import"./Button-BUExq3GL.js";import"./Button.module-DRhvPh0f.js";import"./x-D3mJ6TWs.js";import"./createLucideIcon-D7Ccmx1V.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
