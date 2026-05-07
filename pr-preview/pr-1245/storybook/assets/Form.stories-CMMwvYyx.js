import{j as e}from"./iframe-B3CWHhIN.js";import{c}from"./Form-DZNqsYbE.js";import{G as d}from"./Grid-BeRG2EQT.js";import{G as i}from"./GridItem-BsCJ1TUG.js";import{a as x,R as u}from"./Radio-CQgBAX_n.js";import{C as I}from"./CheckboxGroup-wkKwhPQm.js";import{C as G}from"./Checkbox-4K6Eyn4b.js";import{T as t}from"./TextField-k5AtWjqf.js";import{S as l}from"./Select-CmmgVbP7.js";import{L as p}from"./ListBoxItem-UGSGd2F2.js";import{B as a}from"./Button-CFIqCifj.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Dqy31Yu8.js";import"./utils-Jns7c9tB.js";import"./clsx-B-dksMZM.js";import"./index-BnJ3Y3M7.js";import"./index-CJ7rKWZW.js";import"./clsx-Ciqy0D92.js";import"./Group-DdYmsXJ0.js";import"./FieldError-DaCLZlSC.js";import"./Text-CjXkmRxL.js";import"./Text-BEt0Rg_V.js";import"./Button-BI1n4R5H.js";import"./Hidden-CgV_CbEL.js";import"./useLabel-CC7uv02C.js";import"./useLabels-DG2yLXCg.js";import"./useButton-qyJkLJr0.js";import"./SelectionIndicator-CJ3Bq9Rm.js";import"./useField-Dhf-tbRQ.js";import"./VisuallyHidden-DPG3Zp-i.js";import"./useControlledState-DO7MzpyM.js";import"./Label-BaMtZoUC.js";import"./Dialog-5M_yJWc8.js";import"./RSPContexts-D5wE8Zis.js";import"./OverlayArrow-BBLynvro.js";import"./useResizeObserver-DehhQaPW.js";import"./Collection-DltRMGuJ.js";import"./index-DfG7SzIC.js";import"./Separator-B42A5QyY.js";import"./SelectionManager-BsMJ6UOF.js";import"./useEvent-Dz0-ORXf.js";import"./scrollIntoView-CEOdDLMX.js";import"./useDescription-BXbEU8r2.js";import"./ListKeyboardDelegate-Ddz2Dxjm.js";import"./PressResponder-XgRyzFBv.js";import"./useLocalizedStringFormatter-CcWFJj2d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Buslp-fm.js";import"./getScrollParent-k-5r8MVO.js";import"./ModalOverlay-CDHf7O94.js";import"./x-BAAJthI0.js";import"./createLucideIcon-B55uVL59.js";import"./useLocalizedStringFormatter-FGEoJAjv.js";import"./Heading-J4CHMMjr.js";import"./info-BnsgrLUO.js";import"./Popover-HDQOFG7J.js";import"./check-BG3r-55S.js";import"./useToggleState-BrCQNV94.js";import"./TextFieldBase-jmO4Hg_7.js";import"./Input-DaIvaMm_.js";import"./useTextField-BN_lArB3.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BZL3TPJ-.js";import"./DragAndDrop-B8EfWjOL.js";import"./inertValue-DxdCAkDz.js";import"./useListState-bBseHCT6.js";import"./TagGroup-Czmu2IeV.js";import"./useHighlightSelectionDescription-Bmbyfy5T.js";import"./useUpdateEffect-CjW3TO62.js";import"./useHasTabbableChild-DlcsEq8p.js";import"./chevron-down-CIIX060D.js";import"./Virtualizer-IoU9oot7.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
