import{j as a}from"./iframe-Bc-8x_BS.js";import{T as o,a as i,s as D}from"./Tag-DM7qC_Xo.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B0Ch1Au4.js";import"./utils-BmA5vIAX.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPw-YRaC.js";import"./useFocusRing-DIz9_Qyd.js";import"./index-DHei_00N.js";import"./index-Hsl3la5y.js";import"./useLabels-Dc8vg0xI.js";import"./useButton-BtgLzDmv.js";import"./Collection-CvGNsgUF.js";import"./index-BU2f2Saf.js";import"./ListBox-DhAzdc5l.js";import"./DragAndDrop-FSZXXJxR.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-HBp7iWql.js";import"./SelectionManager-bx5SdawB.js";import"./useEvent-DsZiRJRd.js";import"./FocusScope-CXDBQ13L.js";import"./useDescription-D7hok_k1.js";import"./useControlledState-Ba4TLpl4.js";import"./ListKeyboardDelegate-Eq8Ql7rI.js";import"./Text-4ZiWbaF_.js";import"./inertValue-DT4Ln0GA.js";import"./useListState-BKY0IQ8y.js";import"./useHighlightSelectionDescription-CbugwHyo.js";import"./useUpdateEffect-Jxlrs6Gc.js";import"./useLocalizedStringFormatter-SmzhsDHq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BXnKwfso.js";import"./useField-DWHfdYqY.js";import"./Button-JdogFjmA.js";import"./Button.module-GuOSDIYz.js";import"./x-CuJmaL4L.js";import"./createLucideIcon-B_LL_N-4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
