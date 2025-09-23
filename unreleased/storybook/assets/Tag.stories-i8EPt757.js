import{j as a}from"./iframe-BSZMP4sP.js";import{T as o,a as i,s as D}from"./Tag-Cr7iWz3i.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BdWzoZ6k.js";import"./utils-83XyiEgE.js";import"./clsx-B-dksMZM.js";import"./Hidden-DD2ABAZV.js";import"./useFocusRing-B3G6UcuN.js";import"./index-Bu7ZGGnO.js";import"./index-BlUW-4Sg.js";import"./useLabels-CBoECGP4.js";import"./useButton-B5lhF8Wr.js";import"./Collection-DZlB7cqp.js";import"./index-Co__Bsla.js";import"./ListBox-CtlgOijK.js";import"./DragAndDrop-C0jYKlpo.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Dx77R7oU.js";import"./SelectionManager-pl8_AvQz.js";import"./useEvent-BKflChrb.js";import"./FocusScope-BXYjpKV5.js";import"./useDescription-DFCkEPSx.js";import"./useControlledState-Dn7SUp7o.js";import"./ListKeyboardDelegate-BpHTFb4P.js";import"./Text-zQ2JZG9H.js";import"./inertValue-inmCeMY2.js";import"./useListState-C9vJR_Zc.js";import"./useHighlightSelectionDescription-4Dq90gcC.js";import"./useUpdateEffect-3frIYXkD.js";import"./useLocalizedStringFormatter-BjV2Ojl5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CntMm6iY.js";import"./useField-k9pdf6Y3.js";import"./Button-CoMQHwTB.js";import"./Button.module-DRhvPh0f.js";import"./x-DAj_MzvA.js";import"./createLucideIcon-BzU-H8J7.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
