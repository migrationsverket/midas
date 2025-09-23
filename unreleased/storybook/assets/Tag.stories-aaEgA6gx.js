import{j as a}from"./iframe-BSYflkMp.js";import{T as o,a as i,s as D}from"./Tag-qi725Ia0.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DE-P2LI3.js";import"./utils-Tu0jnTpK.js";import"./clsx-B-dksMZM.js";import"./Hidden-afdHDBh7.js";import"./useFocusRing-DptWTHJr.js";import"./index-BKwso5YW.js";import"./index-DmA7bfqn.js";import"./useLabels-CC4dxl-U.js";import"./useButton-rzu78a1E.js";import"./Collection-TNz6mTgR.js";import"./index-YG_FKGJN.js";import"./ListBox-By10vm-s.js";import"./DragAndDrop-C2m8LcCD.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BQJXi4R2.js";import"./SelectionManager-C3iFvNmU.js";import"./useEvent-yR7Sx4tS.js";import"./FocusScope-DyQmzAvi.js";import"./useDescription-CzALybbT.js";import"./useControlledState-UbtOJD7b.js";import"./ListKeyboardDelegate-CCfdQiNC.js";import"./Text-DYAkFKh8.js";import"./inertValue-hWInyTVi.js";import"./useListState-SEwT6kch.js";import"./useHighlightSelectionDescription-CNyw0SqZ.js";import"./useUpdateEffect--JVR9SnP.js";import"./useLocalizedStringFormatter-Bw8UTcVd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C9yJ-AKZ.js";import"./useField-RmZ9cner.js";import"./Button-BbwHCXMd.js";import"./Button.module-DRhvPh0f.js";import"./x-C2sIw717.js";import"./createLucideIcon-Bm2PhNVP.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
