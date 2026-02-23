import{j as e}from"./iframe-Cbh3F7pN.js";import{$ as c}from"./Form-Byqdk1s5.js";import{G as d}from"./Grid-D69NmrEA.js";import{G as i}from"./GridItem-H3Bz6mvH.js";import{a as x,R as u}from"./Radio-DaNddbyc.js";import{C as I}from"./CheckboxGroup-Rx9YeIv7.js";import{C as G}from"./Checkbox-B_3uCnBt.js";import{T as t}from"./TextField-DkIoLZXb.js";import{S as l}from"./Select-CPDS-axO.js";import{L as p}from"./ListBoxItem-DOVFZA1q.js";import{B as a}from"./Button-C16sAu0x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B6nDWoar.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ywxX9cB6.js";import"./useFocusRing-B0tiiTm0.js";import"./index-DKv0hklz.js";import"./index-PVDloiUR.js";import"./clsx-Ciqy0D92.js";import"./Group-KZUEw7M9.js";import"./FieldError-CYIfSeeW.js";import"./Text-CjLYei0G.js";import"./Text-CQjCgd7X.js";import"./Button-DEZpBGis.js";import"./Hidden-TWGzSEdN.js";import"./useLabels-CQRwDIC4.js";import"./useButton-XVEb300a.js";import"./SelectionIndicator-DdxHF7Bz.js";import"./useField-Y78HnPPL.js";import"./VisuallyHidden-BEwci_em.js";import"./useControlledState-uXXYD64-.js";import"./Label-D_EveOED.js";import"./Dialog-2VL6JPnH.js";import"./RSPContexts-O6tGUrPW.js";import"./OverlayArrow-BLUB6nJu.js";import"./useResizeObserver-BfN2kMVn.js";import"./Collection-DpkgL1my.js";import"./index-DwzPVi1E.js";import"./Separator-j98yxQpw.js";import"./SelectionManager-H9GNwxSP.js";import"./useEvent-D9_S7x3K.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-zk1PbWHN.js";import"./ListKeyboardDelegate-D9VA6qHb.js";import"./PressResponder-skCSr_0W.js";import"./useLocalizedStringFormatter-BVvUHgZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DXr-1Qnc.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-8XS1xjRr.js";import"./createLucideIcon-CTZlH8w0.js";import"./useLocalizedStringFormatter-CZ4FMEFa.js";import"./Heading-B1X6rn1i.js";import"./info-DmWR8L1N.js";import"./Popover-CGkDdqLx.js";import"./check-DMgQl8IR.js";import"./useToggleState-Dqms9YZl.js";import"./TextFieldBase-BbTnknAH.js";import"./Input-C1NbQ5Jr.js";import"./useTextField-B5b4c9ob.js";import"./TextField.module-Dhscz2t0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CHh8DeRD.js";import"./DragAndDrop-CW-H0wCv.js";import"./inertValue-zmiv4s5s.js";import"./useListState-DGoSOdE3.js";import"./TagGroup-Dd-Fcd7j.js";import"./useHighlightSelectionDescription-_SevAqfX.js";import"./useUpdateEffect-CCusyCQu.js";import"./useHasTabbableChild-DJP6pePk.js";import"./chevron-down-D6MDfNCx.js";import"./Virtualizer-oVuX01yx.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
