import{j as a}from"./iframe-ClFI9joP.js";import{T as o,a as i,s as D}from"./Tag-DlQcBb7L.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-W1qSmTHU.js";import"./utils-Cbe0G1jR.js";import"./clsx-B-dksMZM.js";import"./Hidden-CyitA6iD.js";import"./useFocusRing-yY6V6bgi.js";import"./index-DP5ymV6L.js";import"./index-HACngWbT.js";import"./useLabels-Bj4GA4Kx.js";import"./useButton-4a0lm0Vi.js";import"./Collection-lgVAVMtp.js";import"./index-DoPKL_4D.js";import"./ListBox-DfhY2Y6t.js";import"./DragAndDrop-Dg8l8GOX.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DO0eXqCL.js";import"./SelectionManager-BhwzyQJ7.js";import"./useEvent-_pMV9sOj.js";import"./FocusScope-DkhmIDM9.js";import"./useDescription-CKHHS4bO.js";import"./useControlledState-Cn30BorS.js";import"./context-j1H473RE.js";import"./Text-HmNi78tX.js";import"./inertValue-CUgUzNCK.js";import"./useListState-BMMIKJdh.js";import"./useHighlightSelectionDescription-Bb0jdhPb.js";import"./useUpdateEffect-BETjw5Iv.js";import"./useLocalizedStringFormatter-BfLPyveO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CaaRZkd0.js";import"./useField-DJ8FpHrq.js";import"./clsx-Ciqy0D92.js";import"./Button-D4qMwwF3.js";import"./Button.module-DRhvPh0f.js";import"./x-Di5TQaEg.js";import"./createLucideIcon-B5lgqgWn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
