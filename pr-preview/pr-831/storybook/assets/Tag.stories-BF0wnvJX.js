import{j as a}from"./iframe-CEvLaVEN.js";import{T as o,a as i,s as D}from"./Tag-DWdjt7t-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DMDEWzo2.js";import"./utils-BSp-fxS2.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dep40vQz.js";import"./useFocusRing-BU-l4Ocl.js";import"./index-FwyS9nB-.js";import"./index-DGiio035.js";import"./useLabels-BHzt053A.js";import"./useButton-BhXM9hkO.js";import"./Collection-CJ5uzV1P.js";import"./index-Os_YclTr.js";import"./ListBox-DwIGKrev.js";import"./DragAndDrop-CjyIT1gp.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-J6hv3pQW.js";import"./SelectionManager-CR387u2z.js";import"./useEvent-8nZqSeFR.js";import"./FocusScope-cpkgoZ6Y.js";import"./useDescription-6IFLoqSB.js";import"./useControlledState-ChQpaTy1.js";import"./context-CdqpVmnE.js";import"./Text-CblLIKbO.js";import"./inertValue-DYDiPwIY.js";import"./useListState-C_UVlciA.js";import"./useHighlightSelectionDescription-BmqkiS5V.js";import"./useUpdateEffect-C_OkHR5W.js";import"./useLocalizedStringFormatter-5OkDB-NV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-YOCofudS.js";import"./useField-DM4ZmM9w.js";import"./Button-B4laSDuD.js";import"./Button.module-DRhvPh0f.js";import"./x-D_KtA-jg.js";import"./createLucideIcon-CGjcf0Bb.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
