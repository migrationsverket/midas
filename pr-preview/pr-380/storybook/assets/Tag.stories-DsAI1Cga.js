import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-DUy64sw-.js";import{e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DUGs8NtW.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Cgq2ntZX.js";import"./Label-DO1wrnkN.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-CxawRSCB.js";import"./useFocusRing-Cfn9yE2V.js";import"./index-cpIEhwLo.js";import"./useFocusable-Pg9COOaT.js";import"./Collection-BkzVmqwu.js";import"./index-DwWe6W7f.js";import"./ListBox-CUsARBUe.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DX2iIcbV.js";import"./SelectionManager-DMsC2Nqq.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-ev4Wrgqm.js";import"./useDescription-CVNFK32G.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-XaxibD-Q.js";import"./useCollator-C3PRVItH.js";import"./Text-BkowhAon.js";import"./useListState-DiqEMAKd.js";import"./useField-9Cy_F6CL.js";import"./useHighlightSelectionDescription-BpyZXizU.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useHasTabbableChild-DjHROIAW.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-BK_vAUHg.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const pr={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:t=>s.jsx(u,{"aria-label":"Taggar",children:s.jsx(d,{...t,"data-testid":a,children:t.children})}),play:async({canvas:t,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(t.getByTestId(a)).toHaveClass(T.tag,g)})}},e={args:{isDisabled:!0},render:r.render};var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const mr=["Default","Disabled"];export{r as Default,e as Disabled,mr as __namedExportsOrder,pr as default};
