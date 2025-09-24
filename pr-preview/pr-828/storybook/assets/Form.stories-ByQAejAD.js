import{j as n}from"./iframe-D0xpa7RE.js";import{$ as j}from"./Form-DcyfDBe0.js";import{G}from"./Grid-C9-6Qo-z.js";import{G as e}from"./GridItem-mFa9g5n9.js";import{T as r}from"./TextField-BnkWJQ0r.js";import{S as I}from"./Select-zAoAcBZl.js";import{B as a}from"./Button-DPudEbdP.js";import{R as g,a as b}from"./Radio-B4lPBml_.js";import{C as h}from"./CheckboxGroup-DinLNPMr.js";import{C as k}from"./Checkbox-Dws8Qqgy.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CuucEP8w.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B8iX0mg8.js";import"./useFocusRing-BSWOzTkh.js";import"./index-BTC6yrvg.js";import"./index-CAJYf0tX.js";import"./TextFieldBase-Ca4Ph5yH.js";import"./TextField-Dhko3tLc.js";import"./FieldError-BTCNhm3y.js";import"./Text-5_-qCR72.js";import"./Text-CzUIuBrb.js";import"./ListKeyboardDelegate-DnHIgacG.js";import"./SelectionManager-BPXnEWwA.js";import"./useEvent-yJitzbNp.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BXvZ8Scb.js";import"./useDescription-Cpi_X6rk.js";import"./useControlledState-CqWoAegy.js";import"./Group-WpmH-a1z.js";import"./Input-n12IutTo.js";import"./Hidden-C3glJuSc.js";import"./Button-PY3oMzb6.js";import"./useLabels-CgQIywqP.js";import"./useButton-D5L5lRz0.js";import"./useTextField-B63V-pNG.js";import"./useField-C7zlFtSk.js";import"./TextField.module-DjUItNl5.js";import"./Label-BU7SYtWE.js";import"./Dialog-CKySjlpx.js";import"./RSPContexts-BoiEjkPH.js";import"./OverlayArrow-eK0YGhtM.js";import"./useResizeObserver-BNz-zGpj.js";import"./Collection-DF5iS38G.js";import"./index-feO3MqPj.js";import"./Separator-DpCYXI0s.js";import"./PressResponder-shKp3uIb.js";import"./useLocalizedStringFormatter-B5mlJPaI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CKSjMlAr.js";import"./Dialog-Gmp9sfr1.js";import"./useLocalizedStringFormatter-NUXhoYxS.js";import"./x-LgA7B8Nx.js";import"./createLucideIcon-D1NZhtWJ.js";import"./Heading-DHkXdJy5.js";import"./info-Cnt1Porv.js";import"./Tag-BSEiYiYQ.js";import"./ListBox-Cnff4LCn.js";import"./DragAndDrop-xpEAOPjh.js";import"./inertValue-BYaUXjiL.js";import"./useListState-CaGwzwBn.js";import"./useHighlightSelectionDescription-KdA-6-F6.js";import"./useUpdateEffect-DEYwDeJu.js";import"./useHasTabbableChild-DP-GjJQc.js";import"./check-CSrR7FAa.js";import"./ListBoxSection-KRxaQS42.js";import"./Virtualizer-CZCPBBbW.js";import"./useObserveElement-DlXAQtjV.js";import"./chevron-down-DKUdDAFO.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CfFeVZWx.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
