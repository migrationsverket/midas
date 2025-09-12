import{j as a}from"./iframe-2F154eXh.js";import{T as o,a as i,s as D}from"./Tag-DasLrI0z.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-ZBq8Kjh7.js";import"./utils-CpCeHqF1.js";import"./clsx-B-dksMZM.js";import"./Hidden-CpfmBQvh.js";import"./useFocusRing-L28h-rJf.js";import"./index-B3znPG9_.js";import"./index-D09x0JUb.js";import"./useLabels-DIsUitJe.js";import"./useButton-CGxd0eLy.js";import"./Collection-Cl0uCD5D.js";import"./index-Bx2W5Ygb.js";import"./ListBox-B5jZgXC1.js";import"./DragAndDrop-BDYp4HnP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BoRiVVWf.js";import"./SelectionManager-9oZZsIpD.js";import"./useEvent-DM590-Mo.js";import"./FocusScope-BfYkFNkn.js";import"./useDescription-BJ8BvkKQ.js";import"./useControlledState-a-e40tok.js";import"./ListKeyboardDelegate-BrTbx3ju.js";import"./Text-CEqrfg7G.js";import"./inertValue-DzkPd9HB.js";import"./useListState-Cmei7dsy.js";import"./useHighlightSelectionDescription-BJxAdKDP.js";import"./useUpdateEffect-DkYS-Lfj.js";import"./useLocalizedStringFormatter-DmFKvyTs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bid-uVrm.js";import"./useField-Bao_Q-BJ.js";import"./Button-CpWyZOpj.js";import"./Button.module-DRhvPh0f.js";import"./x-CNTaIAV5.js";import"./createLucideIcon--K2WjAnW.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
