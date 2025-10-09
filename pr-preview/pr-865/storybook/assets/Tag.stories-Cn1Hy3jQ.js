import{j as a}from"./iframe-D2MuCvmE.js";import{T as o,a as i,s as D}from"./Tag-ZwdFFBg-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-7AYNv2s9.js";import"./utils-D-i1kht9.js";import"./clsx-B-dksMZM.js";import"./Hidden-CmqhHAxN.js";import"./useFocusRing-CkbQqL6a.js";import"./index-CheiYMPp.js";import"./index-DG_bltjC.js";import"./useLabels-DqdsZ-Ff.js";import"./useButton-CUms7Pzi.js";import"./Collection-LIuUUMqM.js";import"./index-BtroWiai.js";import"./ListBox-wBZo23q1.js";import"./DragAndDrop-DPVUqlor.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BrDDHS-P.js";import"./SelectionManager-BdKcJ2Xe.js";import"./useEvent-CuQWqG2P.js";import"./FocusScope-OhzlyEWs.js";import"./useDescription-qP2G5StM.js";import"./useControlledState-kd8jE-Ro.js";import"./context-pt41aAZk.js";import"./Text-HmzRIPDG.js";import"./inertValue-BJVBkj6c.js";import"./useListState-Co1Eqq5j.js";import"./useHighlightSelectionDescription-DzkU1hhN.js";import"./useUpdateEffect-B-Agz1q_.js";import"./useLocalizedStringFormatter-D06UMON8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-aPKnSK1O.js";import"./useField-CcGuSj3g.js";import"./clsx-Ciqy0D92.js";import"./Button-DCJfoHjp.js";import"./Button.module-CcWMkJAG.js";import"./x-BDqNDlQp.js";import"./createLucideIcon-Cql117mM.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
