import{j as e}from"./iframe-D0MbCfGX.js";import{$ as c}from"./Form-C0FtyfmA.js";import{G as d}from"./Grid-BCUjLTRt.js";import{G as i}from"./GridItem-DQIxSDDG.js";import{T as t}from"./TextField-CqwDoxmz.js";import{S as l}from"./Select-CL27E8D_.js";import{B as a}from"./Button-ZcS88E_Q.js";import{R as x,a as u}from"./Radio-B2lkCW-d.js";import{C as I}from"./CheckboxGroup-WUe_Ioho.js";import{C as G}from"./Checkbox-CtfTa3AH.js";import{L as p}from"./ListBoxItem-DcourF1q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-HqVyPsx5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B97Efddu.js";import"./useFocusRing-Bu7gL19x.js";import"./index-hynslO7V.js";import"./index-fjtbWm9v.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bpv8eFmK.js";import"./TextField-BSwwllTx.js";import"./FieldError-CJdCsbD5.js";import"./Text-C56uKtog.js";import"./Text-lYk5NG0J.js";import"./RSPContexts-BOmcJgyX.js";import"./Group-Dv5uCDw-.js";import"./Input-DFVFzf63.js";import"./Hidden-nmq2QyfL.js";import"./Button-CwpQ0ZRN.js";import"./useLabels-bAB6zu2C.js";import"./useButton-B-HcF5FI.js";import"./useTextField-DlU4aTta.js";import"./useControlledState-C8xGgj4C.js";import"./useField-BMJKgdNF.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CuHw4TV7.js";import"./Dialog-CYAJYeJS.js";import"./OverlayArrow-DMXfG1zs.js";import"./useResizeObserver-BOnYzN1g.js";import"./Collection-B2JFKRf7.js";import"./index-COoRz86T.js";import"./Separator-DeWXwwSp.js";import"./SelectionManager-CG-4iIi6.js";import"./useEvent-CYGAUgVS.js";import"./scrollIntoView-DUUJwUq8.js";import"./SelectionIndicator-jYD4F_ud.js";import"./useDescription--JIgYdID.js";import"./ListKeyboardDelegate-DAlCqSfA.js";import"./PressResponder-Ct7dIoGM.js";import"./useLocalizedStringFormatter-2hEikx4k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DtAfmDwe.js";import"./VisuallyHidden-CztvSzbh.js";import"./x-R-Hlv3Cg.js";import"./createLucideIcon-BVgI_rj9.js";import"./useLocalizedStringFormatter-Cp1Qq6jQ.js";import"./Heading-mbCsYgT7.js";import"./info-Bh6F8wDP.js";import"./Popover-CBKbjwWD.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BC2GpuuL.js";import"./DragAndDrop-BA0C7QXb.js";import"./inertValue--STdWAy7.js";import"./useListState-BSA-70IW.js";import"./Tag-DzHojVMK.js";import"./useHighlightSelectionDescription-DA2Aj_S1.js";import"./useUpdateEffect-CBRJ21BN.js";import"./useHasTabbableChild-CEmMFbks.js";import"./chevron-down-eRjIgnI0.js";import"./Button.module-Co5e5YHp.js";import"./check-puodcnHv.js";import"./useToggleState-CwLsH3mO.js";import"./Virtualizer-DuRq832Q.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
