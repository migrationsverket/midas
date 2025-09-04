import{j as n}from"./iframe-BkSubt21.js";import{$ as j}from"./Form-0OiiqitW.js";import{G}from"./Grid-Cxo2Aemq.js";import{G as e}from"./GridItem-BXKzqvUT.js";import{T as r}from"./TextField-ClxpasbP.js";import{S as I}from"./Select-AfGUyp_K.js";import{B as a}from"./Button-Ba_L2uEb.js";import{R as g,a as b}from"./Radio-BMB2hFLf.js";import{C as h}from"./CheckboxGroup-C6lYk8ho.js";import{C as k}from"./Checkbox-nID77VZ8.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-ZedHrD2-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CINsqZle.js";import"./useFocusRing-BgGoSWm7.js";import"./index-DXknVD56.js";import"./index-uV_meYb6.js";import"./TextFieldBase-Bhvaeaq7.js";import"./TextField-cWOwKSpr.js";import"./FieldError-Co-eoEwN.js";import"./Text-BrLjw-j9.js";import"./Text-BCGcEL1p.js";import"./ListKeyboardDelegate-BQjomcI0.js";import"./SelectionManager-CgezwVdJ.js";import"./useEvent-C_Lp21Up.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-7u8D5oKz.js";import"./useDescription-BXXzk33C.js";import"./useControlledState-CSLnPCu3.js";import"./Group-BUrglymR.js";import"./Input-CN3sUUFV.js";import"./Hidden-E3ofUsIk.js";import"./Button-DvbptFtF.js";import"./useLabels-CBoFUYPw.js";import"./useButton-Cz0sLCBC.js";import"./useTextField-uCg1SFLj.js";import"./useField-lMczkkvQ.js";import"./TextField.module-BrIGiDQC.js";import"./Label-OH87cioV.js";import"./Dialog-DC2ffDvk.js";import"./RSPContexts-FIZAbxGx.js";import"./OverlayArrow-Dc5Bg9TS.js";import"./useResizeObserver-D32rJIDu.js";import"./Collection-lhGZYDdh.js";import"./index-Dp4rZqcq.js";import"./Separator-CzpZd-Qh.js";import"./PressResponder-CC3Z7qmq.js";import"./useLocalizedStringFormatter-FNziktQ5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-GVALw3hq.js";import"./Dialog-C7Hv47eK.js";import"./useLocalizedStringFormatter-CWi6V-QI.js";import"./x-DVG59JIT.js";import"./createLucideIcon-DLNmfCNr.js";import"./Heading-D1S67kva.js";import"./info-CMC2XXo-.js";import"./Tag-Cqy2FoK7.js";import"./ListBox-DWm3m0bM.js";import"./DragAndDrop-AnxgbiGa.js";import"./inertValue-DOf40EHx.js";import"./useListState-BgaL5Q5k.js";import"./useHighlightSelectionDescription-C0nRfj3M.js";import"./useUpdateEffect-Btul4bYE.js";import"./useHasTabbableChild-BeuptCC9.js";import"./check-Bt_pdHi0.js";import"./ListBoxSection-cP5aYrZc.js";import"./Virtualizer-DgDLT7Vw.js";import"./useObserveElement-B2rt_drZ.js";import"./chevron-down-xR4n32eN.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-CTU9BcDA.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
