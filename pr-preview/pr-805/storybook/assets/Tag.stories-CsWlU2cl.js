import{j as a}from"./iframe-Dz1UnDQW.js";import{T as o,a as i,s as D}from"./Tag-Bq0phQmZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dl7oHVlG.js";import"./utils-hBfR_ZL0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BBUsTMOw.js";import"./useFocusRing-DQLcIaLY.js";import"./index-_RMknSXq.js";import"./index-D5si8odx.js";import"./useLabels-CzYox2nz.js";import"./useButton-DcvL-sJ1.js";import"./Collection-BIpz_TWK.js";import"./index-DYCSCNCJ.js";import"./ListBox-B5fELT3F.js";import"./DragAndDrop-CrLarA3C.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DT-z2KHp.js";import"./SelectionManager-DWCindUv.js";import"./useEvent-DR5N8mNX.js";import"./FocusScope-CHYsshMk.js";import"./useDescription-Bq7ypDDL.js";import"./useControlledState-deC2Il6A.js";import"./ListKeyboardDelegate-CxLOETdv.js";import"./Text-DPFfR2fI.js";import"./inertValue-C8ghuniP.js";import"./useListState-D-U06CIY.js";import"./useHighlightSelectionDescription-sGrg2CBg.js";import"./useUpdateEffect-BGFG0X4_.js";import"./useLocalizedStringFormatter-BQyNdzmW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C_I_QLxJ.js";import"./useField-CQ3HzfQV.js";import"./Button-D0lqCjkx.js";import"./Button.module-DRhvPh0f.js";import"./x-BBBAIg1N.js";import"./createLucideIcon-CjNT7EhR.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
