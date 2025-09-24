import{j as a}from"./iframe-DlClmN2I.js";import{T as o,a as i,s as D}from"./Tag-I0OYAkiw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DjVvc-Xq.js";import"./utils-DaNsdxzL.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cd0C7fwR.js";import"./useFocusRing-D8gqILIU.js";import"./index-BruAsTTg.js";import"./index-pq7-Nor-.js";import"./useLabels-Bx5Zd3Et.js";import"./useButton-B3bAeBAP.js";import"./Collection-BcKaMJpM.js";import"./index-3FfftHYd.js";import"./ListBox-ecwmRF6F.js";import"./DragAndDrop-BQRiMYw1.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-cMCs3JAC.js";import"./SelectionManager-CYMKF7U4.js";import"./useEvent-CfV_GVeM.js";import"./FocusScope-toDOeNzg.js";import"./useDescription-7PRFaWvq.js";import"./useControlledState-pc8YIYjN.js";import"./ListKeyboardDelegate-gZytd5dv.js";import"./Text-DZuapMZe.js";import"./inertValue-CUpC0Qtq.js";import"./useListState-7KoVPHJC.js";import"./useHighlightSelectionDescription-BQ1aIjlY.js";import"./useUpdateEffect-G-Qag1Fi.js";import"./useLocalizedStringFormatter-DYfCpasT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BLVUayeg.js";import"./useField-G8fovyJ9.js";import"./Button-CQa3GqXI.js";import"./Button.module-DRhvPh0f.js";import"./x-C1IaaiSS.js";import"./createLucideIcon-BcWAzyzy.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
