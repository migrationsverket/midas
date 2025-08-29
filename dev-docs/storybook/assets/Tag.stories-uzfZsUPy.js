import{j as a}from"./iframe-CJt1zD7T.js";import{T as o,a as i,s as _}from"./Tag-B1FJszvM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B5EAkOYM.js";import"./utils-CWHeaD25.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFoxTCtK.js";import"./useFocusRing-BBgFpgVl.js";import"./index-Bzh3_GpR.js";import"./index-DlMv9VaF.js";import"./useLabels-C0_mYLvr.js";import"./useButton-D0vK5Bs7.js";import"./Collection-BHK32Shj.js";import"./index-FXsaRDGM.js";import"./ListBox-DaLYaLKA.js";import"./DragAndDrop-Bss1eGjN.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-zY0kX7jv.js";import"./SelectionManager-KcAQnQDa.js";import"./useEvent-CLzYSiUG.js";import"./FocusScope-XEzUR2qR.js";import"./useDescription-B5XRsvzI.js";import"./useControlledState-C2utbRuj.js";import"./ListKeyboardDelegate-0t1BoBKT.js";import"./Text-BgYOWvdz.js";import"./inertValue-zGLFSkEU.js";import"./useListState-BUOFCjpI.js";import"./useField-CVTYhdOx.js";import"./useHighlightSelectionDescription-59trNJvl.js";import"./useUpdateEffect-tsy15Zuk.js";import"./useLocalizedStringFormatter-Bq49MpUd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DmfzPw0A.js";import"./Button-5yZv9Hf_.js";import"./Button.module-CF2bVDCq.js";import"./x-CzJ4WLkQ.js";import"./createLucideIcon-CSinTc4O.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
