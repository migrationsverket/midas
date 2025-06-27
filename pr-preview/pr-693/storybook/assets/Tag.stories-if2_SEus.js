import{j as a}from"./jsx-runtime-BYYWji4R.js";import{T as o,a as i,s as x}from"./Tag-B0-9UH5s.js";import{e as D}from"./index-CqmFxPum.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C9yg6fHw.js";import"./utils-BLyg3OOq.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-DVgdqMmF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-d6PNTTSe.js";import"./useButton-DVh6qrnV.js";import"./Collection-Bhy8rVTk.js";import"./index-NDK0uC61.js";import"./ListBox-CsSyqQCs.js";import"./DragAndDrop-BqnrhZqQ.js";import"./getScrollParent-FdZGTYO5.js";import"./scrollIntoView-BivqL63c.js";import"./Separator-DqhbA8RB.js";import"./SelectionManager-BXwhMJ8O.js";import"./useEvent-B0l3XC2n.js";import"./FocusScope-Ce8r-Upm.js";import"./useControlledState-H1tiOFpU.js";import"./ListKeyboardDelegate-Dwm1KN0z.js";import"./Text-BGwM_jUK.js";import"./inertValue-C_mH9YkE.js";import"./useListState-CPoirKSX.js";import"./useField-DSxopD4s.js";import"./useHighlightSelectionDescription-eXwatSFZ.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-TrhiTCnH.js";import"./useHasTabbableChild-DKoW_dB3.js";import"./Button-CXM00Bsn.js";import"./Button.module-AG3JZ-l4.js";import"./x-BaIpobvV.js";import"./createLucideIcon-DQK9Z80p.js";const b="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":b,children:s.children})})},t={play:async({canvas:s,step:T,args:{className:h}})=>{await T("it should preserve its classNames when being passed new ones",async()=>{D(s.getByTestId(b)).toHaveClass(x.tag,h)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
