import{j as e}from"./iframe-D6iOFlNk.js";import{$ as c}from"./Form-CPEZg61n.js";import{G as d}from"./Grid-CnSWaUBH.js";import{G as i}from"./GridItem-B9ehfIYp.js";import{T as t}from"./TextField-BOAeuHA3.js";import{S as l}from"./Select-DlUJqt1h.js";import{B as a}from"./Button-CjctI97I.js";import{R as x,a as u}from"./Radio-kjpxiCJH.js";import{C as I}from"./CheckboxGroup-CP_ipDPU.js";import{C as G}from"./Checkbox-CVVGYfV7.js";import{L as p}from"./ListBoxItem-CJVJ8xbP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CD1tK_62.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cs82m8dT.js";import"./useFocusRing-upgm9Lvd.js";import"./index-cK5OqLVZ.js";import"./index-BOUWd1Up.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-q7P_vONl.js";import"./TextField-BP7snlb2.js";import"./FieldError-BlY0sckk.js";import"./Text-aL4nWdoT.js";import"./Text-D5zoqrMb.js";import"./RSPContexts-BvwPJGsb.js";import"./Group-DD1PfB3C.js";import"./Input-6iqbT1mi.js";import"./Hidden-Cd_aaCcf.js";import"./Button-B4EeNfOQ.js";import"./useLabels-CZQ88t08.js";import"./useButton-84WMXec5.js";import"./useTextField-X7zOl3Pb.js";import"./useControlledState-DejCxbfT.js";import"./useField-BS28cROS.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ByJL_z4L.js";import"./Dialog-D2nUFJ93.js";import"./OverlayArrow-DGiQBfyt.js";import"./useResizeObserver-0neNMj4N.js";import"./Collection-BkN69H6H.js";import"./index-zGMbwrwu.js";import"./Separator-i4x5yLEI.js";import"./SelectionManager-C73wsRfe.js";import"./useEvent-ClK_-pLi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgEE-HPU.js";import"./useDescription-CuOT9qT9.js";import"./ListKeyboardDelegate-BuJFcrKe.js";import"./PressResponder-dFieFUDI.js";import"./useLocalizedStringFormatter-BIP2SAND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaI16aPT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CIEzbUDk.js";import"./x-CmRgogil.js";import"./createLucideIcon-Gwq4fNDs.js";import"./useLocalizedStringFormatter-BAscfSQt.js";import"./Heading-Dk1N_l44.js";import"./info-BWts4tgg.js";import"./Popover-Dvcj7Ba1.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D-TtusqC.js";import"./DragAndDrop-DqSpBkjz.js";import"./inertValue-BK0gRzfl.js";import"./useListState-CAXoIjB5.js";import"./Tag-BXxWX4rU.js";import"./useHighlightSelectionDescription-B98Oz0JC.js";import"./useUpdateEffect-DTEBxJbz.js";import"./useHasTabbableChild-CRcsV1ls.js";import"./chevron-down-ubYXteoD.js";import"./Button.module-Co5e5YHp.js";import"./check-DLCuJ73v.js";import"./useToggleState-BcMORZC_.js";import"./Virtualizer-BJFJrac1.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
