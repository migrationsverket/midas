import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-DCw1L7me.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BhwOwugC.js";import"./utils-DdXLQA3f.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";import"./useFocusRing-CAIiVOBX.js";import"./useFocusable-C2jS3Qdx.js";import"./Collection-CrhAUUGf.js";import"./index-DwWe6W7f.js";import"./Label-oUcQSHlD.js";import"./ListBox-BtUT0EGq.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Bek8JbJ0.js";import"./SelectionManager-D8dA2YXE.js";import"./useEvent-BB46z8qb.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Q9OnV_W8.js";import"./context-BR8A0IbO.js";import"./useDescription-EqQzVjeZ.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CsHORISF.js";import"./Text-CV6Bluw9.js";import"./useListState-3AVlZZha.js";import"./useField-_-T_Udov.js";import"./useLabels-BlWvxUw7.js";import"./useHighlightSelectionDescription-IAqlj97Y.js";import"./useLocalizedStringFormatter-CrofGC5X.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-iuooBh9Z.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-CUfA1mhb.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const sr={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  render: Default.render
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ar=["Default","Disabled"];export{r as Default,e as Disabled,ar as __namedExportsOrder,sr as default};
