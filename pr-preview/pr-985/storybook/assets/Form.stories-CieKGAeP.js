import{j as e}from"./iframe-Dmln2s8W.js";import{$ as c}from"./Form-DlNVYM_d.js";import{G as d}from"./Grid-Db0w3JFf.js";import{G as i}from"./GridItem-C-EU3pxo.js";import{T as t}from"./TextField-Ozj2IwaV.js";import{S as l}from"./Select-B-MVHxae.js";import{B as a}from"./Button-DnEmQCas.js";import{R as x,a as u}from"./Radio-1cuFaag2.js";import{C as I}from"./CheckboxGroup-BMhGwVhD.js";import{C as G}from"./Checkbox-B26H26RL.js";import{L as p}from"./ListBoxItem-BdNplyYF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DN9YrxvM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation--hY_38Im.js";import"./useFocusRing-g7C5sCWj.js";import"./index-Cc6wq1BM.js";import"./index-C6K-yTup.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DVTyY92o.js";import"./TextField-C0j8N5ID.js";import"./FieldError-cMeQo-5a.js";import"./Text-Bi8iFHf7.js";import"./Text-D8VRkt36.js";import"./RSPContexts-C_ptDiqD.js";import"./Group-BfICMTxC.js";import"./Input-DJlPhiOc.js";import"./Hidden-7UyqWpMT.js";import"./Button-C5hq3iWd.js";import"./useLabels-Bj5Rya5X.js";import"./useButton-DT7lzV_U.js";import"./useTextField-CBGgj8rR.js";import"./useControlledState-DsKm9z2H.js";import"./useField-BnKPORsj.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dsn1AE2w.js";import"./Dialog-DEpfbp4W.js";import"./OverlayArrow-DawRgZp8.js";import"./useResizeObserver-CHPFMx5m.js";import"./Collection-CSVgx94G.js";import"./index-DE9j6rU8.js";import"./Separator-fIq0ZFE4.js";import"./SelectionManager-oJ2kg1zF.js";import"./useEvent-RAMa1tqT.js";import"./scrollIntoView-BZ0zJ7wl.js";import"./SelectionIndicator-DiPPuvdp.js";import"./useDescription-DWosbqC5.js";import"./ListKeyboardDelegate-DpCh4HH2.js";import"./PressResponder-DLmQb4o4.js";import"./useLocalizedStringFormatter-Cv3mFRMK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B4GVGfW4.js";import"./VisuallyHidden-DuElax1d.js";import"./x-Dp4VYtmK.js";import"./createLucideIcon-DAJh3Chd.js";import"./useLocalizedStringFormatter-BqeJSIDu.js";import"./Heading-CTTK_qZT.js";import"./info-CjhRKSpd.js";import"./Popover-7KdpxPIy.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BPS156yB.js";import"./DragAndDrop-10XeR4Xc.js";import"./inertValue-dSREnMUF.js";import"./useListState-9zuDc-bx.js";import"./Tag-7gKinvU_.js";import"./useHighlightSelectionDescription-B5A4aNkd.js";import"./useUpdateEffect-C6ynjDt6.js";import"./useHasTabbableChild-BG7NSGF6.js";import"./chevron-down-BugX-Aei.js";import"./Button.module-Co5e5YHp.js";import"./check-CIuEGiom.js";import"./useToggleState-CEjZdLcD.js";import"./Virtualizer-CKNgXFtw.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
