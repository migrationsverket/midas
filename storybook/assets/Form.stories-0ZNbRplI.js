import{j as e}from"./iframe-CVYuRL2L.js";import{$ as c}from"./Form-nEGaHNOI.js";import{G as d}from"./Grid-CRxhCcY2.js";import{G as i}from"./GridItem-DJrUA3Mi.js";import{T as t}from"./TextField-bl-U2qeH.js";import{S as l}from"./Select-DvqobrPg.js";import{B as a}from"./Button-B6nzWHQR.js";import{R as x,a as u}from"./Radio-BbR9i93v.js";import{C as I}from"./CheckboxGroup-Btugwtsr.js";import{C as G}from"./Checkbox-Di-66D6x.js";import{L as p}from"./ListBoxItem-CvEpvt8n.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-FalFx0_C.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C5eaxW-H.js";import"./useFocusRing-B7UqG5wX.js";import"./index-CIN53LEN.js";import"./index-DW6Gp5-3.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D8PjthXn.js";import"./TextField-BGJ1ajT5.js";import"./FieldError-BIaXIYDe.js";import"./Text-fqYhQFX9.js";import"./Text-Cc7Ev4p7.js";import"./RSPContexts-Dz_7vHVU.js";import"./Group-CE9BM4ay.js";import"./Input-DMSXjXnK.js";import"./Hidden-7G--kRMd.js";import"./Button-fgPwWI64.js";import"./useLabels-C6aP1roI.js";import"./useButton-BemEUMtu.js";import"./useTextField-BIlWM_lx.js";import"./useControlledState-Bfw16jnf.js";import"./useField-SLOTdrpb.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C9CTlr3v.js";import"./Dialog-CFrQbFFY.js";import"./OverlayArrow-CnTFpdKe.js";import"./useResizeObserver-wA35P9Sz.js";import"./Collection-XhkaB00H.js";import"./index-CHRmIf3C.js";import"./Separator-DkE98-T3.js";import"./SelectionManager-BIErOqao.js";import"./useEvent-PY-NpLtx.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B0gzAB7t.js";import"./useDescription-B68_wcOl.js";import"./ListKeyboardDelegate-DKFf-qNB.js";import"./PressResponder-CSQrrfEb.js";import"./useLocalizedStringFormatter-Caq8B-uR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-nw96wMmH.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJW8H9GE.js";import"./x-7z9CXtj-.js";import"./createLucideIcon-DJNnvE8I.js";import"./useLocalizedStringFormatter-De7XCe4t.js";import"./Heading-CnEQ7lj3.js";import"./info-CVfFx7tC.js";import"./Popover-kvZKtriy.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cxk5EArh.js";import"./DragAndDrop-2DH71ria.js";import"./inertValue-D1RzoONT.js";import"./useListState-B9RmcuGO.js";import"./Tag-DYnRW27R.js";import"./useHighlightSelectionDescription-BAwvlNuX.js";import"./useUpdateEffect-tpUbIZWD.js";import"./useHasTabbableChild-D5Qcdyov.js";import"./chevron-down-D0jUsk31.js";import"./Button.module-Co5e5YHp.js";import"./check-Dj-NsiHa.js";import"./useToggleState-DLyteiLp.js";import"./Virtualizer-XyK5C4kG.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
