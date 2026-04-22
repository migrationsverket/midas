import{j as e}from"./iframe-CYBQlmyh.js";import{c}from"./Form-CG88XjbO.js";import{G as d}from"./Grid-Bq-SgPuZ.js";import{G as i}from"./GridItem-BiD40bms.js";import{a as x,R as u}from"./Radio-BxtvYhdV.js";import{C as I}from"./CheckboxGroup-Kw2AuxzN.js";import{C as G}from"./Checkbox-DMAh443F.js";import{T as t}from"./TextField-hjfOsLZa.js";import{S as l}from"./Select-DWhnBIFI.js";import{L as p}from"./ListBoxItem-N2Nh33ZW.js";import{B as a}from"./Button-V8iqrR4o.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Cpo9J0gL.js";import"./utils-CjHCv0XO.js";import"./clsx-B-dksMZM.js";import"./index-K5PVphWA.js";import"./index-DiuA4cA3.js";import"./clsx-Ciqy0D92.js";import"./Group-B2xH6Tb7.js";import"./FieldError-BU-DnlRI.js";import"./Text-CXwGYn4Y.js";import"./Text-B63Qy0n5.js";import"./Button-BOrWC_ny.js";import"./Hidden-CqWz7xzF.js";import"./useLabel-CFOjik7v.js";import"./useLabels-L-SzfrFb.js";import"./useButton-BfOUikWI.js";import"./SelectionIndicator-2OWYtRRL.js";import"./useField-oiS_17BV.js";import"./VisuallyHidden-DCVaQ010.js";import"./useControlledState-bAyCG7NY.js";import"./Label-BfaQNbNl.js";import"./Dialog-DpdCXOL1.js";import"./RSPContexts-BhOh3g1F.js";import"./OverlayArrow-BdOPMGMs.js";import"./useResizeObserver-BPB6bT59.js";import"./Collection-DlxFXgXK.js";import"./index-CU5GEWiP.js";import"./Separator-Ci_pKqb2.js";import"./SelectionManager-DAlAVFSS.js";import"./useEvent-wP5p6MOh.js";import"./scrollIntoView-DBa2FBnm.js";import"./useDescription-ZMuH04v7.js";import"./ListKeyboardDelegate-UVU4819P.js";import"./PressResponder-C59KZHdB.js";import"./useLocalizedStringFormatter-DjA_iZCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DyEnl83n.js";import"./getScrollParent-TdVCvC4y.js";import"./ModalOverlay-DjQ98HcD.js";import"./x-J2AEua27.js";import"./createLucideIcon-CC51vNZq.js";import"./useLocalizedStringFormatter-BE4MzKLw.js";import"./Heading-OMAwRvxs.js";import"./info-BHfbtoxs.js";import"./Popover-KLtrzAb6.js";import"./check-BioLDgK2.js";import"./useToggleState-DKZ2iNLh.js";import"./TextFieldBase-DaGrZY97.js";import"./Input-BAaIFmf5.js";import"./useTextField-DjQ_SLXH.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-4Bx8Cllj.js";import"./DragAndDrop-BZMXBfBs.js";import"./inertValue-BoS8CLMi.js";import"./useListState-DBKKuyC4.js";import"./TagGroup-B2ev4ex1.js";import"./useHighlightSelectionDescription-6w9CiwZG.js";import"./useUpdateEffect-BrCCCrxK.js";import"./useHasTabbableChild-BhxYCp87.js";import"./chevron-down-B_7TVo8S.js";import"./Virtualizer-B6-DDQeb.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
