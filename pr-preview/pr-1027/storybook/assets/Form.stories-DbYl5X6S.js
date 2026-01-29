import{j as e}from"./iframe-CPtuJ8HO.js";import{$ as c}from"./Form-C5zBMOIx.js";import{G as d}from"./Grid-BzwONlag.js";import{G as i}from"./GridItem-BsB51r0c.js";import{T as t}from"./TextField-Bu-Lk0Dt.js";import{S as l}from"./Select-Edn4nxko.js";import{B as a}from"./Button-D3yQOAis.js";import{R as x,a as u}from"./Radio-CbROcdxN.js";import{C as I}from"./CheckboxGroup-CZz1SjSA.js";import{C as G}from"./Checkbox-BBqiq1vC.js";import{L as p}from"./ListBoxItem-DRpPSMIr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Wu2XGcEF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bpm9_0qx.js";import"./useFocusRing-B2VzlZnk.js";import"./index-BRWS9LDr.js";import"./index-BOHm-TSr.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D7TGdGDZ.js";import"./TextField-BGqaWfKG.js";import"./FieldError-DMwa18ms.js";import"./Text-Xck8zNqM.js";import"./Text-BHQtEdFP.js";import"./RSPContexts-eb7b9mtr.js";import"./Group-DKyGMwTG.js";import"./Input-CUhQHbta.js";import"./Hidden-CqVIwIVB.js";import"./Button-ZJtGU8il.js";import"./useLabels-BdTBLhcX.js";import"./useButton-Cj3FTjdJ.js";import"./useTextField-BRBfHMXE.js";import"./useControlledState-CLvfzbin.js";import"./useField-Ds3Z5M45.js";import"./TextField.module-1fNSVGjT.js";import"./Label-C6BEtblS.js";import"./Dialog-vu-r9Ph4.js";import"./OverlayArrow-YAmE0xGm.js";import"./useResizeObserver-CTW49b7i.js";import"./Collection-XbEL7V6x.js";import"./index-CIORga0m.js";import"./Separator-qWD69KoT.js";import"./SelectionManager-lQrsa-HY.js";import"./useEvent-Bq2H3CvS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSVB12IK.js";import"./useDescription-CMX7WFxi.js";import"./ListKeyboardDelegate-gAR5iSK6.js";import"./PressResponder-UxKT-oab.js";import"./useLocalizedStringFormatter-MASyzKxf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-c85R6HKb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXwhVzS2.js";import"./x-59_pYRVt.js";import"./createLucideIcon-CZ8AHqP_.js";import"./useLocalizedStringFormatter-BO2qvTML.js";import"./Heading-vaeBGNC5.js";import"./info-CEMP60Zu.js";import"./Popover-CrsEMzBT.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BBLHY7bT.js";import"./DragAndDrop-DAjBq1xm.js";import"./inertValue-CQhbJ4k4.js";import"./useListState-BwRSGyEb.js";import"./Tag-HdaqP7pb.js";import"./useHighlightSelectionDescription-C57LVQ6X.js";import"./useUpdateEffect-DbP3Nkud.js";import"./useHasTabbableChild-Dk78nfN1.js";import"./chevron-down-CIrpxwEe.js";import"./Button.module-Co5e5YHp.js";import"./check-P5a3i4Np.js";import"./useToggleState-CNIveLR5.js";import"./Virtualizer-RHxzuOIF.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
