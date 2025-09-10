import{j as a}from"./iframe-DO2aB_Ev.js";import{T as o,a as i,s as D}from"./Tag-BFFPrXQs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-_lfJPMMG.js";import"./utils-tm6UYKsN.js";import"./clsx-B-dksMZM.js";import"./Hidden-9Wmrs8od.js";import"./useFocusRing-ij0kK0kq.js";import"./index-BbNHrjQ-.js";import"./index-ISt4efLA.js";import"./useLabels-B1-E1lMB.js";import"./useButton-D-JbrB0T.js";import"./Collection-Ch_vjoKU.js";import"./index-DmCp18EC.js";import"./ListBox-BmTn0OMg.js";import"./DragAndDrop-C9KuubC4.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Z-KXiS3h.js";import"./SelectionManager-D5jZIdUU.js";import"./useEvent-DNdhrhy2.js";import"./FocusScope-DjKNdWZd.js";import"./useDescription-Bf6nHg2q.js";import"./useControlledState-B9C_wi7f.js";import"./ListKeyboardDelegate-qCX17_CC.js";import"./Text-BdKbrpxa.js";import"./inertValue-w3CWhWzg.js";import"./useListState-Zb-zs4p1.js";import"./useHighlightSelectionDescription-BQHdQ1Ui.js";import"./useUpdateEffect-mBBK2kAB.js";import"./useLocalizedStringFormatter-CG12RzR7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-hp0l2i3W.js";import"./useField-B7jKEbJw.js";import"./Button-D72hER9_.js";import"./Button.module-GuOSDIYz.js";import"./x-dBZ-AO0x.js";import"./createLucideIcon-DCV2EI7I.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
