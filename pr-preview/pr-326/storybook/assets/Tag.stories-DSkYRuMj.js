import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-CLjZfI9z.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DWcm3eun.js";import"./useFocusRing-CzvYi63w.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./useFocusable-BFetNXOg.js";import"./Collection-X5x-dm2B.js";import"./index-DwWe6W7f.js";import"./Label-D5LZnuba.js";import"./ListBox-CKr9ln8X.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DpKt-EJF.js";import"./SelectionManager-DjWgx8kx.js";import"./useEvent-obUhTg3D.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CaULHkOc.js";import"./context-DhWQxiCQ.js";import"./useDescription-DLAKITkC.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CZkj3LZa.js";import"./Text-Bs3wmQ_r.js";import"./useListState-CyUQWhT9.js";import"./useField-CeWVpZ88.js";import"./useLabels-C6xreehw.js";import"./useHighlightSelectionDescription-DIIL1iW4.js";import"./useLocalizedStringFormatter-BPmhGMia.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-DxaYTyzB.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-D6g6VerN.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const er={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,m,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  render: Default.render
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const sr=["Default","Disabled"];export{r as Default,e as Disabled,sr as __namedExportsOrder,er as default};
