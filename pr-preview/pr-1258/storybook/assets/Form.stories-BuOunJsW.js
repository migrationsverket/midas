import{j as e}from"./iframe-1_iu-uVv.js";import{c}from"./Form-Bs2TzZTt.js";import{G as d}from"./Grid-C7BEIXK5.js";import{G as i}from"./GridItem-CA-cYLjM.js";import{a as x,R as u}from"./Radio-DasHyTqM.js";import{C as I}from"./CheckboxGroup-myTjMiLt.js";import{C as G}from"./Checkbox-D6goytZp.js";import{T as t}from"./TextField-ByKFk2Rv.js";import{S as l}from"./Select-B0H73hyU.js";import{L as p}from"./ListBoxItem-ZRT-ywEc.js";import{B as a}from"./Button-3xGdYp6o.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CLMMEccq.js";import"./utils-D8XDfVqo.js";import"./clsx-B-dksMZM.js";import"./index-DaFkej-O.js";import"./index-8FVPoEJc.js";import"./clsx-Ciqy0D92.js";import"./Group-DKezO36b.js";import"./FieldError--XBiql7z.js";import"./Text-Cs17jUaF.js";import"./Text-Cvi52zQo.js";import"./Button-C-cqr9pq.js";import"./Hidden-7JO0YZlM.js";import"./useLabel-DW7Clw8B.js";import"./useLabels-CD6qsxzR.js";import"./useButton-QeuVXvqT.js";import"./SelectionIndicator-BGZ-Uahi.js";import"./useField-D0gCtfzu.js";import"./VisuallyHidden-CLNANI2G.js";import"./useControlledState-DeicQIqX.js";import"./Label-b4Ao6UWf.js";import"./Dialog-Ctp56gQK.js";import"./RSPContexts-Bv3dZUJW.js";import"./OverlayArrow-Df3ze1GC.js";import"./useResizeObserver-kRwAA-on.js";import"./Collection-D99_FTQW.js";import"./index-YIsAHUGT.js";import"./Separator-BdJZ52iU.js";import"./SelectionManager-DGCLs2FY.js";import"./useEvent-CZV_7zjz.js";import"./scrollIntoView-CoHaVyLh.js";import"./useDescription-C3hybjUT.js";import"./ListKeyboardDelegate-BgFHXkfP.js";import"./PressResponder-BUUh4_Ij.js";import"./useLocalizedStringFormatter-DQ-EATPr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df6nzKP2.js";import"./getScrollParent-CfG8ol6W.js";import"./ModalOverlay-DUHRlyt4.js";import"./x-BuusROzJ.js";import"./createLucideIcon-BbCelBYg.js";import"./useLocalizedStringFormatter-ByENZTtA.js";import"./Heading-Bete7LDT.js";import"./info-s8OwWpCJ.js";import"./Popover-BumnY0wg.js";import"./check-BY6MOyur.js";import"./useToggleState-Culx0Igr.js";import"./TextFieldBase-BRRSKCOI.js";import"./Input-IBbhfJob.js";import"./useTextField-BCY0WVMU.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-OLQTQkk0.js";import"./DragAndDrop-BsKIRLRQ.js";import"./inertValue-SmYKeN3i.js";import"./useListState-DpzLqMEG.js";import"./TagGroup-vP9adUuz.js";import"./useHighlightSelectionDescription-Bap_YUcI.js";import"./useUpdateEffect-DbC_5c-q.js";import"./useHasTabbableChild-acrA5UED.js";import"./chevron-down-DvP-XsFb.js";import"./Virtualizer-BwC6RHW2.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
