import{j as a}from"./iframe-B_y6g-9r.js";import{T as o,a as i,s as D}from"./Tag-fNOG8NMw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CV_Mq9t_.js";import"./utils-BRAOF98I.js";import"./clsx-B-dksMZM.js";import"./Hidden-C1--NwGl.js";import"./useFocusRing-BR4dpyki.js";import"./index-D86mRU9q.js";import"./index-LkFueUcS.js";import"./useLabels-Q0N14n5s.js";import"./useButton-Ce8mNIMT.js";import"./Collection-BXNiaxOj.js";import"./index-D-Y5eEdz.js";import"./ListBox-BC5Pyj44.js";import"./DragAndDrop-Vvf-GLGy.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BVjRFhBN.js";import"./SelectionManager-CaU6wkaH.js";import"./useEvent-DnFuQpkV.js";import"./FocusScope-fWZfAOj6.js";import"./useDescription-BogqO1TM.js";import"./useControlledState-T2gGbpfx.js";import"./ListKeyboardDelegate-CLBxZLAr.js";import"./Text-Bn_Y5EXC.js";import"./inertValue-Bsgcv7WD.js";import"./useListState-BE7aEcL9.js";import"./useHighlightSelectionDescription-DW0iZtY5.js";import"./useUpdateEffect-BNTgjhQv.js";import"./useLocalizedStringFormatter-PKcBR076.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BfyeoaiF.js";import"./useField-CpwAIn4v.js";import"./Button-x1br7nEK.js";import"./Button.module-CF2bVDCq.js";import"./x-BmkzTjno.js";import"./createLucideIcon-Cn2-1bOx.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
