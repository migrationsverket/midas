import{j as a}from"./iframe-P5IyoOKp.js";import{T as o,a as i,s as _}from"./Tag-D8o0jBQV.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-M8zl3yb7.js";import"./utils-BMmhu9Qw.js";import"./clsx-B-dksMZM.js";import"./Hidden-D_gelNDL.js";import"./useFocusRing-Bhx8O4iA.js";import"./index-DGLZuWIc.js";import"./index-B41adBfF.js";import"./useLabels-C9w4JgAc.js";import"./useButton-BDB40xhj.js";import"./Collection-BP7CVz7c.js";import"./index-P17BipiU.js";import"./ListBox-QsNBEzHR.js";import"./DragAndDrop-C3CrnxA9.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Zvx0n8f5.js";import"./SelectionManager-vJutWhRn.js";import"./useEvent-C0GPQNsf.js";import"./FocusScope-9pnGGbKm.js";import"./useDescription-MSDNNxVC.js";import"./useControlledState-mlAz-KiJ.js";import"./ListKeyboardDelegate-DJySD-Hr.js";import"./Text-Dh0Gu6y1.js";import"./inertValue-CaE-gMpK.js";import"./useListState-B0cDEF2D.js";import"./useField-BybZttPf.js";import"./useHighlightSelectionDescription-aol10l6m.js";import"./useUpdateEffect-CqC0WFeM.js";import"./useLocalizedStringFormatter-BW1u6orQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-k9nrqPwd.js";import"./Button-DGteMHsa.js";import"./Button.module-DKVuWS4g.js";import"./x-H99edj8y.js";import"./createLucideIcon-Cbttg5ER.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
