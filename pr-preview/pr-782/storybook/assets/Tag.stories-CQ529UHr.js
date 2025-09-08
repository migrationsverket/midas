import{j as a}from"./iframe-C2Jgh-q7.js";import{T as o,a as i,s as D}from"./Tag-BsYz-I1M.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-UG8rJ7vm.js";import"./utils-Bq9Sv57C.js";import"./clsx-B-dksMZM.js";import"./Hidden-V1NiDjQ4.js";import"./useFocusRing-Du_O-Ixu.js";import"./index-KIR8PsR_.js";import"./index-DUTftEie.js";import"./useLabels-DfDvv5EX.js";import"./useButton-B9aPhLhK.js";import"./Collection-D917MT2A.js";import"./index-BIFEwGRQ.js";import"./ListBox-CPuw5EQ2.js";import"./DragAndDrop-DhI667ha.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C0koW62U.js";import"./SelectionManager-DYA7_qJe.js";import"./useEvent-BXKe98Us.js";import"./FocusScope-SuRXU6Z-.js";import"./useDescription-4mbS2drY.js";import"./useControlledState-CojmLSze.js";import"./ListKeyboardDelegate-DPdkBtAJ.js";import"./Text-CEvwx_K-.js";import"./inertValue-OIsJAN5q.js";import"./useListState-BGdN_NL-.js";import"./useHighlightSelectionDescription-DTjXM14b.js";import"./useUpdateEffect-CZ-d2jYo.js";import"./useLocalizedStringFormatter-CjHHqDYq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BbnhBINV.js";import"./useField-Bu5IqXuV.js";import"./Button-BpB-CONs.js";import"./Button.module-okL0tbxC.js";import"./x-BpDTJFG1.js";import"./createLucideIcon-DYsE5YRH.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
