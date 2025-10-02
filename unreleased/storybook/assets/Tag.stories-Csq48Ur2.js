import{j as a}from"./iframe-D4Uz9e1b.js";import{T as o,a as i,s as D}from"./Tag-DKdQdTxJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-oSHBHJgU.js";import"./utils-CGHqEZVh.js";import"./clsx-B-dksMZM.js";import"./Hidden-DxHUeOqq.js";import"./useFocusRing-BzeCjWu5.js";import"./index-DzXdjEMA.js";import"./index-ek_sX-Kb.js";import"./useLabels-D76y0f-i.js";import"./useButton-CBgHEJCZ.js";import"./Collection-XYdn-3QH.js";import"./index-C54LqtLj.js";import"./ListBox-DTCrhRhZ.js";import"./DragAndDrop-Csh3JT1r.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Dx-87Nrz.js";import"./SelectionManager-C2hS2xNM.js";import"./useEvent-BAtkhN_z.js";import"./FocusScope-CY0T1emM.js";import"./useDescription-B97N508p.js";import"./useControlledState-B2KM_aZv.js";import"./context-Whsvtd--.js";import"./Text-YpoKblke.js";import"./inertValue-DiaFVxdJ.js";import"./useListState-B3HuWeQj.js";import"./useHighlightSelectionDescription-C-XqJPlM.js";import"./useUpdateEffect-BPLyJvbK.js";import"./useLocalizedStringFormatter-DYYVba-f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BQ-puoWu.js";import"./useField-DPAYiyRx.js";import"./clsx-Ciqy0D92.js";import"./Button-CdZI1ktO.js";import"./Button.module-DRhvPh0f.js";import"./x-C2WvvDBR.js";import"./createLucideIcon-D_M5KouU.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
