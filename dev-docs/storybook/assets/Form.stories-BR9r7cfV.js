import{j as n}from"./iframe-DfYw94ad.js";import{$ as j}from"./Form-DMiRVFju.js";import{G}from"./Grid-CPz3oHKU.js";import{G as e}from"./GridItem-BsjNxmX9.js";import{T as r}from"./TextField-B7PtOZmh.js";import{S as I}from"./Select-C-gtsrN6.js";import{B as a}from"./Button-ChIeYYyv.js";import{R as g,a as b}from"./Radio-DK1rPM0o.js";import{C as h}from"./CheckboxGroup-B9uE5_Ut.js";import{C as k}from"./Checkbox-BCaeNZvC.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Bu3niA46.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DA4HXT1a.js";import"./useFocusRing-CaAfiMiQ.js";import"./index-Bz8Fd1MY.js";import"./index-y0QKmbF8.js";import"./TextFieldBase-DhrnuZXt.js";import"./TextField-C6PpPZC2.js";import"./FieldError-CPEs7-la.js";import"./Text-Foxb7xLN.js";import"./Text-DFyTovhu.js";import"./ListKeyboardDelegate-C43bgim_.js";import"./SelectionManager-KNmXJo70.js";import"./useEvent-Cie3aKGY.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DeUivDLM.js";import"./useDescription-DpiVtkj_.js";import"./useControlledState-B06q3oG6.js";import"./Group-zGg6mKbd.js";import"./Input-Qa-vWHeH.js";import"./Hidden-C06Gevln.js";import"./Button-pBMyYubs.js";import"./useLabels-BOARwgJo.js";import"./useButton-D4aURyhA.js";import"./useTextField-Bdrdfxin.js";import"./useField-BI5QIWRj.js";import"./TextField.module-BrIGiDQC.js";import"./Label-Cm1KaUAo.js";import"./Dialog-BUKvgOYL.js";import"./RSPContexts-jZWAHgEX.js";import"./OverlayArrow-DGXGVI0r.js";import"./useResizeObserver-Bpj1Cv9x.js";import"./Collection-DDGRfCnl.js";import"./index-BMjrNccZ.js";import"./Separator-C-x147Nj.js";import"./PressResponder-DA8DDXpL.js";import"./useLocalizedStringFormatter-DRFc0ATs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C1UnFNCJ.js";import"./Dialog-CbG6evFn.js";import"./useLocalizedStringFormatter-C-5p273a.js";import"./x-DQEtcbGB.js";import"./createLucideIcon-DCFe3xwI.js";import"./Heading-CEMjwnoZ.js";import"./info-BSk8Xn0q.js";import"./Tag-Do9u7ykv.js";import"./ListBox-CVZoM1bI.js";import"./DragAndDrop-DEffQdBj.js";import"./inertValue-BaX4HgTU.js";import"./useListState-Bty2dItk.js";import"./useHighlightSelectionDescription-CGNyw7kT.js";import"./useUpdateEffect-B8xJfbho.js";import"./useHasTabbableChild-DhM95CKl.js";import"./check-BQRYxqTP.js";import"./ListBoxSection-DT6lXYWO.js";import"./Virtualizer-B7nCbnZT.js";import"./useObserveElement-DzM4V3Ff.js";import"./chevron-down-7_6AdDN2.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-DbnkwZSi.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
