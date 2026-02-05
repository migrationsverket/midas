import{j as e}from"./iframe-BJhw2N0g.js";import{$ as c}from"./Form-DCLpShRY.js";import{G as d}from"./Grid-9b5aK6Fw.js";import{G as i}from"./GridItem-Cgf7O4wU.js";import{a as x,R as u}from"./Radio-B5j3XC20.js";import{C as I}from"./CheckboxGroup-op2qSrdY.js";import{C as G}from"./Checkbox-Lm45NenJ.js";import{T as t}from"./TextField-C-EprQRY.js";import{S as l}from"./Select-r9PthshM.js";import{L as p}from"./ListBoxItem-DfxittNe.js";import{B as a}from"./Button-DiHVVB0y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-RbG-Aia_.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DbGg4kwf.js";import"./useFocusRing-BW39cesy.js";import"./index-EmEFlqRi.js";import"./index-Dqq__9iy.js";import"./clsx-Ciqy0D92.js";import"./Group-DEus3x70.js";import"./FieldError-C8pmpL6w.js";import"./Text-DyuufO01.js";import"./Text-CXHx80oD.js";import"./Button-BdMf96yr.js";import"./Hidden-BnfcrX-c.js";import"./useLabels-CV-btu-r.js";import"./useButton-C__A5Pf3.js";import"./SelectionIndicator-BY1Vs4zO.js";import"./useField-Dv7DXL3_.js";import"./VisuallyHidden-72ICTt_i.js";import"./useControlledState-LSwz2R3F.js";import"./Label-DratL8iu.js";import"./Dialog-qP5GGgcy.js";import"./RSPContexts-BF5tUZC_.js";import"./OverlayArrow-Bh8ocjNM.js";import"./useResizeObserver-CJIXI4e9.js";import"./Collection-CX5nJlp4.js";import"./index-H1ZMf6bK.js";import"./Separator-JPLEng4f.js";import"./SelectionManager-CrUJtpFM.js";import"./useEvent-C-emn93v.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-AGbylvSE.js";import"./ListKeyboardDelegate-D2n4TjCs.js";import"./PressResponder-0v3TlHho.js";import"./useLocalizedStringFormatter-Cl7mz5Qk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ByC3znn_.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BxZ4QCx-.js";import"./createLucideIcon-IeDQBETZ.js";import"./useLocalizedStringFormatter-0P1BRXD7.js";import"./Heading-uv8eZZPp.js";import"./info-B4dlDAXD.js";import"./Popover-Bd6VQejF.js";import"./check-CEDiim9d.js";import"./useToggleState-CpYxY5Oo.js";import"./TextFieldBase-CX0eL__7.js";import"./TextField-CyP0JILT.js";import"./Input-BkK29b8z.js";import"./useTextField-DRY1yN2Q.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ukWVsDhS.js";import"./DragAndDrop-C_GjfAzc.js";import"./inertValue-BywWsnsl.js";import"./useListState-ijLkSkEw.js";import"./Tag-B5qB7TJf.js";import"./useHighlightSelectionDescription-D3sXbwLW.js";import"./useUpdateEffect-D4OUnlJd.js";import"./useHasTabbableChild-BmQ6bLuO.js";import"./chevron-down-CcVHOklo.js";import"./Virtualizer-BxxJbBHN.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
