import{j as e}from"./iframe-fyvob5pV.js";import{$ as c}from"./Form-x2mvhheS.js";import{G as d}from"./Grid-SLqd3Y7o.js";import{G as i}from"./GridItem-os3QQ-Cq.js";import{T as t}from"./TextField-B6QHNmBj.js";import{S as l}from"./Select-rx5s4DWF.js";import{B as a}from"./Button-CyxqdNO0.js";import{R as x,a as u}from"./Radio-BqNe4EUj.js";import{C as I}from"./CheckboxGroup-cniSyfsc.js";import{C as G}from"./Checkbox-BiSOUY7r.js";import{L as p}from"./ListBoxItem-DumFY6OI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZHg57NPT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DqszraAo.js";import"./useFocusRing-CefW_QDX.js";import"./index-DeYDX39H.js";import"./index-YdXWAPci.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Dvth7xaC.js";import"./TextField-C1gEGKcH.js";import"./FieldError-_70I33O6.js";import"./Text-DgXAg_jZ.js";import"./Text-DkAg-CHN.js";import"./RSPContexts-CFyQYNsz.js";import"./Group-C0-Hv0oL.js";import"./Input-DNZDGi31.js";import"./Hidden-BUh53Qty.js";import"./Button-Cg4ndPMc.js";import"./useLabels-De8j202R.js";import"./useButton-BWNkf0-B.js";import"./useTextField-DqAaCvYO.js";import"./useControlledState-3Trks7iT.js";import"./useField-2PAzhLbD.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B2UNVC5N.js";import"./Dialog-DMOav4NC.js";import"./OverlayArrow-B5QqyFHq.js";import"./useResizeObserver-da6VNBuq.js";import"./Collection-B71LPDM_.js";import"./index-Y2Or3rvv.js";import"./Separator-f5I0JjZ6.js";import"./SelectionManager-CeD3aTpx.js";import"./useEvent-JeGL7mSw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DjORemxc.js";import"./useDescription-BEPPLOWX.js";import"./ListKeyboardDelegate-CNox7fi5.js";import"./PressResponder-vS2tGprJ.js";import"./useLocalizedStringFormatter-C-nDJOl1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-anbmUjdE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B4V5xJ__.js";import"./x-vbaUtfu9.js";import"./createLucideIcon-nzmbSsyS.js";import"./useLocalizedStringFormatter-CN8LIDfv.js";import"./Heading-Bbo5K6Vi.js";import"./info-C2P6cAg_.js";import"./Popover-BQVIFuBN.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D4McPMa0.js";import"./DragAndDrop-Cy_4TG21.js";import"./inertValue-DDkv9Nlm.js";import"./useListState-BPj239QT.js";import"./Tag-BV9Bhj90.js";import"./useHighlightSelectionDescription-DMad3nqx.js";import"./useUpdateEffect-B4j_50oq.js";import"./useHasTabbableChild-Bp4BEJL0.js";import"./chevron-down-BJg587sA.js";import"./Button.module-Co5e5YHp.js";import"./check-DFjD-V8B.js";import"./useToggleState-DGUFLm2x.js";import"./Virtualizer-bLYSMbq_.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
