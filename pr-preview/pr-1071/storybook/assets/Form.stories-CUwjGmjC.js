import{j as e}from"./iframe-cMEgXkU9.js";import{$ as c}from"./Form-DWqcZOfZ.js";import{G as d}from"./Grid-BuMFSHRI.js";import{G as i}from"./GridItem-nyzHfEII.js";import{a as x,R as u}from"./Radio-C4eucBc3.js";import{C as I}from"./CheckboxGroup-PvgKOo3X.js";import{C as G}from"./Checkbox-DsLyaLtK.js";import{T as t}from"./TextField-DOwN6jZA.js";import{S as l}from"./Select-DLF5OC5o.js";import{L as p}from"./ListBoxItem-BeAA0zxe.js";import{B as a}from"./Button-B1lVQr-S.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B3lOSj3F.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BwIiM2rU.js";import"./useFocusRing-CxXiz-Gm.js";import"./index-BmRYBJCP.js";import"./index-BMkS1cfA.js";import"./clsx-Ciqy0D92.js";import"./Group-Cd_L9Aho.js";import"./FieldError-Cg9_4rDN.js";import"./Text-ltK-qi4B.js";import"./Text-oSal6G8w.js";import"./Button-yd3xuf6R.js";import"./Hidden-C5y8YolZ.js";import"./useLabels-CkaQlQl_.js";import"./useButton-BPJwIAj2.js";import"./SelectionIndicator-boBGA4vK.js";import"./useField-CD7C6WXD.js";import"./VisuallyHidden-ClFhsG2n.js";import"./useControlledState-BX5yaqFT.js";import"./Label-j5taQLiV.js";import"./Dialog-DyVE_MTm.js";import"./RSPContexts-B_AUN_Nr.js";import"./OverlayArrow-wG3j_rgS.js";import"./useResizeObserver-D0YoZtNR.js";import"./Collection-CqW90Kdu.js";import"./index-CISngLij.js";import"./Separator-CLCOci5w.js";import"./SelectionManager-jeBnoHsp.js";import"./useEvent-CYCFwh_w.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B3zABGFf.js";import"./ListKeyboardDelegate-DgnZFSxp.js";import"./PressResponder-BKs3MK94.js";import"./useLocalizedStringFormatter-DBj2jYWp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQ9v6015.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CNFpAdsD.js";import"./createLucideIcon-DtfcjQlU.js";import"./useLocalizedStringFormatter-Bd2ZBdeQ.js";import"./Heading-CZmRs31h.js";import"./info-BI95GXeT.js";import"./Popover-CrzG1Phb.js";import"./check-Bcd3u6yQ.js";import"./useToggleState-lgWPsxAB.js";import"./TextFieldBase-C0h4E402.js";import"./Input-BTJ28KYT.js";import"./useTextField-DkL4L2a3.js";import"./TextField.module-Ck-VtJ3k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DQsNAyN-.js";import"./DragAndDrop-Chkm0edy.js";import"./inertValue-CyrGppkV.js";import"./useListState-Dc8jI9V0.js";import"./TagGroup-BXtkH08U.js";import"./useHighlightSelectionDescription-Bvj-iiCR.js";import"./useUpdateEffect-CIYSmzh-.js";import"./useHasTabbableChild-BdR-1uKb.js";import"./chevron-down-Cgso3-xk.js";import"./Virtualizer-BN6LtowD.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
