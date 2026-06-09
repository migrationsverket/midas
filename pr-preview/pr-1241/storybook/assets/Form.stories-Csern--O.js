import{j as e}from"./iframe-CaeJqQ8f.js";import{c}from"./Form-CA7TkeoX.js";import{G as d}from"./Grid-DosniDxH.js";import{G as i}from"./GridItem-CbV2jEa_.js";import{a as x,R as u}from"./Radio-DroyaZVZ.js";import{C as I}from"./CheckboxGroup-D-MpZKDg.js";import{C as G}from"./Checkbox-tbmTpGAs.js";import{T as t}from"./TextField-C4hI8SzL.js";import{S as l}from"./Select-CuZMQ1fs.js";import{L as p}from"./ListBoxItem-CWKAgSTw.js";import{B as a}from"./Button-rTp5uTED.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B-IWjK53.js";import"./utils-BteVPZy0.js";import"./clsx-B-dksMZM.js";import"./index-DqQtAxv6.js";import"./index-CeMSaifd.js";import"./clsx-Ciqy0D92.js";import"./Group-CTKcef7T.js";import"./FieldError-BMeh3Mm5.js";import"./Text-kWHKD_uI.js";import"./Text-23GvJn9a.js";import"./Button-CmYrsmdS.js";import"./Hidden-DAb19HuU.js";import"./useLabel-DiiZxaHU.js";import"./useLabels-CvBePrBc.js";import"./useButton-BT2OPEq9.js";import"./SelectionIndicator-DzgiSh9y.js";import"./useField-DDJhIXmw.js";import"./VisuallyHidden-CDogNmlo.js";import"./useControlledState-DVDrYLuR.js";import"./Label-BtXhXhDp.js";import"./Dialog-oYWFwQZ3.js";import"./RSPContexts-C23pPjhB.js";import"./OverlayArrow-BaxcOtUd.js";import"./useResizeObserver-CZNaWLID.js";import"./Collection-Dcy9D0L3.js";import"./index-BBE2CXqT.js";import"./Separator-CuJpgSRs.js";import"./SelectionManager-bLePU0IW.js";import"./useEvent-DrhgR5ub.js";import"./scrollIntoView-Dv9TGF9T.js";import"./useDescription-BGB3EMY_.js";import"./ListKeyboardDelegate-GnYqBagy.js";import"./PressResponder-BmizWJnN.js";import"./useLocalizedStringFormatter-B6KzQfdD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNhOQaSp.js";import"./getScrollParent-B7OSUguh.js";import"./ModalOverlay-BCN0q4zL.js";import"./x-BNT6PRWH.js";import"./createLucideIcon-Bkh4JM6J.js";import"./useLocalizedStringFormatter-CsL4vBQb.js";import"./Heading-DhoR6r2Q.js";import"./info-stHTiLL8.js";import"./Popover-_qRHPjhH.js";import"./check-BhAO1PBy.js";import"./useToggleState-CGuS8eVX.js";import"./TextFieldBase-CR5vQqIC.js";import"./Input-CpOyXK4o.js";import"./useTextField-OY8v5_0u.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DY0kuqQ-.js";import"./DragAndDrop-DMsOJZxY.js";import"./inertValue-CHahpjmF.js";import"./useListState-XphzRXlq.js";import"./TagGroup-CE1HJt2W.js";import"./useHighlightSelectionDescription-DuZZB_SN.js";import"./useUpdateEffect-DtEaS4ed.js";import"./useHasTabbableChild-pjFZgowB.js";import"./chevron-down-CrsBhBpy.js";import"./Virtualizer-Cu6toA7-.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
