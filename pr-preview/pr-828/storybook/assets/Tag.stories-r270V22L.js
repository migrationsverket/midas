import{j as a}from"./iframe-x5n9Dd1_.js";import{T as o,a as i,s as D}from"./Tag-C72htiB4.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cj1wK36E.js";import"./utils-BHSJAh4b.js";import"./clsx-B-dksMZM.js";import"./Hidden-CUK9iqqI.js";import"./useFocusRing-mYRcvRPX.js";import"./index-BBlxB12T.js";import"./index-BTF3n9pH.js";import"./useLabels-prAcfQ65.js";import"./useButton-tXYfHN7q.js";import"./Collection-CpkIatqo.js";import"./index-BeddSyjK.js";import"./ListBox-B7iZOKa7.js";import"./DragAndDrop-B3liJsnO.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DN2QDL0l.js";import"./SelectionManager-Bebc8jGF.js";import"./useEvent-fts2yDGu.js";import"./FocusScope-BHgW0WNa.js";import"./useDescription-BWzJVtkB.js";import"./useControlledState-D2fzwUX0.js";import"./ListKeyboardDelegate-CgfZcR2s.js";import"./Text-CdtS5rzK.js";import"./inertValue-KADfF5np.js";import"./useListState-BBG8J7Rs.js";import"./useHighlightSelectionDescription-D6lji5Bj.js";import"./useUpdateEffect-DeUSwgek.js";import"./useLocalizedStringFormatter-RjvS08Y_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DqQOT18Z.js";import"./useField-BEf3zH_C.js";import"./Button-B0wYpntp.js";import"./Button.module-DRhvPh0f.js";import"./x-j9HkLEni.js";import"./createLucideIcon-BGI_3O7P.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
