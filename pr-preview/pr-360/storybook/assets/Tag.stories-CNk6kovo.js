import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-BLjftMfd.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-AXOEyd3Z.js";import"./utils-C4wbeGu1.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DVVijuUB.js";import"./Label-BXmCKTLy.js";import"./Hidden-DizQ9ce0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-Bdg4Lht-.js";import"./context-gxVqox2x.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing-BPh1BF7L.js";import"./index-cpIEhwLo.js";import"./useFocusable-BNsiIlBy.js";import"./Collection-B-nlreot.js";import"./index-DwWe6W7f.js";import"./ListBox-CVC5Uzz_.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Cwyjh9kf.js";import"./SelectionManager-BcUGuGhA.js";import"./useEvent-D4_b5_Hb.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-qaFvQZnw.js";import"./useDescription-B1EhVr9u.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Bfw3o6i2.js";import"./useCollator-DpeVXYFV.js";import"./Text-CbyHDQDf.js";import"./useListState-KH1mqqtE.js";import"./useField-jnpLLrbi.js";import"./useHighlightSelectionDescription-52Zrb9Xr.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DFsWMtKh.js";import"./useHasTabbableChild-BvUbQUYt.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-BAWpS_MW.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const ir={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return <TagGroup aria-label='Taggar'>
        <Tag {...args} data-testid={testID}>
          {args.children}
        </Tag>
      </TagGroup>;
  },
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,n,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  render: Default.render
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const pr=["Default","Disabled"];export{r as Default,e as Disabled,pr as __namedExportsOrder,ir as default};
