import{j as a}from"./iframe-D_nglXlK.js";import{T as o,a as i,s as D}from"./Tag-DU7b1V3M.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-uo7UjKzN.js";import"./utils-eEgmu3qc.js";import"./clsx-B-dksMZM.js";import"./Hidden-CdGT6bTj.js";import"./useFocusRing-gTw7NsWc.js";import"./index-DTwlmn-p.js";import"./index-JHlRV5wf.js";import"./useLabels-CeihvMqc.js";import"./useButton-BSSS9gTf.js";import"./Collection-B6gTA6V3.js";import"./index-D28Pnz-p.js";import"./ListBox-BMuzwH04.js";import"./DragAndDrop-BPpiF46c.js";import"./getScrollParent-BFDKUqBZ.js";import"./scrollIntoView-BQ6njKrm.js";import"./Separator-5uC06yl4.js";import"./SelectionManager-DBlxmybW.js";import"./useEvent-CZ1fbj9g.js";import"./SelectionIndicator-05ykqT3F.js";import"./useDescription-DY3IHZo8.js";import"./useControlledState-DUHRkhL7.js";import"./ListKeyboardDelegate-DozsCE3i.js";import"./RSPContexts-DXDzd3W8.js";import"./Text-BqJU6zdf.js";import"./inertValue-9YezskUC.js";import"./useListState-BjnhzDKh.js";import"./useHighlightSelectionDescription-DsoldRxJ.js";import"./useUpdateEffect-BEaaFr-b.js";import"./useLocalizedStringFormatter-C7rktcMS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B-wOJfT_.js";import"./useField-B2mLiCDw.js";import"./clsx-Ciqy0D92.js";import"./Button-BGETeqp7.js";import"./Button.module-CcWMkJAG.js";import"./x-BGTX4g33.js";import"./createLucideIcon-3Mgnj-Sn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
