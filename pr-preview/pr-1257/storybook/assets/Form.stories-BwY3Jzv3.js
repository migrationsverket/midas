import{j as e}from"./iframe-DHSFkIsy.js";import{c}from"./Form-C4OsrVJ1.js";import{G as d}from"./Grid-CHq9IVMG.js";import{G as i}from"./GridItem-BUcNy3QC.js";import{a as x,R as u}from"./Radio-BTL4uhZc.js";import{C as I}from"./CheckboxGroup-CXeleHJ7.js";import{C as G}from"./Checkbox-CZI43qn4.js";import{T as t}from"./TextField-Dt_s0ryy.js";import{S as l}from"./Select-CIUhDiuX.js";import{L as p}from"./ListBoxItem-B0IUDTzq.js";import{B as a}from"./Button-BCxQv38d.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CNpZwhdZ.js";import"./utils-CZbTr4bL.js";import"./clsx-B-dksMZM.js";import"./index-oXf-9ID4.js";import"./index-J1_Mq2EC.js";import"./clsx-Ciqy0D92.js";import"./Group-GTWQChIb.js";import"./FieldError-DFzLFMIZ.js";import"./Text-Dlktz5kY.js";import"./Text-CE2-J5ib.js";import"./Button-DwFLZ-vl.js";import"./Hidden-N-s-Oc-P.js";import"./useLabel-BCJ-n4cN.js";import"./useLabels-CTlVno2m.js";import"./useButton-tAptgANb.js";import"./SelectionIndicator-CydRsdFr.js";import"./useField-CmEVGEa7.js";import"./VisuallyHidden-CdVi298y.js";import"./useControlledState-BC5iZhUu.js";import"./Label-B_ZUWnb7.js";import"./Dialog-h_UASn88.js";import"./RSPContexts-Dm3G7A6M.js";import"./OverlayArrow-DVJcUeet.js";import"./useResizeObserver-DwGU07GJ.js";import"./Collection-B0B2WoeJ.js";import"./index-CqWHgfao.js";import"./Separator-CUGVPZ00.js";import"./SelectionManager-JKYT7One.js";import"./useEvent-DMc3Uz1U.js";import"./scrollIntoView-DmtYx3D8.js";import"./useDescription-COddip1D.js";import"./ListKeyboardDelegate-3IFiTk9z.js";import"./PressResponder-CXr9tQ9l.js";import"./useLocalizedStringFormatter-CrmHRQiX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfJYb7vS.js";import"./getScrollParent-HtTQIod0.js";import"./ModalOverlay-Dm3RFYNm.js";import"./x-Ca2lmhP_.js";import"./createLucideIcon-Bhv8-C3S.js";import"./useLocalizedStringFormatter-AT5R_CzH.js";import"./Heading-pXzzfo8s.js";import"./info-BBCoW9Lj.js";import"./Popover-Baq0wk6e.js";import"./check-CRC59qvK.js";import"./useToggleState-jrUwv18p.js";import"./TextFieldBase-Ch59QOWk.js";import"./Input-MzB543d8.js";import"./useTextField-CzfnvZVK.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C83Cx_fW.js";import"./DragAndDrop-DGzQ5aRG.js";import"./inertValue-CQrmE3MS.js";import"./useListState-C2-N8npy.js";import"./TagGroup-DJZOv0OH.js";import"./useHighlightSelectionDescription-BqYgndVX.js";import"./useUpdateEffect-d7ShU32-.js";import"./useHasTabbableChild-DvCi9Y9P.js";import"./chevron-down-DB09wfNU.js";import"./Virtualizer-OtqzQifr.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
