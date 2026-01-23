import{j as e}from"./iframe-c0NZLqxB.js";import{$ as c}from"./Form-CuG83Arz.js";import{G as d}from"./Grid-powGgb4v.js";import{G as i}from"./GridItem-vzH5lnIO.js";import{T as t}from"./TextField-CTE_KvdC.js";import{S as l}from"./Select-CFttVlAb.js";import{B as a}from"./Button-DIihlZQ1.js";import{R as x,a as u}from"./Radio-DJAHvBMA.js";import{C as I}from"./CheckboxGroup-DLv9UTvx.js";import{C as G}from"./Checkbox-QMnW5x9N.js";import{L as p}from"./ListBoxItem-C2B9AKfr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BKgH2Y_x.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ByN0j24V.js";import"./useFocusRing-Cj5nDXBG.js";import"./index-BMKVxsa8.js";import"./index-CyIR4htQ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-8_rK97rr.js";import"./TextField-Ch0LDdul.js";import"./FieldError-DmTPwkC8.js";import"./Text-INM5RJTT.js";import"./Text-CHKa0TSz.js";import"./RSPContexts-RKVSLPs0.js";import"./Group-CMrYMiKO.js";import"./Input-DR58o-UD.js";import"./Hidden-W2Z4Qx3q.js";import"./Button-C5Y3_RdN.js";import"./useLabels-CZwsnZ3A.js";import"./useButton-Cfwxxq9B.js";import"./useTextField-vi61ycAX.js";import"./useControlledState-BjKcVj6X.js";import"./useField-DuMvas_e.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D8DcW-YG.js";import"./Dialog-C4-3I7SW.js";import"./OverlayArrow-DgFHMrZW.js";import"./useResizeObserver-CvoDWgrg.js";import"./Collection-pg0lVI6R.js";import"./index-BCNfX8V_.js";import"./Separator-DYLbZp0J.js";import"./SelectionManager-BxRgTcFy.js";import"./useEvent-DhmWtasD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DCSorE7A.js";import"./useDescription-Db-kOIhF.js";import"./ListKeyboardDelegate-BFnCDYdf.js";import"./PressResponder-BPdxsn-v.js";import"./useLocalizedStringFormatter-Dj8f67Lw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzA2sUHz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-fZjjLnAV.js";import"./x-dOsKZ8lh.js";import"./createLucideIcon-D4UmvVly.js";import"./useLocalizedStringFormatter-DXAkg84e.js";import"./Heading-RVoXat7V.js";import"./info-B6zLByNN.js";import"./Popover-ChR2CB9A.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C_a12nvd.js";import"./DragAndDrop-CPS1D7vd.js";import"./inertValue-Be7E9-2A.js";import"./useListState-CcNKh7M-.js";import"./Tag-CsmUjxtF.js";import"./useHighlightSelectionDescription-DW7RqFCI.js";import"./useUpdateEffect-DGO1fVJ4.js";import"./useHasTabbableChild-D_b7bXJW.js";import"./chevron-down-CYNaWmaf.js";import"./Button.module-Co5e5YHp.js";import"./check-D-Wilsb4.js";import"./useToggleState-DOpAkxiL.js";import"./Virtualizer-CbVJ1A5d.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
