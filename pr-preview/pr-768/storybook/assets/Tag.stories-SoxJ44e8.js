import{j as a}from"./iframe-DGsNrSXT.js";import{T as o,a as i,s as _}from"./Tag-pKmnB5dG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DFpXN0mf.js";import"./utils-CeRCI_IU.js";import"./clsx-B-dksMZM.js";import"./Hidden-DzIzvD-S.js";import"./useFocusRing-CmKVXNS9.js";import"./index-DA2UlEzH.js";import"./index-BZLvSFXL.js";import"./useLabels-xiTNAS69.js";import"./useButton-BEBz-IAp.js";import"./Collection-Ceq25dP2.js";import"./index-DnBsLzJ_.js";import"./ListBox-B1HyktSh.js";import"./DragAndDrop-gExW2Tsz.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DXQ1p13J.js";import"./SelectionManager-DMr1qLps.js";import"./useEvent-BjI7o1bb.js";import"./FocusScope-BXeGL62Q.js";import"./useDescription-tciT-6ur.js";import"./useControlledState-CohairkO.js";import"./ListKeyboardDelegate-Bdy2Accl.js";import"./Text-BOStEqYW.js";import"./inertValue-4G7zcd0Q.js";import"./useListState-BwpVtl8I.js";import"./useField-C5LLzG1Z.js";import"./useHighlightSelectionDescription-DDCabq0z.js";import"./useUpdateEffect-BIf0pe1s.js";import"./useLocalizedStringFormatter-C8H-WqsR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-8QSCM35I.js";import"./Button-BNhCK5b0.js";import"./Button.module-DKVuWS4g.js";import"./x-lejORAJr.js";import"./createLucideIcon-BSjeWOth.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
