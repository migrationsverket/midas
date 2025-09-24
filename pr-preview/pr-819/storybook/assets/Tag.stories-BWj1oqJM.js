import{j as a}from"./iframe-C1_caHCh.js";import{T as o,a as i,s as D}from"./Tag-C7KPsfQ1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-lpoLXjt5.js";import"./utils-DLlXmFKZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dz-cs_XJ.js";import"./useFocusRing-CHoFu1xK.js";import"./index-D_EuWNb7.js";import"./index-BxdMM6xe.js";import"./useLabels-CVIC2PuH.js";import"./useButton-DNPbaC0J.js";import"./Collection-Ctx5W0Gn.js";import"./index-bQYguBnV.js";import"./ListBox-Bc3DXSdL.js";import"./DragAndDrop-DK5ZoFwN.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-nJTg4gEp.js";import"./SelectionManager-DJnhAm_C.js";import"./useEvent-Dzrr0yFS.js";import"./FocusScope-DlDUb7S8.js";import"./useDescription-BU01lwdR.js";import"./useControlledState-BJFYJbbD.js";import"./ListKeyboardDelegate-CiBBECOv.js";import"./Text-BNgDUph_.js";import"./inertValue-DN81bnHA.js";import"./useListState-CNV6UXf8.js";import"./useHighlightSelectionDescription-DkP9uGRK.js";import"./useUpdateEffect-8vXe1Wad.js";import"./useLocalizedStringFormatter-B90Zk4ke.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-mzfckILx.js";import"./useField-BE8nJtP1.js";import"./Button-n6cMZJhc.js";import"./Button.module-DRhvPh0f.js";import"./x-DJPD4UwD.js";import"./createLucideIcon-CfWIclpM.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
