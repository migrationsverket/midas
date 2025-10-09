import{j as a}from"./iframe-BynidOxq.js";import{T as o,a as i,s as D}from"./Tag-8jDF0Xyc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D9FEvNZK.js";import"./utils-qbhBFFth.js";import"./clsx-B-dksMZM.js";import"./Hidden-DJHeq-JG.js";import"./useFocusRing-Usa6qHGB.js";import"./index--maJ1nKu.js";import"./index-DAViAnKQ.js";import"./useLabels-BeBwI5Ph.js";import"./useButton-B1nQM56q.js";import"./Collection-CaJ4jS_x.js";import"./index-MDef9es2.js";import"./ListBox-BiuLtkSt.js";import"./DragAndDrop-CTmoTYKe.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Ce2o6yPz.js";import"./SelectionManager-CmjsY4bo.js";import"./useEvent-D_6S4WCs.js";import"./FocusScope-DMa8mf7B.js";import"./useDescription-D_yna1Y_.js";import"./useControlledState-CpOQBs0W.js";import"./context-DlEC4YiU.js";import"./Text-BtjyTYHk.js";import"./inertValue-BOD-6zCS.js";import"./useListState-j_pF0QN2.js";import"./useHighlightSelectionDescription-DxSZzDz8.js";import"./useUpdateEffect-BQS3UTya.js";import"./useLocalizedStringFormatter-0-PI2iiO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D-Z1rp3a.js";import"./useField-BPz3VAcf.js";import"./clsx-Ciqy0D92.js";import"./Button-B_qL-2WW.js";import"./Button.module-CcWMkJAG.js";import"./x-CFZqbOxn.js";import"./createLucideIcon-weHwvxS1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
