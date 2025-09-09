import{j as a}from"./iframe-Z79VDqKX.js";import{T as o,a as i,s as D}from"./Tag-Bkfkm2-X.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BcEoqYNl.js";import"./utils-DxDLenWG.js";import"./clsx-B-dksMZM.js";import"./Hidden-BsMX1HON.js";import"./useFocusRing-rIuhkSIP.js";import"./index-BuC1VbEJ.js";import"./index-BVIt5XrG.js";import"./useLabels-BLzmafle.js";import"./useButton-B1_D8lLO.js";import"./Collection-pjn0zj9z.js";import"./index-C_WE830f.js";import"./ListBox-KAAOUdi1.js";import"./DragAndDrop-CLefZ3Lc.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DLPtSFBH.js";import"./SelectionManager-eZvBMlfo.js";import"./useEvent-DZAQjmei.js";import"./FocusScope-DFFO9pl3.js";import"./useDescription-C6qD8aqf.js";import"./useControlledState-Be4wNWTN.js";import"./ListKeyboardDelegate-DQEyIGaq.js";import"./Text-DhPOzzhP.js";import"./inertValue-C0ndbeFR.js";import"./useListState-Bn7fbnfz.js";import"./useHighlightSelectionDescription-C3oh_hPT.js";import"./useUpdateEffect-CiQ6v2jr.js";import"./useLocalizedStringFormatter-Dv0xTpx0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cjc11nLF.js";import"./useField-CZ6EZrdb.js";import"./Button-C3SD9ZWv.js";import"./Button.module-BkTnSRp5.js";import"./x-B_dtiCNY.js";import"./createLucideIcon-CsqV7L1R.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
