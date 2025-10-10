import{j as a}from"./iframe-DqdyiB7J.js";import{T as o,a as i,s as D}from"./Tag-FrNCTJIi.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C3uPH4mJ.js";import"./utils-Duxogl8B.js";import"./clsx-B-dksMZM.js";import"./Hidden-BwCVO_Pb.js";import"./useFocusRing-C2P5lFzM.js";import"./index-DFttptsz.js";import"./index-9K_U0cZ6.js";import"./useLabels-D0F7aHJk.js";import"./useButton-DxCtIUXq.js";import"./Collection-DZTpwVG-.js";import"./index-DxccfjXs.js";import"./ListBox-yKktRz03.js";import"./DragAndDrop-r90-HK7S.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BOx5fJq3.js";import"./SelectionManager-DH9DV_Z-.js";import"./useEvent-YJb81cUa.js";import"./FocusScope-DeG5OZ9a.js";import"./useDescription-DGr00tCs.js";import"./useControlledState-DmAnl8CJ.js";import"./context-CkpSyFZx.js";import"./Text-hLpWExah.js";import"./inertValue-BNcrt1wD.js";import"./useListState-BGnq-KRZ.js";import"./useHighlightSelectionDescription-D6T7R_UM.js";import"./useUpdateEffect-BZYajYkH.js";import"./useLocalizedStringFormatter-zKc9l4iu.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bie_h4wG.js";import"./useField-CgyxLryX.js";import"./clsx-Ciqy0D92.js";import"./Button-ClETozOe.js";import"./Button.module-CcWMkJAG.js";import"./x-dSBk4DSo.js";import"./createLucideIcon-DCKibsKR.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
