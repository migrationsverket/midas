import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-DhjpvqqS.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Db7Kwb_W.js";import"./utils-BhWkjeqE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-KG041EEs.js";import"./Label-BBCc9K7K.js";import"./Hidden-DrRnqvCY.js";import"./index-cpIEhwLo.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-CH4xJhfw.js";import"./context-DKkYq9qZ.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CsLSqN_1.js";import"./useFocusRing-BFo6eXxS.js";import"./Collection-Ckq42TFD.js";import"./index-DwWe6W7f.js";import"./ListBox-BwEhJUmI.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-BvAxnSk2.js";import"./SelectionManager-DZBNrpX9.js";import"./useEvent-F7Njpygl.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CVReLJeH.js";import"./useDescription-Dtl9HSnp.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-DojbmfC0.js";import"./Text-BpXRIGMg.js";import"./useListState-DLqXvUD_.js";import"./useField-Vu58C-dH.js";import"./useHighlightSelectionDescription-B0S_rY_S.js";import"./useLocalizedStringFormatter-CbwlXzSd.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-Bx_nEl3q.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-DK4vl02Z.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const ir={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
