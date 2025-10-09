import{j as a}from"./iframe-DyYVbdlA.js";import{T as o,a as i,s as D}from"./Tag-Bkdjp54_.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-LgwoQnnZ.js";import"./utils-3v6z0w8x.js";import"./clsx-B-dksMZM.js";import"./Hidden-BT3EvwMI.js";import"./useFocusRing-BoK1OYgi.js";import"./index-C5cISj0i.js";import"./index-B9qEXV84.js";import"./useLabels-iiyT24Wf.js";import"./useButton-DFzWjhDm.js";import"./Collection-BQ8QlyTY.js";import"./index-BCTqAafD.js";import"./ListBox-CEvqc-HP.js";import"./DragAndDrop-Ygh0p73z.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CYjSfpYy.js";import"./SelectionManager-BrZdl1_u.js";import"./useEvent-BtL7p5lL.js";import"./FocusScope-BN_9xD40.js";import"./useDescription-DyEfElMd.js";import"./useControlledState-441cO6jf.js";import"./context-Dx2T_d7A.js";import"./Text-D43q0hAn.js";import"./inertValue-CE5oxQKI.js";import"./useListState-BpgD3m4f.js";import"./useHighlightSelectionDescription-CLOrw1Vy.js";import"./useUpdateEffect-CRWHXFUs.js";import"./useLocalizedStringFormatter-BSvIZNma.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-mevtfmh6.js";import"./useField-C3ENFhxc.js";import"./clsx-Ciqy0D92.js";import"./Button-CYPi1FmS.js";import"./Button.module-BF_N0uYf.js";import"./useLocalizedStringFormatter-4tWJOd1O.js";import"./createLucideIcon-BrvNP7S0.js";import"./VisuallyHidden-B1VDEYtv.js";import"./x-DWb7v__Y.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ms={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=e.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ns=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,ns as __namedExportsOrder,ms as default};
