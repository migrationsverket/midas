import{j as a}from"./iframe-Db06n73j.js";import{T as o,a as i,s as D}from"./Tag-CaPWXPaN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-TWUAArMI.js";import"./utils-BNwmVugI.js";import"./clsx-B-dksMZM.js";import"./Hidden-BarDVNCr.js";import"./useFocusRing-DkuUvN5d.js";import"./index-wcraIVbR.js";import"./index-CxeJmlrD.js";import"./useLabels-2T5ax8_j.js";import"./useButton-CWMMgTJl.js";import"./Collection-_CJW6ceT.js";import"./index-CgfbVfZ4.js";import"./ListBox-H4B17pIP.js";import"./DragAndDrop-Nx5Hulb3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DV_OO5iK.js";import"./SelectionManager-Dc8hbGwf.js";import"./useEvent-BTjZor7y.js";import"./FocusScope-DSs-Ggxm.js";import"./useDescription-Cvk4XPDy.js";import"./useControlledState-BYIRcqeM.js";import"./ListKeyboardDelegate-fwQJtd_p.js";import"./Text-Q40zF-3b.js";import"./inertValue-BcoEJsBu.js";import"./useListState-Cc3cP_Fs.js";import"./useHighlightSelectionDescription-3XTi11Ui.js";import"./useUpdateEffect-DkP-9HzM.js";import"./useLocalizedStringFormatter-DAJU5j0f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-O7r0Vvgd.js";import"./useField-DhqsBlnR.js";import"./Button-pzNi3oej.js";import"./Button.module-DRhvPh0f.js";import"./x-wf6UuVlb.js";import"./createLucideIcon-Ct2AVxYE.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
