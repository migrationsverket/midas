import{j as a}from"./iframe-C9d1fKfO.js";import{T as o,a as i,s as D}from"./Tag-CjCIYsSR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BltcA86v.js";import"./utils-FbC4eyQm.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dl2QBsGx.js";import"./useFocusRing-CNCE1EVL.js";import"./index-CL2pwWhj.js";import"./index-D5XPD3lC.js";import"./useLabels-CU4SjVsy.js";import"./useButton-BCp__FJB.js";import"./Collection-C7v7MAjg.js";import"./index-B1lXgrjD.js";import"./ListBox-BZXgj4gJ.js";import"./DragAndDrop-B7DNFqEw.js";import"./getScrollParent-DTPOKYa6.js";import"./scrollIntoView-BWXntg-O.js";import"./Separator-D0nrjvPg.js";import"./SelectionManager-BbEKObbC.js";import"./useEvent-AXe0s0im.js";import"./SelectionIndicator-C7PkPIB9.js";import"./useDescription-CnZvN1p9.js";import"./useControlledState-C2sRQUEB.js";import"./ListKeyboardDelegate-DwCB-Obb.js";import"./RSPContexts-CzQlP4zt.js";import"./Text-DlJgJ_Ij.js";import"./inertValue-E0mhwZQe.js";import"./useListState-BVE34NVg.js";import"./useHighlightSelectionDescription-C-LDrj16.js";import"./useUpdateEffect-D0kiHgWb.js";import"./useLocalizedStringFormatter-COOSDuy1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DVcN1Vvu.js";import"./useField-BjtY2FCQ.js";import"./clsx-Ciqy0D92.js";import"./Button-CmAFj7fr.js";import"./Button.module-CcWMkJAG.js";import"./x-BpoIPd5U.js";import"./createLucideIcon-DSiO32JG.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
