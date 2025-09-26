import{j as a}from"./iframe-B7J66c5t.js";import{T as o,a as i,s as D}from"./Tag-D0VT-xV8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BnwwKoUs.js";import"./utils-DbsP0l1-.js";import"./clsx-B-dksMZM.js";import"./Hidden-MMOlKIG9.js";import"./useFocusRing-oDbHj0sH.js";import"./index-QsIvV83H.js";import"./index-D3up-23-.js";import"./useLabels-8GiNw-Zq.js";import"./useButton-D7PmSFD_.js";import"./Collection-Bnyy68sg.js";import"./index-B_yix8SO.js";import"./ListBox-CDB8ERzW.js";import"./DragAndDrop-i_DS9PZ6.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-5odS8wum.js";import"./SelectionManager-1n0YltI4.js";import"./useEvent-DYTVUobE.js";import"./FocusScope-DTJW3HnF.js";import"./useDescription-COErd88C.js";import"./useControlledState-bqWw1IC8.js";import"./ListKeyboardDelegate-BCu2CKeT.js";import"./Text-CtoIdVMt.js";import"./inertValue-DHZZsLSY.js";import"./useListState-CiaF19Te.js";import"./useHighlightSelectionDescription-CxehAgGG.js";import"./useUpdateEffect-CTEwq4Vw.js";import"./useLocalizedStringFormatter-zqtKG1Tm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CpBiKH8L.js";import"./useField-IxaPtQ7g.js";import"./Button-Ct4Mj7Th.js";import"./Button.module-DRhvPh0f.js";import"./x-BWmyx1jz.js";import"./createLucideIcon-CnGwW_e8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
