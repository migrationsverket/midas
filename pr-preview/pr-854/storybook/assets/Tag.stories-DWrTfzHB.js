import{j as a}from"./iframe-CdSl9BJN.js";import{T as o,a as i,s as D}from"./Tag-DJpKTOaQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-WLp7kXyI.js";import"./utils-BY-MgxZk.js";import"./clsx-B-dksMZM.js";import"./Hidden-BE4GUIk5.js";import"./useFocusRing-C2djaEmJ.js";import"./index-BCshj0yo.js";import"./index-DqXCPiS2.js";import"./useLabels-CXFAc3Yp.js";import"./useButton-C2T7XZeH.js";import"./Collection-CwlaGB97.js";import"./index-C-GpREPZ.js";import"./ListBox-DSOWeL6x.js";import"./DragAndDrop-BvSo93_j.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CDjHSTtZ.js";import"./SelectionManager-BkGq2u8z.js";import"./useEvent-7GssIpYJ.js";import"./FocusScope-BV-FjAed.js";import"./useDescription-C7KaFIlZ.js";import"./useControlledState-BRV_sNRI.js";import"./context-D1Ix7Mf6.js";import"./Text-qGs4dn9Z.js";import"./inertValue-_JJOp_Zq.js";import"./useListState-DcVMqOvO.js";import"./useHighlightSelectionDescription-Bk2nXQP4.js";import"./useUpdateEffect-DJ2azPea.js";import"./useLocalizedStringFormatter-bAiO2mY-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DMQh7zRs.js";import"./useField-B4wYxwfO.js";import"./Button-DzpkVwqx.js";import"./Button.module-DiZbaUKl.js";import"./x-B4VzPsGB.js";import"./createLucideIcon-CwSL82L5.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
