import{j as a}from"./iframe-B-VhlC4E.js";import{T as o,a as i,s as D}from"./Tag-uTyoSVIJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-7Kwrzoh4.js";import"./utils-B3D9x6An.js";import"./clsx-B-dksMZM.js";import"./Hidden-T5PV3lZw.js";import"./useFocusRing-CvwnBZ9o.js";import"./index-zntG3D7N.js";import"./index-B0qaojvl.js";import"./useLabels-DAEXVISf.js";import"./useButton-ELAYFu-y.js";import"./Collection-DQ1wGurC.js";import"./index-BcHtcvFp.js";import"./ListBox-Cc_SxDY0.js";import"./DragAndDrop-CD7qm5LT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BPOIzd8v.js";import"./SelectionManager-D9auh32f.js";import"./useEvent-D5nlRFHX.js";import"./FocusScope-BZZNHPZd.js";import"./useDescription-DZSAVxhZ.js";import"./useControlledState-D53pXGvl.js";import"./context-BGYYMRbn.js";import"./Text-Bj9tMDq1.js";import"./inertValue-CKuxGf9X.js";import"./useListState-cYWe1cAk.js";import"./useHighlightSelectionDescription-DUq07uh0.js";import"./useUpdateEffect-DMNlCLjT.js";import"./useLocalizedStringFormatter-D0dsj4wW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cp5p9TUD.js";import"./useField-DBdfeJrb.js";import"./Button-BgKCKHrV.js";import"./Button.module-DRhvPh0f.js";import"./x-DZXRjAza.js";import"./createLucideIcon-B0FRJMKx.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
