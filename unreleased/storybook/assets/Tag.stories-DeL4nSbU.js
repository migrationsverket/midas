import{j as a}from"./iframe-tMAfFlEh.js";import{T as o,a as i,s as D}from"./Tag-C5j6wrw-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CZURlwfX.js";import"./utils-B3xo7mSp.js";import"./clsx-B-dksMZM.js";import"./Hidden-B596e1a0.js";import"./useFocusRing-CJNxFNQw.js";import"./index-CsE9Qa5Q.js";import"./index-fmbOzPWH.js";import"./useLabels-3R6y6U_U.js";import"./useButton-8kU_3xRu.js";import"./Collection-4RAzKMUC.js";import"./index-BO5uj58p.js";import"./ListBox-A2lHK9A5.js";import"./DragAndDrop-kilXGxMC.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CkY96mzZ.js";import"./SelectionManager-Cnft5bzW.js";import"./useEvent-CEdTgcJ3.js";import"./FocusScope-CQHVSg8M.js";import"./useDescription-BJht5MPP.js";import"./useControlledState-Cdw5pzn5.js";import"./context-zWkpIRJs.js";import"./Text-CBtI1NMB.js";import"./inertValue-SpTfZtaS.js";import"./useListState-FwvlFarL.js";import"./useHighlightSelectionDescription-h6yUjOGn.js";import"./useUpdateEffect-_LXjRPpT.js";import"./useLocalizedStringFormatter-BWkTPKvI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D2-J85yW.js";import"./useField-BFUc3z8M.js";import"./clsx-Ciqy0D92.js";import"./Button-pHzC2hpi.js";import"./Button.module-CcWMkJAG.js";import"./x-DMTCl7NF.js";import"./createLucideIcon-DypcAXrG.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
