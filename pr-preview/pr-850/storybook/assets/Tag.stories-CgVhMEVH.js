import{j as a}from"./iframe-DKACfEJ9.js";import{T as o,a as i,s as D}from"./Tag-BBn7NBjo.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-hCrB4ss_.js";import"./utils-B0EL9QAC.js";import"./clsx-B-dksMZM.js";import"./Hidden-B1vQ8rpE.js";import"./useFocusRing-BGmS3MnF.js";import"./index-C__9La4M.js";import"./index-CE96OhOs.js";import"./useLabels-JlA9TfrB.js";import"./useButton-Do6Y9jOt.js";import"./Collection-G_8NP3fI.js";import"./index-BxEQ7Yii.js";import"./ListBox-qYZjD71z.js";import"./DragAndDrop-EVdRsLF_.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CcWkD2nI.js";import"./SelectionManager-BYOKwv5G.js";import"./useEvent-CA4if1GD.js";import"./FocusScope-CJy9A5Hh.js";import"./useDescription-Biz4Vsss.js";import"./useControlledState-Cv6MF0nP.js";import"./context-BGfOH-de.js";import"./Text-DKA7lTs9.js";import"./inertValue-DRTs_93O.js";import"./useListState-B4kid2bg.js";import"./useHighlightSelectionDescription-BnO7MVPJ.js";import"./useUpdateEffect-YWdkUTE9.js";import"./useLocalizedStringFormatter-GRysv1Ep.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DYVA-afH.js";import"./useField-Ug4NHnP4.js";import"./Button-Ckz_WYOm.js";import"./Button.module-DRhvPh0f.js";import"./x-_L9DLDzE.js";import"./createLucideIcon-BeEHrT2F.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
