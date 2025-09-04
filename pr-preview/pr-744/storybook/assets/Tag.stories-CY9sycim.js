import{j as a}from"./iframe-BkSubt21.js";import{T as o,a as i,s as D}from"./Tag-Cqy2FoK7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DvbptFtF.js";import"./utils-ZedHrD2-.js";import"./clsx-B-dksMZM.js";import"./Hidden-E3ofUsIk.js";import"./useFocusRing-BgGoSWm7.js";import"./index-DXknVD56.js";import"./index-uV_meYb6.js";import"./useLabels-CBoFUYPw.js";import"./useButton-Cz0sLCBC.js";import"./Collection-lhGZYDdh.js";import"./index-Dp4rZqcq.js";import"./ListBox-DWm3m0bM.js";import"./DragAndDrop-AnxgbiGa.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CzpZd-Qh.js";import"./SelectionManager-CgezwVdJ.js";import"./useEvent-C_Lp21Up.js";import"./FocusScope-7u8D5oKz.js";import"./useDescription-BXXzk33C.js";import"./useControlledState-CSLnPCu3.js";import"./ListKeyboardDelegate-BQjomcI0.js";import"./Text-BrLjw-j9.js";import"./inertValue-DOf40EHx.js";import"./useListState-BgaL5Q5k.js";import"./useHighlightSelectionDescription-C0nRfj3M.js";import"./useUpdateEffect-Btul4bYE.js";import"./useLocalizedStringFormatter-FNziktQ5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BeuptCC9.js";import"./useField-lMczkkvQ.js";import"./Button-Ba_L2uEb.js";import"./Button.module-CF2bVDCq.js";import"./x-DVG59JIT.js";import"./createLucideIcon-DLNmfCNr.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
