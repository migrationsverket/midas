import{j as e}from"./iframe-B1z-gzHE.js";import{$ as c}from"./Form-CuLwN7xk.js";import{G as d}from"./Grid-C8uBkL0i.js";import{G as i}from"./GridItem-RcJrpwPN.js";import{a as x,R as u}from"./Radio-D4iWRpsk.js";import{C as I}from"./CheckboxGroup-Dgpd3U0-.js";import{C as G}from"./Checkbox-G956RdEt.js";import{T as t}from"./TextField-DwRTAZl5.js";import{S as l}from"./Select-BKM2nzNY.js";import{L as p}from"./ListBoxItem-CgR1GtV7.js";import{B as a}from"./Button-pqjMbnpp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CEIeqKii.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-w3v3W7gn.js";import"./useFocusRing-BvsKcShr.js";import"./index-Di8dd2eE.js";import"./index-BOkWMc0e.js";import"./clsx-Ciqy0D92.js";import"./Group-Bg64DGy6.js";import"./FieldError-CT39iQs7.js";import"./Text-BYCHxNL_.js";import"./Text-Dl9x0CG8.js";import"./Button-D77i-hon.js";import"./Hidden-Cs2MCe5s.js";import"./useLabels-Dmi7cw95.js";import"./useButton-fu8jG2Pq.js";import"./SelectionIndicator-Bo2ubr1N.js";import"./useField-d_oeHlDs.js";import"./VisuallyHidden-Bj8GOm3o.js";import"./useControlledState-B3HQDcvg.js";import"./Label-Dq2Bv3Sh.js";import"./Dialog-1-j5Bo3M.js";import"./RSPContexts-BGkblzEm.js";import"./OverlayArrow-DEJNKPlL.js";import"./useResizeObserver-DZYX4SHr.js";import"./Collection-DOfSxpZ2.js";import"./index-Bb4iAelt.js";import"./Separator-CXlvbZzP.js";import"./SelectionManager-D7xh7jh3.js";import"./useEvent-EYVAMCj5.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DAgCVnlX.js";import"./ListKeyboardDelegate-CUzhUpcn.js";import"./PressResponder-C1X-ay40.js";import"./useLocalizedStringFormatter-DWVhSEJI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DJ05djJI.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CglcQKFI.js";import"./createLucideIcon-B5DI2OI0.js";import"./useLocalizedStringFormatter-BEmp5YcF.js";import"./Heading-BLB8Du94.js";import"./info-BWZR2OeP.js";import"./Popover-BhD_DRu-.js";import"./check-DEZ28te5.js";import"./useToggleState-BBMcRgXS.js";import"./TextFieldBase-4haWjP0A.js";import"./Input-DF2nEux3.js";import"./useTextField-4hdYMRQF.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bm4h0uJY.js";import"./DragAndDrop-CLGU8ndI.js";import"./inertValue-utZy8Oxn.js";import"./useListState-3BPPyVwP.js";import"./Tag-GGY2rj7p.js";import"./useHighlightSelectionDescription-CyPtYsUi.js";import"./useUpdateEffect-CQCOSQ8-.js";import"./useHasTabbableChild-DHj0jJ8R.js";import"./chevron-down-Do0b3TDf.js";import"./Virtualizer-D9usX4ho.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
