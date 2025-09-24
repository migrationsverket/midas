import{j as a}from"./iframe-CrK2b6ve.js";import{T as o,a as i,s as D}from"./Tag-6pIBpiaC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BspYfzYV.js";import"./utils-C57jUYA9.js";import"./clsx-B-dksMZM.js";import"./Hidden-DIjXmDyO.js";import"./useFocusRing-9gyv5uxq.js";import"./index-RSvq9O_x.js";import"./index-nP5KsMz1.js";import"./useLabels-DvA5TWmw.js";import"./useButton-DgX_ev0L.js";import"./Collection-YbKRpnzC.js";import"./index-C9KIS0Rt.js";import"./ListBox-D_IP4Bic.js";import"./DragAndDrop-C2a4QdwZ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DCIyrcl2.js";import"./SelectionManager-B-yPnJ5B.js";import"./useEvent-B8JNatVh.js";import"./FocusScope-Bw6Pzw_X.js";import"./useDescription-B0nnK_Qq.js";import"./useControlledState-CMz-XQuB.js";import"./ListKeyboardDelegate-JF7bN8-k.js";import"./Text-DQdkwLcE.js";import"./inertValue-C0mMj3Cc.js";import"./useListState-CQLwuGoL.js";import"./useHighlightSelectionDescription-BE-yj0xv.js";import"./useUpdateEffect-DNgQ9Bfx.js";import"./useLocalizedStringFormatter-CJKvKI0A.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-mg39UuWT.js";import"./useField-TbESOrq0.js";import"./Button-DBDj0F-G.js";import"./Button.module-DRhvPh0f.js";import"./x-lTWz3fUp.js";import"./createLucideIcon-DQYfCYT2.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
