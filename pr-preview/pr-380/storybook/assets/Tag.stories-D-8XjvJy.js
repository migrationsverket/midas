import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-C80r87_Y.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BpxGj6Q-.js";import"./utils-B5vVULSi.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-C-2ZZqws.js";import"./Label-DK2CQORK.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-XbSNQJBa.js";import"./context-B5OQOlVG.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-CCvsZXnc.js";import"./useFocusRing-HUlwicEq.js";import"./focusSafely-BIGdxh6G.js";import"./index-cpIEhwLo.js";import"./useFocusable-BvehpvqX.js";import"./Collection-BD1J50_p.js";import"./index-DwWe6W7f.js";import"./ListBox-DkP01DRa.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CmdsbzTX.js";import"./SelectionManager-DETXSFCn.js";import"./useEvent--bAfsHDR.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BL8QXNsc.js";import"./useDescription-C_qiR2pz.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Cq1FbvDu.js";import"./useCollator-DECUsGSp.js";import"./Text-BfWS687k.js";import"./useListState-DJ8R7dxx.js";import"./useField-BiUYFPQe.js";import"./useHighlightSelectionDescription-Z-6PLlcu.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-BsPioxkm.js";import"./useHasTabbableChild-BSE10KKE.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-YcYG98Dl.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const mr={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const nr=["Default","Disabled"];export{r as Default,e as Disabled,nr as __namedExportsOrder,mr as default};
