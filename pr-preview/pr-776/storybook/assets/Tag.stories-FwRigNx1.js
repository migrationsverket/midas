import{j as a}from"./iframe-Btbb3L2Z.js";import{T as o,a as i,s as D}from"./Tag-OdWRrxVr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-H-8qNdv9.js";import"./utils-U1rnnkpm.js";import"./clsx-B-dksMZM.js";import"./Hidden-BtbK9BKB.js";import"./useFocusRing-CL_SXCHN.js";import"./index-CNDSvyls.js";import"./index-DDlzG1Tw.js";import"./useLabels-DrO0tIOD.js";import"./useButton-axDEeOsH.js";import"./Collection-CNXWChEZ.js";import"./index-De12K4hf.js";import"./ListBox-ByNyvO5x.js";import"./DragAndDrop-wxHRb1uX.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C6HcMu08.js";import"./SelectionManager-Cm6Rt7kk.js";import"./useEvent-CkJER9Q8.js";import"./FocusScope-CkOSe5dA.js";import"./useDescription-C7OZptk2.js";import"./useControlledState-CxOVeQV0.js";import"./ListKeyboardDelegate-iBFJygX0.js";import"./Text-RUhIRIf3.js";import"./inertValue-djxdjRrb.js";import"./useListState-BQO3h16V.js";import"./useHighlightSelectionDescription-C-Z8i32Q.js";import"./useUpdateEffect-b0TKkNj2.js";import"./useLocalizedStringFormatter-BAypbA8V.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-aHBli47_.js";import"./useField-BglrLbqM.js";import"./Button-CjqJeY2n.js";import"./Button.module-DgYkWG2o.js";import"./x-DYWL_cPx.js";import"./createLucideIcon-Dye7fpkX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
