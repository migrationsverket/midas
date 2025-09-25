import{j as a}from"./iframe-CDK8l1zz.js";import{T as o,a as i,s as D}from"./Tag-DKADqVwO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CjjkuozD.js";import"./utils-C9ibdbLH.js";import"./clsx-B-dksMZM.js";import"./Hidden-BPoo_4M4.js";import"./useFocusRing-BWm0-qj_.js";import"./index-DOHoX8bt.js";import"./index-BJuMnSMV.js";import"./useLabels-dl8LXetB.js";import"./useButton-Cr4oYVc2.js";import"./Collection-C5a33ZZ4.js";import"./index-C6r_5oJF.js";import"./ListBox-CYsLL7ku.js";import"./DragAndDrop-DWUSZ3FK.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CNFqP4Wh.js";import"./SelectionManager-GdFec_g5.js";import"./useEvent-CM2hG3jx.js";import"./FocusScope-CZTfTuUz.js";import"./useDescription-B2YFDFQD.js";import"./useControlledState-DCTdsEUX.js";import"./ListKeyboardDelegate-Byvd6YLK.js";import"./Text-DS_sDe6V.js";import"./inertValue-BlKEKUAB.js";import"./useListState-BiYsaaob.js";import"./useHighlightSelectionDescription-CTZexVar.js";import"./useUpdateEffect-CzfsGmM4.js";import"./useLocalizedStringFormatter-DCMwGOlQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BJ_B9XEe.js";import"./useField-tj6IENer.js";import"./Button-M8XHa1U7.js";import"./Button.module-DRhvPh0f.js";import"./x-i6iBAVa9.js";import"./createLucideIcon-BKMMjNOn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
