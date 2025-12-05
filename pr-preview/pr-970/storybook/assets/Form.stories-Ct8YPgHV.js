import{j as e}from"./iframe-DeX6EpxL.js";import{$ as c}from"./Form-B0WOKj-9.js";import{G as d}from"./Grid-gdVVMnSm.js";import{G as i}from"./GridItem-C1HSm-UR.js";import{T as t}from"./TextField-CEMB6-Xd.js";import{S as l}from"./Select-WM_8_sOz.js";import{B as a}from"./Button-r9WGhIT_.js";import{R as x,a as u}from"./Radio-oE4kVpB5.js";import{C as I}from"./CheckboxGroup-DLNmXNdu.js";import{C as G}from"./Checkbox-bZqzDRIL.js";import{L as p}from"./ListBoxItem-ypubTqyJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B8qVFtuz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cx4G6YEU.js";import"./useFocusRing-DH9ib-kf.js";import"./index-D5ZgaJWR.js";import"./index-C6QFGyuX.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bc9dxmGU.js";import"./TextField-DIAp9OWJ.js";import"./FieldError-B8KPN--E.js";import"./Text-Cetjf3U1.js";import"./Text-C5yfOZoW.js";import"./RSPContexts-MsoIR9Qh.js";import"./Group-BFwV9uoZ.js";import"./Input-CvR2keP2.js";import"./Hidden-aeqbWkpz.js";import"./Button-BNKSAgP5.js";import"./useLabels-A2tn5MES.js";import"./useButton-DTuJAJ_o.js";import"./useTextField-C58ibq5n.js";import"./useControlledState-DAFdnZtt.js";import"./useField-CC1Eh5CN.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BmIepdQG.js";import"./Dialog-D-6VLmIy.js";import"./OverlayArrow-DNqMZEqv.js";import"./useResizeObserver-BVcgbq7b.js";import"./Collection-C30HQDm4.js";import"./index-DFs4xHMU.js";import"./Separator-CA98yMHN.js";import"./SelectionManager-Dxc3F0U1.js";import"./useEvent-FAYQcFJB.js";import"./scrollIntoView-Cq0ZTZdI.js";import"./SelectionIndicator-DIDX2aEP.js";import"./useDescription-9WOSIwpZ.js";import"./ListKeyboardDelegate-D8r9iQMB.js";import"./PressResponder-Dw7wTIKm.js";import"./useLocalizedStringFormatter-EhR0ZRPf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-1BrtN0dn.js";import"./VisuallyHidden-B9DbwpXk.js";import"./x-C2jezQOt.js";import"./createLucideIcon-CxcECL83.js";import"./useLocalizedStringFormatter-Db_YVwzW.js";import"./Heading-ClRgf0Ow.js";import"./info-CLPiYV-p.js";import"./Popover-DgQTHhWJ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DxbM0VS7.js";import"./DragAndDrop-D13HAvqf.js";import"./inertValue-C3X92Xb_.js";import"./useListState-DY4Dilfw.js";import"./Tag-CzB_gDum.js";import"./useHighlightSelectionDescription-DbQz78wy.js";import"./useUpdateEffect-C8FhGQwy.js";import"./useHasTabbableChild-ZLujll96.js";import"./chevron-down-DBzYAJuM.js";import"./Button.module-Co5e5YHp.js";import"./check-BJ_JKPv0.js";import"./useToggleState-S7AAL5x_.js";import"./Virtualizer-Bu07-Bzi.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
