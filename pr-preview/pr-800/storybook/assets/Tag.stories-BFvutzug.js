import{j as a}from"./iframe-DePNx6Zf.js";import{T as o,a as i,s as D}from"./Tag-COdvBiUd.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-3l946itx.js";import"./utils-Ctgo53OJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DzJfI2WP.js";import"./useFocusRing-B57OhQ9l.js";import"./index-BIYUwWYg.js";import"./index-DP-1J5OY.js";import"./useLabels-BFq_6VGb.js";import"./useButton-BQ3MYboQ.js";import"./Collection-CnrUGdFc.js";import"./index-CiJP2GkI.js";import"./ListBox-DFXpXWTl.js";import"./DragAndDrop-Cxg9KNGD.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CwLUPTSn.js";import"./SelectionManager-BwEYBeZl.js";import"./useEvent-DMkySKRc.js";import"./FocusScope-CK6PiBL4.js";import"./useDescription-BciCBjl2.js";import"./useControlledState-CZ5TDD-5.js";import"./ListKeyboardDelegate-Beuli1ic.js";import"./Text-BAkZI3Tx.js";import"./inertValue-De6BjVQa.js";import"./useListState-ih2GDWOQ.js";import"./useHighlightSelectionDescription-eNd89UF_.js";import"./useUpdateEffect-BuLL8coW.js";import"./useLocalizedStringFormatter-DSkiPpbM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D-b6VSG_.js";import"./useField-bWd08rf8.js";import"./Button-CxDmAxp7.js";import"./Button.module-DRhvPh0f.js";import"./x-BmkJtOcg.js";import"./createLucideIcon-DJSKN6Oq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
