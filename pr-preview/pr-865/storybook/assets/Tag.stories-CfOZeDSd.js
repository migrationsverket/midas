import{j as a}from"./iframe-Be0g_aJO.js";import{T as o,a as i,s as D}from"./Tag-CLOMke54.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D8MC8HcS.js";import"./utils-ddu2LZsb.js";import"./clsx-B-dksMZM.js";import"./Hidden-DfyZdMIn.js";import"./useFocusRing-COr-n7Fx.js";import"./index-B0KwozC5.js";import"./index-BSeW_fek.js";import"./useLabels-COtLsp3_.js";import"./useButton-C8AwPNN5.js";import"./Collection-DxAMUbA5.js";import"./index-DKUZCSA8.js";import"./ListBox-CxKOf7SC.js";import"./DragAndDrop-Du078LmE.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BK9Lsf_o.js";import"./SelectionManager-CSS2hxya.js";import"./useEvent-CbUSRY16.js";import"./FocusScope-FB6QrrYs.js";import"./useDescription-3LzBmV9x.js";import"./useControlledState-B9P4hSlN.js";import"./context-ByoCaOpE.js";import"./Text-jDSViAJL.js";import"./inertValue-DN4Y6d6Q.js";import"./useListState-GL-ISBOY.js";import"./useHighlightSelectionDescription-CLSCsk2i.js";import"./useUpdateEffect-Dz11lOr7.js";import"./useLocalizedStringFormatter-D8VSbuPC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B5oUgw1i.js";import"./useField-dMHmgJSJ.js";import"./clsx-Ciqy0D92.js";import"./Button-WxyWdEj2.js";import"./Button.module-DRhvPh0f.js";import"./x-BYUcNGG5.js";import"./createLucideIcon-DknQS7n1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
