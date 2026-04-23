import{j as e}from"./iframe-CuHS7f-D.js";import{c}from"./Form-KXBu28U1.js";import{G as d}from"./Grid-CfTDqj4Y.js";import{G as i}from"./GridItem-DZAF1czL.js";import{a as x,R as u}from"./Radio-BF67Y5NG.js";import{C as I}from"./CheckboxGroup-DtaRS0Rb.js";import{C as G}from"./Checkbox-_bLZhC6H.js";import{T as t}from"./TextField-NiJUWumf.js";import{S as l}from"./Select-CC4mSrn2.js";import{L as p}from"./ListBoxItem-BJeiWcpu.js";import{B as a}from"./Button-CT4-7PnM.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-c3yj8psb.js";import"./utils-BFq6s5qx.js";import"./clsx-B-dksMZM.js";import"./index-CUpZ4Q1o.js";import"./index-DHblwsjT.js";import"./clsx-Ciqy0D92.js";import"./Group-BFyk5cnr.js";import"./FieldError-DWjsvXUz.js";import"./Text-wtPwzvaL.js";import"./Text-Suqt0mTK.js";import"./Button-BHwczPOP.js";import"./Hidden-DQfRALgS.js";import"./useLabel-CUA0N587.js";import"./useLabels-D2MJHSWT.js";import"./useButton-DWFuO5be.js";import"./SelectionIndicator-Cn5dTTdW.js";import"./useField-CrVq981-.js";import"./VisuallyHidden-sy5lx_M_.js";import"./useControlledState-Kxt6bXWr.js";import"./Label--dF7n87l.js";import"./Dialog-Dc91KFHZ.js";import"./RSPContexts-CmGu2gwM.js";import"./OverlayArrow-C1DZJQn3.js";import"./useResizeObserver-Bz8PeCUf.js";import"./Collection-97NF7Jpt.js";import"./index-dpH9gAkX.js";import"./Separator-YLElzl4Z.js";import"./SelectionManager-vmbqVhp5.js";import"./useEvent-BpJPF1H-.js";import"./scrollIntoView-CFWK3f8m.js";import"./useDescription-UP5fy7je.js";import"./ListKeyboardDelegate-BEhrGyqr.js";import"./PressResponder-BR-6wi8j.js";import"./useLocalizedStringFormatter-MxafZpyg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7sxD1d7.js";import"./getScrollParent-C0O747nR.js";import"./ModalOverlay-B-RtiZAg.js";import"./x-9kI0zPFb.js";import"./createLucideIcon-WRij3kcs.js";import"./useLocalizedStringFormatter-D8LlPcXB.js";import"./Heading-3jJmNByH.js";import"./info-DkvSoVIx.js";import"./Popover-DKYapk_l.js";import"./check-CQj7NPv6.js";import"./useToggleState-Cp6sVs7l.js";import"./TextFieldBase-XDR2K_lN.js";import"./Input-qYlI4fVr.js";import"./useTextField-CwzW4wa_.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D5HbJgD5.js";import"./DragAndDrop-CikjYEiO.js";import"./inertValue-BlbCzxUR.js";import"./useListState-DaSXpROH.js";import"./TagGroup-BQETSfJz.js";import"./useHighlightSelectionDescription-WZbk73HD.js";import"./useUpdateEffect-DgHfrstL.js";import"./useHasTabbableChild-Cgo-noKj.js";import"./chevron-down-CdwF19es.js";import"./Virtualizer-CvXmc-Dh.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
