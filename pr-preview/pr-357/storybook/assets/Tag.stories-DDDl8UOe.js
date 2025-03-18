import{j as s}from"./jsx-runtime-CBDCb4rg.js";import{T as d,s as u,a as T}from"./Tag-BN-SPo19.js";import{e as y}from"./index-iZ8NAl3x.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-iL9IzHG8.js";import"./utils-CyugoGNF.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-B2jw0c1b.js";import"./Label-ByRA_SKm.js";import"./Hidden-B6il94lO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DbJIstGE.js";import"./context-BwmME58u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusRing-BODiw1iP.js";import"./index-BAyGJXOV.js";import"./useFocusable-CqLabGgp.js";import"./Collection-KpeOqn_K.js";import"./index-Btf1eDe9.js";import"./ListBox-DFhn37Qm.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-DuTifGF-.js";import"./SelectionManager-DRxs2Bqi.js";import"./useEvent-DrHgLB5Q.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Ded37Rd9.js";import"./useDescription-DZZa8B5b.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-SnKTO46q.js";import"./useCollator-B0i4hO_n.js";import"./Text-DnyJpj_W.js";import"./useListState-DFvoS08W.js";import"./useField-YKOABOJo.js";import"./useHighlightSelectionDescription-MBiDJdUj.js";import"./useUpdateEffect-Bs3_Kx5l.js";import"./useLocalizedStringFormatter-B6l6yPuV.js";import"./useHasTabbableChild-BMUHg4RC.js";import"./getScrollParent-CvodOSaS.js";import"./Button-DfRI4d68.js";import"./x-CdHhRR78.js";import"./createLucideIcon-DjmUzaoT.js";const ir={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(T,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(u.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
