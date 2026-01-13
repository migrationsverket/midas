import{j as e}from"./iframe-Fz1EdHuH.js";import{$ as c}from"./Form-DCeu2YwW.js";import{G as d}from"./Grid-7dXA5HNq.js";import{G as i}from"./GridItem-D81Rvrx2.js";import{T as t}from"./TextField-DZpM7k7x.js";import{S as l}from"./Select-DTioN9PG.js";import{B as a}from"./Button-DNGuSXTP.js";import{R as x,a as u}from"./Radio-Clou6JhX.js";import{C as I}from"./CheckboxGroup-CNWnGfl1.js";import{C as G}from"./Checkbox-BQVB23AH.js";import{L as p}from"./ListBoxItem-DtAEHo71.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CIhB6G_D.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DqKDU8Wz.js";import"./useFocusRing-qf5ZtGZP.js";import"./index-CW1yTPdq.js";import"./index-BLs35tAN.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CxCLhK7P.js";import"./TextField-DZKUQUj-.js";import"./FieldError-CiywgrQY.js";import"./Text-DNv-3svf.js";import"./Text-DoqQ8nHE.js";import"./RSPContexts-CKI4o4tn.js";import"./Group-M4PDqwWB.js";import"./Input-DxQhQKSW.js";import"./Hidden-BTN0SI0L.js";import"./Button-CBPVsTrf.js";import"./useLabels-BFFI0pNC.js";import"./useButton-DwegKwQx.js";import"./useTextField-B6jdHa9H.js";import"./useControlledState-B4oYVFVf.js";import"./useField-Ox07Q8eM.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BLPApvMM.js";import"./Dialog-Bniec-JW.js";import"./OverlayArrow-Cd49lTDT.js";import"./useResizeObserver-tZr12xgv.js";import"./Collection-DtJ07xnh.js";import"./index-Ci-3Zxjc.js";import"./Separator-CKb9OlXL.js";import"./SelectionManager-BxFEfcB2.js";import"./useEvent-Bi8gGKcE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C9vJGSx6.js";import"./useDescription-BZIgoWp4.js";import"./ListKeyboardDelegate-ohLvDDFs.js";import"./PressResponder-DwgcgRG9.js";import"./useLocalizedStringFormatter-D7aFKFSJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cxt8Tbzx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DdITmKv1.js";import"./x-IpFqXPiI.js";import"./createLucideIcon-B2CroOQB.js";import"./useLocalizedStringFormatter-Biv9Lv2v.js";import"./Heading-Qs14-auE.js";import"./info-CvxmEuPG.js";import"./Popover-Cblh_Hp5.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C-VaV1T0.js";import"./DragAndDrop-owCZz9eL.js";import"./inertValue-khPM13wb.js";import"./useListState-DvZSsNa_.js";import"./Tag-CN_zCX4q.js";import"./useHighlightSelectionDescription-CyHxcKY4.js";import"./useUpdateEffect-f_bp5XXQ.js";import"./useHasTabbableChild-DoAM-jZj.js";import"./chevron-down-BYQRkYs9.js";import"./Button.module-Co5e5YHp.js";import"./check-n_dnlUzH.js";import"./useToggleState-D33KvwAx.js";import"./Virtualizer-C4U4icOi.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
