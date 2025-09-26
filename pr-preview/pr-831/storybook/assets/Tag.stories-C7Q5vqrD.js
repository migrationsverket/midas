import{j as a}from"./iframe-aRD0Mkaw.js";import{T as o,a as i,s as D}from"./Tag-B5Y46xeB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CDyNVJk1.js";import"./utils-DBWduLU9.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dkjnz7-u.js";import"./useFocusRing-CwniUdxO.js";import"./index-CgoR9ooH.js";import"./index-DuOXwpRn.js";import"./useLabels-DCVgCxBr.js";import"./useButton-Ca1ObhS9.js";import"./Collection-CryEf6eq.js";import"./index-DfB1ljXS.js";import"./ListBox-DJxmKyUr.js";import"./DragAndDrop-DgtlOkcq.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-2aBcR5y2.js";import"./SelectionManager-AI0BTCPI.js";import"./useEvent-5gmYfBO_.js";import"./FocusScope-D6qNJ36Z.js";import"./useDescription-CIH85OZY.js";import"./useControlledState-BPIv4Hqq.js";import"./context-CJzEtum1.js";import"./Text-DMkocQBc.js";import"./inertValue-CehiK8Dd.js";import"./useListState-HnXP9fpX.js";import"./useHighlightSelectionDescription-BvR4wqBD.js";import"./useUpdateEffect-D0PWveng.js";import"./useLocalizedStringFormatter-BoCGyMlo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C7zpBHgv.js";import"./useField-CoezKbgu.js";import"./Button-PTsis6M8.js";import"./Button.module-DRhvPh0f.js";import"./x-Dyw-kcNg.js";import"./createLucideIcon-PtsNCAY4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
