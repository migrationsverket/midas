import{j as a}from"./iframe-CN1lNLnK.js";import{T as o,a as i,s as D}from"./Tag-63sTqNAw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-b8enifgw.js";import"./utils-BazV-G3b.js";import"./clsx-B-dksMZM.js";import"./Hidden-CKLnDgYx.js";import"./useFocusRing-DI07JeLY.js";import"./index-BG1mF6FV.js";import"./index-B2OQP2yQ.js";import"./useLabels-CJi08T-K.js";import"./useButton-_zXT-izq.js";import"./Collection-DEvhFhrA.js";import"./index-oQB_I7tg.js";import"./ListBox-dclsoOFY.js";import"./DragAndDrop-t5YOi2xx.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BX2FRFcY.js";import"./SelectionManager-DAjSUopn.js";import"./useEvent-DjyL0RTO.js";import"./FocusScope-BAcoGD1Z.js";import"./useDescription-24-gQHbU.js";import"./useControlledState-1MuJsDQ1.js";import"./ListKeyboardDelegate-bvHKiARA.js";import"./Text-DikpVJAR.js";import"./inertValue-CfTmG5wO.js";import"./useListState-BL6GdAck.js";import"./useHighlightSelectionDescription-D3ZDyu8o.js";import"./useUpdateEffect-BuQcZf9F.js";import"./useLocalizedStringFormatter-VwTJLTlQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BQQ-dCcP.js";import"./useField-DPOtfO80.js";import"./Button-DmEz4Fio.js";import"./Button.module-DRhvPh0f.js";import"./x-CuiYp5x_.js";import"./createLucideIcon-Dl9pws0N.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
