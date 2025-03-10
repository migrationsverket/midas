import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-DlFHkaDV.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Cm6N-U3G.js";import"./useFocusable-kTDKG0-I.js";import"./clsx-B-dksMZM.js";import"./Hidden-BtGjzlYc.js";import"./index-cpIEhwLo.js";import"./Collection-yU42VZsj.js";import"./index-DwWe6W7f.js";import"./Label-CQG0hq8b.js";import"./ListBox-CaUnlxff.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-BSvMe0jc.js";import"./SelectionManager-C4ptO5S1.js";import"./useEvent-CUPsne6n.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DFXDyZr7.js";import"./context-_OjZNubd.js";import"./useDescription-Wc3eT9Hr.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CU9Q0tF2.js";import"./Text-B6PEOduq.js";import"./useListState-roOPfFt8.js";import"./useField-BCfbuq15.js";import"./useLabels-CfvNSRSq.js";import"./useHighlightSelectionDescription-CAMReREE.js";import"./useLocalizedStringFormatter-DFEaIMYS.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-Dbawi6wQ.js";import"./Button-BgnELAWU.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const $={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:e=>t.jsx(u,{"aria-label":"Taggar",children:t.jsx(d,{...e,"data-testid":a,children:e.children})}),play:async({canvas:e,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(e.getByTestId(a)).toHaveClass(T.tag,g)})}},s={args:{isDisabled:!0},render:r.render};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  render: Default.render
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const rr=["Default","Disabled"];export{r as Default,s as Disabled,rr as __namedExportsOrder,$ as default};
