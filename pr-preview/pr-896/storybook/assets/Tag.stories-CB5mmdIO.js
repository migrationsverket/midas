import{j as a}from"./iframe-DlHlAQJo.js";import{T as o,a as i,s as D}from"./Tag-D-ehpRdZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DkbZ2U0v.js";import"./utils-CoWnALh5.js";import"./clsx-B-dksMZM.js";import"./Hidden-2FK6M7Gy.js";import"./useFocusRing-BNxWl82l.js";import"./index-Hhdo2DzF.js";import"./index-3FC3mL86.js";import"./useLabels-DRdIFR70.js";import"./useButton-BhskPxTZ.js";import"./Collection-C1ewVery.js";import"./index-BWyBxp6O.js";import"./ListBox-Bjokomiq.js";import"./DragAndDrop-C-SUtggM.js";import"./getScrollParent-DnIYQ2wY.js";import"./scrollIntoView-CTulstBo.js";import"./Separator-D7WfDSc3.js";import"./SelectionManager-BchWopzT.js";import"./useEvent-BzpZPZBX.js";import"./SelectionIndicator-BQZiO3DZ.js";import"./useDescription-BECMIjY5.js";import"./useControlledState-CP8W4iJo.js";import"./ListKeyboardDelegate-DX2SiypI.js";import"./RSPContexts-BpBv_SqP.js";import"./Text-DjXF8IrS.js";import"./inertValue-CUAnUem6.js";import"./useListState-DTvkwJDp.js";import"./useHighlightSelectionDescription-COiuBJgA.js";import"./useUpdateEffect-DXua_5W4.js";import"./useLocalizedStringFormatter-DMlIe0Bc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-WAwnWuN6.js";import"./useField-Cg5n28E-.js";import"./clsx-Ciqy0D92.js";import"./Button-Dplqfzqs.js";import"./Button.module-CcWMkJAG.js";import"./x-C5abKpL8.js";import"./createLucideIcon-DpIge4kZ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
