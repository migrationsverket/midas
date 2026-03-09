import{j as e}from"./iframe-CcSZizfH.js";import{$ as c}from"./Form-Dz6sYPKN.js";import{G as d}from"./Grid-BOF9ktrt.js";import{G as i}from"./GridItem-C16nH61Y.js";import{a as x,R as u}from"./Radio-CuKELryh.js";import{C as I}from"./CheckboxGroup-PTfcVGAp.js";import{C as G}from"./Checkbox-Zhb0wDLw.js";import{T as t}from"./TextField-PGvMwlCr.js";import{S as l}from"./Select-B-ougyoQ.js";import{L as p}from"./ListBoxItem-B3E4NFaU.js";import{B as a}from"./Button-u3SbUu_V.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C8tqShtU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DLSKiRYE.js";import"./useFocusRing-BV9r26_i.js";import"./index-DDpsSQPb.js";import"./index-BLMh0pMH.js";import"./clsx-Ciqy0D92.js";import"./Group-BAmvIL2E.js";import"./FieldError-Cco9xgcd.js";import"./Text-JtTDVkrn.js";import"./Text-CD36Kyta.js";import"./Button-AvjZljXr.js";import"./Hidden-DB8IdLZR.js";import"./useLabels-B5_NTSEx.js";import"./useButton-CZz_VRDR.js";import"./SelectionIndicator-DEZcm3gk.js";import"./useField-B3CUWj3-.js";import"./VisuallyHidden-DtOJH9kD.js";import"./useControlledState-Cjje-kqG.js";import"./Label-BkuVXHgp.js";import"./Dialog-BASDs-UC.js";import"./RSPContexts-Qm85TxzY.js";import"./OverlayArrow-DQ2lhK0n.js";import"./useResizeObserver-CBbmuXbv.js";import"./Collection-DE1aY-u9.js";import"./index-Ct1je5wM.js";import"./Separator--mz551Ul.js";import"./SelectionManager-CMDEmKzQ.js";import"./useEvent-DS9IArxR.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BOky4ElQ.js";import"./ListKeyboardDelegate-ByyUBW-Y.js";import"./PressResponder-B1ShGaSV.js";import"./useLocalizedStringFormatter-VCKLQeQ3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BEETce1I.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-B1Gc0sgF.js";import"./createLucideIcon-qYjCz2jy.js";import"./useLocalizedStringFormatter-CYEHmnz_.js";import"./Heading-2dQov4Rq.js";import"./info-D9fE9Nux.js";import"./Popover-CrrHlO-9.js";import"./check-CkcOQG3W.js";import"./useToggleState-E0JKR-xh.js";import"./TextFieldBase-tby8faDN.js";import"./Input-Cnc_t4IN.js";import"./useTextField-DTTUY1p9.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BQgnfTeQ.js";import"./DragAndDrop-Bz-aMTAZ.js";import"./inertValue-DTLtX4bx.js";import"./useListState-CuRQ9bPw.js";import"./TagGroup-rKf1yDwU.js";import"./useHighlightSelectionDescription-CH4EiYRY.js";import"./useUpdateEffect-DaQ2wHd1.js";import"./useHasTabbableChild-DdXBizHH.js";import"./chevron-down-CB9JiU1r.js";import"./Virtualizer-CO6ZSS3D.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
