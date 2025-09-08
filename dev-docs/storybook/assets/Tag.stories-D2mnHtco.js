import{j as a}from"./iframe-BHmbOUqA.js";import{T as o,a as i,s as D}from"./Tag-GkuDjgal.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-N-CsK6A3.js";import"./utils-otU-kTxi.js";import"./clsx-B-dksMZM.js";import"./Hidden-BadakbO5.js";import"./useFocusRing-CwRv9vb_.js";import"./index-Ds_lxWMd.js";import"./index-awPr--nl.js";import"./useLabels-DhfVSLog.js";import"./useButton-DSKjIhlf.js";import"./Collection-C1Hm8__9.js";import"./index-wXjIWFP_.js";import"./ListBox-B2031DgC.js";import"./DragAndDrop-CsfkMxDW.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BSzOP4jQ.js";import"./SelectionManager-De3xXG_P.js";import"./useEvent-CitYETeF.js";import"./FocusScope-BRpy-Kg7.js";import"./useDescription-CQi3lLZ1.js";import"./useControlledState-CkHxrlgs.js";import"./ListKeyboardDelegate-CxDe0nsw.js";import"./Text-u7WDlpK_.js";import"./inertValue-DwU2s7yS.js";import"./useListState-BPwEBR5v.js";import"./useHighlightSelectionDescription-D6S8BVjQ.js";import"./useUpdateEffect-AIyu0E4c.js";import"./useLocalizedStringFormatter-B86PEwnM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DasHTYBb.js";import"./useField-Bjpf0AHk.js";import"./Button-D6eZ8SnA.js";import"./Button.module-DgYkWG2o.js";import"./x-Bw_fRv18.js";import"./createLucideIcon-3TJQiGFz.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
