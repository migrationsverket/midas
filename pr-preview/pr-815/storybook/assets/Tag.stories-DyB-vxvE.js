import{j as a}from"./iframe-B-gPCSpv.js";import{T as o,a as i,s as D}from"./Tag-DK2-qsUs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B4J0gY8s.js";import"./utils-DiWx79Jw.js";import"./clsx-B-dksMZM.js";import"./Hidden-CIuz8JfB.js";import"./useFocusRing-107SknOB.js";import"./index-DTYrm8o8.js";import"./index-x5WTYP2E.js";import"./useLabels-CKWHFkO6.js";import"./useButton-D8jWkrSu.js";import"./Collection-B0scwKWE.js";import"./index-C34fNXgX.js";import"./ListBox-CxUW_sVI.js";import"./DragAndDrop-CISOskJK.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CokRwxjf.js";import"./SelectionManager-BYqOo5J5.js";import"./useEvent-DziGrBB7.js";import"./FocusScope-DWtJPMqP.js";import"./useDescription-DpfWzfGV.js";import"./useControlledState-CzCN6Dwj.js";import"./ListKeyboardDelegate-B5jiCXic.js";import"./Text-D5QAKvWI.js";import"./inertValue-DCXvfsXl.js";import"./useListState-C3raBtht.js";import"./useHighlightSelectionDescription-_luLLrzu.js";import"./useUpdateEffect-COPnnXdO.js";import"./useLocalizedStringFormatter-B1YK8JIF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-kI6K4P9x.js";import"./useField-Djp8RUFk.js";import"./Button-DZ8X7Izb.js";import"./Button.module-DRhvPh0f.js";import"./x-BRyqpScw.js";import"./createLucideIcon-DqBPmtqh.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
