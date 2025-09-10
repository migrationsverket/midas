import{j as a}from"./iframe-CXjCNx0l.js";import{T as o,a as i,s as D}from"./Tag-D9Vxak6y.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BEuK6UEX.js";import"./utils-BbWY8Vyb.js";import"./clsx-B-dksMZM.js";import"./Hidden-B8BU_fbZ.js";import"./useFocusRing-DVXP1IhH.js";import"./index-DtC3k5yu.js";import"./index-Cuq6af5k.js";import"./useLabels-BD9c1SEs.js";import"./useButton-85p1rmOu.js";import"./Collection-7xG1n95F.js";import"./index-CAi8PhnT.js";import"./ListBox-CYHkcrCo.js";import"./DragAndDrop-Dc6mxa7Q.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-zFFkuoq2.js";import"./SelectionManager-qUhunXAP.js";import"./useEvent-D3njUTRX.js";import"./FocusScope-Cw8qdGK5.js";import"./useDescription-DekgOUG-.js";import"./useControlledState-CV6cqftQ.js";import"./ListKeyboardDelegate-ZpQy-Xml.js";import"./Text-BHohIio1.js";import"./inertValue-Bicr_Bxv.js";import"./useListState-djJEsvY7.js";import"./useHighlightSelectionDescription-CbB8Yq6K.js";import"./useUpdateEffect-DJyH6iIa.js";import"./useLocalizedStringFormatter-CG08kz8C.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DNyiN0YF.js";import"./useField-BHMdi8Cj.js";import"./Button-CbPqDcXI.js";import"./Button.module-GuOSDIYz.js";import"./x-Dm2Q0WIf.js";import"./createLucideIcon-DjeFI8xK.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
