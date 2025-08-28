import{j as a}from"./iframe-dflwVQj0.js";import{T as o,a as i,s as _}from"./Tag-BN2XlmK2.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OnM31pp4.js";import"./utils-D2xLghoe.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bgbt5e-x.js";import"./useFocusRing-HtxIgFNi.js";import"./index-Bfut8mpi.js";import"./index-CCW8wJf9.js";import"./useLabels-_O_l3D-4.js";import"./useButton-7jVyTze4.js";import"./Collection-9piau7XR.js";import"./index-IvJ_bBvX.js";import"./ListBox-ss1ycCz0.js";import"./DragAndDrop-CbcUpg5D.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BX-fF_Lq.js";import"./SelectionManager-UZPvH6eY.js";import"./useEvent-ClhNZjxU.js";import"./FocusScope-nialgbX5.js";import"./useDescription-BYEFn_B-.js";import"./useControlledState-C3u3uV6K.js";import"./ListKeyboardDelegate-DnkA8ajC.js";import"./Text-M-3GLQok.js";import"./inertValue-BpTP0qlF.js";import"./useListState-BfBYaT4m.js";import"./useField-D7w-wtiX.js";import"./useHighlightSelectionDescription-Oeh1l5s4.js";import"./useUpdateEffect-CM_BGah_.js";import"./useLocalizedStringFormatter-zTz9wKxs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CR2SHsg_.js";import"./Button-yQqQnt2P.js";import"./Button.module-DKVuWS4g.js";import"./x-BPeNLZbW.js";import"./createLucideIcon-BnM8_3Zb.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
