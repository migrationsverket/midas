import{j as a}from"./iframe-teSvwxqR.js";import{T as o,a as i,s as D}from"./Tag-BHkldyEw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-uKzEloET.js";import"./utils-Drw8ybL-.js";import"./clsx-B-dksMZM.js";import"./Hidden-DP8SkWFR.js";import"./useFocusRing-DcZHCjrB.js";import"./index-DQEu1ddM.js";import"./index-CrK5w07T.js";import"./useLabels-D3ZxEY1u.js";import"./useButton-aLCkhSi-.js";import"./Collection-CO8iMlEv.js";import"./index-09wOHlx4.js";import"./ListBox-0klfaGQn.js";import"./DragAndDrop-B4pmsMrd.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator--2Bk_2gN.js";import"./SelectionManager-DsgXm_vo.js";import"./useEvent-DrKbVf8_.js";import"./FocusScope-DOnjABkp.js";import"./useDescription-CrpOTzrK.js";import"./useControlledState-Csa_HTcQ.js";import"./ListKeyboardDelegate-M9R1Vj1J.js";import"./Text-0R16PnAc.js";import"./inertValue-BnLtFp9B.js";import"./useListState-q2OLYS0g.js";import"./useHighlightSelectionDescription-DJM9gdYV.js";import"./useUpdateEffect-CtaUhkLB.js";import"./useLocalizedStringFormatter-SfosuQu6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DRXfBZGq.js";import"./useField-CavUiFDI.js";import"./Button-DhwBtmjI.js";import"./Button.module-CF2bVDCq.js";import"./x-BUyK7o_V.js";import"./createLucideIcon-w9zvgYet.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
