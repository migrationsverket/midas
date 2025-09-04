import{j as a}from"./iframe-DfYw94ad.js";import{T as o,a as i,s as D}from"./Tag-Do9u7ykv.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-pBMyYubs.js";import"./utils-Bu3niA46.js";import"./clsx-B-dksMZM.js";import"./Hidden-C06Gevln.js";import"./useFocusRing-CaAfiMiQ.js";import"./index-Bz8Fd1MY.js";import"./index-y0QKmbF8.js";import"./useLabels-BOARwgJo.js";import"./useButton-D4aURyhA.js";import"./Collection-DDGRfCnl.js";import"./index-BMjrNccZ.js";import"./ListBox-CVZoM1bI.js";import"./DragAndDrop-DEffQdBj.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C-x147Nj.js";import"./SelectionManager-KNmXJo70.js";import"./useEvent-Cie3aKGY.js";import"./FocusScope-DeUivDLM.js";import"./useDescription-DpiVtkj_.js";import"./useControlledState-B06q3oG6.js";import"./ListKeyboardDelegate-C43bgim_.js";import"./Text-Foxb7xLN.js";import"./inertValue-BaX4HgTU.js";import"./useListState-Bty2dItk.js";import"./useHighlightSelectionDescription-CGNyw7kT.js";import"./useUpdateEffect-B8xJfbho.js";import"./useLocalizedStringFormatter-DRFc0ATs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DhM95CKl.js";import"./useField-BI5QIWRj.js";import"./Button-ChIeYYyv.js";import"./Button.module-CF2bVDCq.js";import"./x-DQEtcbGB.js";import"./createLucideIcon-DCFe3xwI.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
