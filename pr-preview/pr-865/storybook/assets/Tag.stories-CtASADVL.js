import{j as a}from"./iframe-CGq1zLiw.js";import{T as o,a as i,s as D}from"./Tag-CJSLGTgM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BUqk1luY.js";import"./utils-Br5X2_Vy.js";import"./clsx-B-dksMZM.js";import"./Hidden-BujnTw4Q.js";import"./useFocusRing-DlqSW2HJ.js";import"./index-Cq65DDAC.js";import"./index-tQkjsMDd.js";import"./useLabels-Bpwpa-mR.js";import"./useButton-ChotVH2y.js";import"./Collection-LL-U2cb1.js";import"./index-BoXYrOuE.js";import"./ListBox-_i0EZryU.js";import"./DragAndDrop-BWIPH4xH.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BoDJV0Xj.js";import"./SelectionManager-CCuwiOg3.js";import"./useEvent-C9UwEdlm.js";import"./FocusScope-DH3GoL8z.js";import"./useDescription-BfUNq9uh.js";import"./useControlledState-D4VxYXhr.js";import"./context-8DTwK3h7.js";import"./Text-DafSVW6k.js";import"./inertValue-0olSe5CN.js";import"./useListState-UNw13KYb.js";import"./useHighlightSelectionDescription-VLYcY9LL.js";import"./useUpdateEffect-BSwg9_3I.js";import"./useLocalizedStringFormatter-eXlIOBUV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DNE-S3PG.js";import"./useField-Ctx5uFAx.js";import"./clsx-Ciqy0D92.js";import"./Button-B82vhZug.js";import"./Button.module-CcWMkJAG.js";import"./x-BeNhsqP8.js";import"./createLucideIcon-m3CXXJzx.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
