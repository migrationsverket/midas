import{j as a}from"./iframe-Dk0359lg.js";import{T as o,a as i,s as D}from"./Tag-Bmx1k92f.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BAsJFgH6.js";import"./utils-CvpWk59f.js";import"./clsx-B-dksMZM.js";import"./Hidden-BfIVe4d9.js";import"./useFocusRing-CyizXmho.js";import"./index-BwKitm0F.js";import"./index-DpiuJWyq.js";import"./useLabels-Bs0lg8Cj.js";import"./useButton-DIgp0Cvw.js";import"./Collection-B8fF9V3F.js";import"./index-B1KqaNSf.js";import"./ListBox-BBMr64ou.js";import"./DragAndDrop-CJEciKH8.js";import"./getScrollParent-DMLrkAtT.js";import"./scrollIntoView-BDt7ZXnn.js";import"./Separator-BAA5KyhX.js";import"./SelectionManager-COZFonj1.js";import"./useEvent-D_zOj2gL.js";import"./SelectionIndicator-D-r3zU-C.js";import"./useDescription-DJdnmaox.js";import"./useControlledState-Ds_AEaOX.js";import"./ListKeyboardDelegate-ClnZvAK4.js";import"./RSPContexts-s5rsoeMx.js";import"./Text-CLuQ9Iy6.js";import"./inertValue-DVVClvYr.js";import"./useListState-BBKuxa9q.js";import"./useHighlightSelectionDescription-CR5UhxzO.js";import"./useUpdateEffect-BFr5CpOg.js";import"./useLocalizedStringFormatter-BxOLT3XX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DS9yR_kq.js";import"./useField-ClItxAP7.js";import"./clsx-Ciqy0D92.js";import"./Button-CCvtjb0r.js";import"./Button.module-CcWMkJAG.js";import"./x-Dmpz-8wG.js";import"./createLucideIcon-0canVkms.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
