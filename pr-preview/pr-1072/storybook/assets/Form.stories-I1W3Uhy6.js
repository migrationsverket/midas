import{j as e}from"./iframe-C7mRVAw-.js";import{$ as c}from"./Form-ke4oR6s4.js";import{G as d}from"./Grid-D9olE6IQ.js";import{G as i}from"./GridItem-D8Fp3Y1D.js";import{a as x,R as u}from"./Radio-CthohXaq.js";import{C as I}from"./CheckboxGroup-ZkyIfD4O.js";import{C as G}from"./Checkbox-CQd9XUwq.js";import{T as t}from"./TextField-xR2kM76p.js";import{S as l}from"./Select-BGmKBtv7.js";import{L as p}from"./ListBoxItem-BKH-JX9O.js";import{B as a}from"./Button-CZ_HndjP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BeEL8pJ2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CpzrLShJ.js";import"./useFocusRing-B6vJKCx-.js";import"./index-C_BC5gdb.js";import"./index-BTnShkl9.js";import"./clsx-Ciqy0D92.js";import"./Group-BuiHETwK.js";import"./FieldError-BFaJaxlc.js";import"./Text-C-q-JnIT.js";import"./Text-SdK-7_Ed.js";import"./Button-BOx_rjlH.js";import"./Hidden-DMuuZGaU.js";import"./useLabels-Ds9YSjJx.js";import"./useButton-ZvjmP_g6.js";import"./SelectionIndicator-DfN4lR5W.js";import"./useField-C7j1aptb.js";import"./VisuallyHidden-Bi6dfUTC.js";import"./useControlledState-CdL3PN3V.js";import"./Label-DzN4dud1.js";import"./Dialog-BzorbjZ_.js";import"./RSPContexts-3BOa1bAA.js";import"./OverlayArrow-D803GnqF.js";import"./useResizeObserver-C4OyXG_p.js";import"./Collection-CrM6FHNF.js";import"./index-BGdJvTOY.js";import"./Separator-CtIQYwU7.js";import"./SelectionManager-DdQv0Ybp.js";import"./useEvent-Cc0KmnDZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DTA-9R__.js";import"./ListKeyboardDelegate-CjS7qxm_.js";import"./PressResponder-OH7UskiT.js";import"./useLocalizedStringFormatter-5uEV4cAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fr_vkZ8o.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BrKWut6c.js";import"./createLucideIcon-CxN-HpyC.js";import"./useLocalizedStringFormatter-CWqMwdpP.js";import"./Heading-0hTRdsf4.js";import"./info-DjJTGZkt.js";import"./Popover-DIhZ_Ej7.js";import"./check-hXMFzkCI.js";import"./useToggleState-D1jWwDBR.js";import"./TextFieldBase-5UhkB3cv.js";import"./Input-DQGZc2sT.js";import"./useTextField-OlTkDIq1.js";import"./TextField.module-Ck-VtJ3k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-KYhrm_NM.js";import"./DragAndDrop-3xompVXg.js";import"./inertValue-v0HVN4KL.js";import"./useListState-D3EE3LqA.js";import"./TagGroup-DRXNzo1w.js";import"./useHighlightSelectionDescription-C9V9MpK0.js";import"./useUpdateEffect-MT3yovPK.js";import"./useHasTabbableChild-B9hCkOA8.js";import"./chevron-down-BCiHAsz5.js";import"./Virtualizer-C6HVArHJ.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
