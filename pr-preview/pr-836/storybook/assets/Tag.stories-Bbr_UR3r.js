import{j as a}from"./iframe-D3TrqU1c.js";import{T as o,a as i,s as D}from"./Tag-CGPJqNkD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BB_SyN75.js";import"./utils-DH3YZe7j.js";import"./clsx-B-dksMZM.js";import"./Hidden-CiZTgx3K.js";import"./useFocusRing-9Tni2VRz.js";import"./index-DA8fU_Zp.js";import"./index-KBbZ-VWL.js";import"./useLabels-CCF8-s-s.js";import"./useButton-bB-Pq-IM.js";import"./Collection-A_ofS0d9.js";import"./index-GizOCmZ1.js";import"./ListBox-DfMwNMcQ.js";import"./DragAndDrop-CEmrxVkk.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C90YACU7.js";import"./SelectionManager-t9MucCT5.js";import"./useEvent-CixFMpwD.js";import"./FocusScope-CdLzvWGj.js";import"./useDescription-CBU6eYYQ.js";import"./useControlledState-DBdHwHLf.js";import"./ListKeyboardDelegate-BkDBPCY4.js";import"./Text-Rv0spGwe.js";import"./inertValue-D-1o5AOi.js";import"./useListState-C1AqbmyA.js";import"./useHighlightSelectionDescription-sUp8ozt_.js";import"./useUpdateEffect-CMNsjFdE.js";import"./useLocalizedStringFormatter-BGOelFld.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B8SDQSHL.js";import"./useField-BPAirKev.js";import"./Button-DAXVNDDT.js";import"./Button.module-DRhvPh0f.js";import"./x-6JXMEAe5.js";import"./createLucideIcon-DvAjTehV.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
