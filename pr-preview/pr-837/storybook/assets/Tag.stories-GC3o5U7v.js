import{j as a}from"./iframe-BHl1JtJs.js";import{T as o,a as i,s as D}from"./Tag-CTWfuAoc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C8qm-91Q.js";import"./utils-DsRGMVF5.js";import"./clsx-B-dksMZM.js";import"./Hidden-rbuBrzm1.js";import"./useFocusRing-CKk5uDyr.js";import"./index-BfG_emwB.js";import"./index-CqjoK46o.js";import"./useLabels-ytCe5vDH.js";import"./useButton-CEuw5Rdg.js";import"./Collection-Cg87ENgH.js";import"./index-4mFNSPMQ.js";import"./ListBox-DhkLoc0S.js";import"./DragAndDrop-DZ3c4pv3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DZP0qeNk.js";import"./SelectionManager-OG5A8_mX.js";import"./useEvent-2zzA4ibG.js";import"./FocusScope-dpXJH94O.js";import"./useDescription-DNNJvbej.js";import"./useControlledState-Bmxq7ZeY.js";import"./ListKeyboardDelegate-BAFfI5lE.js";import"./Text-Dx8zeE-R.js";import"./inertValue-vJWad7-i.js";import"./useListState-COkLz90H.js";import"./useHighlightSelectionDescription-C8KioH3m.js";import"./useUpdateEffect-BkkWJNuF.js";import"./useLocalizedStringFormatter-DhrYgH69.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-gLwmVRla.js";import"./useField-ByHI-rTL.js";import"./Button-D6eObyYY.js";import"./Button.module-DRhvPh0f.js";import"./x-CCvJ7j2e.js";import"./createLucideIcon-BXhmWI8x.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
