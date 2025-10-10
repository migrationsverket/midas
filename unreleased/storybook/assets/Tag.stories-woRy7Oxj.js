import{j as a}from"./iframe-FgKpQbGv.js";import{T as o,a as i,s as D}from"./Tag-CEDUHTNl.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-ArGv7k9D.js";import"./utils-DDOf0pvG.js";import"./clsx-B-dksMZM.js";import"./Hidden-BMqMtM_n.js";import"./useFocusRing-Coa4b8HD.js";import"./index-WnkvUHoo.js";import"./index-BXphaDK8.js";import"./useLabels-C4dMb-by.js";import"./useButton-DHLg-LnZ.js";import"./Collection-BLTXmrX0.js";import"./index-_iw8fwZP.js";import"./ListBox-B_HEor_T.js";import"./DragAndDrop-fox9j81K.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DgHhyFdM.js";import"./SelectionManager-CQ-tHIfi.js";import"./useEvent-q2tgbeSV.js";import"./FocusScope-i-8AYaG5.js";import"./useDescription-Bw1S2C-j.js";import"./useControlledState-DYbbvZCk.js";import"./context-Ccr3pxI0.js";import"./Text-Bzh-kcn2.js";import"./inertValue-_XD9D5Zq.js";import"./useListState-CotP6MC8.js";import"./useHighlightSelectionDescription-DDwGm5t-.js";import"./useUpdateEffect-HMzymy2f.js";import"./useLocalizedStringFormatter-C5ocTey4.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-nWsfg1xZ.js";import"./useField-B75GMgKY.js";import"./clsx-Ciqy0D92.js";import"./Button-BE7IyuBw.js";import"./Button.module-CcWMkJAG.js";import"./x-BAufCIUR.js";import"./createLucideIcon-Bbp1W8Xq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
