import{j as a}from"./iframe-DLHI5rgi.js";import{T as o,a as i,s as D}from"./Tag-BB6Qjpsn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-qj95B6Oh.js";import"./utils-B4rmxpQN.js";import"./clsx-B-dksMZM.js";import"./Hidden-DrTWI7qi.js";import"./useFocusRing-DVTqNOSp.js";import"./index-9NJL_irm.js";import"./index-DMyDOh8K.js";import"./useLabels-DMrQvuqM.js";import"./useButton-Daum5dS_.js";import"./Collection-BJFifPG6.js";import"./index-C0M0Gq7o.js";import"./ListBox-DSlqkW5t.js";import"./DragAndDrop-CV3Po94E.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CHwlwaAX.js";import"./SelectionManager-CaXCiJUN.js";import"./useEvent-DCsUP6PC.js";import"./FocusScope-DX6LGeS-.js";import"./useDescription-IbUoTNyY.js";import"./useControlledState-Bs6so5-G.js";import"./ListKeyboardDelegate-cmZ6vFXp.js";import"./Text-RVsCnS_m.js";import"./inertValue-5vXWKYTH.js";import"./useListState-DbdNpR87.js";import"./useHighlightSelectionDescription-BDbs30EO.js";import"./useUpdateEffect-CpwPsbUW.js";import"./useLocalizedStringFormatter-BASjZtxH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BGCyDI64.js";import"./useField-pU1-zken.js";import"./Button-CZ6vJi7V.js";import"./Button.module-GuOSDIYz.js";import"./x-C2by7OJt.js";import"./createLucideIcon-BOj7I2xw.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
