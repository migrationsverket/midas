import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-BCGMjR6C.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-uO1JGISi.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DNnV_wJ6.js";import"./Label-CkQlERdq.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-HKeWiXpl.js";import"./index-cpIEhwLo.js";import"./context-BSqmORe6.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./Collection-O4Gi1PSO.js";import"./index-DwWe6W7f.js";import"./ListBox-Kz2neV8v.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-BAiZ62s6.js";import"./SelectionManager-6a3fudD6.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-CnTD5aJz.js";import"./FocusScope-C97GJsIb.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DayiplM_.js";import"./useCollator-C3PRVItH.js";import"./Text-BkowhAon.js";import"./useListState-RMwQ7egM.js";import"./useField-B8c6pWIv.js";import"./useHighlightSelectionDescription-eBjW0mzR.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useHasTabbableChild-BKcOOOE0.js";import"./getScrollParent-2-PurW9V.js";import"./Button-D9mPwvHL.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const tr={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
