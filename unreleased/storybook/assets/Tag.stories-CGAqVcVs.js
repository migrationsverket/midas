import{j as a}from"./iframe-CMWkcGMo.js";import{T as o,a as i,s as D}from"./Tag-SLlhuI8g.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CbUP_QGo.js";import"./utils-CGd_HDkx.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWvuBTDN.js";import"./useFocusRing-BYZoTEeL.js";import"./index-UeKPFetu.js";import"./index-E0XArfo7.js";import"./useLabels-CgCBOGe8.js";import"./useButton-CiYqWrv-.js";import"./Collection-CSw4BWlg.js";import"./index-CR1KCKQN.js";import"./ListBox-tv4EVOeK.js";import"./DragAndDrop-CPxyCo7M.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-89-1ZxZy.js";import"./SelectionManager-_qAlyy4W.js";import"./useEvent-DHP62o4A.js";import"./FocusScope-Bwf5KpoO.js";import"./useDescription-MXAOnG48.js";import"./useControlledState-CaDwgevc.js";import"./ListKeyboardDelegate-iigQIclt.js";import"./Text-CndwRtp1.js";import"./inertValue-NJFTXK73.js";import"./useListState-DGBoG0LX.js";import"./useHighlightSelectionDescription-D0FvKuKf.js";import"./useUpdateEffect-GiLrpnDf.js";import"./useLocalizedStringFormatter-CO570Ky9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BeK4USdU.js";import"./useField-C71OTaJm.js";import"./Button-C1LQaEr6.js";import"./Button.module-DRhvPh0f.js";import"./x-3F06CrVg.js";import"./createLucideIcon-BNtio7qA.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
