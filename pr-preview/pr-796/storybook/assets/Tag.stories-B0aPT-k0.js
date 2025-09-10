import{j as a}from"./iframe-C8mKGQ01.js";import{T as o,a as i,s as D}from"./Tag-BCEAUCkB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BWzCV4qS.js";import"./utils-C_Db2X58.js";import"./clsx-B-dksMZM.js";import"./Hidden-oTvv2PLA.js";import"./useFocusRing-BhoBKcyI.js";import"./index-D7S0c1z3.js";import"./index-YTY5LxAO.js";import"./useLabels-B_eoGfVf.js";import"./useButton-Cdw6pOZM.js";import"./Collection-CySyZdPO.js";import"./index-C9aturmL.js";import"./ListBox-Cs1kJGwD.js";import"./DragAndDrop-DWJNjT3R.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DVuj2q9Y.js";import"./SelectionManager-aG0TmV1f.js";import"./useEvent-znQvuV38.js";import"./FocusScope-BiUZILZ4.js";import"./useDescription-C_ArKKvx.js";import"./useControlledState-qenhQeV7.js";import"./ListKeyboardDelegate-C_JmBOEW.js";import"./Text-CbCwoeeb.js";import"./inertValue-CvICxAHf.js";import"./useListState-CLM2qnH8.js";import"./useHighlightSelectionDescription-BhcavffF.js";import"./useUpdateEffect-CDn714RA.js";import"./useLocalizedStringFormatter-w61ZJIXb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D2osOxIU.js";import"./useField-BIr3or8c.js";import"./Button-_H1tSdmv.js";import"./Button.module-GuOSDIYz.js";import"./x-CiFHkLXX.js";import"./createLucideIcon-DyoLE5ns.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
