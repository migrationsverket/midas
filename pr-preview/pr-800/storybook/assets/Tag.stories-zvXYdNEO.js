import{j as a}from"./iframe-DAHVkxN9.js";import{T as o,a as i,s as D}from"./Tag-C0tReEBw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D7KCC1zn.js";import"./utils-_mCh5Aa-.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-_GIKdm.js";import"./useFocusRing-DNAMWfZX.js";import"./index-CNjbM-27.js";import"./index-DLn4lQbY.js";import"./useLabels-EAVGuxvz.js";import"./useButton-Ccn5B4WT.js";import"./Collection-G9vk9EGc.js";import"./index-gpmGtsN_.js";import"./ListBox-BajMttiR.js";import"./DragAndDrop-CsMzhIiq.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BtzHGp9e.js";import"./SelectionManager-Do6SlGF5.js";import"./useEvent-wFy2g5x4.js";import"./FocusScope-BAy0Ap_k.js";import"./useDescription-CK_aAikE.js";import"./useControlledState-Dm8pa1XJ.js";import"./ListKeyboardDelegate-CpZXWKjd.js";import"./Text-CWRq4Cba.js";import"./inertValue-D2_IVKIU.js";import"./useListState-CzPlee_Q.js";import"./useHighlightSelectionDescription-koj-qIYh.js";import"./useUpdateEffect-76-xvssV.js";import"./useLocalizedStringFormatter-iMukFwwQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BPm2vewM.js";import"./useField-fBF_JnTK.js";import"./Button-DoQQgH6_.js";import"./Button.module-DRhvPh0f.js";import"./x-CYQ8_YQF.js";import"./createLucideIcon-HBlWbCox.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
