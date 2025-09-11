import{j as a}from"./iframe-DR8L4Xnv.js";import{T as o,a as i,s as D}from"./Tag-Bgxs4aQf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-L9ZO_Wdi.js";import"./utils-_EjDF-Ut.js";import"./clsx-B-dksMZM.js";import"./Hidden-CjTTeGMF.js";import"./useFocusRing-Id7VWDlJ.js";import"./index-C8-Kg3RB.js";import"./index-VyJVQYqT.js";import"./useLabels-DnsXQCfA.js";import"./useButton-D_61eDGD.js";import"./Collection-8x4KHlIk.js";import"./index-DXkVrqc0.js";import"./ListBox-6kThNuKj.js";import"./DragAndDrop-D8isl1wx.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CvnqdHLX.js";import"./SelectionManager-BIbGugOf.js";import"./useEvent-0_zji010.js";import"./FocusScope-dwl_Hqxj.js";import"./useDescription-DmYJDaYi.js";import"./useControlledState-3IGzNqgo.js";import"./ListKeyboardDelegate-lbyjRsx3.js";import"./Text-wzyJDY6_.js";import"./inertValue-griwdU5X.js";import"./useListState-CCzcuvVT.js";import"./useHighlightSelectionDescription-DlBnnYhE.js";import"./useUpdateEffect-mGH65x0s.js";import"./useLocalizedStringFormatter-BgU3RQLW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-14QYz5u3.js";import"./useField-BASNkSux.js";import"./Button-B8UyvKKh.js";import"./Button.module-DRhvPh0f.js";import"./x-CrkewCSF.js";import"./createLucideIcon-m0e9aRI4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
