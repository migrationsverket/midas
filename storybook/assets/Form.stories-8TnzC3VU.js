import{j as e}from"./iframe-D57HPjUH.js";import{$ as c}from"./Form-BlAdMGxA.js";import{G as d}from"./Grid-BkwvxeFY.js";import{G as i}from"./GridItem-IN7Cg9hM.js";import{T as t}from"./TextField-B5j2_QGz.js";import{S as l}from"./Select-DMYGvOO3.js";import{B as a}from"./Button-DUgrP7y1.js";import{R as x,a as u}from"./Radio-CXpg5WII.js";import{C as I}from"./CheckboxGroup-CnJYVCrv.js";import{C as G}from"./Checkbox-7YglCIwf.js";import{L as p}from"./ListBoxItem-DRIxmKvV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B06jzTgT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BquHFWdr.js";import"./useFocusRing-DtsyDwWy.js";import"./index-CgeWXzya.js";import"./index-DybAXT18.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Dux--LeO.js";import"./TextField-DWCatZGK.js";import"./FieldError-D4T6w_uZ.js";import"./Text-BRbYuply.js";import"./Text-b7_ug03S.js";import"./RSPContexts-C7gWpURr.js";import"./Group-BJwhrip2.js";import"./Input-BEx648-v.js";import"./Hidden-Ds1-Bo4r.js";import"./Button-DVU6uVBH.js";import"./useLabels-CqCkvO1J.js";import"./useButton-CaFZ2X3A.js";import"./useTextField-DMqIp21y.js";import"./useControlledState-C5qdaBdS.js";import"./useField-DeXnNznj.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CR0jC5kW.js";import"./Dialog-BVqQjS6c.js";import"./OverlayArrow-Cd82wZ4k.js";import"./useResizeObserver-DM9cfRH9.js";import"./Collection-CbpD3AKB.js";import"./index-B9rGxsJZ.js";import"./Separator-BqlK3CkN.js";import"./SelectionManager-WTSWdZRU.js";import"./useEvent-DImJ-Ww-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BnzQGY8l.js";import"./useDescription-DKI9BPRO.js";import"./ListKeyboardDelegate-DnPSa863.js";import"./PressResponder-DOoRHakO.js";import"./useLocalizedStringFormatter-Do30dAQM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cz55DP5B.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bPoGyprv.js";import"./x-CCfpzTZt.js";import"./createLucideIcon-_zPB_PGU.js";import"./useLocalizedStringFormatter-CP9tIGKw.js";import"./Heading-Bm1KbJoW.js";import"./info-CulBlHjB.js";import"./Popover-BYTpsmPj.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-21Dj_q-t.js";import"./DragAndDrop-CXWPqrS3.js";import"./inertValue-CBgLTNQg.js";import"./useListState-CBUVHdwV.js";import"./Tag-BreBMN4t.js";import"./useHighlightSelectionDescription-B0JlCf1j.js";import"./useUpdateEffect-BLQ9ipgn.js";import"./useHasTabbableChild-BynOFPi1.js";import"./chevron-down-DHrlPeRr.js";import"./Button.module-Co5e5YHp.js";import"./check-DW21n8ik.js";import"./useToggleState-c4wOii77.js";import"./Virtualizer-C6lsn1JZ.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
