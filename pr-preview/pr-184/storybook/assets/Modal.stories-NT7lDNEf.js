import{j as e}from"./jsx-runtime-CfatFE5O.js";import{B as d}from"./Button-DRyTw_69.js";import"./ButtonGroup-Duds0FV0.js";import{R as p}from"./index-ClcD9ViR.js";import{c as O}from"./clsx-B-dksMZM.js";import{X as B}from"./x-BaIpobvV.js";import{S as F,I as b}from"./Select-CGuLFQAh.js";import{F as H,a as c}from"./FlexItem-B94Ffdnb.js";import"./useFocusable-CUvAewCR.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Hidden-CB9z-rbJ.js";import"./createLucideIcon-DQK9Z80p.js";import"./ListBox-D6lH0XnD.js";import"./Collection-D2MgYaM2.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-ieluuKp3.js";import"./scrollIntoView-CFanVOW_.js";import"./Text-CUSXFwf2.js";import"./useControlledState-DFHhQ_7Z.js";import"./SelectionManager-Bf1YJvgz.js";import"./FocusScope-Do-PkUts.js";import"./context-C9cAOQ0o.js";import"./useDescription-D06dHw1z.js";import"./useCollator-ZDMRt11h.js";import"./useListState-B3RSIWo1.js";import"./Dialog-Bk-R8JAE.js";import"./RSPContexts-Djf1EgA4.js";import"./PressResponder-BlG14Tb7.js";import"./useLocalizedStringFormatter-Dv05nzCb.js";import"./VisuallyHidden-CU0vF0eT.js";import"./Form-Bnef0d36.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-YodwW4z0.js";import"./useMenuTrigger-DT4Z28HZ.js";import"./TextField-DeG7bqFf.js";import"./chevron-down-CVNiYbvV.js";const S='"../../../theme/src/lib/tokens.css"',v='"Inter", sans-serif',P="#ffffff",V="#f2f2f2",M="_modal_1egi7_4",R="_modalHeader_1egi7_30",C="_modalBody_1egi7_36",N="_modalHeading_1egi7_42",l={tokens:S,display:v,white:P,gray10:V,modal:M,modalHeader:R,modalBody:C,modalHeading:N},m=({id:o,isOpen:s,onOpenChange:t,children:n,title:j,className:y,..._})=>{const a=p.useRef(null);p.useEffect(()=>{var r,f;s?(r=a.current)==null||r.showModal():(f=a.current)==null||f.close()},[s]);const I=()=>{var r;(r=a.current)==null||r.close(),t(!1)},u=o+"_heading";return e.jsxs("dialog",{id:o,ref:a,onCancel:()=>t(!1),className:O(l.modal,y),"aria-labelledby":u,..._,children:[e.jsx("div",{className:l.modalHeader,children:e.jsx(d,{onPress:()=>I(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:l.modalBody,children:[e.jsx("h2",{className:l.modalHeading,id:u,children:j}),n]})]})};try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const je={component:m,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},i={args:{},render:function(){const[s,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(m,{id:"modal",title:"Välj ärende",isOpen:s,onOpenChange:n=>t(n),children:e.jsxs(H,{fluid:!0,children:[e.jsx(c,{col:12,children:e.jsx(F,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(b,{children:n.name})})}),e.jsx(c,{col:12,children:e.jsx(d,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(c,{col:12,children:e.jsx(d,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const ye=["Default"];export{i as Default,ye as __namedExportsOrder,je as default};
