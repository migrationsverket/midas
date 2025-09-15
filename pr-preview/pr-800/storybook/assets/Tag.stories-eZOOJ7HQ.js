import{j as a}from"./iframe-BHgXnpd8.js";import{T as o,a as i,s as D}from"./Tag-bKxIAyBB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CDJ0-Ts0.js";import"./utils-Bx46cDmE.js";import"./clsx-B-dksMZM.js";import"./Hidden-a_t9g0Cm.js";import"./useFocusRing-AuQpYKFQ.js";import"./index-BOGPHHr1.js";import"./index-C8ctmB56.js";import"./useLabels-DAex-wfd.js";import"./useButton-q1l8lKu6.js";import"./Collection-Ct7u-8aK.js";import"./index-DQ4c9DzU.js";import"./ListBox-CgT8Tkvs.js";import"./DragAndDrop-ByIgzmTG.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B8daVhWk.js";import"./SelectionManager-vjZ13bQN.js";import"./useEvent-BXCNmg0H.js";import"./FocusScope-BT6Igxyw.js";import"./useDescription-BxP5QkYd.js";import"./useControlledState-AMY9-zE8.js";import"./ListKeyboardDelegate-CriBG0rH.js";import"./Text-CXQZpoiY.js";import"./inertValue-DzJEd6Ju.js";import"./useListState-BuTbKZYs.js";import"./useHighlightSelectionDescription-CWrZ9kcE.js";import"./useUpdateEffect-B28m4RNz.js";import"./useLocalizedStringFormatter-BOk_DoiQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DdRBQxqW.js";import"./useField-r7zJ9ch6.js";import"./Button-qsLMNJ2o.js";import"./Button.module-DRhvPh0f.js";import"./x-DwhuuX9f.js";import"./createLucideIcon-BXmcMfoY.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
