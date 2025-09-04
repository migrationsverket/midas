import{j as n}from"./iframe-DzbEsI38.js";import{$ as j}from"./Form-YK7RxlMy.js";import{G}from"./Grid-BGZH_8Km.js";import{G as e}from"./GridItem-CWV4Wzw7.js";import{T as r}from"./TextField-CYXZDF7e.js";import{S as I}from"./Select-l6e4NCQE.js";import{B as a}from"./Button-DNWKC_su.js";import{R as g,a as b}from"./Radio-BbnI2U1H.js";import{C as h}from"./CheckboxGroup-Bh7WgJMN.js";import{C as k}from"./Checkbox-CKwfueQL.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CFO23xyt.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Omx8Ihc4.js";import"./useFocusRing-DoyC9uUe.js";import"./index-D7fZic8F.js";import"./index-fGtW-_99.js";import"./TextFieldBase-DLgS4IEZ.js";import"./TextField-q1iVhf01.js";import"./FieldError-DG5mGl47.js";import"./Text-5LyhJLkD.js";import"./Text-C8BE_GEK.js";import"./ListKeyboardDelegate-DAHQ81jF.js";import"./SelectionManager-D4nAOubs.js";import"./useEvent-BsdtLn66.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DNSe2LKq.js";import"./useDescription-B6om2s84.js";import"./useControlledState-CfILBshG.js";import"./Group-Cupn-U1J.js";import"./Input-BsufXc5s.js";import"./Hidden-DRPMnSZN.js";import"./Button-iry45B-k.js";import"./useLabels-CUa_Ubrs.js";import"./useButton-BFWCkiL5.js";import"./useTextField-DNNsK5ls.js";import"./useField-cepT-gMK.js";import"./TextField.module-BrIGiDQC.js";import"./Label-CrM4SLXJ.js";import"./Dialog-CUVkdykQ.js";import"./RSPContexts-c3JeRG6k.js";import"./OverlayArrow-ClKQ9Gtv.js";import"./useResizeObserver-DREzsz3G.js";import"./Collection-Ck7iUmjN.js";import"./index-Bfup5s6A.js";import"./Separator-BLLRxn8N.js";import"./PressResponder-D32oy4Tl.js";import"./useLocalizedStringFormatter-CqChtxWk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-7HlbZ-TM.js";import"./Dialog-DN6ksGVY.js";import"./useLocalizedStringFormatter-CtpiOr0r.js";import"./x-BxmGVbjV.js";import"./createLucideIcon-y77xXVIf.js";import"./Heading-BMjkuWLM.js";import"./info-BI8twf4Q.js";import"./Tag-DfaenyWR.js";import"./ListBox-BXa6vs9l.js";import"./DragAndDrop-CVuoMFz0.js";import"./inertValue-Bi5clMQN.js";import"./useListState-DGdYcbfK.js";import"./useHighlightSelectionDescription-2XkCiHjd.js";import"./useUpdateEffect-v3b121lE.js";import"./useHasTabbableChild-gzgElm8B.js";import"./check-tiFqUP_k.js";import"./ListBoxSection-DQJderED.js";import"./Virtualizer-XcANmrlZ.js";import"./useObserveElement-C3BZOaki.js";import"./chevron-down-yW2eVHLt.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-a93bJZsR.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
