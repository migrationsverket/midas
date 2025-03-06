import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{T as d,a as u,s as T}from"./Tag-CDXrTKou.js";import{e as y}from"./index-Bn1z2x26.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DlxIrWB_.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./Collection-B65vjQb4.js";import"./index-DwWe6W7f.js";import"./Label-B23VYN9V.js";import"./ListBox-Crw63iPj.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CFSVS3UH.js";import"./SelectionManager-Z9gqeiha.js";import"./useEvent-B_cSPOEW.js";import"./FocusScope-DWsZ07QH.js";import"./context-DVpahnpO.js";import"./useDescription-B0GcPv_I.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-dzYvetd0.js";import"./Text-BorP-jFP.js";import"./useListState-BmjFvOwc.js";import"./useField-lqkOjd2l.js";import"./useLabels-Dt0KIlgT.js";import"./useHighlightSelectionDescription-lgUWLCWs.js";import"./useLocalizedStringFormatter-BfPjM0Dg.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-BwFIKLcQ.js";import"./Button-B8jSVl6X.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";const Y={component:d,title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"}},a="test",r={render:e=>t.jsx(u,{"aria-label":"Taggar",children:t.jsx(d,{...e,"data-testid":a,children:e.children})}),play:async({canvas:e,step:l,args:{className:g}})=>{await l("it should preserve its classNames when being passed new ones",async()=>{y(e.getByTestId(a)).toHaveClass(T.tag,g)})}},s={args:{isDisabled:!0},render:r.render};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Z=["Default","Disabled"];export{r as Default,s as Disabled,Z as __namedExportsOrder,Y as default};
