import{j as a}from"./iframe-B0Px-nz_.js";import{T as o,a as i,s as D}from"./Tag-SyZDV2Qs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CG2qrgSs.js";import"./utils-iVrX01oG.js";import"./clsx-B-dksMZM.js";import"./Hidden-FawNVIyw.js";import"./useFocusRing-CHVCr-F6.js";import"./index-CyP8qQg6.js";import"./index-09HjZJ7C.js";import"./useLabels-Duupc4tA.js";import"./useButton-CqaIeCPY.js";import"./Collection-CQE5JDhA.js";import"./index-DGJ7WYqR.js";import"./ListBox-DYQvRONC.js";import"./DragAndDrop-na45QWDh.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DWHiot0x.js";import"./SelectionManager-eB9XOyPn.js";import"./useEvent-DjWy1Psc.js";import"./FocusScope-8cPz8oz-.js";import"./useDescription-Dj5rQxX9.js";import"./useControlledState-Dw4uBEHH.js";import"./context-BYSrcJEq.js";import"./Text-imwHNKw9.js";import"./inertValue-TVDj1ic1.js";import"./useListState-BZgtYXQJ.js";import"./useHighlightSelectionDescription-Dp-xTZ2h.js";import"./useUpdateEffect-XX9vEP4E.js";import"./useLocalizedStringFormatter-CyyNjnLw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-3ZRqLm0h.js";import"./useField-BGJ9nIGq.js";import"./clsx-Ciqy0D92.js";import"./Button-CJkDKDY3.js";import"./Button.module-DRhvPh0f.js";import"./x--xNSbi3o.js";import"./createLucideIcon-C2fI6N7u.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
