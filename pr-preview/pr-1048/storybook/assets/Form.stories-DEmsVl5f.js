import{j as e}from"./iframe-ClhcDk6-.js";import{$ as c}from"./Form-BINvuMk6.js";import{G as d}from"./Grid-Dh1Dn_zk.js";import{G as i}from"./GridItem-Ca9lJEBn.js";import{a as x,R as u}from"./Radio-Cmr5c46e.js";import{C as I}from"./CheckboxGroup-C3UW55gr.js";import{C as G}from"./Checkbox-Bc9zWhjE.js";import{T as t}from"./TextField--SZ9NMs1.js";import{S as l}from"./Select-e6TidIkY.js";import{L as p}from"./ListBoxItem-Bfwt2ntC.js";import{B as a}from"./Button-Cmr495Vm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DkVwfCPY.js";import"./useObjectRef-LpWD1ACK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B19vM6x-.js";import"./useFocusRing-DgsQxXQS.js";import"./useFocusable-15vinN74.js";import"./index-BlJ-rMVG.js";import"./index-CRZ7OKWo.js";import"./clsx-Ciqy0D92.js";import"./Group-Ct_Ti3xi.js";import"./FieldError-tXlATWOG.js";import"./Text-CCnFhlAG.js";import"./Text-EzA_ilFd.js";import"./Button-BSlJ97mj.js";import"./Hidden-B4bEnCsb.js";import"./useLabels-OGE8ZqLn.js";import"./useButton-BRHcPL6M.js";import"./SelectionIndicator-1HtvkFRD.js";import"./useField-CkQZEAr3.js";import"./VisuallyHidden-1ppoZ9c6.js";import"./useControlledState-DRXmCCw_.js";import"./Label-LYBhceLb.js";import"./Dialog-CdWec6Ze.js";import"./RSPContexts-BA8Udrsv.js";import"./OverlayArrow-DSLc6eNv.js";import"./useResizeObserver-CICXzZtJ.js";import"./Collection--ZMTHkZa.js";import"./CollectionBuilder-CAo2ledx.js";import"./index-6lcNpfds.js";import"./Separator-CHFBhSKr.js";import"./SelectionManager-C04g7PAk.js";import"./useEvent-C5dcsaza.js";import"./scrollIntoView-D07VY2Nc.js";import"./useDescription-By0r32b_.js";import"./ListKeyboardDelegate-Cc2KEOw7.js";import"./PressResponder-Btj3QZmG.js";import"./useLocalizedStringFormatter-B2NYe0Eu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CjYQIpYR.js";import"./getScrollParent-FapgZLQg.js";import"./x-B2X0pLHA.js";import"./createLucideIcon-DOkxF0Fr.js";import"./useLocalizedStringFormatter-Cd9bTuDt.js";import"./Heading-DUgnXrAX.js";import"./info-DOAR22B2.js";import"./Popover-8e-hmpHh.js";import"./check-CQg29no-.js";import"./useToggleState-DC61IpXt.js";import"./TextFieldBase-69jHSOzK.js";import"./Input-CC6dVyXh.js";import"./useTextField-DOuVabl5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CNQz66Hu.js";import"./DragAndDrop-QfsrZwaZ.js";import"./inertValue-CM3scvue.js";import"./useListState-DhfF1gz7.js";import"./TagGroup-BCqYLsMO.js";import"./useHighlightSelectionDescription-QPMLg-0j.js";import"./useUpdateEffect-CTU5idt4.js";import"./useHasTabbableChild-DUot5m7T.js";import"./chevron-down-DyjOVS8i.js";import"./Virtualizer-D3nYlzaH.js";import"./Button.module-D_C6WeTN.js";const Ke={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
