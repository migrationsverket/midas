import{j as a}from"./iframe-BExlenCQ.js";import{T as o,a as i,s as _}from"./Tag-DHAvmmlW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C9bs2Wi1.js";import"./utils-C6RjMp7H.js";import"./clsx-B-dksMZM.js";import"./Hidden-GKaJLmHj.js";import"./useFocusRing-DLuM98Kk.js";import"./index-YhXIT21j.js";import"./index-BMtkQeCX.js";import"./useLabels-CDUGqJTT.js";import"./useButton-iU2M42KN.js";import"./Collection-B9ALQ5jO.js";import"./index-D2Zpwabu.js";import"./ListBox-C0tujrcy.js";import"./DragAndDrop-DPPPKiOD.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CMQtVXIL.js";import"./SelectionManager-CwbUE3OB.js";import"./useEvent-C4-TW8ZK.js";import"./FocusScope-B_Tu2dIL.js";import"./useDescription-B4y-a6ps.js";import"./useControlledState-Dz8WCj4P.js";import"./ListKeyboardDelegate-B152EyHK.js";import"./Text-BWlRQ3Mg.js";import"./inertValue-DMnAwtHF.js";import"./useListState-BO82boyC.js";import"./useField-DKsTJ6Gr.js";import"./useHighlightSelectionDescription-CAiZuMNy.js";import"./useUpdateEffect-CbjGUxlA.js";import"./useLocalizedStringFormatter-BqCwtdeN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BGz_4sw_.js";import"./Button-B8N8TnnH.js";import"./Button.module-CF2bVDCq.js";import"./x-BB6h2sWr.js";import"./createLucideIcon-B1Y0HDaz.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
