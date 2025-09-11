import{j as n}from"./iframe-D1wY2AMi.js";import{$ as j}from"./Form-C6Io4mkU.js";import{G}from"./Grid-BO-9S-2g.js";import{G as e}from"./GridItem-DZE7RtZN.js";import{T as r}from"./TextField-BYpPLiio.js";import{S as I}from"./Select-APNtvLdb.js";import{B as a}from"./Button-Oj6lx-za.js";import{R as g,a as b}from"./Radio-B2vzB3uC.js";import{C as h}from"./CheckboxGroup-DElqhsEe.js";import{C as k}from"./Checkbox-DetoKmiY.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Dm4sTLRW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BFETrzrw.js";import"./useFocusRing-Dqb8pOaj.js";import"./index-iwl0dpxo.js";import"./index-CO0FIb4q.js";import"./TextFieldBase-DmI3mHNJ.js";import"./TextField-CwFyUBMs.js";import"./FieldError-B4S2Hd-9.js";import"./Text-CnSR9DO_.js";import"./Text-CqaVzIRP.js";import"./ListKeyboardDelegate-DdDuzCtI.js";import"./SelectionManager-CwYY0O7d.js";import"./useEvent-C0q0DCk3.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CVGNMU11.js";import"./useDescription-XIFqPjEw.js";import"./useControlledState-BmCHkhPZ.js";import"./Group-YtBULKUZ.js";import"./Input--LzfoHW5.js";import"./Hidden-CcZHzqy3.js";import"./Button-C7XgKmc4.js";import"./useLabels-sjx-zVPH.js";import"./useButton-Bsgbghds.js";import"./useTextField-BcVjbIFo.js";import"./useField-BDDhrf5v.js";import"./TextField.module-DjUItNl5.js";import"./Label-CnQu_9LZ.js";import"./Dialog-BGiuzw0L.js";import"./RSPContexts-DD6kbF4Q.js";import"./OverlayArrow-BBhld7gI.js";import"./useResizeObserver-BIQnOOqV.js";import"./Collection-CifafLCI.js";import"./index-jso7OU4J.js";import"./Separator-F8CaeT8O.js";import"./PressResponder-BXqye337.js";import"./useLocalizedStringFormatter-CUQvgNpR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BtXHTJw8.js";import"./Dialog-BlnMTbwU.js";import"./useLocalizedStringFormatter-BMd9HwKK.js";import"./x-CIl0qIty.js";import"./createLucideIcon-mLSySd7z.js";import"./Heading-V5PNLLLD.js";import"./info-CcntQpDo.js";import"./Tag-D7amtEwt.js";import"./ListBox-C4YqfDDi.js";import"./DragAndDrop-kRCmqgI5.js";import"./inertValue-BkqyxZSJ.js";import"./useListState-BYkqyuPs.js";import"./useHighlightSelectionDescription-EX1d0YRx.js";import"./useUpdateEffect-B7JS1uyr.js";import"./useHasTabbableChild-DBdvqUAv.js";import"./check-BRggBjlS.js";import"./ListBoxSection-ChWptL0p.js";import"./Virtualizer-DWvI_SlP.js";import"./useObserveElement-BL3gxntz.js";import"./chevron-down-B9G80wvy.js";import"./Button.module-K7qYOset.js";import"./useToggleState-D3v6u0Lm.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
