import{j as a}from"./iframe-CJng-a1E.js";import{T as o,a as i,s as D}from"./Tag-C1Qq1tVO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BSktjiIS.js";import"./utils-NhhmfMyT.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC1UIcar.js";import"./useFocusRing-XHAl3_H3.js";import"./index-BXsO9qCI.js";import"./index-BHp5NDoq.js";import"./useLabels-VrQLQBma.js";import"./useButton-DmZD2y64.js";import"./Collection-CFUOGIH3.js";import"./index-DQt5NDX1.js";import"./ListBox-zRG9iBmv.js";import"./DragAndDrop-BmdwVlhi.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-0XshJ1O6.js";import"./SelectionManager-CUYqWh7B.js";import"./useEvent-BXvhASHc.js";import"./FocusScope-Cm6UsIvQ.js";import"./useDescription-DupKgetM.js";import"./useControlledState-BrtSRpuy.js";import"./context-ClyOXlC1.js";import"./Text-Dh1RPm-0.js";import"./inertValue-2w6iBlr5.js";import"./useListState-6yebk0jz.js";import"./useHighlightSelectionDescription-BT5GsjiC.js";import"./useUpdateEffect-B3kzceXa.js";import"./useLocalizedStringFormatter-D7g-HvOz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BzNlALga.js";import"./useField-hXPtYQPJ.js";import"./clsx-Ciqy0D92.js";import"./Button-BYWLXoun.js";import"./Button.module-CcWMkJAG.js";import"./x-CLhYTZ-_.js";import"./createLucideIcon-DbFI1Z3N.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
