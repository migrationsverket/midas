import{j as a}from"./iframe-DqOnImtB.js";import{T as o,a as i,s as D}from"./Tag-DsREAkpJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BXZf-Ntr.js";import"./utils-CtOUdhlm.js";import"./clsx-B-dksMZM.js";import"./Hidden-DaJ_gIh_.js";import"./useFocusRing-CTLKxZOl.js";import"./index-BqMFRqFO.js";import"./index-BTjQfJwM.js";import"./useLabels-BbJEqnqr.js";import"./useButton-DiBhr5IU.js";import"./Collection-BWphW22x.js";import"./index-DnpPsMrd.js";import"./ListBox-BhwPJ-OC.js";import"./DragAndDrop-DjiluwX0.js";import"./getScrollParent-DLQ8g5-_.js";import"./scrollIntoView-D6qed4DQ.js";import"./Separator-CBY3vEPw.js";import"./SelectionManager-C663Tjyk.js";import"./useEvent-XDgY8-01.js";import"./SelectionIndicator-CvsS8HVG.js";import"./useDescription-BDqo8izq.js";import"./useControlledState-Xdh2dYbf.js";import"./ListKeyboardDelegate-Cv3S2CMs.js";import"./RSPContexts-DgymFxc4.js";import"./Text-spQo0dXp.js";import"./inertValue-DJ8anEyd.js";import"./useListState-Cd335Lex.js";import"./useHighlightSelectionDescription-C6G4CSwX.js";import"./useUpdateEffect-CDisofNV.js";import"./useLocalizedStringFormatter-DWAo3GxI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DpFS3XDl.js";import"./useField-BIc4tuVD.js";import"./clsx-Ciqy0D92.js";import"./Button-e7r9nziE.js";import"./Button.module-CcWMkJAG.js";import"./x-ru-Jacwq.js";import"./createLucideIcon-DrxU8fU6.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
