import{j as a}from"./iframe-DcP3qJ4j.js";import{T as o,a as i,s as D}from"./Tag-DIEg30gp.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BDk-3ekr.js";import"./utils-Dh7DyLOK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CtIlSLef.js";import"./useFocusRing-B8nTy0pI.js";import"./index-op2wMX60.js";import"./index-PB4saAN_.js";import"./useLabels-9p4jSKgL.js";import"./useButton-CQYj1Aub.js";import"./Collection-DCDUSwlE.js";import"./index-Bqolz4Kp.js";import"./ListBox-BUy_ZwsA.js";import"./DragAndDrop-CHt07A80.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-ZHAdudNF.js";import"./SelectionManager-zG-JfSh-.js";import"./useEvent-Cl3EfytZ.js";import"./FocusScope-D5DzwAXN.js";import"./useDescription-U1EOa_-9.js";import"./useControlledState-OMSYdcIh.js";import"./ListKeyboardDelegate-B4TGpO34.js";import"./Text-B3uFr1dB.js";import"./inertValue-Dy82_4CU.js";import"./useListState-BqSgws43.js";import"./useHighlightSelectionDescription-Ci9cbF_d.js";import"./useUpdateEffect-D_5vACsT.js";import"./useLocalizedStringFormatter-Du7FAr80.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CbXtdx99.js";import"./useField-CJpDb8Za.js";import"./Button-7UuK6hvt.js";import"./Button.module-DRhvPh0f.js";import"./x-AEYcuT9L.js";import"./createLucideIcon-XOemp233.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
