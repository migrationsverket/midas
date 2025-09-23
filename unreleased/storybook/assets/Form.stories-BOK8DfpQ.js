import{j as n}from"./iframe-CbexyTHU.js";import{$ as j}from"./Form-C-SMJyDd.js";import{G}from"./Grid-Qf1VBmxk.js";import{G as e}from"./GridItem-C3o1AIej.js";import{T as r}from"./TextField-Cj_0ut1Y.js";import{S as I}from"./Select-DbnQBP3Z.js";import{B as a}from"./Button-6peQpPBr.js";import{R as g,a as b}from"./Radio-oCVyIMsM.js";import{C as h}from"./CheckboxGroup-Hz1ultL1.js";import{C as k}from"./Checkbox-BsRDuPXO.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C2AdIHdL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ce-wt4sm.js";import"./useFocusRing-j9hBrNvk.js";import"./index-BfBmSA-i.js";import"./index-DZCtJAGU.js";import"./TextFieldBase-BPKcQ36I.js";import"./TextField-CGRWke8C.js";import"./FieldError-Bfvk1Aox.js";import"./Text-D3VrqraL.js";import"./Text-9QFgtVv0.js";import"./ListKeyboardDelegate-BpiGu0OI.js";import"./SelectionManager-B9Kro_qX.js";import"./useEvent-DP2HRElI.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-XYX6hy7o.js";import"./useDescription-DEx-baF9.js";import"./useControlledState-CCd0CEgP.js";import"./Group-a7AE2g-_.js";import"./Input-BskWhzts.js";import"./Hidden-DaO1QKSL.js";import"./Button-CqBLha1v.js";import"./useLabels-Cc8Oxi18.js";import"./useButton-B_51QS_8.js";import"./useTextField-D7fV8xoP.js";import"./useField-D3wgidSf.js";import"./TextField.module-DjUItNl5.js";import"./Label-IA51__nG.js";import"./Dialog-BZMj0wso.js";import"./RSPContexts-Di_WRBfJ.js";import"./OverlayArrow-BoqReune.js";import"./useResizeObserver-CCPL3QOk.js";import"./Collection-RTQH1V9Q.js";import"./index-DjQlqutO.js";import"./Separator-DuerWLvk.js";import"./PressResponder-BFIXB0Bg.js";import"./useLocalizedStringFormatter-C41FtrHd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DnxJqdOO.js";import"./Dialog-CoicPnzi.js";import"./useLocalizedStringFormatter-BXlVznGj.js";import"./x-YPAYDF6F.js";import"./createLucideIcon-Cf3TWMDy.js";import"./Heading-tWrSJ1FL.js";import"./info-CaEslI14.js";import"./Tag-DfrP8_wH.js";import"./ListBox-BJQU0WHF.js";import"./DragAndDrop-BJ72XSkd.js";import"./inertValue-Bf03EiZX.js";import"./useListState-n70oI04V.js";import"./useHighlightSelectionDescription-BGmaPz-_.js";import"./useUpdateEffect-CvObuRTE.js";import"./useHasTabbableChild-BbpEFuh0.js";import"./check-BPJ42trO.js";import"./ListBoxSection-D5igtUVW.js";import"./Virtualizer-NIKhdbdk.js";import"./useObserveElement-CEd1kJvC.js";import"./chevron-down-DwV_sSxt.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DaWGct-r.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
