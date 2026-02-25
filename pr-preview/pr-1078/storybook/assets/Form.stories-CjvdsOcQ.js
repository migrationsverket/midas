import{j as e}from"./iframe-Y9Fx-e1B.js";import{$ as c}from"./Form-DOzPcMFX.js";import{G as d}from"./Grid-CpJUqRci.js";import{G as i}from"./GridItem-BSPZ_xRl.js";import{a as x,R as u}from"./Radio-BidXdXVL.js";import{C as I}from"./CheckboxGroup-FQRGs4-n.js";import{C as G}from"./Checkbox-pygImnBE.js";import{T as t}from"./TextField-7H1y3MdJ.js";import{S as l}from"./Select-BQFB3EAd.js";import{L as p}from"./ListBoxItem-CAXO326d.js";import{B as a}from"./Button-k0gPOjAM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-tjsFOw4T.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BeD7naen.js";import"./useFocusRing-DMFWV4N3.js";import"./index-rl_t3oro.js";import"./index-CoUwmbWb.js";import"./clsx-Ciqy0D92.js";import"./Group-rKpc5DHm.js";import"./FieldError-BP9Y13vD.js";import"./Text-Rwl3gWWv.js";import"./Text-By_wui5t.js";import"./Button-C7bYDuo2.js";import"./Hidden-C5yYJ2g8.js";import"./useLabels-D5SCo0gw.js";import"./useButton-BIY4kkQ2.js";import"./SelectionIndicator-DO9xWdRa.js";import"./useField-T8mwG7bw.js";import"./VisuallyHidden-uQrH2dzx.js";import"./useControlledState-Dt63NuRp.js";import"./Label-B6jLPsjM.js";import"./Dialog-BcVfrZ1q.js";import"./RSPContexts-SJiJ_uHO.js";import"./OverlayArrow-C0efwt1x.js";import"./useResizeObserver-D3guSGKd.js";import"./Collection-DL_ASsG3.js";import"./index-G7Co38C3.js";import"./Separator-B2Sw61m-.js";import"./SelectionManager-D8wjYhYM.js";import"./useEvent-IYNS4JE3.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B2vMFsED.js";import"./ListKeyboardDelegate-BRLf6YZa.js";import"./PressResponder-BJlyIV_Q.js";import"./useLocalizedStringFormatter-Cz-yREfr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMghiz9Y.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CxSKMliu.js";import"./createLucideIcon-CkeYV7Jq.js";import"./useLocalizedStringFormatter-CKHZ7v8y.js";import"./Heading-Ckyy5pvF.js";import"./info-CKYWgyYL.js";import"./Popover-D5cyLeNa.js";import"./check-DCY_ZV9K.js";import"./useToggleState-aSPpfXpT.js";import"./TextFieldBase-DToU8XGY.js";import"./Input-CO9Rg7G1.js";import"./useTextField-Cb1_A-1n.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DHuCt2_G.js";import"./DragAndDrop--uM-5WOA.js";import"./inertValue-Cru4F5Ou.js";import"./useListState-DRsRqGbq.js";import"./TagGroup-Dvlgvy28.js";import"./useHighlightSelectionDescription-RcnaZ9ye.js";import"./useUpdateEffect-9zGNWO65.js";import"./useHasTabbableChild-BjeyCwlY.js";import"./chevron-down-wAuMazKk.js";import"./Virtualizer-BKBwMFQR.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
