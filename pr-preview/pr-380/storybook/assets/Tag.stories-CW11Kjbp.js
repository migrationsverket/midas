import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-3a8lRyhN.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CTiZg4rz.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-qio85TVe.js";import"./Label-C7YJVz0K.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./context-gwlhO1hg.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./Collection-8zswMZr2.js";import"./index-DwWe6W7f.js";import"./ListBox-D8wMoVag.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Dru5Rsd-.js";import"./SelectionManager-CpQyjLx-.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-Br2KMoz-.js";import"./FocusScope-BTvUdKNZ.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Cy2OSJKs.js";import"./useCollator-BwOLflG5.js";import"./Text-CLHHKsvT.js";import"./useListState-DD0aXFW1.js";import"./useField-DUxalVp6.js";import"./useHighlightSelectionDescription-D1mAfCwv.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./useHasTabbableChild-CM3Inzdo.js";import"./getScrollParent-DaqmRUg6.js";import"./Button-BW9mzf3F.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const tr={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const er=["Default","Disabled"];export{r as Default,e as Disabled,er as __namedExportsOrder,tr as default};
