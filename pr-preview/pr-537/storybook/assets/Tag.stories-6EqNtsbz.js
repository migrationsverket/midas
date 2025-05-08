import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-DB4R-mdq.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DMocNr_H.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BgYBsm5l.js";import"./usePress-B1qsLRUy.js";import"./useFocusRing-CPQALXIu.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./Collection-Af87zMws.js";import"./index-DwWe6W7f.js";import"./ListBox-t-MvLJfz.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DutoTyKV.js";import"./SelectionManager-zEUAwP6t.js";import"./useEvent-DnmuJhSu.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-C0EWTSbR.js";import"./useDescription-TyCFs068.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-BcS6Rngn.js";import"./useCollator-5m9ED1_d.js";import"./Text-D0cNLqf0.js";import"./useListState-CJL-XnWI.js";import"./useField-BWvtu4tG.js";import"./useHighlightSelectionDescription-bMNPNBBZ.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DGtYtDnp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bh3e4XK9.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-Bo6x4U7a.js";import"./Button.module-BEIdyv-e.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const dr={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const lr=["Default","Disabled"];export{r as Default,e as Disabled,lr as __namedExportsOrder,dr as default};
