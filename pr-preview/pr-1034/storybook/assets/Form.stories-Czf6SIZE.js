import{j as e}from"./iframe-CdQJjHUi.js";import{$ as c}from"./Form-Bi6e02ke.js";import{G as d}from"./Grid-B3nAZel2.js";import{G as i}from"./GridItem-Dzl0Yc5r.js";import{a as x,R as u}from"./Radio-CMmfUgnt.js";import{C as I}from"./CheckboxGroup-D0bA_jPb.js";import{C as G}from"./Checkbox-BB_w9lli.js";import{T as t}from"./TextField-CU5kzbvk.js";import{S as l}from"./Select-BGol3XP0.js";import{L as p}from"./ListBoxItem-BmvbFnWY.js";import{B as a}from"./Button-CglFoMow.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNRK4ZX5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C90I0bWA.js";import"./useFocusRing-CWhoHb0p.js";import"./index-DYV9Lioy.js";import"./index-C-32_yVP.js";import"./clsx-Ciqy0D92.js";import"./Group-Dl-5cW_7.js";import"./FieldError-CD4-cihP.js";import"./Text-B0vmQyu5.js";import"./Text-Ch7iewHE.js";import"./Button-BTABl2Ab.js";import"./Hidden-CC5jBV06.js";import"./useLabels-Dr4fNLVL.js";import"./useButton-BnY8ifF_.js";import"./SelectionIndicator-CRnaVeBY.js";import"./useField-VCpATz6H.js";import"./VisuallyHidden-TcZUaxvx.js";import"./useControlledState-C5Qq6LCr.js";import"./Label-m3uD3yMU.js";import"./Dialog-BrRUhIOH.js";import"./RSPContexts-AyfQfw_C.js";import"./OverlayArrow-BDeU8i3A.js";import"./useResizeObserver-xGHsMKmM.js";import"./Collection-Cmou-_XN.js";import"./index-WM4OD6W8.js";import"./Separator-CGKunWAn.js";import"./SelectionManager-B-b6f446.js";import"./useEvent-B7b_rfbF.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-xXh2sHRV.js";import"./ListKeyboardDelegate-CpI5hNSW.js";import"./PressResponder-29gW07jg.js";import"./useLocalizedStringFormatter-5wGuy5gn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C31vhQl2.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Uh3xubMW.js";import"./createLucideIcon-DPIpdseQ.js";import"./useLocalizedStringFormatter-DDtzg0FL.js";import"./Heading-C1LTQQVo.js";import"./info-BbudvsX4.js";import"./Popover-BmAgldfl.js";import"./check--ZlW5qxK.js";import"./useToggleState-B17h3d_d.js";import"./TextFieldBase-DfHNKMJi.js";import"./TextField-CPy4fDLS.js";import"./Input-BsjEB1J9.js";import"./useTextField-D2Mtsrjj.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cl_Lug0H.js";import"./DragAndDrop-C0KJPaYF.js";import"./inertValue-DeH3pynO.js";import"./useListState-3md6PZBs.js";import"./Tag-oNsiKq-r.js";import"./useHighlightSelectionDescription-BIw6NmsH.js";import"./useUpdateEffect-ACXC_gpN.js";import"./useHasTabbableChild-D0s_0Tzg.js";import"./chevron-down-DaFOUaFT.js";import"./Virtualizer-C-DP5Fm9.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
