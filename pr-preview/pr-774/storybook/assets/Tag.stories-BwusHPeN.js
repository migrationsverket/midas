import{j as a}from"./iframe-y3zUiO1J.js";import{T as o,a as i,s as D}from"./Tag-DliE0vhI.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CzVrwDkD.js";import"./utils-DgfIEZ2l.js";import"./clsx-B-dksMZM.js";import"./Hidden-LIVvUHEl.js";import"./useFocusRing-CCdMQ_TW.js";import"./index-CT42ImiZ.js";import"./index-Dli5INss.js";import"./useLabels-BPMr3Cme.js";import"./useButton-WDu1xsqv.js";import"./Collection-DhfTE3E9.js";import"./index-oR09zEQD.js";import"./ListBox-BMKwW7Zv.js";import"./DragAndDrop-ISs4gArs.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DPfAiPIW.js";import"./SelectionManager-D6gO8XHw.js";import"./useEvent-CpudPYOj.js";import"./FocusScope-Ybh16f8F.js";import"./useDescription-BnySdmCV.js";import"./useControlledState-BMSmXNYe.js";import"./ListKeyboardDelegate-DVZN-xzJ.js";import"./Text-B2aZuF7F.js";import"./inertValue-Cbfo9opA.js";import"./useListState-D6x91dYx.js";import"./useField-BbATYL60.js";import"./useHighlightSelectionDescription-BdDP1opK.js";import"./useUpdateEffect-DvalZOKq.js";import"./useLocalizedStringFormatter-ok5SO70Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BtkVAq4Z.js";import"./Button-BDrqJzdG.js";import"./Button.module-CF2bVDCq.js";import"./x-BJvE-ZNY.js";import"./createLucideIcon-DqdaTGZ4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
