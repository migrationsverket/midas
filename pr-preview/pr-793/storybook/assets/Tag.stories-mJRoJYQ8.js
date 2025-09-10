import{j as a}from"./iframe-Biu2X3XP.js";import{T as o,a as i,s as D}from"./Tag-BqkQzQtG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BHTyX0kS.js";import"./utils-9UggBUkx.js";import"./clsx-B-dksMZM.js";import"./Hidden-DTNuZjfB.js";import"./useFocusRing-B85uPkjE.js";import"./index-BrCXRgGw.js";import"./index-CO9xda38.js";import"./useLabels-Bh-FxS0S.js";import"./useButton-qWUqHymo.js";import"./Collection-Bm004hT2.js";import"./index-D1kXJGiw.js";import"./ListBox-V_zhF90y.js";import"./DragAndDrop-D5vibfyz.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-KsQ-gpg8.js";import"./SelectionManager-ohFjGp_o.js";import"./useEvent-0L3HtIKf.js";import"./FocusScope-eS2QZf8m.js";import"./useDescription-BxtExlwj.js";import"./useControlledState-CkX1xcLL.js";import"./ListKeyboardDelegate-Xx404JDz.js";import"./Text-UYcpPQyk.js";import"./inertValue-DckmrlNe.js";import"./useListState-C1tQ9gEe.js";import"./useHighlightSelectionDescription-wmNLjfWP.js";import"./useUpdateEffect-D15yfKHB.js";import"./useLocalizedStringFormatter-D11M_9Ip.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D_b7Lq4L.js";import"./useField-CcNoY5QL.js";import"./Button-BSGWU3Sv.js";import"./Button.module-GuOSDIYz.js";import"./x-DeRAB33V.js";import"./createLucideIcon-CkujJZ8R.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
