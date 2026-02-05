import{j as e}from"./iframe-jXOFY8ly.js";import{$ as c}from"./Form-Td99cGHp.js";import{G as d}from"./Grid-BMrQkOCQ.js";import{G as i}from"./GridItem-DR6sDPip.js";import{a as x,R as u}from"./Radio-BG51tc3z.js";import{C as I}from"./CheckboxGroup-ChwUv0Zb.js";import{C as G}from"./Checkbox-D_nC9nzj.js";import{T as t}from"./TextField-BvJuuygk.js";import{S as l}from"./Select-DZR5DpZz.js";import{L as p}from"./ListBoxItem-WGCNVFKx.js";import{B as a}from"./Button-BJ-Glf4b.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DMRbnQmp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Q4VomWZv.js";import"./useFocusRing-D6lwjUZF.js";import"./index-DDRSGRcW.js";import"./index-BFn5LmJz.js";import"./clsx-Ciqy0D92.js";import"./Group-DKFJ1i1O.js";import"./FieldError-DpwWyisz.js";import"./Text-NASTJ5SQ.js";import"./Text-DBF8n_Yj.js";import"./Button-_V1yAu90.js";import"./Hidden-C1RMCDHa.js";import"./useLabels-BUsfJ8Q5.js";import"./useButton-Br-Tw6Wj.js";import"./SelectionIndicator-Dy3GAmbU.js";import"./useField-d3f_aUfY.js";import"./VisuallyHidden-B9izHnXN.js";import"./useControlledState-B_hf4unm.js";import"./Label-DVP45lyQ.js";import"./Dialog-BrEfRH6h.js";import"./RSPContexts-uCM8UasA.js";import"./OverlayArrow-BJctWX9e.js";import"./useResizeObserver-CrFKK_i-.js";import"./Collection-BVIzqqsG.js";import"./index-LDBGwil4.js";import"./Separator-D4LjqWD4.js";import"./SelectionManager-ygzmuEbh.js";import"./useEvent-Dx7k8S5m.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DuiYQhpC.js";import"./ListKeyboardDelegate-DXqM7Z8I.js";import"./PressResponder-CBabZcxm.js";import"./useLocalizedStringFormatter-CKvY-tar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DEZnhysQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CoKzMXDs.js";import"./createLucideIcon-CZVrkezG.js";import"./useLocalizedStringFormatter-Dr7Dpfz9.js";import"./Heading-CtLvrIy9.js";import"./info-BiRxp_ck.js";import"./Popover-ySfzcF21.js";import"./check-BULYkbZs.js";import"./useToggleState-CdfG7wRA.js";import"./TextFieldBase-B_sUIijU.js";import"./TextField-B_cBUwuk.js";import"./Input-CEZoYdM_.js";import"./useTextField-uxEsjRQI.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BaFPIpdB.js";import"./DragAndDrop-gCeGg8EB.js";import"./inertValue-B0xCVTjQ.js";import"./useListState-DvcpnvQj.js";import"./Tag-CVoMCd7I.js";import"./useHighlightSelectionDescription-DEvMuk0a.js";import"./useUpdateEffect-BTpp0IST.js";import"./useHasTabbableChild-DMIenxCt.js";import"./chevron-down-DcrCBu_i.js";import"./Virtualizer-UczaljqL.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
