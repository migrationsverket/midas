import{j as a}from"./iframe-COhcGpJD.js";import{T as o,a as i,s as D}from"./Tag-B08nU0JR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CT0JxLUn.js";import"./utils-BipZqWfx.js";import"./clsx-B-dksMZM.js";import"./Hidden-kzTkB3Yh.js";import"./useFocusRing-BBhCfodF.js";import"./index-CbYcxnvR.js";import"./index-CEukhXIR.js";import"./useLabels-BZuv9JTZ.js";import"./useButton-B_xrtTg6.js";import"./Collection-CT53tk6m.js";import"./index-Bni9O_Nj.js";import"./ListBox-oPjQrLXz.js";import"./DragAndDrop-DTA2f4wK.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bbj3MB0_.js";import"./SelectionManager-6HR_vXQp.js";import"./useEvent-DTseZoDc.js";import"./FocusScope-DcM4smys.js";import"./useDescription-KjCTlUDJ.js";import"./useControlledState-BtzKPX5a.js";import"./context-iYHyuP7k.js";import"./Text-o9Pl2wV3.js";import"./inertValue-Ci0KXoFl.js";import"./useListState-B47Cs_Dn.js";import"./useHighlightSelectionDescription-DIWweqCn.js";import"./useUpdateEffect-DeLLwqJH.js";import"./useLocalizedStringFormatter-Bo2IP2sP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CygCM_kd.js";import"./useField-DobQhUZ-.js";import"./clsx-Ciqy0D92.js";import"./Button-rP0HidkW.js";import"./Button.module-CcWMkJAG.js";import"./x-CPWwZcqH.js";import"./createLucideIcon-B_nEwebg.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
