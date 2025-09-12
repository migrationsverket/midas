import{j as a}from"./iframe-BVVFQm-p.js";import{T as o,a as i,s as D}from"./Tag-C2W5Hgi7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DGDTMgZ1.js";import"./utils-Bf8F_-y0.js";import"./clsx-B-dksMZM.js";import"./Hidden-CTL0oSdp.js";import"./useFocusRing-H5N4TJ4y.js";import"./index-C9GJfI90.js";import"./index-DYg8GMC5.js";import"./useLabels-DBZBXN4C.js";import"./useButton-FDTP8ctV.js";import"./Collection-DwgnnOld.js";import"./index-BXTJ-4nt.js";import"./ListBox-AbggtpQR.js";import"./DragAndDrop-BucPFVRE.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BOQYLTz8.js";import"./SelectionManager-CCm0zfG-.js";import"./useEvent-BjEqk7YB.js";import"./FocusScope-Di8XGXRu.js";import"./useDescription-7M5gGAod.js";import"./useControlledState-CheGqwSs.js";import"./ListKeyboardDelegate-i2FmA3JN.js";import"./Text-EG_2UQvc.js";import"./inertValue-D-Ulg2oc.js";import"./useListState-BjI9D9uc.js";import"./useHighlightSelectionDescription-BFzcpHNr.js";import"./useUpdateEffect-90LGxIY3.js";import"./useLocalizedStringFormatter-D4idjQ4i.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-65_dmpPv.js";import"./useField-C1z3k9OZ.js";import"./Button-B9I5LJHQ.js";import"./Button.module-DRhvPh0f.js";import"./x-PU3beMmb.js";import"./createLucideIcon-B6T3wlSK.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
