import{j as a}from"./iframe-Cv2UzONa.js";import{T as o,a as i,s as D}from"./Tag-BoG2vpsP.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CN5zIgQo.js";import"./utils-DaXxb4A2.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHk17EcR.js";import"./useFocusRing-Bnk_T61x.js";import"./index-Blj2wTsh.js";import"./index-BRLnGmTq.js";import"./useLabels-B8y1akzH.js";import"./useButton-BE8mFtw2.js";import"./Collection-DvfQAlTw.js";import"./index-BZXZG97e.js";import"./ListBox-CLIOK-jY.js";import"./DragAndDrop-Ps6LXuQk.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bb6oL-Dy.js";import"./SelectionManager-BEJqH4JR.js";import"./useEvent-BnOOYFkw.js";import"./FocusScope-DK1wc_HK.js";import"./useDescription-eMwEQTDU.js";import"./useControlledState-CmCpw4jJ.js";import"./ListKeyboardDelegate-C2bRO0n4.js";import"./Text-BlHQd-f9.js";import"./inertValue-BFZrPnTF.js";import"./useListState-B4rFnSze.js";import"./useHighlightSelectionDescription-mLeWfjY7.js";import"./useUpdateEffect-DRkjpWn3.js";import"./useLocalizedStringFormatter-B7yTQQGP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cl-cCkYs.js";import"./useField-D-gr0uXf.js";import"./Button-2zHayygi.js";import"./Button.module-DRhvPh0f.js";import"./x-KXQvQ2e5.js";import"./createLucideIcon-EOto4Jp2.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
