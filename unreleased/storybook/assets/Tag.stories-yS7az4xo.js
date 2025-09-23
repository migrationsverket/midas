import{j as a}from"./iframe-CG9VKUP8.js";import{T as o,a as i,s as D}from"./Tag-b_77WHiR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C3yK5rIv.js";import"./utils-cxZgmyV_.js";import"./clsx-B-dksMZM.js";import"./Hidden-CxkJD6gc.js";import"./useFocusRing-Dv_A7Af5.js";import"./index-CNe5RKlf.js";import"./index-qZFMP_vd.js";import"./useLabels-BiMC9erz.js";import"./useButton-ChMLR1jf.js";import"./Collection-l2OeyB1k.js";import"./index-ZPZJutdW.js";import"./ListBox-CAcmgDWJ.js";import"./DragAndDrop-BdvJgvah.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BKSmEHii.js";import"./SelectionManager-CHu2Abe8.js";import"./useEvent-Cvz4X-cL.js";import"./FocusScope-DTKturx6.js";import"./useDescription-Du-qZ7zA.js";import"./useControlledState-DV3t9z-p.js";import"./ListKeyboardDelegate-d5GFIIvJ.js";import"./Text-Dp5VdET0.js";import"./inertValue-BOxzTtb7.js";import"./useListState-BawFbHEa.js";import"./useHighlightSelectionDescription-BPqpMvk3.js";import"./useUpdateEffect-DqNpJCSW.js";import"./useLocalizedStringFormatter-CGap7KQM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D51m2eQH.js";import"./useField-CyMsbwtv.js";import"./Button-CvDiy1-H.js";import"./Button.module-DRhvPh0f.js";import"./x-C607IRae.js";import"./createLucideIcon-B3y3-98R.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
