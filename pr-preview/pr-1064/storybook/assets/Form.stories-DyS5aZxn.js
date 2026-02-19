import{j as e}from"./iframe-DrmPUhtX.js";import{$ as c}from"./Form-qpWFQjaS.js";import{G as d}from"./Grid-BfsFyptA.js";import{G as i}from"./GridItem-CUtfhOMu.js";import{a as x,R as u}from"./Radio-DGeMox9B.js";import{C as I}from"./CheckboxGroup-CbOnL-Ar.js";import{C as G}from"./Checkbox-B8x5w7YU.js";import{T as t}from"./TextField-CE6oWiUQ.js";import{S as l}from"./Select-BFYDph4n.js";import{L as p}from"./ListBoxItem-DWcMihfQ.js";import{B as a}from"./Button-B2oaCNDe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dua4TRiH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CXx1vBnx.js";import"./useFocusRing-BNHXCoxm.js";import"./index-PAOxTS2r.js";import"./index-D-dIolA3.js";import"./clsx-Ciqy0D92.js";import"./Group-BTpK8Ylv.js";import"./FieldError-obpxZCHn.js";import"./Text-CxmjGSV2.js";import"./Text-DkoI531E.js";import"./Button-BRd7RKkm.js";import"./Hidden-BtcA-10V.js";import"./useLabels-BuRHQX82.js";import"./useButton-BeQ8yPDi.js";import"./SelectionIndicator-CrjHOO0s.js";import"./useField-BBSmKDdI.js";import"./VisuallyHidden-bA_PzrHg.js";import"./useControlledState-CPqfCSd5.js";import"./Label-CVvg9Udt.js";import"./Dialog-DiZH0gV9.js";import"./RSPContexts-ZJmi3UUb.js";import"./OverlayArrow-DfZMzxqA.js";import"./useResizeObserver-4XTvcQFt.js";import"./Collection-b6_XQqRw.js";import"./index-CQppD3ii.js";import"./Separator-BCBh5NBg.js";import"./SelectionManager-CgtbsMya.js";import"./useEvent-CawZJgI-.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CYDi8KlD.js";import"./ListKeyboardDelegate-DCJOIvbr.js";import"./PressResponder-B9h388Jb.js";import"./useLocalizedStringFormatter-5H_vyTJU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6EuF8ob.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-gIz19uq9.js";import"./createLucideIcon-lnTltRl9.js";import"./useLocalizedStringFormatter-CK8ulSsr.js";import"./Heading-D9rDmJb2.js";import"./info-Kgb_W6Sw.js";import"./Popover-DCw4wKE9.js";import"./check-D58JMSz9.js";import"./useToggleState-C9F_KMPn.js";import"./TextFieldBase-Bx6zt3pF.js";import"./Input-BPdR7A6u.js";import"./useTextField-Ck97sTRL.js";import"./TextField.module-Dhscz2t0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DvVy8B_6.js";import"./DragAndDrop-Cpd39aA8.js";import"./inertValue-CUGuw3pd.js";import"./useListState-BO0KfXsS.js";import"./TagGroup-meUyxXhR.js";import"./useHighlightSelectionDescription-Dey6C-rX.js";import"./useUpdateEffect-BkQbXkzY.js";import"./useHasTabbableChild-CoqEDWTU.js";import"./chevron-down-C3Oejohp.js";import"./Virtualizer-YCkhmLA2.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
