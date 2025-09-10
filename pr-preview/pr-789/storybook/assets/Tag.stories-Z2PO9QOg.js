import{j as a}from"./iframe-mqWe_uSh.js";import{T as o,a as i,s as D}from"./Tag-D365zX4x.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CSdKv0Hf.js";import"./utils-s8-YqPF-.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTwMoy9l.js";import"./useFocusRing-CQ-r3wmE.js";import"./index-DbaAV4O9.js";import"./index-C3uUrFM9.js";import"./useLabels-C3mf8CBp.js";import"./useButton-_mACns3D.js";import"./Collection-6rFrdi2D.js";import"./index-Bj2492Q-.js";import"./ListBox-C6bnalZk.js";import"./DragAndDrop-Yyd3-QDP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D5IttSUL.js";import"./SelectionManager-XwxFzpIb.js";import"./useEvent-DYKF1NJq.js";import"./FocusScope-BRVjls5e.js";import"./useDescription-b8QQelVB.js";import"./useControlledState-mCdGEXE3.js";import"./ListKeyboardDelegate-SJ8NGd1l.js";import"./Text-D7HzQKX_.js";import"./inertValue-BwFhx_5J.js";import"./useListState-fxVRDP16.js";import"./useHighlightSelectionDescription-Bp-juVeA.js";import"./useUpdateEffect-BWFDCeaS.js";import"./useLocalizedStringFormatter-CptJGS18.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DWQbnzS8.js";import"./useField-CCFNlSCc.js";import"./Button-ZnSJWUJ5.js";import"./Button.module-GuOSDIYz.js";import"./x-D-ooVVAL.js";import"./createLucideIcon-B2CthfMB.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
