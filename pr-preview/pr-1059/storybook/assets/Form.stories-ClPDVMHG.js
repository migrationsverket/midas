import{j as e}from"./iframe-CLZ7lMWL.js";import{$ as c}from"./Form-CjgBY9HH.js";import{G as d}from"./Grid-DNJl60rq.js";import{G as i}from"./GridItem--VEi7ufF.js";import{a as x,R as u}from"./Radio-DxaAUb0P.js";import{C as I}from"./CheckboxGroup-BgP2_MiA.js";import{C as G}from"./Checkbox-DYu33BYw.js";import{T as t}from"./TextField-Q7nhz3j_.js";import{S as l}from"./Select-BLy-GiPk.js";import{L as p}from"./ListBoxItem-BNnAa_tv.js";import{B as a}from"./Button-epCGRlhZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-2WeD-wN4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DH2Mgg_R.js";import"./useFocusRing-ChcbSX8A.js";import"./index-joeLWnyk.js";import"./index-BQfKMPTh.js";import"./clsx-Ciqy0D92.js";import"./Group-BjbK-tU0.js";import"./FieldError-C9kOHtGX.js";import"./Text-DRJ2hBXG.js";import"./Text-BMOUMG_N.js";import"./Button-BdHKCjLS.js";import"./Hidden-To-3RG_j.js";import"./useLabels-DWLJ680t.js";import"./useButton-BRhObPaf.js";import"./SelectionIndicator-ml-LKVKH.js";import"./useField-DGpSlZLY.js";import"./VisuallyHidden-BKsebB3-.js";import"./useControlledState-Ch1Apm7b.js";import"./Label-BuTGvR_t.js";import"./Dialog-CXJMpsnJ.js";import"./RSPContexts-p4UD-iwG.js";import"./OverlayArrow-NBOTP4rD.js";import"./useResizeObserver-tdEzEOOs.js";import"./Collection-D5JQNHBM.js";import"./index-DFhlRqD6.js";import"./Separator-BB7lIjRA.js";import"./SelectionManager-DXid-Z9i.js";import"./useEvent-A6WuRPvM.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DN7NAyXj.js";import"./ListKeyboardDelegate-zdtkEJzt.js";import"./PressResponder-fHgI3hkF.js";import"./useLocalizedStringFormatter-C7tLz9-g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9mV23my.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DBKM5voW.js";import"./createLucideIcon-CqL2zG8F.js";import"./useLocalizedStringFormatter-DKKvMQ_v.js";import"./Heading-BSQ7kAFI.js";import"./info-u50hN6QW.js";import"./Popover-CQBSpcVE.js";import"./check-fSQVBaT0.js";import"./useToggleState-DXbf92xo.js";import"./TextFieldBase-Clp0aK1S.js";import"./Input-DkIpQOFm.js";import"./useTextField-DxOJoG2G.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DzNQY7Ea.js";import"./DragAndDrop-DFstTH5_.js";import"./inertValue-DVLI7sJa.js";import"./useListState-CHhVxfaG.js";import"./TagGroup-O9gSsHwb.js";import"./useHighlightSelectionDescription-COHZRweY.js";import"./useUpdateEffect-60HYZQ4x.js";import"./useHasTabbableChild-BqZNMoap.js";import"./chevron-down-Cf0XBfou.js";import"./Virtualizer-CSaWNUHz.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
