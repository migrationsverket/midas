import{j as e}from"./iframe-DMnXhvY8.js";import{$ as c}from"./Form-BFZEhpvQ.js";import{G as d}from"./Grid-DrkJDjax.js";import{G as i}from"./GridItem-Df8MQ3Py.js";import{a as x,R as u}from"./Radio-D2i5Djog.js";import{C as I}from"./CheckboxGroup-tZMZ9h_d.js";import{C as G}from"./Checkbox-D38BTEYG.js";import{T as t}from"./TextField-CrwlI8Fa.js";import{S as l}from"./Select-D7RHciOn.js";import{L as p}from"./ListBoxItem-DJNKHs-f.js";import{B as a}from"./Button-E5A4z9FY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cr6fPQeE.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ByGzq6xW.js";import"./useFocusRing-8otf3cSz.js";import"./index-DAqnwmB7.js";import"./index-DIi78pwy.js";import"./clsx-Ciqy0D92.js";import"./Group-BYMw2XRb.js";import"./FieldError-iahkZMae.js";import"./Text-DMCoF6zG.js";import"./Text-CFJ7Rv8f.js";import"./Button-D4fHUSQK.js";import"./Hidden-DPa8I1Gp.js";import"./useLabels-B1zcB8t6.js";import"./useButton-DHyzBCn2.js";import"./SelectionIndicator-CLOiqyn5.js";import"./useField-DY-_TNf0.js";import"./VisuallyHidden-C2H7BXVT.js";import"./useControlledState-4XYSNIgm.js";import"./Label-DveEX_ua.js";import"./Dialog-C9ObGWO4.js";import"./RSPContexts-KhvNbaiD.js";import"./OverlayArrow-DT_Vt4aE.js";import"./useResizeObserver-DR7N0dFs.js";import"./Collection-CLg-pTOV.js";import"./index-DPCanXGU.js";import"./Separator-BeNXkxBh.js";import"./SelectionManager-GiV4_WOF.js";import"./useEvent-hoUK_fBs.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-UUruAZG-.js";import"./ListKeyboardDelegate-BdgHwj63.js";import"./PressResponder-Dg9oXRH4.js";import"./useLocalizedStringFormatter-BVxr3gfN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfdoS3FP.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CRcPQVxQ.js";import"./createLucideIcon-DykDHhyw.js";import"./useLocalizedStringFormatter-DxRi-Ufl.js";import"./Heading-skeK9R6X.js";import"./info-C0-TzniS.js";import"./Popover-DWL3uBQh.js";import"./check-CYLHI8GM.js";import"./useToggleState-31AcSgWL.js";import"./TextFieldBase-7LVQP58q.js";import"./TextField-CPmTL9dG.js";import"./Input-BS90HIeP.js";import"./useTextField-BuMNl-g1.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CYN8bK8v.js";import"./DragAndDrop-DCF1xeIr.js";import"./inertValue-lGa6KLvE.js";import"./useListState-Ck_x8efF.js";import"./Tag-DPlQPb9k.js";import"./useHighlightSelectionDescription-h-11LVKp.js";import"./useUpdateEffect-DQLwigqB.js";import"./useHasTabbableChild-C-2inh79.js";import"./chevron-down-Dpi41jAP.js";import"./Virtualizer-Cr2OzH4N.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
