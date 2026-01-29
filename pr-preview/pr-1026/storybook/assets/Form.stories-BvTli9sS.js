import{j as e}from"./iframe-DE94JxKi.js";import{$ as c}from"./Form-BOsKgB3e.js";import{G as d}from"./Grid-JMWidynS.js";import{G as i}from"./GridItem-CM9KCcDT.js";import{T as t}from"./TextField-B9JsCOP0.js";import{S as l}from"./Select-tshT92lk.js";import{B as a}from"./Button-DMOZPxBs.js";import{R as x,a as u}from"./Radio-gyhbCIir.js";import{C as I}from"./CheckboxGroup-Sqx9MQdI.js";import{C as G}from"./Checkbox-ScVc9Gge.js";import{L as p}from"./ListBoxItem-DEuBCQ3z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BSOOAzhj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B28FtqGe.js";import"./useFocusRing-DmvBk8aR.js";import"./index-BQx7fnJU.js";import"./index-hBdvredO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DEhMYbMt.js";import"./TextField-aUKeFaK4.js";import"./FieldError-BXtDsO41.js";import"./Text-DfN54vrW.js";import"./Text-DHcXS7hp.js";import"./RSPContexts-B_fFGJM5.js";import"./Group-C3m33pKV.js";import"./Input-CmSqzZdi.js";import"./Hidden-BxoJfOoH.js";import"./Button-Dg3ONjJw.js";import"./useLabels-D7kdm8Gs.js";import"./useButton-BdK2-QNE.js";import"./useTextField-BCtL7hz6.js";import"./useControlledState-DaJ4jGU6.js";import"./useField-DbCKfJpx.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CadFwBlo.js";import"./Dialog-kpVHHP8R.js";import"./OverlayArrow-C-PVuf_t.js";import"./useResizeObserver-xuVMWkyr.js";import"./Collection-_6FJlRQd.js";import"./index-B_B9ITvM.js";import"./Separator-BhGklFKs.js";import"./SelectionManager-BIzWN-JW.js";import"./useEvent-DHt8qmHW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqGgoiG-.js";import"./useDescription-CR6YrqIA.js";import"./ListKeyboardDelegate-1nrdAhpB.js";import"./PressResponder-Dw3eCBzO.js";import"./useLocalizedStringFormatter-Cru1T8gU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DoTI_cXn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B9PXbOcp.js";import"./x-Gg2oVTGU.js";import"./createLucideIcon-DBTUrtr9.js";import"./useLocalizedStringFormatter-CqNL9jQY.js";import"./Heading-DaFoQP0H.js";import"./info-CUtZ3Z-P.js";import"./Popover-BOrfsaYl.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DqoGhvlB.js";import"./DragAndDrop-dkAUO7hm.js";import"./inertValue-DBIez601.js";import"./useListState-D48MkaW-.js";import"./Tag-BRvAGmyN.js";import"./useHighlightSelectionDescription-Ck_LG8ph.js";import"./useUpdateEffect-B_SNtFpA.js";import"./useHasTabbableChild-rBMElKAM.js";import"./chevron-down-CurDJwC1.js";import"./Button.module-Co5e5YHp.js";import"./check-DvFF8BuG.js";import"./useToggleState-F46J7mfp.js";import"./Virtualizer-D9vR1JTm.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
