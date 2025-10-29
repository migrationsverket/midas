import{j as a}from"./iframe-BzNj68k0.js";import{T as o,a as i,s as D}from"./Tag-BijnAmeb.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CEFu8IB1.js";import"./utils-PnKx4pke.js";import"./clsx-B-dksMZM.js";import"./Hidden-DPcjEBp6.js";import"./useFocusRing-J5-37fDr.js";import"./index-BtozDDqt.js";import"./index-CiAdLmPW.js";import"./useLabels-Bh4RY-Ue.js";import"./useButton-Bq__Mzmp.js";import"./Collection-BTvSxRCr.js";import"./index-C-AAYBJU.js";import"./ListBox-DOht-7oQ.js";import"./DragAndDrop-DtQlptii.js";import"./getScrollParent-DarrKkpX.js";import"./scrollIntoView-CWRZUIxZ.js";import"./Separator-DxxNn2K2.js";import"./SelectionManager-BMLi7yuO.js";import"./useEvent-B35FuxY4.js";import"./SelectionIndicator-doxrmumQ.js";import"./useDescription-BJHT61b0.js";import"./useControlledState-Dj-aoZTp.js";import"./ListKeyboardDelegate-DmhXPsU3.js";import"./RSPContexts-kFunSZWl.js";import"./Text-BNMRU08v.js";import"./inertValue-klolAkdw.js";import"./useListState-CbZeieR1.js";import"./useHighlightSelectionDescription-CyAHWxhG.js";import"./useUpdateEffect-CEPXOsIZ.js";import"./useLocalizedStringFormatter-Cb3OkORY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bf_DwTmX.js";import"./useField-W3I-4cM5.js";import"./clsx-Ciqy0D92.js";import"./Button-C1BHjcye.js";import"./Button.module-CcWMkJAG.js";import"./x-zC4JFTCu.js";import"./createLucideIcon-C7NsLT7x.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
