import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as f,R as O}from"./index-ClcD9ViR.js";import{B as d}from"./Button-8w4FZVcD.js";import"./ButtonGroup-DkdsXccL.js";import{c as B}from"./clsx-B-dksMZM.js";import{X as F}from"./x-BaIpobvV.js";import{S as b,I as H}from"./Select-Bjy-o2vr.js";import{F as S,a as c}from"./FlexItem-DXoz_6JH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-CI7IKKVh.js";import"./index-ZuzByk-F.js";import"./Hidden-Cj803rEv.js";import"./createLucideIcon-DQK9Z80p.js";import"./ListBox-DyeJLwWs.js";import"./Collection-C4MnC92I.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-DA-Ld4HW.js";import"./Separator-CIU4dNV7.js";import"./SelectionManager-DRGqbt9A.js";import"./FocusScope-DXS1oVaO.js";import"./context-WoXASG7e.js";import"./useDescription-g1HYx49D.js";import"./useControlledState-CccRFgkZ.js";import"./ListKeyboardDelegate-DaTzZypo.js";import"./Text-B5xeh108.js";import"./Label-CyV7_vzg.js";import"./useListState-Cs8bU5OO.js";import"./Dialog-CdJui-_E.js";import"./RSPContexts-Djf1EgA4.js";import"./PressResponder-B8JDidd-.js";import"./useLocalizedStringFormatter-B63kKuQ6.js";import"./VisuallyHidden-CLrU_C9N.js";import"./Form-Bv9Hrtjx.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-5KHe4aPU.js";import"./TextField-C8PezaiQ.js";import"./chevron-down-CVNiYbvV.js";const v='"../../../theme/src/lib/tokens.css"',P='"Inter", sans-serif',V="#ffffff",M="#f2f2f2",R="_modal_d3ogz_4",C="_modalHeader_d3ogz_30",N="_modalBody_d3ogz_39",w="_modalHeading_d3ogz_45",l={tokens:v,display:P,white:V,gray10:M,modal:R,modalHeader:C,modalBody:N,modalHeading:w},m=({id:r,isOpen:s,onOpenChange:t,children:n,title:y,className:j,..._})=>{const a=f.useRef(null);f.useEffect(()=>{var o,u;s?(o=a.current)==null||o.showModal():(u=a.current)==null||u.close()},[s]);const I=()=>{var o;(o=a.current)==null||o.close(),t(!1)},p=r+"_heading";return e.jsxs("dialog",{id:r,ref:a,onCancel:()=>t(!1),className:B(l.modal,j),"aria-labelledby":p,..._,children:[e.jsx("div",{className:l.modalHeader,children:e.jsx(d,{onPress:()=>I(),variant:"tertiary",icon:F,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:l.modalBody,children:[e.jsx("h2",{className:l.modalHeading,id:p,children:y}),n]})]})};try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"Id for accessibility",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Heading for the modal window",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"Whether the modal is open or not",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"State handler to toggle isOpen",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const je={component:m,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},i={args:{},render:function(){const[s,t]=O.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(m,{id:"modal",title:"Välj ärende",isOpen:s,onOpenChange:n=>t(n),children:e.jsxs(S,{fluid:!0,children:[e.jsx(c,{col:12,children:e.jsx(b,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(H,{children:n.name})})}),e.jsx(c,{col:12,children:e.jsx(d,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(c,{col:12,children:e.jsx(d,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return <>
        <Button onPress={() => setIsOpen(true)}>Öppna</Button>
        <Modal id='modal' title='Välj ärende' isOpen={isOpen} onOpenChange={isOpen => setIsOpen(isOpen)}>
          <Flex fluid={true}>
            <FlexItem col={12}>
              <Select label='Ärenden' placeholder='Hej' description='Välj ärende' items={[{
              id: 1,
              name: 'test'
            }]}>
                {item => <Item>{item.name}</Item>}
              </Select>
            </FlexItem>
            <FlexItem col={12}>
              <Button onPress={() => setIsOpen(false)}>Spara</Button>
            </FlexItem>
            <FlexItem col={12}>
              <Button variant='secondary' onPress={() => setIsOpen(false)}>
                Avbryt
              </Button>
            </FlexItem>
          </Flex>
        </Modal>
      </>;
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const _e=["Default"];export{i as Default,_e as __namedExportsOrder,je as default};
