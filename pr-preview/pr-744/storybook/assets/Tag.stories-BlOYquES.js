import{j as a}from"./iframe-BElIAnPv.js";import{T as o,a as i,s as D}from"./Tag-BRRY0uk6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bo4LLvWR.js";import"./utils-DEtF3URH.js";import"./clsx-B-dksMZM.js";import"./Hidden-C9eeNW5u.js";import"./useFocusRing-BnxhOqqJ.js";import"./index-BS1ogt4r.js";import"./index-BXfk70AB.js";import"./useLabels-DI6GRJ43.js";import"./useButton-BLj7BdWG.js";import"./Collection-DBhA2vri.js";import"./index-BZKZDdQI.js";import"./ListBox-D7YwB6Vi.js";import"./DragAndDrop-C2T7C8v1.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DgQrZmA1.js";import"./SelectionManager-D4dsD9og.js";import"./useEvent-DDHuJDZ3.js";import"./FocusScope-3DSnSsZ1.js";import"./useDescription-DaEFE4E2.js";import"./useControlledState-Bx7NwNUp.js";import"./ListKeyboardDelegate-DHdbvgJ9.js";import"./Text-C_LFIXGv.js";import"./inertValue-CwMdDAoc.js";import"./useListState-BAmJ2J13.js";import"./useHighlightSelectionDescription-D_LJBI9A.js";import"./useUpdateEffect-u4v55XLx.js";import"./useLocalizedStringFormatter-DuBO1bfJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DSVjxoIV.js";import"./useField-Cbq2Nbha.js";import"./Button-CkCVPfUp.js";import"./Button.module-CF2bVDCq.js";import"./x-DM7BLOIe.js";import"./createLucideIcon--fT4h1UV.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
